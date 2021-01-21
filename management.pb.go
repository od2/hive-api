// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.12.3
// source: management.proto

package hive

import (
	timestamp "github.com/golang/protobuf/ptypes/timestamp"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type CreateWorkerTokenRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ExpireAt *timestamp.Timestamp `protobuf:"bytes,1,opt,name=expire_at,json=expireAt,proto3" json:"expire_at,omitempty"`
}

func (x *CreateWorkerTokenRequest) Reset() {
	*x = CreateWorkerTokenRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_management_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateWorkerTokenRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateWorkerTokenRequest) ProtoMessage() {}

func (x *CreateWorkerTokenRequest) ProtoReflect() protoreflect.Message {
	mi := &file_management_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateWorkerTokenRequest.ProtoReflect.Descriptor instead.
func (*CreateWorkerTokenRequest) Descriptor() ([]byte, []int) {
	return file_management_proto_rawDescGZIP(), []int{0}
}

func (x *CreateWorkerTokenRequest) GetExpireAt() *timestamp.Timestamp {
	if x != nil {
		return x.ExpireAt
	}
	return nil
}

type WorkerToken struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token string `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
}

func (x *WorkerToken) Reset() {
	*x = WorkerToken{}
	if protoimpl.UnsafeEnabled {
		mi := &file_management_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *WorkerToken) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*WorkerToken) ProtoMessage() {}

func (x *WorkerToken) ProtoReflect() protoreflect.Message {
	mi := &file_management_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use WorkerToken.ProtoReflect.Descriptor instead.
func (*WorkerToken) Descriptor() ([]byte, []int) {
	return file_management_proto_rawDescGZIP(), []int{1}
}

func (x *WorkerToken) GetToken() string {
	if x != nil {
		return x.Token
	}
	return ""
}

var File_management_proto protoreflect.FileDescriptor

var file_management_proto_rawDesc = []byte{
	0x0a, 0x10, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x10, 0x6f, 0x64, 0x32, 0x5f, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2e,
	0x68, 0x69, 0x76, 0x65, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x53, 0x0a, 0x18, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x57,
	0x6f, 0x72, 0x6b, 0x65, 0x72, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x12, 0x37, 0x0a, 0x09, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x5f, 0x61, 0x74, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x52, 0x08, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x41, 0x74, 0x22, 0x23, 0x0a, 0x0b, 0x57, 0x6f,
	0x72, 0x6b, 0x65, 0x72, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x6b,
	0x65, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x32,
	0x6c, 0x0a, 0x0a, 0x4d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x5e, 0x0a,
	0x11, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x57, 0x6f, 0x72, 0x6b, 0x65, 0x72, 0x54, 0x6f, 0x6b,
	0x65, 0x6e, 0x12, 0x2a, 0x2e, 0x6f, 0x64, 0x32, 0x5f, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b,
	0x2e, 0x68, 0x69, 0x76, 0x65, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x57, 0x6f, 0x72, 0x6b,
	0x65, 0x72, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1d,
	0x2e, 0x6f, 0x64, 0x32, 0x5f, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2e, 0x68, 0x69, 0x76,
	0x65, 0x2e, 0x57, 0x6f, 0x72, 0x6b, 0x65, 0x72, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x42, 0x1f, 0x5a,
	0x1d, 0x67, 0x6f, 0x2e, 0x6f, 0x64, 0x32, 0x2e, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2f,
	0x68, 0x69, 0x76, 0x65, 0x2f, 0x70, 0x6b, 0x67, 0x2f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_management_proto_rawDescOnce sync.Once
	file_management_proto_rawDescData = file_management_proto_rawDesc
)

func file_management_proto_rawDescGZIP() []byte {
	file_management_proto_rawDescOnce.Do(func() {
		file_management_proto_rawDescData = protoimpl.X.CompressGZIP(file_management_proto_rawDescData)
	})
	return file_management_proto_rawDescData
}

var file_management_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_management_proto_goTypes = []interface{}{
	(*CreateWorkerTokenRequest)(nil), // 0: od2_network.hive.CreateWorkerTokenRequest
	(*WorkerToken)(nil),              // 1: od2_network.hive.WorkerToken
	(*timestamp.Timestamp)(nil),      // 2: google.protobuf.Timestamp
}
var file_management_proto_depIdxs = []int32{
	2, // 0: od2_network.hive.CreateWorkerTokenRequest.expire_at:type_name -> google.protobuf.Timestamp
	0, // 1: od2_network.hive.Management.CreateWorkerToken:input_type -> od2_network.hive.CreateWorkerTokenRequest
	1, // 2: od2_network.hive.Management.CreateWorkerToken:output_type -> od2_network.hive.WorkerToken
	2, // [2:3] is the sub-list for method output_type
	1, // [1:2] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_management_proto_init() }
func file_management_proto_init() {
	if File_management_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_management_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateWorkerTokenRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_management_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*WorkerToken); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_management_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_management_proto_goTypes,
		DependencyIndexes: file_management_proto_depIdxs,
		MessageInfos:      file_management_proto_msgTypes,
	}.Build()
	File_management_proto = out.File
	file_management_proto_rawDesc = nil
	file_management_proto_goTypes = nil
	file_management_proto_depIdxs = nil
}