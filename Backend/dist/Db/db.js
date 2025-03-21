"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlModel = void 0;
exports.connect = connect;
const mongoose_1 = __importDefault(require("mongoose"));
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect('mongodb+srv://ksbhuvi2004:0HWE4DwK4HxrXi5K@cluster0.rfv5q.mongodb.net/TinyTrail');
            console.log('connected to database');
        }
        catch (e) {
            console.error(e);
        }
    });
}
const urlSchema = new mongoose_1.default.Schema({
    url: { type: String, required: true },
    shortUrl: { type: String, required: true },
    date: { type: Date, default: Date.now }
});
const urlModel = mongoose_1.default.model('url', urlSchema);
exports.urlModel = urlModel;
