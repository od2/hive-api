protos := $(wildcard *.proto)
names := $(basename $(protos))

proto: $(addsuffix .pb.go,$(names)) $(addsuffix _pb.js,$(names))

.PHONY: all
all: proto
	$(MAKE) -C web all
	$(MAKE) -C worker all

.PHONY: clean
clean:
	rm -rf *.pb.go *_pb.js
	$(MAKE) -C web clean
	$(MAKE) -C worker clean

%.pb.go %_grpc.pb.go: %.proto
	protoc -I=$(realpath ..) \
	  --go_out=plugins:.. --go_opt=paths=source_relative \
	  --js_out=import_style=commonjs:.. \
	  $(realpath $<)
