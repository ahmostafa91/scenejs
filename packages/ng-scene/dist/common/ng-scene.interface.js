"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var scenejs_1 = require("scenejs");
var NgSceneInterface = /*#__PURE__*/ (function () {
    function NgSceneInterface() {
        this.from = {};
        this.to = {};
        this.fillMode = 'forwards';
        this.direction = 'normal';
        this.iterationCount = 1;
        this.duration = 0;
        this.playSpeed = 1;
        this.delay = 0;
        this.easing = 0;
        this.autoplay = false;
        this.css = false;
        this.time = -1;
        this.ngpaused = new core_1.EventEmitter();
        this.ngended = new core_1.EventEmitter();
        this.ngtimeupdate = new core_1.EventEmitter();
        this.ngiteration = new core_1.EventEmitter();
        this.nganimate = new core_1.EventEmitter();
        this.ngplay = new core_1.EventEmitter();
    }
    NgSceneInterface.prototype.init = function () {
        var _this = this;
        var itemOptions = {};
        scenejs_1.OPTIONS.forEach(function (name) {
            itemOptions[name] = _this[name];
        });
        this.item.setOptions(itemOptions);
        if (this.autoplay !== false) {
            this.play();
        }
    };
    NgSceneInterface.prototype.setTime = function (time) {
        this.item.setTime(time);
    };
    NgSceneInterface.prototype.getTime = function () {
        return this.item.getTime();
    };
    NgSceneInterface.prototype.play = function () {
        this.css !== false ? this.item.playCSS() : this.item.play();
    };
    NgSceneInterface.prototype.pause = function () {
        this.item.pause();
    };
    NgSceneInterface.prototype.getItem = function () {
        return this.item;
    };
    NgSceneInterface.prototype.getDuration = function () {
        return this.item.getDuration();
    };
    NgSceneInterface.prototype.ngOnDestroy = function () {
        this.item.off();
    };
    NgSceneInterface.prototype.ngAfterViewChecked = function () {
        if (this.time !== -1 && (this.autoplay === false || this.item.getPlayState() === 'paused')) {
            this.setTime(this.time);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgSceneInterface.prototype, "from", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgSceneInterface.prototype, "to", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgSceneInterface.prototype, "keyframes", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NgSceneInterface.prototype, "fillMode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NgSceneInterface.prototype, "direction", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgSceneInterface.prototype, "iterationCount", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgSceneInterface.prototype, "duration", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgSceneInterface.prototype, "playSpeed", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgSceneInterface.prototype, "delay", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgSceneInterface.prototype, "easing", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgSceneInterface.prototype, "autoplay", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgSceneInterface.prototype, "css", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgSceneInterface.prototype, "time", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NgSceneInterface.prototype, "ngpaused", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NgSceneInterface.prototype, "ngended", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NgSceneInterface.prototype, "ngtimeupdate", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NgSceneInterface.prototype, "ngiteration", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NgSceneInterface.prototype, "nganimate", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NgSceneInterface.prototype, "ngplay", void 0);
    return NgSceneInterface;
}());
exports.NgSceneInterface = NgSceneInterface;
//# sourceMappingURL=ng-scene.interface.js.map