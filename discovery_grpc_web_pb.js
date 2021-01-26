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


var items_pb = require('./items_pb.js')
const proto = {};
proto.od2_network = {};
proto.od2_network.hive = require('./discovery_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.od2_network.hive.DiscoveryClient =
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
proto.od2_network.hive.DiscoveryPromiseClient =
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
 *   !proto.od2_network.hive.ReportDiscoveredRequest,
 *   !proto.od2_network.hive.ReportDiscoveredResponse>}
 */
const methodDescriptor_Discovery_ReportDiscovered = new grpc.web.MethodDescriptor(
  '/od2_network.hive.Discovery/ReportDiscovered',
  grpc.web.MethodType.UNARY,
  proto.od2_network.hive.ReportDiscoveredRequest,
  proto.od2_network.hive.ReportDiscoveredResponse,
  /**
   * @param {!proto.od2_network.hive.ReportDiscoveredRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.ReportDiscoveredResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.od2_network.hive.ReportDiscoveredRequest,
 *   !proto.od2_network.hive.ReportDiscoveredResponse>}
 */
const methodInfo_Discovery_ReportDiscovered = new grpc.web.AbstractClientBase.MethodInfo(
  proto.od2_network.hive.ReportDiscoveredResponse,
  /**
   * @param {!proto.od2_network.hive.ReportDiscoveredRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.ReportDiscoveredResponse.deserializeBinary
);


/**
 * @param {!proto.od2_network.hive.ReportDiscoveredRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.od2_network.hive.ReportDiscoveredResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.od2_network.hive.ReportDiscoveredResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.od2_network.hive.DiscoveryClient.prototype.reportDiscovered =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/od2_network.hive.Discovery/ReportDiscovered',
      request,
      metadata || {},
      methodDescriptor_Discovery_ReportDiscovered,
      callback);
};


/**
 * @param {!proto.od2_network.hive.ReportDiscoveredRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.od2_network.hive.ReportDiscoveredResponse>}
 *     Promise that resolves to the response
 */
proto.od2_network.hive.DiscoveryPromiseClient.prototype.reportDiscovered =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/od2_network.hive.Discovery/ReportDiscovered',
      request,
      metadata || {},
      methodDescriptor_Discovery_ReportDiscovered);
};


module.exports = proto.od2_network.hive;

