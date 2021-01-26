/**
 * @fileoverview gRPC-Web generated client stub for od2_network.hive
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
proto.od2_network.hive = require('./management_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.od2_network.hive.ManagementClient =
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
proto.od2_network.hive.ManagementPromiseClient =
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
 *   !proto.od2_network.hive.CreateWorkerTokenRequest,
 *   !proto.od2_network.hive.CreateWorkerTokenResponse>}
 */
const methodDescriptor_Management_CreateWorkerToken = new grpc.web.MethodDescriptor(
  '/od2_network.hive.Management/CreateWorkerToken',
  grpc.web.MethodType.UNARY,
  proto.od2_network.hive.CreateWorkerTokenRequest,
  proto.od2_network.hive.CreateWorkerTokenResponse,
  /**
   * @param {!proto.od2_network.hive.CreateWorkerTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.CreateWorkerTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.od2_network.hive.CreateWorkerTokenRequest,
 *   !proto.od2_network.hive.CreateWorkerTokenResponse>}
 */
const methodInfo_Management_CreateWorkerToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.od2_network.hive.CreateWorkerTokenResponse,
  /**
   * @param {!proto.od2_network.hive.CreateWorkerTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.CreateWorkerTokenResponse.deserializeBinary
);


/**
 * @param {!proto.od2_network.hive.CreateWorkerTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.od2_network.hive.CreateWorkerTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.od2_network.hive.CreateWorkerTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.od2_network.hive.ManagementClient.prototype.createWorkerToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/od2_network.hive.Management/CreateWorkerToken',
      request,
      metadata || {},
      methodDescriptor_Management_CreateWorkerToken,
      callback);
};


/**
 * @param {!proto.od2_network.hive.CreateWorkerTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.od2_network.hive.CreateWorkerTokenResponse>}
 *     Promise that resolves to the response
 */
proto.od2_network.hive.ManagementPromiseClient.prototype.createWorkerToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/od2_network.hive.Management/CreateWorkerToken',
      request,
      metadata || {},
      methodDescriptor_Management_CreateWorkerToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.od2_network.hive.ListWorkerTokensRequest,
 *   !proto.od2_network.hive.ListWorkerTokensResponse>}
 */
const methodDescriptor_Management_ListWorkerTokens = new grpc.web.MethodDescriptor(
  '/od2_network.hive.Management/ListWorkerTokens',
  grpc.web.MethodType.UNARY,
  proto.od2_network.hive.ListWorkerTokensRequest,
  proto.od2_network.hive.ListWorkerTokensResponse,
  /**
   * @param {!proto.od2_network.hive.ListWorkerTokensRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.ListWorkerTokensResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.od2_network.hive.ListWorkerTokensRequest,
 *   !proto.od2_network.hive.ListWorkerTokensResponse>}
 */
const methodInfo_Management_ListWorkerTokens = new grpc.web.AbstractClientBase.MethodInfo(
  proto.od2_network.hive.ListWorkerTokensResponse,
  /**
   * @param {!proto.od2_network.hive.ListWorkerTokensRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.ListWorkerTokensResponse.deserializeBinary
);


/**
 * @param {!proto.od2_network.hive.ListWorkerTokensRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.od2_network.hive.ListWorkerTokensResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.od2_network.hive.ListWorkerTokensResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.od2_network.hive.ManagementClient.prototype.listWorkerTokens =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/od2_network.hive.Management/ListWorkerTokens',
      request,
      metadata || {},
      methodDescriptor_Management_ListWorkerTokens,
      callback);
};


/**
 * @param {!proto.od2_network.hive.ListWorkerTokensRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.od2_network.hive.ListWorkerTokensResponse>}
 *     Promise that resolves to the response
 */
proto.od2_network.hive.ManagementPromiseClient.prototype.listWorkerTokens =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/od2_network.hive.Management/ListWorkerTokens',
      request,
      metadata || {},
      methodDescriptor_Management_ListWorkerTokens);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.od2_network.hive.RevokeWorkerTokenRequest,
 *   !proto.od2_network.hive.RevokeWorkerTokenResponse>}
 */
