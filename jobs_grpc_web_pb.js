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

var items_pb = require('./items_pb.js')
const proto = {};
proto.od2_network = {};
proto.od2_network.hive = require('./jobs_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.od2_network.hive.AssignmentsClient =
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
proto.od2_network.hive.AssignmentsPromiseClient =
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
 *   !proto.od2_network.hive.OpenAssignmentsStreamRequest,
 *   !proto.od2_network.hive.OpenAssignmentsStreamResponse>}
 */
const methodDescriptor_Assignments_OpenAssignmentsStream = new grpc.web.MethodDescriptor(
  '/od2_network.hive.Assignments/OpenAssignmentsStream',
  grpc.web.MethodType.UNARY,
  proto.od2_network.hive.OpenAssignmentsStreamRequest,
  proto.od2_network.hive.OpenAssignmentsStreamResponse,
  /**
   * @param {!proto.od2_network.hive.OpenAssignmentsStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.OpenAssignmentsStreamResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.od2_network.hive.OpenAssignmentsStreamRequest,
 *   !proto.od2_network.hive.OpenAssignmentsStreamResponse>}
 */
const methodInfo_Assignments_OpenAssignmentsStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.od2_network.hive.OpenAssignmentsStreamResponse,
  /**
   * @param {!proto.od2_network.hive.OpenAssignmentsStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.OpenAssignmentsStreamResponse.deserializeBinary
);


/**
 * @param {!proto.od2_network.hive.OpenAssignmentsStreamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.od2_network.hive.OpenAssignmentsStreamResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.od2_network.hive.OpenAssignmentsStreamResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.od2_network.hive.AssignmentsClient.prototype.openAssignmentsStream =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/od2_network.hive.Assignments/OpenAssignmentsStream',
      request,
      metadata || {},
      methodDescriptor_Assignments_OpenAssignmentsStream,
      callback);
};


/**
 * @param {!proto.od2_network.hive.OpenAssignmentsStreamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.od2_network.hive.OpenAssignmentsStreamResponse>}
 *     Promise that resolves to the response
 */
proto.od2_network.hive.AssignmentsPromiseClient.prototype.openAssignmentsStream =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/od2_network.hive.Assignments/OpenAssignmentsStream',
      request,
      metadata || {},
      methodDescriptor_Assignments_OpenAssignmentsStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.od2_network.hive.CloseAssignmentsStreamRequest,
 *   !proto.od2_network.hive.CloseAssignmentsStreamResponse>}
 */
const methodDescriptor_Assignments_CloseAssignmentsStream = new grpc.web.MethodDescriptor(
  '/od2_network.hive.Assignments/CloseAssignmentsStream',
  grpc.web.MethodType.UNARY,
  proto.od2_network.hive.CloseAssignmentsStreamRequest,
  proto.od2_network.hive.CloseAssignmentsStreamResponse,
  /**
   * @param {!proto.od2_network.hive.CloseAssignmentsStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.CloseAssignmentsStreamResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.od2_network.hive.CloseAssignmentsStreamRequest,
 *   !proto.od2_network.hive.CloseAssignmentsStreamResponse>}
 */
const methodInfo_Assignments_CloseAssignmentsStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.od2_network.hive.CloseAssignmentsStreamResponse,
  /**
   * @param {!proto.od2_network.hive.CloseAssignmentsStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.CloseAssignmentsStreamResponse.deserializeBinary
);


/**
 * @param {!proto.od2_network.hive.CloseAssignmentsStreamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.od2_network.hive.CloseAssignmentsStreamResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.od2_network.hive.CloseAssignmentsStreamResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.od2_network.hive.AssignmentsClient.prototype.closeAssignmentsStream =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/od2_network.hive.Assignments/CloseAssignmentsStream',
      request,
      metadata || {},
      methodDescriptor_Assignments_CloseAssignmentsStream,
      callback);
};


/**
 * @param {!proto.od2_network.hive.CloseAssignmentsStreamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.od2_network.hive.CloseAssignmentsStreamResponse>}
 *     Promise that resolves to the response
 */
proto.od2_network.hive.AssignmentsPromiseClient.prototype.closeAssignmentsStream =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/od2_network.hive.Assignments/CloseAssignmentsStream',
      request,
      metadata || {},
      methodDescriptor_Assignments_CloseAssignmentsStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.od2_network.hive.GetPendingAssignmentsCountRequest,
 *   !proto.od2_network.hive.PendingAssignmentsCount>}
 */
