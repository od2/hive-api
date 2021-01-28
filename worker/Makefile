protos := $(wildcard *.proto)
names := $(basename $(protos))

proto: $(addsuffix .pb.go,$(names)) $(addsuffix _grpc.pb.go,$(names))

.PHONY: all
all: proto

.PHONY: clean
clean:
	rm -rf *.pb.go *_grpc.pb.go

%.pb.go %_grpc.pb.go: %.proto
	protoc -I=$(realpath ..) \
	  --go_out=plugins:.. --go_opt=paths=source_relative \
	  --go-grpc_out=.. --go-grpc_opt=paths=source_relative \
	  $(realpath $<)