const methodDescriptor_Management_RevokeWorkerToken = new grpc.web.MethodDescriptor(
  '/od2_network.hive.Management/RevokeWorkerToken',
  grpc.web.MethodType.UNARY,
  proto.od2_network.hive.RevokeWorkerTokenRequest,
  proto.od2_network.hive.RevokeWorkerTokenResponse,
  /**
   * @param {!proto.od2_network.hive.RevokeWorkerTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.RevokeWorkerTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.od2_network.hive.RevokeWorkerTokenRequest,
 *   !proto.od2_network.hive.RevokeWorkerTokenResponse>}
 */
const methodInfo_Management_RevokeWorkerToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.od2_network.hive.RevokeWorkerTokenResponse,
  /**
   * @param {!proto.od2_network.hive.RevokeWorkerTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.RevokeWorkerTokenResponse.deserializeBinary
);


/**
 * @param {!proto.od2_network.hive.RevokeWorkerTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.od2_network.hive.RevokeWorkerTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.od2_network.hive.RevokeWorkerTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.od2_network.hive.ManagementClient.prototype.revokeWorkerToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/od2_network.hive.Management/RevokeWorkerToken',
      request,
      metadata || {},
      methodDescriptor_Management_RevokeWorkerToken,
      callback);
};


/**
 * @param {!proto.od2_network.hive.RevokeWorkerTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.od2_network.hive.RevokeWorkerTokenResponse>}
 *     Promise that resolves to the response
 */
proto.od2_network.hive.ManagementPromiseClient.prototype.revokeWorkerToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/od2_network.hive.Management/RevokeWorkerToken',
      request,
      metadata || {},
      methodDescriptor_Management_RevokeWorkerToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.od2_network.hive.RevokeAllWorkerTokensRequest,
 *   !proto.od2_network.hive.RevokeAllWorkerTokensResponse>}
 */
const methodDescriptor_Management_RevokeAllWorkerTokens = new grpc.web.MethodDescriptor(
  '/od2_network.hive.Management/RevokeAllWorkerTokens',
  grpc.web.MethodType.UNARY,
  proto.od2_network.hive.RevokeAllWorkerTokensRequest,
  proto.od2_network.hive.RevokeAllWorkerTokensResponse,
  /**
   * @param {!proto.od2_network.hive.RevokeAllWorkerTokensRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.RevokeAllWorkerTokensResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.od2_network.hive.RevokeAllWorkerTokensRequest,
 *   !proto.od2_network.hive.RevokeAllWorkerTokensResponse>}
 */
const methodInfo_Management_RevokeAllWorkerTokens = new grpc.web.AbstractClientBase.MethodInfo(
  proto.od2_network.hive.RevokeAllWorkerTokensResponse,
  /**
   * @param {!proto.od2_network.hive.RevokeAllWorkerTokensRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.RevokeAllWorkerTokensResponse.deserializeBinary
);


/**
 * @param {!proto.od2_network.hive.RevokeAllWorkerTokensRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.od2_network.hive.RevokeAllWorkerTokensResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.od2_network.hive.RevokeAllWorkerTokensResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.od2_network.hive.ManagementClient.prototype.revokeAllWorkerTokens =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/od2_network.hive.Management/RevokeAllWorkerTokens',
      request,
      metadata || {},
      methodDescriptor_Management_RevokeAllWorkerTokens,
      callback);
};


/**
 * @param {!proto.od2_network.hive.RevokeAllWorkerTokensRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.od2_network.hive.RevokeAllWorkerTokensResponse>}
 *     Promise that resolves to the response
 */
proto.od2_network.hive.ManagementPromiseClient.prototype.revokeAllWorkerTokens =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/od2_network.hive.Management/RevokeAllWorkerTokens',
      request,
      metadata || {},
      methodDescriptor_Management_RevokeAllWorkerTokens);
};


module.exports = proto.od2_network.hive;

