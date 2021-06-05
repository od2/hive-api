// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0-devel
// 	protoc        v3.12.4
// source: hive-api/items.proto

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

type TaskStatus int32

const (
	TaskStatus_SUCCESS        TaskStatus = 0
	TaskStatus_CLIENT_FAILURE TaskStatus = 1
	TaskStatus_TIMEOUT        TaskStatus = 2
)

// Enum value maps for TaskStatus.
var (
	TaskStatus_name = map[int32]string{
		0: "SUCCESS",
		1: "CLIENT_FAILURE",
		2: "TIMEOUT",
	}
	TaskStatus_value = map[string]int32{
		"SUCCESS":        0,
		"CLIENT_FAILURE": 1,
		"TIMEOUT":        2,
	}
)

func (x TaskStatus) Enum() *TaskStatus {
	p := new(TaskStatus)
	*p = x
	return p
}

func (x TaskStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (TaskStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_hive_api_items_proto_enumTypes[0].Descriptor()
}

func (TaskStatus) Type() protoreflect.EnumType {
	return &file_hive_api_items_proto_enumTypes[0]
}

func (x TaskStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use TaskStatus.Descriptor instead.
func (TaskStatus) EnumDescriptor() ([]byte, []int) {
	return file_hive_api_items_proto_rawDescGZIP(), []int{0}
}

// ItemLocator identifies an item in a collection by ID.
type ItemLocator struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Collection string `protobuf:"bytes,1,opt,name=collection,proto3" json:"collection,omitempty"`
	Id         string `protobuf:"bytes,2,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *ItemLocator) Reset() {
	*x = ItemLocator{}
	if protoimpl.UnsafeEnabled {
		mi := &file_hive_api_items_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ItemLocator) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ItemLocator) ProtoMessage() {}

func (x *ItemLocator) ProtoReflect() protoreflect.Message {
	mi := &file_hive_api_items_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ItemLocator.ProtoReflect.Descriptor instead.
func (*ItemLocator) Descriptor() ([]byte, []int) {
	return file_hive_api_items_proto_rawDescGZIP(), []int{0}
}

func (x *ItemLocator) GetCollection() string {
	if x != nil {
		return x.Collection
	}
	return ""
}

func (x *ItemLocator) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type ItemPointer struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Dst       *ItemLocator         `protobuf:"bytes,1,opt,name=dst,proto3" json:"dst,omitempty"`
	Timestamp *timestamp.Timestamp `protobuf:"bytes,2,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
}

func (x *ItemPointer) Reset() {
	*x = ItemPointer{}
	if protoimpl.UnsafeEnabled {
		mi := &file_hive_api_items_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ItemPointer) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ItemPointer) ProtoMessage() {}

func (x *ItemPointer) ProtoReflect() protoreflect.Message {
	mi := &file_hive_api_items_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ItemPointer.ProtoReflect.Descriptor instead.
func (*ItemPointer) Descriptor() ([]byte, []int) {
	return file_hive_api_items_proto_rawDescGZIP(), []int{1}
}

func (x *ItemPointer) GetDst() *ItemLocator {
	if x != nil {
		return x.Dst
	}
	return nil
}

func (x *ItemPointer) GetTimestamp() *timestamp.Timestamp {
	if x != nil {
		return x.Timestamp
	}
	return nil
}

type KafkaPointer struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Partition int32 `protobuf:"varint,1,opt,name=partition,proto3" json:"partition,omitempty"`
	Offset    int64 `protobuf:"varint,2,opt,name=offset,proto3" json:"offset,omitempty"`
}

func (x *KafkaPointer) Reset() {
	*x = KafkaPointer{}
	if protoimpl.UnsafeEnabled {
		mi := &file_hive_api_items_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *KafkaPointer) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*KafkaPointer) ProtoMessage() {}

func (x *KafkaPointer) ProtoReflect() protoreflect.Message {
	mi := &file_hive_api_items_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use KafkaPointer.ProtoReflect.Descriptor instead.
func (*KafkaPointer) Descriptor() ([]byte, []int) {
	return file_hive_api_items_proto_rawDescGZIP(), []int{2}
}

func (x *KafkaPointer) GetPartition() int32 {
	if x != nil {
		return x.Partition
	}
	return 0
}

func (x *KafkaPointer) GetOffset() int64 {
	if x != nil {
		return x.Offset
	}
	return 0
}

// Assignment instructs the client to fetch an item.
type Assignment struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Locator      *ItemLocator  `protobuf:"bytes,1,opt,name=locator,proto3" json:"locator,omitempty"`
	KafkaPointer *KafkaPointer `protobuf:"bytes,2,opt,name=kafka_pointer,json=kafkaPointer,proto3" json:"kafka_pointer,omitempty"`
}

func (x *Assignment) Reset() {
	*x = Assignment{}
	if protoimpl.UnsafeEnabled {
		mi := &file_hive_api_items_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Assignment) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Assignment) ProtoMessage() {}

func (x *Assignment) ProtoReflect() protoreflect.Message {
	mi := &file_hive_api_items_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Assignment.ProtoReflect.Descriptor instead.
func (*Assignment) Descriptor() ([]byte, []int) {
	return file_hive_api_items_proto_rawDescGZIP(), []int{3}
}

func (x *Assignment) GetLocator() *ItemLocator {
	if x != nil {
		return x.Locator
	}
	return nil
}

func (x *Assignment) GetKafkaPointer() *KafkaPointer {
	if x != nil {
		return x.KafkaPointer
	}
	return nil
}

type AssignmentReport struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	KafkaPointer *KafkaPointer `protobuf:"bytes,1,opt,name=kafka_pointer,json=kafkaPointer,proto3" json:"kafka_pointer,omitempty"`
	Status       TaskStatus    `protobuf:"varint,2,opt,name=status,proto3,enum=od2_network.hive.TaskStatus" json:"status,omitempty"`
}

func (x *AssignmentReport) Reset() {
	*x = AssignmentReport{}
	if protoimpl.UnsafeEnabled {
		mi := &file_hive_api_items_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AssignmentReport) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AssignmentReport) ProtoMessage() {}

func (x *AssignmentReport) ProtoReflect() protoreflect.Message {
	mi := &file_hive_api_items_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AssignmentReport.ProtoReflect.Descriptor instead.
func (*AssignmentReport) Descriptor() ([]byte, []int) {
	return file_hive_api_items_proto_rawDescGZIP(), []int{4}
}

func (x *AssignmentReport) GetKafkaPointer() *KafkaPointer {
	if x != nil {
		return x.KafkaPointer
	}
	return nil
}

func (x *AssignmentReport) GetStatus() TaskStatus {
	if x != nil {
		return x.Status
	}
	return TaskStatus_SUCCESS
}

type AssignmentResult struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	WorkerId   int64                `protobuf:"varint,1,opt,name=worker_id,json=workerId,proto3" json:"worker_id,omitempty"`
	Report     *AssignmentReport    `protobuf:"bytes,2,opt,name=report,proto3" json:"report,omitempty"`
	FinishTime *timestamp.Timestamp `protobuf:"bytes,3,opt,name=finish_time,json=finishTime,proto3" json:"finish_time,omitempty"`
	Locator    *ItemLocator         `protobuf:"bytes,4,opt,name=locator,proto3" json:"locator,omitempty"`
}

func (x *AssignmentResult) Reset() {
	*x = AssignmentResult{}
	if protoimpl.UnsafeEnabled {
		mi := &file_hive_api_items_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AssignmentResult) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AssignmentResult) ProtoMessage() {}

func (x *AssignmentResult) ProtoReflect() protoreflect.Message {
	mi := &file_hive_api_items_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AssignmentResult.ProtoReflect.Descriptor instead.
func (*AssignmentResult) Descriptor() ([]byte, []int) {
	return file_hive_api_items_proto_rawDescGZIP(), []int{5}
}

func (x *AssignmentResult) GetWorkerId() int64 {
	if x != nil {
		return x.WorkerId
	}
	return 0
}

func (x *AssignmentResult) GetReport() *AssignmentReport {
	if x != nil {
		return x.Report
	}
	return nil
}

func (x *AssignmentResult) GetFinishTime() *timestamp.Timestamp {
	if x != nil {
		return x.FinishTime
	}
	return nil
}

func (x *AssignmentResult) GetLocator() *ItemLocator {
	if x != nil {
		return x.Locator
	}
	return nil
}

var File_hive_api_items_proto protoreflect.FileDescriptor

var file_hive_api_items_proto_rawDesc = []byte{
	0x0a, 0x14, 0x68, 0x69, 0x76, 0x65, 0x2d, 0x61, 0x70, 0x69, 0x2f, 0x69, 0x74, 0x65, 0x6d, 0x73,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x10, 0x6f, 0x64, 0x32, 0x5f, 0x6e, 0x65, 0x74, 0x77,
	0x6f, 0x72, 0x6b, 0x2e, 0x68, 0x69, 0x76, 0x65, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x3d, 0x0a, 0x0b, 0x49, 0x74, 0x65,
	0x6d, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x6f, 0x72, 0x12, 0x1e, 0x0a, 0x0a, 0x63, 0x6f, 0x6c, 0x6c,
	0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x63, 0x6f,
	0x6c, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x78, 0x0a, 0x0b, 0x49, 0x74, 0x65, 0x6d,
	0x50, 0x6f, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x12, 0x2f, 0x0a, 0x03, 0x64, 0x73, 0x74, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x6f, 0x64, 0x32, 0x5f, 0x6e, 0x65, 0x74, 0x77, 0x6f,
	0x72, 0x6b, 0x2e, 0x68, 0x69, 0x76, 0x65, 0x2e, 0x49, 0x74, 0x65, 0x6d, 0x4c, 0x6f, 0x63, 0x61,
	0x74, 0x6f, 0x72, 0x52, 0x03, 0x64, 0x73, 0x74, 0x12, 0x38, 0x0a, 0x09, 0x74, 0x69, 0x6d, 0x65,
	0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69,
	0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x22, 0x44, 0x0a, 0x0c, 0x4b, 0x61, 0x66, 0x6b, 0x61, 0x50, 0x6f, 0x69, 0x6e, 0x74,
	0x65, 0x72, 0x12, 0x1c, 0x0a, 0x09, 0x70, 0x61, 0x72, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x09, 0x70, 0x61, 0x72, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e,
	0x12, 0x16, 0x0a, 0x06, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03,
	0x52, 0x06, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x22, 0x8a, 0x01, 0x0a, 0x0a, 0x41, 0x73, 0x73,
	0x69, 0x67, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x37, 0x0a, 0x07, 0x6c, 0x6f, 0x63, 0x61, 0x74,
	0x6f, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x6f, 0x64, 0x32, 0x5f, 0x6e,
	0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2e, 0x68, 0x69, 0x76, 0x65, 0x2e, 0x49, 0x74, 0x65, 0x6d,
	0x4c, 0x6f, 0x63, 0x61, 0x74, 0x6f, 0x72, 0x52, 0x07, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x6f, 0x72,
	0x12, 0x43, 0x0a, 0x0d, 0x6b, 0x61, 0x66, 0x6b, 0x61, 0x5f, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x65,
	0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x6f, 0x64, 0x32, 0x5f, 0x6e, 0x65,
	0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2e, 0x68, 0x69, 0x76, 0x65, 0x2e, 0x4b, 0x61, 0x66, 0x6b, 0x61,
	0x50, 0x6f, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x52, 0x0c, 0x6b, 0x61, 0x66, 0x6b, 0x61, 0x50, 0x6f,
	0x69, 0x6e, 0x74, 0x65, 0x72, 0x22, 0x8d, 0x01, 0x0a, 0x10, 0x41, 0x73, 0x73, 0x69, 0x67, 0x6e,
	0x6d, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x12, 0x43, 0x0a, 0x0d, 0x6b, 0x61,
	0x66, 0x6b, 0x61, 0x5f, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1e, 0x2e, 0x6f, 0x64, 0x32, 0x5f, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2e,
	0x68, 0x69, 0x76, 0x65, 0x2e, 0x4b, 0x61, 0x66, 0x6b, 0x61, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x65,
	0x72, 0x52, 0x0c, 0x6b, 0x61, 0x66, 0x6b, 0x61, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x12,
	0x34, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32,
	0x1c, 0x2e, 0x6f, 0x64, 0x32, 0x5f, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2e, 0x68, 0x69,
	0x76, 0x65, 0x2e, 0x54, 0x61, 0x73, 0x6b, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0xe1, 0x01, 0x0a, 0x10, 0x41, 0x73, 0x73, 0x69, 0x67, 0x6e,
	0x6d, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x77, 0x6f,
	0x72, 0x6b, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x08, 0x77,
	0x6f, 0x72, 0x6b, 0x65, 0x72, 0x49, 0x64, 0x12, 0x3a, 0x0a, 0x06, 0x72, 0x65, 0x70, 0x6f, 0x72,
	0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x22, 0x2e, 0x6f, 0x64, 0x32, 0x5f, 0x6e, 0x65,
	0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2e, 0x68, 0x69, 0x76, 0x65, 0x2e, 0x41, 0x73, 0x73, 0x69, 0x67,
	0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x52, 0x06, 0x72, 0x65, 0x70,
	0x6f, 0x72, 0x74, 0x12, 0x3b, 0x0a, 0x0b, 0x66, 0x69, 0x6e, 0x69, 0x73, 0x68, 0x5f, 0x74, 0x69,
	0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x52, 0x0a, 0x66, 0x69, 0x6e, 0x69, 0x73, 0x68, 0x54, 0x69, 0x6d, 0x65,
	0x12, 0x37, 0x0a, 0x07, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x6f, 0x72, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1d, 0x2e, 0x6f, 0x64, 0x32, 0x5f, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2e,
	0x68, 0x69, 0x76, 0x65, 0x2e, 0x49, 0x74, 0x65, 0x6d, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x6f, 0x72,
	0x52, 0x07, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x6f, 0x72, 0x2a, 0x3a, 0x0a, 0x0a, 0x54, 0x61, 0x73,
	0x6b, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x0b, 0x0a, 0x07, 0x53, 0x55, 0x43, 0x43, 0x45,
	0x53, 0x53, 0x10, 0x00, 0x12, 0x12, 0x0a, 0x0e, 0x43, 0x4c, 0x49, 0x45, 0x4e, 0x54, 0x5f, 0x46,
	0x41, 0x49, 0x4c, 0x55, 0x52, 0x45, 0x10, 0x01, 0x12, 0x0b, 0x0a, 0x07, 0x54, 0x49, 0x4d, 0x45,
	0x4f, 0x55, 0x54, 0x10, 0x02, 0x42, 0x1e, 0x5a, 0x1c, 0x67, 0x6f, 0x2e, 0x6f, 0x64, 0x32, 0x2e,
	0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2f, 0x68, 0x69, 0x76, 0x65, 0x2d, 0x61, 0x70, 0x69,
	0x3b, 0x68, 0x69, 0x76, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_hive_api_items_proto_rawDescOnce sync.Once
	file_hive_api_items_proto_rawDescData = file_hive_api_items_proto_rawDesc
)

func file_hive_api_items_proto_rawDescGZIP() []byte {
	file_hive_api_items_proto_rawDescOnce.Do(func() {
		file_hive_api_items_proto_rawDescData = protoimpl.X.CompressGZIP(file_hive_api_items_proto_rawDescData)
	})
	return file_hive_api_items_proto_rawDescData
}

var file_hive_api_items_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_hive_api_items_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_hive_api_items_proto_goTypes = []interface{}{
	(TaskStatus)(0),             // 0: od2_network.hive.TaskStatus
	(*ItemLocator)(nil),         // 1: od2_network.hive.ItemLocator
	(*ItemPointer)(nil),         // 2: od2_network.hive.ItemPointer
	(*KafkaPointer)(nil),        // 3: od2_network.hive.KafkaPointer
	(*Assignment)(nil),          // 4: od2_network.hive.Assignment
	(*AssignmentReport)(nil),    // 5: od2_network.hive.AssignmentReport
	(*AssignmentResult)(nil),    // 6: od2_network.hive.AssignmentResult
	(*timestamp.Timestamp)(nil), // 7: google.protobuf.Timestamp
}
var file_hive_api_items_proto_depIdxs = []int32{
	1, // 0: od2_network.hive.ItemPointer.dst:type_name -> od2_network.hive.ItemLocator
	7, // 1: od2_network.hive.ItemPointer.timestamp:type_name -> google.protobuf.Timestamp
	1, // 2: od2_network.hive.Assignment.locator:type_name -> od2_network.hive.ItemLocator
	3, // 3: od2_network.hive.Assignment.kafka_pointer:type_name -> od2_network.hive.KafkaPointer
	3, // 4: od2_network.hive.AssignmentReport.kafka_pointer:type_name -> od2_network.hive.KafkaPointer
	0, // 5: od2_network.hive.AssignmentReport.status:type_name -> od2_network.hive.TaskStatus
	5, // 6: od2_network.hive.AssignmentResult.report:type_name -> od2_network.hive.AssignmentReport
	7, // 7: od2_network.hive.AssignmentResult.finish_time:type_name -> google.protobuf.Timestamp
	1, // 8: od2_network.hive.AssignmentResult.locator:type_name -> od2_network.hive.ItemLocator
	9, // [9:9] is the sub-list for method output_type
	9, // [9:9] is the sub-list for method input_type
	9, // [9:9] is the sub-list for extension type_name
	9, // [9:9] is the sub-list for extension extendee
	0, // [0:9] is the sub-list for field type_name
}

func init() { file_hive_api_items_proto_init() }
func file_hive_api_items_proto_init() {
	if File_hive_api_items_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_hive_api_items_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ItemLocator); i {
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
		file_hive_api_items_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ItemPointer); i {
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
		file_hive_api_items_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*KafkaPointer); i {
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
		file_hive_api_items_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Assignment); i {
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
		file_hive_api_items_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AssignmentReport); i {
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
		file_hive_api_items_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AssignmentResult); i {
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
			RawDescriptor: file_hive_api_items_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_hive_api_items_proto_goTypes,
		DependencyIndexes: file_hive_api_items_proto_depIdxs,
		EnumInfos:         file_hive_api_items_proto_enumTypes,
		MessageInfos:      file_hive_api_items_proto_msgTypes,
	}.Build()
	File_hive_api_items_proto = out.File
	file_hive_api_items_proto_rawDesc = nil
	file_hive_api_items_proto_goTypes = nil
	file_hive_api_items_proto_depIdxs = nil
}
