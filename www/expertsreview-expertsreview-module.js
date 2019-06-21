(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expertsreview-expertsreview-module"],{

/***/ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-drop.directive.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-item.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-item.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-like-object.class.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        this.rawFile = fileOrInput;
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-select.directive.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new core_1.EventEmitter();
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return {};
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileSelectDirective.prototype, "onFileSelected", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-type.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-type.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-upload.module.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_drop_directive_1 = __webpack_require__(/*! ./file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js");
var file_select_directive_1 = __webpack_require__(/*! ./file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js");
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-uploader.class.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var file_item_class_1 = __webpack_require__(/*! ./file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js");
var file_type_class_1 = __webpack_require__(/*! ./file-type.class */ "./node_modules/ng2-file-upload/file-upload/file-type.class.js");
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: function (item) { return item._file; },
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new core_1.EventEmitter();
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var that = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            var appendFile = function () { return sendable.append(item.alias, item._file, item.file.name); };
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    var paramVal = _this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                });
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        };
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then(function (result) { return xhr.send(JSON.stringify(result)); });
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
    };
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    FileUploader.prototype._transformResponse = function (response, headers) {
        return response;
    };
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ "./node_modules/ng2-file-upload/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ng2-file-upload/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./file-upload/file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js"));
var file_upload_module_1 = __webpack_require__(/*! ./file-upload/file-upload.module */ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js");
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ "./src/app/components/multi-file-upload/multi-file-upload.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/multi-file-upload/multi-file-upload.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\" class=\"drop-zone\">\n  <img src=\"assets/icons/icon-upload.svg\" /> \n  <p class=\"multi-file-main-title\">Drag and drop a file here or Click</p>\n</div>\n\n<div class=\"file-input-container\">\n  <label>\n    <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple />\n    Add Files\n  </label>\n</div>\n\n<h2>Files: {{ uploader?.queue?.length }}</h2>\n\n<ion-list>\n  <ion-reorder-group (ionItemReorder)=\"reorderFiles($event)\" disabled=\"true\">\n    <ion-item *ngFor=\"let item of uploader.queue\">\n      <ion-label>\n        {{ item?.file?.name }}\n      </ion-label>\n      <ion-reorder></ion-reorder>\n    </ion-item>\n  </ion-reorder-group>\n</ion-list>"

/***/ }),

/***/ "./src/app/components/multi-file-upload/multi-file-upload.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/multi-file-upload/multi-file-upload.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drop-zone {\n  background-color: #f6f6f6;\n  border: dotted 3px #dedddd;\n  height: 30vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px 0; }\n\n.file-input-container {\n  text-align: right; }\n\n.file-input-container input[type=\"file\"] {\n    display: none; }\n\n.file-input-container label {\n    border: 1px solid #ccc;\n    padding: 6px 12px;\n    cursor: pointer; }\n\n.nv-file-over {\n  border: dotted 3px red; }\n\n.multi-file-main-title {\n  color: #7f8ea7;\n  margin-left: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvY29tcG9uZW50cy9tdWx0aS1maWxlLXVwbG9hZC9tdWx0aS1maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWMsRUFBQTs7QUFHbEI7RUFFSSxpQkFBaUIsRUFBQTs7QUFGckI7SUFLUSxhQUFhLEVBQUE7O0FBTHJCO0lBU1Esc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksY0FBYztFQUNkLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tdWx0aS1maWxlLXVwbG9hZC9tdWx0aS1maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wLXpvbmUgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgIGJvcmRlcjogZG90dGVkIDNweCAjZGVkZGRkOyBcbiAgICBoZWlnaHQ6IDMwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweCAwO1xufVxuXG4uZmlsZS1pbnB1dC1jb250YWluZXIge1xuXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgbGFiZWwge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLm52LWZpbGUtb3ZlciB7IFxuICAgIGJvcmRlcjogZG90dGVkIDNweCByZWQ7IFxufVxuXG4ubXVsdGktZmlsZS1tYWluLXRpdGxlIHtcbiAgICBjb2xvcjogIzdmOGVhNztcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/multi-file-upload/multi-file-upload.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/multi-file-upload/multi-file-upload.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MultiFileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiFileUploadComponent", function() { return MultiFileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);