const methodDescriptor_Assignments_GetPendingAssignmentsCount = new grpc.web.MethodDescriptor(
  '/od2_network.hive.Assignments/GetPendingAssignmentsCount',
  grpc.web.MethodType.UNARY,
  proto.od2_network.hive.GetPendingAssignmentsCountRequest,
  proto.od2_network.hive.PendingAssignmentsCount,
  /**
   * @param {!proto.od2_network.hive.GetPendingAssignmentsCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.PendingAssignmentsCount.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.od2_network.hive.GetPendingAssignmentsCountRequest,
 *   !proto.od2_network.hive.PendingAssignmentsCount>}
 */
const methodInfo_Assignments_GetPendingAssignmentsCount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.od2_network.hive.PendingAssignmentsCount,
  /**
   * @param {!proto.od2_network.hive.GetPendingAssignmentsCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.PendingAssignmentsCount.deserializeBinary
);


/**
 * @param {!proto.od2_network.hive.GetPendingAssignmentsCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.od2_network.hive.PendingAssignmentsCount)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.od2_network.hive.PendingAssignmentsCount>|undefined}
 *     The XHR Node Readable Stream
 */
proto.od2_network.hive.AssignmentsClient.prototype.getPendingAssignmentsCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/od2_network.hive.Assignments/GetPendingAssignmentsCount',
      request,
      metadata || {},
      methodDescriptor_Assignments_GetPendingAssignmentsCount,
      callback);
};


/**
 * @param {!proto.od2_network.hive.GetPendingAssignmentsCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.od2_network.hive.PendingAssignmentsCount>}
 *     Promise that resolves to the response
 */
proto.od2_network.hive.AssignmentsPromiseClient.prototype.getPendingAssignmentsCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/od2_network.hive.Assignments/GetPendingAssignmentsCount',
      request,
      metadata || {},
      methodDescriptor_Assignments_GetPendingAssignmentsCount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.od2_network.hive.WantAssignmentsRequest,
 *   !proto.od2_network.hive.WantAssignmentsResponse>}
 */
const methodDescriptor_Assignments_WantAssignments = new grpc.web.MethodDescriptor(
  '/od2_network.hive.Assignments/WantAssignments',
  grpc.web.MethodType.UNARY,
  proto.od2_network.hive.WantAssignmentsRequest,
  proto.od2_network.hive.WantAssignmentsResponse,
  /**
   * @param {!proto.od2_network.hive.WantAssignmentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.WantAssignmentsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.od2_network.hive.WantAssignmentsRequest,
 *   !proto.od2_network.hive.WantAssignmentsResponse>}
 */
const methodInfo_Assignments_WantAssignments = new grpc.web.AbstractClientBase.MethodInfo(
  proto.od2_network.hive.WantAssignmentsResponse,
  /**
   * @param {!proto.od2_network.hive.WantAssignmentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.WantAssignmentsResponse.deserializeBinary
);


/**
 * @param {!proto.od2_network.hive.WantAssignmentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.od2_network.hive.WantAssignmentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.od2_network.hive.WantAssignmentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.od2_network.hive.AssignmentsClient.prototype.wantAssignments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/od2_network.hive.Assignments/WantAssignments',
      request,
      metadata || {},
      methodDescriptor_Assignments_WantAssignments,
      callback);
};


/**
 * @param {!proto.od2_network.hive.WantAssignmentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.od2_network.hive.WantAssignmentsResponse>}
 *     Promise that resolves to the response
 */
proto.od2_network.hive.AssignmentsPromiseClient.prototype.wantAssignments =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/od2_network.hive.Assignments/WantAssignments',
      request,
      metadata || {},
      methodDescriptor_Assignments_WantAssignments);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.od2_network.hive.SurrenderAssignmentsRequest,
 *   !proto.od2_network.hive.SurrenderAssignmentsResponse>}
 */
