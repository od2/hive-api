/**
 * @fileoverview gRPC-Web generated client stub for od2_network.hive.web
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.od2_network = {};
proto.od2_network.hive = {};
proto.od2_network.hive.web = require('./worker_tokens_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.od2_network.hive.web.WorkerTokensClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.od2_network.hive.web.WorkerTokensPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.od2_network.hive.web.CreateWorkerTokenRequest,
 *   !proto.od2_network.hive.web.CreateWorkerTokenResponse>}
 */
const methodDescriptor_WorkerTokens_CreateWorkerToken = new grpc.web.MethodDescriptor(
  '/od2_network.hive.web.WorkerTokens/CreateWorkerToken',
  grpc.web.MethodType.UNARY,
  proto.od2_network.hive.web.CreateWorkerTokenRequest,
  proto.od2_network.hive.web.CreateWorkerTokenResponse,
  /**
   * @param {!proto.od2_network.hive.web.CreateWorkerTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.web.CreateWorkerTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.od2_network.hive.web.CreateWorkerTokenRequest,
 *   !proto.od2_network.hive.web.CreateWorkerTokenResponse>}
 */
const methodInfo_WorkerTokens_CreateWorkerToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.od2_network.hive.web.CreateWorkerTokenResponse,
  /**
   * @param {!proto.od2_network.hive.web.CreateWorkerTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.web.CreateWorkerTokenResponse.deserializeBinary
);


/**
 * @param {!proto.od2_network.hive.web.CreateWorkerTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.od2_network.hive.web.CreateWorkerTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.od2_network.hive.web.CreateWorkerTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.od2_network.hive.web.WorkerTokensClient.prototype.createWorkerToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/od2_network.hive.web.WorkerTokens/CreateWorkerToken',
      request,
      metadata || {},
      methodDescriptor_WorkerTokens_CreateWorkerToken,
      callback);
};


/**
 * @param {!proto.od2_network.hive.web.CreateWorkerTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.od2_network.hive.web.CreateWorkerTokenResponse>}
 *     Promise that resolves to the response
 */
proto.od2_network.hive.web.WorkerTokensPromiseClient.prototype.createWorkerToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/od2_network.hive.web.WorkerTokens/CreateWorkerToken',
      request,
      metadata || {},
      methodDescriptor_WorkerTokens_CreateWorkerToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.od2_network.hive.web.ListWorkerTokensRequest,
 *   !proto.od2_network.hive.web.ListWorkerTokensResponse>}
 */
const methodDescriptor_WorkerTokens_ListWorkerTokens = new grpc.web.MethodDescriptor(
  '/od2_network.hive.web.WorkerTokens/ListWorkerTokens',
  grpc.web.MethodType.UNARY,
  proto.od2_network.hive.web.ListWorkerTokensRequest,
  proto.od2_network.hive.web.ListWorkerTokensResponse,
  /**
   * @param {!proto.od2_network.hive.web.ListWorkerTokensRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.web.ListWorkerTokensResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.od2_network.hive.web.ListWorkerTokensRequest,
 *   !proto.od2_network.hive.web.ListWorkerTokensResponse>}
 */
const methodInfo_WorkerTokens_ListWorkerTokens = new grpc.web.AbstractClientBase.MethodInfo(
  proto.od2_network.hive.web.ListWorkerTokensResponse,
  /**
   * @param {!proto.od2_network.hive.web.ListWorkerTokensRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.web.ListWorkerTokensResponse.deserializeBinary
);


/**
 * @param {!proto.od2_network.hive.web.ListWorkerTokensRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.od2_network.hive.web.ListWorkerTokensResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.od2_network.hive.web.ListWorkerTokensResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.od2_network.hive.web.WorkerTokensClient.prototype.listWorkerTokens =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/od2_network.hive.web.WorkerTokens/ListWorkerTokens',
      request,
      metadata || {},
      methodDescriptor_WorkerTokens_ListWorkerTokens,
      callback);
};


/**
 * @param {!proto.od2_network.hive.web.ListWorkerTokensRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.od2_network.hive.web.ListWorkerTokensResponse>}
 *     Promise that resolves to the response
 */
proto.od2_network.hive.web.WorkerTokensPromiseClient.prototype.listWorkerTokens =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/od2_network.hive.web.WorkerTokens/ListWorkerTokens',
      request,
      metadata || {},
      methodDescriptor_WorkerTokens_ListWorkerTokens);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.od2_network.hive.web.RevokeWorkerTokenRequest,
 *   !proto.od2_network.hive.web.RevokeWorkerTokenResponse>}
 */
