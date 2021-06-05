// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.1.0
// - protoc             v3.12.4
// source: web/topology.proto

package web

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// TopologyClient is the client API for Topology service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type TopologyClient interface {
	GetCollections(ctx context.Context, in *GetCollectionsRequest, opts ...grpc.CallOption) (*GetCollectionsResponse, error)
}

type topologyClient struct {
	cc grpc.ClientConnInterface
}

func NewTopologyClient(cc grpc.ClientConnInterface) TopologyClient {
	return &topologyClient{cc}
}

func (c *topologyClient) GetCollections(ctx context.Context, in *GetCollectionsRequest, opts ...grpc.CallOption) (*GetCollectionsResponse, error) {
	out := new(GetCollectionsResponse)
	err := c.cc.Invoke(ctx, "/od2_network.hive.web.Topology/GetCollections", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TopologyServer is the server API for Topology service.
// All implementations must embed UnimplementedTopologyServer
// for forward compatibility
type TopologyServer interface {
	GetCollections(context.Context, *GetCollectionsRequest) (*GetCollectionsResponse, error)
	mustEmbedUnimplementedTopologyServer()
}

// UnimplementedTopologyServer must be embedded to have forward compatible implementations.
type UnimplementedTopologyServer struct {
}

func (UnimplementedTopologyServer) GetCollections(context.Context, *GetCollectionsRequest) (*GetCollectionsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetCollections not implemented")
}
func (UnimplementedTopologyServer) mustEmbedUnimplementedTopologyServer() {}

// UnsafeTopologyServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to TopologyServer will
// result in compilation errors.
type UnsafeTopologyServer interface {
	mustEmbedUnimplementedTopologyServer()
}

func RegisterTopologyServer(s grpc.ServiceRegistrar, srv TopologyServer) {
	s.RegisterService(&Topology_ServiceDesc, srv)
}

func _Topology_GetCollections_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetCollectionsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TopologyServer).GetCollections(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/od2_network.hive.web.Topology/GetCollections",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TopologyServer).GetCollections(ctx, req.(*GetCollectionsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Topology_ServiceDesc is the grpc.ServiceDesc for Topology service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Topology_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "od2_network.hive.web.Topology",
	HandlerType: (*TopologyServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetCollections",
			Handler:    _Topology_GetCollections_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "web/topology.proto",
}
