protos := $(wildcard *.proto)
names := $(basename $(protos))

proto: $(addsuffix .pb.go,$(names)) $(addsuffix _grpc.pb.go,$(names)) $(addsuffix _pb.js,$(names)) $(addsuffix _grpc_web_pb.js,$(names))

.PHONY: all
all: proto

.PHONY: clean
clean:
	rm -rf *.pb.go *_grpc.pb.go *_pb.js *_grpc_web_pb.js

%.pb.go %_grpc.pb.go %_pb.js %_grpc_web_pb.js: %.proto
	protoc -I=$(realpath ..) \
	  --go_out=plugins:.. --go_opt=paths=source_relative \
	  --go-grpc_out=.. --go-grpc_opt=paths=source_relative \
	  --js_out=import_style=commonjs:.. \
      --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.. \
	  $(realpath $<)