const methodDescriptor_WorkerTokens_RevokeWorkerToken = new grpc.web.MethodDescriptor(
  '/od2_network.hive.web.WorkerTokens/RevokeWorkerToken',
  grpc.web.MethodType.UNARY,
  proto.od2_network.hive.web.RevokeWorkerTokenRequest,
  proto.od2_network.hive.web.RevokeWorkerTokenResponse,
  /**
   * @param {!proto.od2_network.hive.web.RevokeWorkerTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.web.RevokeWorkerTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.od2_network.hive.web.RevokeWorkerTokenRequest,
 *   !proto.od2_network.hive.web.RevokeWorkerTokenResponse>}
 */
const methodInfo_WorkerTokens_RevokeWorkerToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.od2_network.hive.web.RevokeWorkerTokenResponse,
  /**
   * @param {!proto.od2_network.hive.web.RevokeWorkerTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.web.RevokeWorkerTokenResponse.deserializeBinary
);


/**
 * @param {!proto.od2_network.hive.web.RevokeWorkerTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.od2_network.hive.web.RevokeWorkerTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.od2_network.hive.web.RevokeWorkerTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.od2_network.hive.web.WorkerTokensClient.prototype.revokeWorkerToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/od2_network.hive.web.WorkerTokens/RevokeWorkerToken',
      request,
      metadata || {},
      methodDescriptor_WorkerTokens_RevokeWorkerToken,
      callback);
};


/**
 * @param {!proto.od2_network.hive.web.RevokeWorkerTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.od2_network.hive.web.RevokeWorkerTokenResponse>}
 *     Promise that resolves to the response
 */
proto.od2_network.hive.web.WorkerTokensPromiseClient.prototype.revokeWorkerToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/od2_network.hive.web.WorkerTokens/RevokeWorkerToken',
      request,
      metadata || {},
      methodDescriptor_WorkerTokens_RevokeWorkerToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.od2_network.hive.web.RevokeAllWorkerTokensRequest,
 *   !proto.od2_network.hive.web.RevokeAllWorkerTokensResponse>}
 */
const methodDescriptor_WorkerTokens_RevokeAllWorkerTokens = new grpc.web.MethodDescriptor(
  '/od2_network.hive.web.WorkerTokens/RevokeAllWorkerTokens',
  grpc.web.MethodType.UNARY,
  proto.od2_network.hive.web.RevokeAllWorkerTokensRequest,
  proto.od2_network.hive.web.RevokeAllWorkerTokensResponse,
  /**
   * @param {!proto.od2_network.hive.web.RevokeAllWorkerTokensRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.web.RevokeAllWorkerTokensResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.od2_network.hive.web.RevokeAllWorkerTokensRequest,
 *   !proto.od2_network.hive.web.RevokeAllWorkerTokensResponse>}
 */
const methodInfo_WorkerTokens_RevokeAllWorkerTokens = new grpc.web.AbstractClientBase.MethodInfo(
  proto.od2_network.hive.web.RevokeAllWorkerTokensResponse,
  /**
   * @param {!proto.od2_network.hive.web.RevokeAllWorkerTokensRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.web.RevokeAllWorkerTokensResponse.deserializeBinary
);


/**
 * @param {!proto.od2_network.hive.web.RevokeAllWorkerTokensRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.od2_network.hive.web.RevokeAllWorkerTokensResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.od2_network.hive.web.RevokeAllWorkerTokensResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.od2_network.hive.web.WorkerTokensClient.prototype.revokeAllWorkerTokens =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/od2_network.hive.web.WorkerTokens/RevokeAllWorkerTokens',
      request,
      metadata || {},
      methodDescriptor_WorkerTokens_RevokeAllWorkerTokens,
      callback);
};


/**
 * @param {!proto.od2_network.hive.web.RevokeAllWorkerTokensRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.od2_network.hive.web.RevokeAllWorkerTokensResponse>}
 *     Promise that resolves to the response
 */
proto.od2_network.hive.web.WorkerTokensPromiseClient.prototype.revokeAllWorkerTokens =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/od2_network.hive.web.WorkerTokens/RevokeAllWorkerTokens',
      request,
      metadata || {},
      methodDescriptor_WorkerTokens_RevokeAllWorkerTokens);
};


module.exports = proto.od2_network.hive.web;

