protos := $(wildcard *.proto)
names := $(basename $(protos))

proto: $(addsuffix .pb.go,$(names)) $(addsuffix _grpc.pb.go,$(names))

.PHONY: all
all: proto
	$(MAKE) -C web all
	$(MAKE) -C worker all

.PHONY: clean
clean:
	rm -rf *.pb.go *_grpc.pb.go
	$(MAKE) -C web clean
	$(MAKE) -C worker clean

%.pb.go %_grpc.pb.go: %.proto
	protoc -I=$(realpath ..) \
	  --go_out=plugins:.. --go_opt=paths=source_relative \
	  --go-grpc_out=.. --go-grpc_opt=paths=source_relative \
	  $(realpath $<)