var MultiFileUploadComponent = /** @class */ (function () {
    function MultiFileUploadComponent() {
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            allowedMimeType: ['image/png', 'image/gif', 'image/jpeg', 'application/pdf']
        });
        this.hasBaseDropZoneOver = false;
    }
    MultiFileUploadComponent.prototype.getFiles = function () {
        return this.uploader.queue.map(function (fileItem) {
            return fileItem.file;
        });
    };
    MultiFileUploadComponent.prototype.fileOverBase = function (ev) {
        this.hasBaseDropZoneOver = ev;
    };
    MultiFileUploadComponent.prototype.reorderFiles = function (reorderEvent) {
        var element = this.uploader.queue.splice(reorderEvent.detail.from, 1)[0];
        this.uploader.queue.splice(reorderEvent.detail.to, 0, element);
    };
    MultiFileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multi-file-upload',
            template: __webpack_require__(/*! ./multi-file-upload.component.html */ "./src/app/components/multi-file-upload/multi-file-upload.component.html"),
            styles: [__webpack_require__(/*! ./multi-file-upload.component.scss */ "./src/app/components/multi-file-upload/multi-file-upload.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MultiFileUploadComponent);
    return MultiFileUploadComponent;
}());



/***/ }),

/***/ "./src/app/pages/constants.ts":
/*!************************************!*\
  !*** ./src/app/pages/constants.ts ***!
  \************************************/
/*! exports provided: CATEGORIES, PAYMENTOPTIONS, CONTACTINFO, BACKENDURL, SERVERASSETS, STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES", function() { return CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENTOPTIONS", function() { return PAYMENTOPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTACTINFO", function() { return CONTACTINFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKENDURL", function() { return BACKENDURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVERASSETS", function() { return SERVERASSETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
var CATEGORIES = [
    "Cardiology",
    "Endocrinology",
    "Infectious Diseases",
    "Nephrology",
    "Oncology & Hematology",
    "Pediatrics",
    "Psychiatry",
    "Radiology",
    "Dermatology",
    "Gastroenterology",
    "Internal Medicine",
    "Neurology",
    "Precision Oncology",
    "Physical Med/Rehab",
    "Pulmonary Medicine and Critical Care",
    "Rheumatology"
];
var PAYMENTOPTIONS = [
    "Debit Card",
    "Credit Card",
    "Paypal",
    "Paytm",
    "Internet Banking"
];
var CONTACTINFO = {
    email: "test@testemail.com",
    number: "+123456789"
};
var BACKENDURL = 'http://192.168.0.107:4200/api/v1';
var SERVERASSETS = 'http://192.168.0.107:4200/attachments/';
var STATUS = [
    "Pending",
    "In Progress",
    "Closed"
];


/***/ }),

/***/ "./src/app/pages/expertsreview/expertsreview.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/expertsreview/expertsreview.module.ts ***!
  \*************************************************************/
/*! exports provided: ExpertsreviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpertsreviewPageModule", function() { return ExpertsreviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _expertsreview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expertsreview.page */ "./src/app/pages/expertsreview/expertsreview.page.ts");
/* harmony import */ var src_app_components_multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/multi-file-upload/multi-file-upload.component */ "./src/app/components/multi-file-upload/multi-file-upload.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__);









