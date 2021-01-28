package worker

import "context"

// MDAuthorization is the authorization metadata key.
const MDAuthorization = "authorization"

// Credentials represents client auth.
type Credentials struct {
	Token string
}

// RequireTransportSecurity returns false, because we slapped Envoy in front of it.
func (a *Credentials) RequireTransportSecurity() bool {
	return false
}

// GetRequestMetadata fetches the authentication gRPC metadata.
func (a *Credentials) GetRequestMetadata(_ context.Context, _ ...string) (map[string]string, error) {
	meta := map[string]string{MDAuthorization: a.Token}
	return meta, nil
}
