"use strict";
exports.__esModule = true;
exports.show = void 0;
function show(content) {
    window.document.getElementById('app').innerText = 'Hello,' + content;
}
exports.show = show;
// 通过 CommonJS 规范导出 show 函数
// module.exports = show
