#!/bin/sh
set -e
cd "$(dirname "$0")"
protoc -I=. \
  --go_out=plugins:. --go_opt=paths=source_relative \
  --go-grpc_out=. --go-grpc_opt=paths=source_relative \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. \
  ./*.proto
cd - >/dev/null
