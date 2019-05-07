"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var minamo_js_1 = require("./minamo.js");
var index;
(function (index) {
    var _this = this;
    var application = Object.freeze({
        title: "Systematic Metasyntactic Variables",
        description: "What is this? : By providing multiple serieses of metasyntax variables, you can express the existence of different serieses when using metasyntax variables.",
        dataPath: "data",
    });
    index.getList = function (dictionary) {
        return Object.keys(dictionary).map(function (key) { return dictionary[key]; }).reduce(function (a, b) { return a.concat(b); }, []);
    };
    index.render = function (list) { return list.join(", "); };
    index.onload = function () { return __awaiter(_this, void 0, void 0, function () {
        var dataIndex, _a, _b, _c, _d, _e;
        var _this = this;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    document.title = application.title;
                    minamo_js_1.minamo.dom.appendChildren(document.body, [
                        {
                            tag: "h1",
                            id: application.title.replace(/\W/, "-"),
                            children: application.title
                        },
                        application.description
                    ]);
                    _b = (_a = JSON).parse;
                    return [4 /*yield*/, minamo_js_1.minamo.http.get(application.dataPath + "/@index.json")];
                case 1:
                    dataIndex = _b.apply(_a, [_f.sent()]);
                    _d = (_c = minamo_js_1.minamo.dom).appendChildren;
                    _e = [document.body];
                    return [4 /*yield*/, Promise.all(Object.keys(dataIndex).map(function (key) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b, _c, _d, _e;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0:
                                        _a = [{
                                                tag: "h2",
                                                id: key.replace(/\W/, "-"),
                                                children: key
                                            }];
                                        _b = index.render;
                                        _c = index.getList;
                                        _e = (_d = JSON).parse;
                                        return [4 /*yield*/, minamo_js_1.minamo.http.get(application.dataPath + "/" + dataIndex[key])];
                                    case 1: return [2 /*return*/, _a.concat([
                                            _b.apply(void 0, [_c.apply(void 0, [_e.apply(_d, [_f.sent()])])])
                                        ])];
                                }
                            });
                        }); }))];
                case 2:
                    _d.apply(_c, _e.concat([_f.sent()]));
                    return [2 /*return*/];
            }
        });
    }); };
})(index = exports.index || (exports.index = {}));
//# sourceMappingURL=index.js.map