/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const BinanceTrade = $root.BinanceTrade = (() => {

    /**
     * Properties of a BinanceTrade.
     * @exports IBinanceTrade
     * @interface IBinanceTrade
     * @property {string|null} [e] BinanceTrade e
     * @property {number|Long|null} [et] BinanceTrade et
     * @property {string|null} [s] BinanceTrade s
     * @property {number|Long|null} [t] BinanceTrade t
     * @property {string|null} [p] BinanceTrade p
     * @property {string|null} [q] BinanceTrade q
     * @property {number|Long|null} [tt] BinanceTrade tt
     * @property {boolean|null} [m] BinanceTrade m
     * @property {boolean|null} [i] BinanceTrade i
     */

    /**
     * Constructs a new BinanceTrade.
     * @exports BinanceTrade
     * @classdesc Represents a BinanceTrade.
     * @implements IBinanceTrade
     * @constructor
     * @param {IBinanceTrade=} [properties] Properties to set
     */
    function BinanceTrade(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BinanceTrade e.
     * @member {string} e
     * @memberof BinanceTrade
     * @instance
     */
    BinanceTrade.prototype.e = "";

    /**
     * BinanceTrade et.
     * @member {number|Long} et
     * @memberof BinanceTrade
     * @instance
     */
    BinanceTrade.prototype.et = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BinanceTrade s.
     * @member {string} s
     * @memberof BinanceTrade
     * @instance
     */
    BinanceTrade.prototype.s = "";

    /**
     * BinanceTrade t.
     * @member {number|Long} t
     * @memberof BinanceTrade
     * @instance
     */
    BinanceTrade.prototype.t = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BinanceTrade p.
     * @member {string} p
     * @memberof BinanceTrade
     * @instance
     */
    BinanceTrade.prototype.p = "";

    /**
     * BinanceTrade q.
     * @member {string} q
     * @memberof BinanceTrade
     * @instance
     */
    BinanceTrade.prototype.q = "";

    /**
     * BinanceTrade tt.
     * @member {number|Long} tt
     * @memberof BinanceTrade
     * @instance
     */
    BinanceTrade.prototype.tt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * BinanceTrade m.
     * @member {boolean} m
     * @memberof BinanceTrade
     * @instance
     */
    BinanceTrade.prototype.m = false;

    /**
     * BinanceTrade i.
     * @member {boolean} i
     * @memberof BinanceTrade
     * @instance
     */
    BinanceTrade.prototype.i = false;

    /**
     * Creates a new BinanceTrade instance using the specified properties.
     * @function create
     * @memberof BinanceTrade
     * @static
     * @param {IBinanceTrade=} [properties] Properties to set
     * @returns {BinanceTrade} BinanceTrade instance
     */
    BinanceTrade.create = function create(properties) {
        return new BinanceTrade(properties);
    };

    /**
     * Encodes the specified BinanceTrade message. Does not implicitly {@link BinanceTrade.verify|verify} messages.
     * @function encode
     * @memberof BinanceTrade
     * @static
     * @param {IBinanceTrade} message BinanceTrade message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BinanceTrade.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.e != null && Object.hasOwnProperty.call(message, "e"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.e);
        if (message.et != null && Object.hasOwnProperty.call(message, "et"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.et);
        if (message.s != null && Object.hasOwnProperty.call(message, "s"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.s);
        if (message.t != null && Object.hasOwnProperty.call(message, "t"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.t);
        if (message.p != null && Object.hasOwnProperty.call(message, "p"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.p);
        if (message.q != null && Object.hasOwnProperty.call(message, "q"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.q);
        if (message.tt != null && Object.hasOwnProperty.call(message, "tt"))
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.tt);
        if (message.m != null && Object.hasOwnProperty.call(message, "m"))
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.m);
        if (message.i != null && Object.hasOwnProperty.call(message, "i"))
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.i);
        return writer;
    };

    /**
     * Encodes the specified BinanceTrade message, length delimited. Does not implicitly {@link BinanceTrade.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BinanceTrade
     * @static
     * @param {IBinanceTrade} message BinanceTrade message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BinanceTrade.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BinanceTrade message from the specified reader or buffer.
     * @function decode
     * @memberof BinanceTrade
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BinanceTrade} BinanceTrade
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BinanceTrade.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BinanceTrade();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.e = reader.string();
                    break;
                }
            case 2: {
                    message.et = reader.int64();
                    break;
                }
            case 3: {
                    message.s = reader.string();
                    break;
                }
            case 4: {
                    message.t = reader.int64();
                    break;
                }
            case 5: {
                    message.p = reader.string();
                    break;
                }
            case 6: {
                    message.q = reader.string();
                    break;
                }
            case 7: {
                    message.tt = reader.int64();
                    break;
                }
            case 8: {
                    message.m = reader.bool();
                    break;
                }
            case 9: {
                    message.i = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BinanceTrade message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BinanceTrade
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BinanceTrade} BinanceTrade
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BinanceTrade.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BinanceTrade message.
     * @function verify
     * @memberof BinanceTrade
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BinanceTrade.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.e != null && message.hasOwnProperty("e"))
            if (!$util.isString(message.e))
                return "e: string expected";
        if (message.et != null && message.hasOwnProperty("et"))
            if (!$util.isInteger(message.et) && !(message.et && $util.isInteger(message.et.low) && $util.isInteger(message.et.high)))
                return "et: integer|Long expected";
        if (message.s != null && message.hasOwnProperty("s"))
            if (!$util.isString(message.s))
                return "s: string expected";
        if (message.t != null && message.hasOwnProperty("t"))
            if (!$util.isInteger(message.t) && !(message.t && $util.isInteger(message.t.low) && $util.isInteger(message.t.high)))
                return "t: integer|Long expected";
        if (message.p != null && message.hasOwnProperty("p"))
            if (!$util.isString(message.p))
                return "p: string expected";
        if (message.q != null && message.hasOwnProperty("q"))
            if (!$util.isString(message.q))
                return "q: string expected";
        if (message.tt != null && message.hasOwnProperty("tt"))
            if (!$util.isInteger(message.tt) && !(message.tt && $util.isInteger(message.tt.low) && $util.isInteger(message.tt.high)))
                return "tt: integer|Long expected";
        if (message.m != null && message.hasOwnProperty("m"))
            if (typeof message.m !== "boolean")
                return "m: boolean expected";
        if (message.i != null && message.hasOwnProperty("i"))
            if (typeof message.i !== "boolean")
                return "i: boolean expected";
        return null;
    };

    /**
     * Creates a BinanceTrade message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BinanceTrade
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BinanceTrade} BinanceTrade
     */
    BinanceTrade.fromObject = function fromObject(object) {
        if (object instanceof $root.BinanceTrade)
            return object;
        let message = new $root.BinanceTrade();
        if (object.e != null)
            message.e = String(object.e);
        if (object.et != null)
            if ($util.Long)
                (message.et = $util.Long.fromValue(object.et)).unsigned = false;
            else if (typeof object.et === "string")
                message.et = parseInt(object.et, 10);
            else if (typeof object.et === "number")
                message.et = object.et;
            else if (typeof object.et === "object")
                message.et = new $util.LongBits(object.et.low >>> 0, object.et.high >>> 0).toNumber();
        if (object.s != null)
            message.s = String(object.s);
        if (object.t != null)
            if ($util.Long)
                (message.t = $util.Long.fromValue(object.t)).unsigned = false;
            else if (typeof object.t === "string")
                message.t = parseInt(object.t, 10);
            else if (typeof object.t === "number")
                message.t = object.t;
            else if (typeof object.t === "object")
                message.t = new $util.LongBits(object.t.low >>> 0, object.t.high >>> 0).toNumber();
        if (object.p != null)
            message.p = String(object.p);
        if (object.q != null)
            message.q = String(object.q);
        if (object.tt != null)
            if ($util.Long)
                (message.tt = $util.Long.fromValue(object.tt)).unsigned = false;
            else if (typeof object.tt === "string")
                message.tt = parseInt(object.tt, 10);
            else if (typeof object.tt === "number")
                message.tt = object.tt;
            else if (typeof object.tt === "object")
                message.tt = new $util.LongBits(object.tt.low >>> 0, object.tt.high >>> 0).toNumber();
        if (object.m != null)
            message.m = Boolean(object.m);
        if (object.i != null)
            message.i = Boolean(object.i);
        return message;
    };

    /**
     * Creates a plain object from a BinanceTrade message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BinanceTrade
     * @static
     * @param {BinanceTrade} message BinanceTrade
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BinanceTrade.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.e = "";
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.et = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.et = options.longs === String ? "0" : 0;
            object.s = "";
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.t = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.t = options.longs === String ? "0" : 0;
            object.p = "";
            object.q = "";
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.tt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.tt = options.longs === String ? "0" : 0;
            object.m = false;
            object.i = false;
        }
        if (message.e != null && message.hasOwnProperty("e"))
            object.e = message.e;
        if (message.et != null && message.hasOwnProperty("et"))
            if (typeof message.et === "number")
                object.et = options.longs === String ? String(message.et) : message.et;
            else
                object.et = options.longs === String ? $util.Long.prototype.toString.call(message.et) : options.longs === Number ? new $util.LongBits(message.et.low >>> 0, message.et.high >>> 0).toNumber() : message.et;
        if (message.s != null && message.hasOwnProperty("s"))
            object.s = message.s;
        if (message.t != null && message.hasOwnProperty("t"))
            if (typeof message.t === "number")
                object.t = options.longs === String ? String(message.t) : message.t;
            else
                object.t = options.longs === String ? $util.Long.prototype.toString.call(message.t) : options.longs === Number ? new $util.LongBits(message.t.low >>> 0, message.t.high >>> 0).toNumber() : message.t;
        if (message.p != null && message.hasOwnProperty("p"))
            object.p = message.p;
        if (message.q != null && message.hasOwnProperty("q"))
            object.q = message.q;
        if (message.tt != null && message.hasOwnProperty("tt"))
            if (typeof message.tt === "number")
                object.tt = options.longs === String ? String(message.tt) : message.tt;
            else
                object.tt = options.longs === String ? $util.Long.prototype.toString.call(message.tt) : options.longs === Number ? new $util.LongBits(message.tt.low >>> 0, message.tt.high >>> 0).toNumber() : message.tt;
        if (message.m != null && message.hasOwnProperty("m"))
            object.m = message.m;
        if (message.i != null && message.hasOwnProperty("i"))
            object.i = message.i;
        return object;
    };

    /**
     * Converts this BinanceTrade to JSON.
     * @function toJSON
     * @memberof BinanceTrade
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BinanceTrade.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for BinanceTrade
     * @function getTypeUrl
     * @memberof BinanceTrade
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    BinanceTrade.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/BinanceTrade";
    };

    return BinanceTrade;
})();

export { $root as default };
