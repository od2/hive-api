// source: discovery.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var items_pb = require('./items_pb.js');
goog.object.extend(proto, items_pb);
goog.exportSymbol('proto.od2_network.hive.ReportDiscoveredRequest', null, global);
goog.exportSymbol('proto.od2_network.hive.ReportDiscoveredResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.od2_network.hive.ReportDiscoveredRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.od2_network.hive.ReportDiscoveredRequest.repeatedFields_, null);
};
goog.inherits(proto.od2_network.hive.ReportDiscoveredRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.od2_network.hive.ReportDiscoveredRequest.displayName = 'proto.od2_network.hive.ReportDiscoveredRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.od2_network.hive.ReportDiscoveredResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.od2_network.hive.ReportDiscoveredResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.od2_network.hive.ReportDiscoveredResponse.displayName = 'proto.od2_network.hive.ReportDiscoveredResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.od2_network.hive.ReportDiscoveredRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.od2_network.hive.ReportDiscoveredRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.od2_network.hive.ReportDiscoveredRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.od2_network.hive.ReportDiscoveredRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.od2_network.hive.ReportDiscoveredRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pointersList: jspb.Message.toObjectList(msg.getPointersList(),
    items_pb.ItemPointer.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.od2_network.hive.ReportDiscoveredRequest}
 */
proto.od2_network.hive.ReportDiscoveredRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.od2_network.hive.ReportDiscoveredRequest;
  return proto.od2_network.hive.ReportDiscoveredRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.od2_network.hive.ReportDiscoveredRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.od2_network.hive.ReportDiscoveredRequest}
 */
proto.od2_network.hive.ReportDiscoveredRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new items_pb.ItemPointer;
      reader.readMessage(value,items_pb.ItemPointer.deserializeBinaryFromReader);
      msg.addPointers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.od2_network.hive.ReportDiscoveredRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.od2_network.hive.ReportDiscoveredRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.od2_network.hive.ReportDiscoveredRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.od2_network.hive.ReportDiscoveredRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPointersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      items_pb.ItemPointer.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ItemPointer pointers = 1;
 * @return {!Array<!proto.od2_network.hive.ItemPointer>}
 */
proto.od2_network.hive.ReportDiscoveredRequest.prototype.getPointersList = function() {
  return /** @type{!Array<!proto.od2_network.hive.ItemPointer>} */ (
    jspb.Message.getRepeatedWrapperField(this, items_pb.ItemPointer, 1));
};


/**
 * @param {!Array<!proto.od2_network.hive.ItemPointer>} value
 * @return {!proto.od2_network.hive.ReportDiscoveredRequest} returns this
*/
proto.od2_network.hive.ReportDiscoveredRequest.prototype.setPointersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.od2_network.hive.ItemPointer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.od2_network.hive.ItemPointer}
 */
proto.od2_network.hive.ReportDiscoveredRequest.prototype.addPointers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.od2_network.hive.ItemPointer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.od2_network.hive.ReportDiscoveredRequest} returns this
 */
proto.od2_network.hive.ReportDiscoveredRequest.prototype.clearPointersList = function() {
  return this.setPointersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.od2_network.hive.ReportDiscoveredResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.od2_network.hive.ReportDiscoveredResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.od2_network.hive.ReportDiscoveredResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.od2_network.hive.ReportDiscoveredResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.od2_network.hive.ReportDiscoveredResponse}
 */
proto.od2_network.hive.ReportDiscoveredResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.od2_network.hive.ReportDiscoveredResponse;
  return proto.od2_network.hive.ReportDiscoveredResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.od2_network.hive.ReportDiscoveredResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.od2_network.hive.ReportDiscoveredResponse}
 */
proto.od2_network.hive.ReportDiscoveredResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.od2_network.hive.ReportDiscoveredResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.od2_network.hive.ReportDiscoveredResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.od2_network.hive.ReportDiscoveredResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.od2_network.hive.ReportDiscoveredResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.od2_network.hive);
