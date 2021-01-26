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
 *   !proto.od2_network.hive.WorkerToken>}
 */
const methodDescriptor_Management_CreateWorkerToken = new grpc.web.MethodDescriptor(
  '/od2_network.hive.Management/CreateWorkerToken',
  grpc.web.MethodType.UNARY,
  proto.od2_network.hive.CreateWorkerTokenRequest,
  proto.od2_network.hive.WorkerToken,
  /**
   * @param {!proto.od2_network.hive.CreateWorkerTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.WorkerToken.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.od2_network.hive.CreateWorkerTokenRequest,
 *   !proto.od2_network.hive.WorkerToken>}
 */
const methodInfo_Management_CreateWorkerToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.od2_network.hive.WorkerToken,
  /**
   * @param {!proto.od2_network.hive.CreateWorkerTokenRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.WorkerToken.deserializeBinary
);


/**
 * @param {!proto.od2_network.hive.CreateWorkerTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.od2_network.hive.WorkerToken)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.od2_network.hive.WorkerToken>|undefined}
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
 * @return {!Promise<!proto.od2_network.hive.WorkerToken>}
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


module.exports = proto.od2_network.hive;

