package hive

import "context"

// MDAuthorization is the authorization metadata key.
const MDAuthorization = "authorization"

// WorkerCredentials represents client auth.
type WorkerCredentials struct {
	Token string
}

// RequireTransportSecurity returns false, because we slapped Envoy in front of it.
func (a *WorkerCredentials) RequireTransportSecurity() bool {
	return false
}

// GetRequestMetadata fetches the authentication gRPC metadata.
func (a *WorkerCredentials) GetRequestMetadata(_ context.Context, _ ...string) (map[string]string, error) {
	meta := map[string]string{MDAuthorization: a.Token}
	return meta, nil
}
