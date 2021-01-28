// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package web

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion7

// WorkerTokensClient is the client API for WorkerTokens service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type WorkerTokensClient interface {
	CreateWorkerToken(ctx context.Context, in *CreateWorkerTokenRequest, opts ...grpc.CallOption) (*CreateWorkerTokenResponse, error)
	ListWorkerTokens(ctx context.Context, in *ListWorkerTokensRequest, opts ...grpc.CallOption) (*ListWorkerTokensResponse, error)
	RevokeWorkerToken(ctx context.Context, in *RevokeWorkerTokenRequest, opts ...grpc.CallOption) (*RevokeWorkerTokenResponse, error)
	RevokeAllWorkerTokens(ctx context.Context, in *RevokeAllWorkerTokensRequest, opts ...grpc.CallOption) (*RevokeAllWorkerTokensResponse, error)
}

type workerTokensClient struct {
	cc grpc.ClientConnInterface
}

func NewWorkerTokensClient(cc grpc.ClientConnInterface) WorkerTokensClient {
	return &workerTokensClient{cc}
}

func (c *workerTokensClient) CreateWorkerToken(ctx context.Context, in *CreateWorkerTokenRequest, opts ...grpc.CallOption) (*CreateWorkerTokenResponse, error) {
	out := new(CreateWorkerTokenResponse)
	err := c.cc.Invoke(ctx, "/od2_network.hive.web.WorkerTokens/CreateWorkerToken", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *workerTokensClient) ListWorkerTokens(ctx context.Context, in *ListWorkerTokensRequest, opts ...grpc.CallOption) (*ListWorkerTokensResponse, error) {
	out := new(ListWorkerTokensResponse)
	err := c.cc.Invoke(ctx, "/od2_network.hive.web.WorkerTokens/ListWorkerTokens", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *workerTokensClient) RevokeWorkerToken(ctx context.Context, in *RevokeWorkerTokenRequest, opts ...grpc.CallOption) (*RevokeWorkerTokenResponse, error) {
	out := new(RevokeWorkerTokenResponse)
	err := c.cc.Invoke(ctx, "/od2_network.hive.web.WorkerTokens/RevokeWorkerToken", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *workerTokensClient) RevokeAllWorkerTokens(ctx context.Context, in *RevokeAllWorkerTokensRequest, opts ...grpc.CallOption) (*RevokeAllWorkerTokensResponse, error) {
	out := new(RevokeAllWorkerTokensResponse)
	err := c.cc.Invoke(ctx, "/od2_network.hive.web.WorkerTokens/RevokeAllWorkerTokens", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// WorkerTokensServer is the server API for WorkerTokens service.
// All implementations must embed UnimplementedWorkerTokensServer
// for forward compatibility
type WorkerTokensServer interface {
	CreateWorkerToken(context.Context, *CreateWorkerTokenRequest) (*CreateWorkerTokenResponse, error)
	ListWorkerTokens(context.Context, *ListWorkerTokensRequest) (*ListWorkerTokensResponse, error)
	RevokeWorkerToken(context.Context, *RevokeWorkerTokenRequest) (*RevokeWorkerTokenResponse, error)
	RevokeAllWorkerTokens(context.Context, *RevokeAllWorkerTokensRequest) (*RevokeAllWorkerTokensResponse, error)
	mustEmbedUnimplementedWorkerTokensServer()
}

// UnimplementedWorkerTokensServer must be embedded to have forward compatible implementations.
type UnimplementedWorkerTokensServer struct {
}

func (UnimplementedWorkerTokensServer) CreateWorkerToken(context.Context, *CreateWorkerTokenRequest) (*CreateWorkerTokenResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateWorkerToken not implemented")
}
func (UnimplementedWorkerTokensServer) ListWorkerTokens(context.Context, *ListWorkerTokensRequest) (*ListWorkerTokensResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListWorkerTokens not implemented")
}
func (UnimplementedWorkerTokensServer) RevokeWorkerToken(context.Context, *RevokeWorkerTokenRequest) (*RevokeWorkerTokenResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RevokeWorkerToken not implemented")
}
func (UnimplementedWorkerTokensServer) RevokeAllWorkerTokens(context.Context, *RevokeAllWorkerTokensRequest) (*RevokeAllWorkerTokensResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RevokeAllWorkerTokens not implemented")
}
func (UnimplementedWorkerTokensServer) mustEmbedUnimplementedWorkerTokensServer() {}

// UnsafeWorkerTokensServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to WorkerTokensServer will
// result in compilation errors.
type UnsafeWorkerTokensServer interface {
	mustEmbedUnimplementedWorkerTokensServer()
}

func RegisterWorkerTokensServer(s grpc.ServiceRegistrar, srv WorkerTokensServer) {
	s.RegisterService(&_WorkerTokens_serviceDesc, srv)
}

func _WorkerTokens_CreateWorkerToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateWorkerTokenRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WorkerTokensServer).CreateWorkerToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/od2_network.hive.web.WorkerTokens/CreateWorkerToken",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WorkerTokensServer).CreateWorkerToken(ctx, req.(*CreateWorkerTokenRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WorkerTokens_ListWorkerTokens_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListWorkerTokensRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WorkerTokensServer).ListWorkerTokens(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/od2_network.hive.web.WorkerTokens/ListWorkerTokens",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WorkerTokensServer).ListWorkerTokens(ctx, req.(*ListWorkerTokensRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WorkerTokens_RevokeWorkerToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RevokeWorkerTokenRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WorkerTokensServer).RevokeWorkerToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/od2_network.hive.web.WorkerTokens/RevokeWorkerToken",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WorkerTokensServer).RevokeWorkerToken(ctx, req.(*RevokeWorkerTokenRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _WorkerTokens_RevokeAllWorkerTokens_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RevokeAllWorkerTokensRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(WorkerTokensServer).RevokeAllWorkerTokens(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/od2_network.hive.web.WorkerTokens/RevokeAllWorkerTokens",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(WorkerTokensServer).RevokeAllWorkerTokens(ctx, req.(*RevokeAllWorkerTokensRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _WorkerTokens_serviceDesc = grpc.ServiceDesc{
	ServiceName: "od2_network.hive.web.WorkerTokens",
	HandlerType: (*WorkerTokensServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateWorkerToken",
			Handler:    _WorkerTokens_CreateWorkerToken_Handler,
		},
		{
			MethodName: "ListWorkerTokens",
			Handler:    _WorkerTokens_ListWorkerTokens_Handler,
		},
		{
			MethodName: "RevokeWorkerToken",
			Handler:    _WorkerTokens_RevokeWorkerToken_Handler,
		},
		{
			MethodName: "RevokeAllWorkerTokens",
			Handler:    _WorkerTokens_RevokeAllWorkerTokens_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "worker_tokens.proto",
}