var routes = [
    {
        path: '',
        component: _expertsreview_page__WEBPACK_IMPORTED_MODULE_6__["ExpertsreviewPage"]
    }
];
var ExpertsreviewPageModule = /** @class */ (function () {
    function ExpertsreviewPageModule() {
    }
    ExpertsreviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _expertsreview_page__WEBPACK_IMPORTED_MODULE_6__["ExpertsreviewPage"],
                src_app_components_multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_7__["MultiFileUploadComponent"]
            ]
        })
    ], ExpertsreviewPageModule);
    return ExpertsreviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/expertsreview/expertsreview.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/expertsreview/expertsreview.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"onClickNavBack()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <img src=\"assets/imgs/logo-veridoc.svg\" />\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!isLoggedIn\" fill=\"solid\" color=\"success\" (click)=\"onClickGetStarted()\">Get Started</ion-button>\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"verify-progress-indicator-container\">\n    <div class=\"verify-progress-header\">\n      <p>\n        Verify your documents in Just 3 steps\n      </p>\n    </div>\n  \n    <div class=\"verify-progress-indicator\">\n      <div [class]=\"initVerifyStep>=1?'verify-progress-active-step': 'verify-progress-inactive-step'\">1</div>\n      <div class=\"verify-progress-connector\"></div>\n      <div [class]=\"initVerifyStep>=2?'verify-progress-active-step': 'verify-progress-inactive-step'\">2</div>\n      <div class=\"verify-progress-connector\"></div>\n      <div [class]=\"initVerifyStep>=3?'verify-progress-active-step': 'verify-progress-inactive-step'\">3</div>\n    </div>\n  </div>\n\n  <div id=\"verify-progress-main-content\">\n    <div [ngSwitch]=\"initVerifyStep\">\n      <div *ngSwitchCase=\"1\">\n        <app-multi-file-upload></app-multi-file-upload>\n        <ion-item>\n          <ion-label position=\"stacked\">Comments</ion-label>\n          <ion-textarea [(ngModel)]=\"strComment\"></ion-textarea>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Queries</ion-label>\n          <ion-textarea [(ngModel)]=\"strQuery\"></ion-textarea>\n        </ion-item>\n      </div>\n      <div *ngSwitchCase=\"2\" class=\"verify-progress-new-user\">\n        <ion-item>\n          <ion-label position=\"stacked\">First name</ion-label>\n          <ion-input type=\"text\"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label position=\"stacked\">Last name</ion-label>\n          <ion-input type=\"text\"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label position=\"stacked\">Email</ion-label>\n          <ion-input type=\"email\"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label position=\"stacked\">Aadhar</ion-label>\n          <ion-input type=\"number\"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label position=\"stacked\">Username</ion-label>\n          <ion-input type=\"text\"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label position=\"stacked\">Password</ion-label>\n          <ion-input type=\"password\"></ion-input>\n        </ion-item>\n      </div>\n      <div *ngSwitchCase=\"3\" class=\"verify-progress-payment\">\n        <ion-item>\n          <ion-label>Payment</ion-label>\n          <ion-select [(ngModel)]=\"selectedPaymentOpt\">\n            <ion-select-option *ngFor=\"let opt of arrPaymentopts; let i = index;\" [value]=\"i\">\n              {{opt}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </div>\n    </div>\n  \n    <div id=\"verify-progress-controllers\">\n      <div>\n        <ion-button color=\"hardmedium\" (click)=\"onClickBack()\">Back</ion-button>\n      </div>\n      <div>\n        <ion-button color=\"success\" (click)=\"onClickNext()\">\n          {{initVerifyStep==3?'Finish': 'Next'}}\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/expertsreview/expertsreview.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/expertsreview/expertsreview.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar img {\n  margin-left: 16px; }\n\n.verify-progress-indicator-container {\n  background: #F3F6F9;\n  padding: 8vh 16px; }\n\n.verify-progress-header p {\n  text-align: center;\n  font-size: 2em;\n  color: #505050; }\n\n.verify-progress-indicator {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.verify-progress-active-step {\n  width: 2em;\n  height: 2em;\n  background: #E1F0E1;\n  border-radius: 50%;\n  border: 5px solid #fff;\n  box-shadow: 0 4px 12px #dadada;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #3CC93C;\n  font-size: 1.4em;\n  font-weight: bold; }\n\n.verify-progress-inactive-step {\n  width: 2em;\n  height: 2em;\n  background: #EAEBEB;\n  border-radius: 50%;\n  border: 5px solid #fff;\n  box-shadow: 0 4px 12px #dadada;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #929BA2;\n  font-size: 1.4em;\n  font-weight: bold; }\n\n.verify-progress-connector {\n  width: 8vw;\n  height: .3em;\n  background: #929BA2;\n  margin: 0 8px; }\n\n#verify-progress-controllers {\n  display: flex;\n  margin-top: 3vh;\n  margin-bottom: 3vh; }\n\n#verify-progress-controllers div {\n    flex: 1;\n    text-align: center; }\n\n#verify-progress-controllers div ion-button {\n      width: 50%; }\n\n.verify-progress-upload-container {\n  height: 25vh;\n  margin: 16px;\n  border: 1px dashed #adadad;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer; }\n\n.verify-progress-upload-container p {\n    color: #9e9e9e;\n    font-size: .9em; }\n\n#verify-progress-file-selector {\n  visibility: hidden;\n  z-index: -1; }\n\n.verify-progress-new-user {\n  padding: 16px; }\n\n.verify-progress-payment {\n  padding: 16px; }\n\n#verify-progress-main-content {\n  padding: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGExL1dvcmtzcGFjZS9pb25pYy92ZXJpZG9jL3NyYy9hcHAvcGFnZXMvZXhwZXJ0c3Jldmlldy9leHBlcnRzcmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFHckI7RUFFUSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFJdEI7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFIdEI7SUFLUSxPQUFPO0lBQ1Asa0JBQWtCLEVBQUE7O0FBTjFCO01BUVksVUFBVSxFQUFBOztBQUt0QjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBUm5CO0lBVVEsY0FBYztJQUNkLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9leHBlcnRzcmV2aWV3L2V4cGVydHNyZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC8vIC0tYmFja2dyb3VuZDogI0YzRjZGOTtcbiAgICBpbWcge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB9XG59XG5cbi52ZXJpZnktcHJvZ3Jlc3MtaW5kaWNhdG9yLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI0YzRjZGOTtcbiAgICBwYWRkaW5nOiA4dmggMTZweDtcbn1cblxuLnZlcmlmeS1wcm9ncmVzcy1oZWFkZXIge1xuICAgIHAge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICBjb2xvcjogIzUwNTA1MDtcbiAgICB9XG59XG5cbi52ZXJpZnktcHJvZ3Jlc3MtaW5kaWNhdG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi52ZXJpZnktcHJvZ3Jlc3MtYWN0aXZlLXN0ZXAge1xuICAgIHdpZHRoOiAyZW07XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgYmFja2dyb3VuZDogI0UxRjBFMTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiA1cHggc29saWQgI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4ICNkYWRhZGE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAjM0NDOTNDO1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi52ZXJpZnktcHJvZ3Jlc3MtaW5hY3RpdmUtc3RlcCB7XG4gICAgd2lkdGg6IDJlbTtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjRUFFQkVCO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggI2RhZGFkYTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICM5MjlCQTI7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnZlcmlmeS1wcm9ncmVzcy1jb25uZWN0b3Ige1xuICAgIHdpZHRoOiA4dnc7XG4gICAgaGVpZ2h0OiAuM2VtO1xuICAgIGJhY2tncm91bmQ6ICM5MjlCQTI7XG4gICAgbWFyZ2luOiAwIDhweDtcbn1cblxuI3ZlcmlmeS1wcm9ncmVzcy1jb250cm9sbGVycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAzdmg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xuICAgIGRpdiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udmVyaWZ5LXByb2dyZXNzLXVwbG9hZC1jb250YWluZXIge1xuICAgIGhlaWdodDogMjV2aDtcbiAgICBtYXJnaW46IDE2cHg7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNhZGFkYWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHAge1xuICAgICAgICBjb2xvcjogIzllOWU5ZTtcbiAgICAgICAgZm9udC1zaXplOiAuOWVtO1xuICAgIH1cbn1cblxuI3ZlcmlmeS1wcm9ncmVzcy1maWxlLXNlbGVjdG9yIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgei1pbmRleDogLTE7XG59XG5cbi52ZXJpZnktcHJvZ3Jlc3MtbmV3LXVzZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG5cbi52ZXJpZnktcHJvZ3Jlc3MtcGF5bWVudCB7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuI3ZlcmlmeS1wcm9ncmVzcy1tYWluLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDE2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/expertsreview/expertsreview.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/expertsreview/expertsreview.page.ts ***!
  \***********************************************************/
