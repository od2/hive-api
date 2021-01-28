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

const proto = {};
proto.od2_network = {};
proto.od2_network.hive = {};
proto.od2_network.hive.web = require('./topology_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.od2_network.hive.web.TopologyClient =
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
proto.od2_network.hive.web.TopologyPromiseClient =
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
 *   !proto.od2_network.hive.web.GetCollectionsRequest,
 *   !proto.od2_network.hive.web.GetCollectionsResponse>}
 */
const methodDescriptor_Topology_GetCollections = new grpc.web.MethodDescriptor(
  '/od2_network.hive.web.Topology/GetCollections',
  grpc.web.MethodType.UNARY,
  proto.od2_network.hive.web.GetCollectionsRequest,
  proto.od2_network.hive.web.GetCollectionsResponse,
  /**
   * @param {!proto.od2_network.hive.web.GetCollectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.web.GetCollectionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.od2_network.hive.web.GetCollectionsRequest,
 *   !proto.od2_network.hive.web.GetCollectionsResponse>}
 */
const methodInfo_Topology_GetCollections = new grpc.web.AbstractClientBase.MethodInfo(
  proto.od2_network.hive.web.GetCollectionsResponse,
  /**
   * @param {!proto.od2_network.hive.web.GetCollectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.web.GetCollectionsResponse.deserializeBinary
);


/**
 * @param {!proto.od2_network.hive.web.GetCollectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.od2_network.hive.web.GetCollectionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.od2_network.hive.web.GetCollectionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.od2_network.hive.web.TopologyClient.prototype.getCollections =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/od2_network.hive.web.Topology/GetCollections',
      request,
      metadata || {},
      methodDescriptor_Topology_GetCollections,
      callback);
};


/**
 * @param {!proto.od2_network.hive.web.GetCollectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.od2_network.hive.web.GetCollectionsResponse>}
 *     Promise that resolves to the response
 */
proto.od2_network.hive.web.TopologyPromiseClient.prototype.getCollections =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/od2_network.hive.web.Topology/GetCollections',
      request,
      metadata || {},
      methodDescriptor_Topology_GetCollections);
};


module.exports = proto.od2_network.hive.web;