const methodDescriptor_Assignments_SurrenderAssignments = new grpc.web.MethodDescriptor(
  '/od2_network.hive.Assignments/SurrenderAssignments',
  grpc.web.MethodType.UNARY,
  proto.od2_network.hive.SurrenderAssignmentsRequest,
  proto.od2_network.hive.SurrenderAssignmentsResponse,
  /**
   * @param {!proto.od2_network.hive.SurrenderAssignmentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.SurrenderAssignmentsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.od2_network.hive.SurrenderAssignmentsRequest,
 *   !proto.od2_network.hive.SurrenderAssignmentsResponse>}
 */
const methodInfo_Assignments_SurrenderAssignments = new grpc.web.AbstractClientBase.MethodInfo(
  proto.od2_network.hive.SurrenderAssignmentsResponse,
  /**
   * @param {!proto.od2_network.hive.SurrenderAssignmentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.SurrenderAssignmentsResponse.deserializeBinary
);


/**
 * @param {!proto.od2_network.hive.SurrenderAssignmentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.od2_network.hive.SurrenderAssignmentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.od2_network.hive.SurrenderAssignmentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.od2_network.hive.AssignmentsClient.prototype.surrenderAssignments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/od2_network.hive.Assignments/SurrenderAssignments',
      request,
      metadata || {},
      methodDescriptor_Assignments_SurrenderAssignments,
      callback);
};


/**
 * @param {!proto.od2_network.hive.SurrenderAssignmentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.od2_network.hive.SurrenderAssignmentsResponse>}
 *     Promise that resolves to the response
 */
proto.od2_network.hive.AssignmentsPromiseClient.prototype.surrenderAssignments =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/od2_network.hive.Assignments/SurrenderAssignments',
      request,
      metadata || {},
      methodDescriptor_Assignments_SurrenderAssignments);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.od2_network.hive.StreamAssignmentsRequest,
 *   !proto.od2_network.hive.AssignmentBatch>}
 */
const methodDescriptor_Assignments_StreamAssignments = new grpc.web.MethodDescriptor(
  '/od2_network.hive.Assignments/StreamAssignments',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.od2_network.hive.StreamAssignmentsRequest,
  proto.od2_network.hive.AssignmentBatch,
  /**
   * @param {!proto.od2_network.hive.StreamAssignmentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.AssignmentBatch.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.od2_network.hive.StreamAssignmentsRequest,
 *   !proto.od2_network.hive.AssignmentBatch>}
 */
const methodInfo_Assignments_StreamAssignments = new grpc.web.AbstractClientBase.MethodInfo(
  proto.od2_network.hive.AssignmentBatch,
  /**
   * @param {!proto.od2_network.hive.StreamAssignmentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.AssignmentBatch.deserializeBinary
);


/**
 * @param {!proto.od2_network.hive.StreamAssignmentsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.od2_network.hive.AssignmentBatch>}
 *     The XHR Node Readable Stream
 */
proto.od2_network.hive.AssignmentsClient.prototype.streamAssignments =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/od2_network.hive.Assignments/StreamAssignments',
      request,
      metadata || {},
      methodDescriptor_Assignments_StreamAssignments);
};


/**
 * @param {!proto.od2_network.hive.StreamAssignmentsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.od2_network.hive.AssignmentBatch>}
 *     The XHR Node Readable Stream
 */
proto.od2_network.hive.AssignmentsPromiseClient.prototype.streamAssignments =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/od2_network.hive.Assignments/StreamAssignments',
      request,
      metadata || {},
      methodDescriptor_Assignments_StreamAssignments);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.od2_network.hive.ReportAssignmentsRequest,
 *   !proto.od2_network.hive.ReportAssignmentsResponse>}
 */
const methodDescriptor_Assignments_ReportAssignments = new grpc.web.MethodDescriptor(
  '/od2_network.hive.Assignments/ReportAssignments',
  grpc.web.MethodType.UNARY,
  proto.od2_network.hive.ReportAssignmentsRequest,
  proto.od2_network.hive.ReportAssignmentsResponse,
  /**
   * @param {!proto.od2_network.hive.ReportAssignmentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.ReportAssignmentsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.od2_network.hive.ReportAssignmentsRequest,
 *   !proto.od2_network.hive.ReportAssignmentsResponse>}
 */
const methodInfo_Assignments_ReportAssignments = new grpc.web.AbstractClientBase.MethodInfo(
  proto.od2_network.hive.ReportAssignmentsResponse,
  /**
   * @param {!proto.od2_network.hive.ReportAssignmentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.od2_network.hive.ReportAssignmentsResponse.deserializeBinary
);


/**
 * @param {!proto.od2_network.hive.ReportAssignmentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.od2_network.hive.ReportAssignmentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.od2_network.hive.ReportAssignmentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.od2_network.hive.AssignmentsClient.prototype.reportAssignments =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/od2_network.hive.Assignments/ReportAssignments',
      request,
      metadata || {},
      methodDescriptor_Assignments_ReportAssignments,
      callback);
};


/**
 * @param {!proto.od2_network.hive.ReportAssignmentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.od2_network.hive.ReportAssignmentsResponse>}
 *     Promise that resolves to the response
 */
proto.od2_network.hive.AssignmentsPromiseClient.prototype.reportAssignments =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/od2_network.hive.Assignments/ReportAssignments',
      request,
      metadata || {},
      methodDescriptor_Assignments_ReportAssignments);
};


module.exports = proto.od2_network.hive;