/*! exports provided: ExpertsreviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpertsreviewPage", function() { return ExpertsreviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/app/pages/constants.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/multi-file-upload/multi-file-upload.component */ "./src/app/components/multi-file-upload/multi-file-upload.component.ts");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "./src/app/services/toast/toast.service.ts");







var ExpertsreviewPage = /** @class */ (function () {
    function ExpertsreviewPage(altCtrl, event, navCtrl, loadingCtrl, apiService, toastService) {
        var _this = this;
        this.altCtrl = altCtrl;
        this.event = event;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.apiService = apiService;
        this.toastService = toastService;
        this.initVerifyStep = 1;
        this.isFinishCurrentStep = false;
        this.arrCategories = _constants__WEBPACK_IMPORTED_MODULE_2__["CATEGORIES"];
        this.arrPaymentopts = _constants__WEBPACK_IMPORTED_MODULE_2__["PAYMENTOPTIONS"];
        this.selectedPaymentOpt = 0;
        this.uploadedFiles = [];
        /**
         * query string
         */
        this.strQuery = "";
        /**
         * comment string
         */
        this.strComment = "";
        this.event.subscribe("onLoginStatusChange", function (data) {
            _this.initPage();
        });
    }
    ExpertsreviewPage.prototype.ngOnInit = function () {
    };
    ExpertsreviewPage.prototype.ionViewWillEnter = function () {
        this.initPage();
    };
    ExpertsreviewPage.prototype.initPage = function () {
        this.isLoggedIn = localStorage.getItem("isLoggedIn") == 'true' ? true : false;
    };
    /**
     * Show Next step
     * and upload attachments
     */
    ExpertsreviewPage.prototype.onClickNext = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userTypeAlt, files, formData_1, uploadResult_1, err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.altCtrl.create({
                            header: "Is New User?",
                            subHeader: "",
                            inputs: [
                                {
                                    type: 'radio',
                                    label: 'Yes',
                                    value: '0',
                                    checked: true
                                },
                                {
                                    type: 'radio',
                                    label: 'No',
                                    value: '1'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        if (data == "1") {
                                            _this.initVerifyStep++;
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        userTypeAlt = _a.sent();
                        if (!(this.initVerifyStep >= 3)) return [3 /*break*/, 2];
                        this.initVerifyStep = 3;
                        this.postRequest();
                        return [3 /*break*/, 7];
                    case 2:
                        if (!(this.initVerifyStep == 1)) return [3 /*break*/, 7];
                        files = this.fileField.getFiles();
                        formData_1 = new FormData();
                        files.forEach(function (file) {
                            formData_1.append('attachments', file.rawFile, file.name);
                        });
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 6, , 7]);
                        return [4 /*yield*/, this.apiService.uploadFiles(formData_1)];
                    case 4:
                        uploadResult_1 = _a.sent();
                        console.log(uploadResult_1);
                        Object.keys(uploadResult_1).map(function (key) {
                            _this.uploadedFiles.push(uploadResult_1[key]._id);
                        });
                        this.initVerifyStep++;
                        return [4 /*yield*/, userTypeAlt.present()];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        err_1 = _a.sent();
                        console.log(err_1);
                        this.toastService.showToast("Uploading file failed!");
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Post Requeust
     */
    ExpertsreviewPage.prototype.postRequest = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var postLoader, postData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: "Please wait..."
                        })];
                    case 1:
                        postLoader = _a.sent();
                        postData = {
                            user: localStorage.getItem("uid"),
                            expert: "",
                            comments: this.strComment,
                            queries: this.strQuery,
                            status: 0,
                            files: this.uploadedFiles
                        };
                        return [4 /*yield*/, postLoader.present()];
                    case 2:
                        _a.sent();
                        this.apiService.postRequest(postData)
                            .subscribe(function (data) {
                            _this.uploadedFiles = [];
                            postLoader.dismiss();
                            _this.toastService.showToast("Successfully Requested!");
                            _this.navCtrl.navigateBack('/menu/landing');
                        }, function (error) {
                            console.log(error);
                            postLoader.dismiss();
                            _this.toastService.showToast("Request failed!");
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ExpertsreviewPage.prototype.onClickBack = function () {
        if (this.initVerifyStep <= 1) {
            this.initVerifyStep = 1;
        }
        else {
            this.initVerifyStep--;
        }
    };
    ExpertsreviewPage.prototype.onClickNavBack = function () {
        this.navCtrl.navigateBack('/menu/landing');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_components_multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_4__["MultiFileUploadComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_components_multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_4__["MultiFileUploadComponent"])
    ], ExpertsreviewPage.prototype, "fileField", void 0);
    ExpertsreviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expertsreview',
            template: __webpack_require__(/*! ./expertsreview.page.html */ "./src/app/pages/expertsreview/expertsreview.page.html"),
            styles: [__webpack_require__(/*! ./expertsreview.page.scss */ "./src/app/pages/expertsreview/expertsreview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]])
    ], ExpertsreviewPage);
    return ExpertsreviewPage;
}());



/***/ }),

/***/ "./src/app/services/api/api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_pages_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/constants */ "./src/app/pages/constants.ts");




var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        /**
         * API url from constants
         * @see src/app/pages/constants
         */
        this.apiUrl = src_app_pages_constants__WEBPACK_IMPORTED_MODULE_3__["BACKENDURL"];
    }
    /**
     *
     * @param req
     * @returns observable
     */
    ApiService.prototype.signUp = function (req) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/user/register", req, { headers: headers });
    };
    /**
     *
     * @param credential(email: String, password: String)
     * @returns observable
     */
    ApiService.prototype.login = function (credential) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/user/login", credential, { headers: headers });
    };
    /**
     * Reset Password
     * @param email: String
     * @returns observable
     */
    ApiService.prototype.resetPassword = function (email) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/user/restPassword", { email: email }, { headers: headers });
    };
    /**
     * Get Profile Info
     * @param uid
     * @returns observable
     */
    ApiService.prototype.getUser = function (uid) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/user/getUser", { uid: uid }, { headers: headers });
    };
    /**
     * Update User Profile
     * @param user: Object
     * @returns observable
     */
    ApiService.prototype.updateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/user/updateUser", { user: user }, { headers: headers });
    };
    /**
     * Post Request
     * @param post: Object
     * @returns observable
     */
    ApiService.prototype.postRequest = function (post) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/post/postRequest", { post: post }, { headers: headers });
    };
    /**
     * Get My Requests (User side)
     * @param uid userid
     * @returns observable
     */
    ApiService.prototype.getRequest = function (uid) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/post/getRequest", { uid: uid }, { headers: headers });
    };
    /**
     * Get All requests by expertid
     * @param expertId expert id
     */
    ApiService.prototype.getAllRequests = function (expertId) {
        if (expertId === void 0) { expertId = ""; }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/post/getAllRequests", { expertId: expertId }, { headers: headers });
    };
    ApiService.prototype.requestSetExpert = function (reqdata) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/post/setExpert", reqdata, { headers: headers });
    };
    ApiService.prototype.uploadFiles = function (formData) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("enctype", "multipart/form-data");
        return this.http.post(this.apiUrl + "/post/uploadAttachment", formData, { headers: headers }).toPromise();
    };
    ApiService.prototype.downloadFile = function (filename) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/post/downloadAttachment", { filename: filename }, { responseType: 'blob', headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json') });
    };
    /**
     * Close Request
     * @param id request id
     * @returns observable
     */
    ApiService.prototype.closeRequest = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set("Content-type", "application/json");
        return this.http.post(this.apiUrl + "/post/closeRequest", { id: id }, { headers: headers });
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/toast/toast.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/toast/toast.service.ts ***!
  \*************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    /**
     *
     * @param message String
     * @returns null
     */
    ToastService.prototype.showToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ToastService);
    return ToastService;
}());



/***/ })

}]);
//# sourceMappingURL=expertsreview-expertsreview-module.js.map