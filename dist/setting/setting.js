System.register(["jimu-core/emotion","jimu-core","jimu-ui/advanced/setting-components","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_core__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_jimu_ui__["default"] = module["default"] || module;
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core"
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ },

/***/ "@emotion/react/jsx-runtime"
/*!************************************!*\
  !*** external "jimu-core/emotion" ***!
  \************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__;

/***/ },

/***/ "jimu-ui"
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ },

/***/ "jimu-ui/advanced/setting-components"
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**************************************************************************************!*\
  !*** ./your-extensions/widgets/accesos-internet-movil-ontic/src/setting/setting.tsx ***!
  \**************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");

/** @jsx jsx */



const settingStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
  .setting-inner {
    padding: 12px;
    font-size: 13px;
  }
  .brand-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #00488415;
    color: #004884;
    font-weight: 700;
    font-size: 11px;
    padding: 3px 8px;
    border-radius: 4px;
    margin-bottom: 12px;
  }
`;
const Setting = (props) => {
    var _a, _b, _c, _d, _e;
    const serviceUrl = ((_a = props.config) === null || _a === void 0 ? void 0 : _a.serviceUrl) || 'https://arcgis.esri.co/server/rest/services/Hosted/Ontic/FeatureServer/0';
    const widgetTitle = ((_b = props.config) === null || _b === void 0 ? void 0 : _b.widgetTitle) || 'Accesos a Internet móvil';
    const sourceText = ((_c = props.config) === null || _c === void 0 ? void 0 : _c.sourceText) || 'Registro Administrativo Reporte HECAA - MinTIC';
    const defaultSegmento = ((_d = props.config) === null || _d === void 0 ? void 0 : _d.defaultSegmento) || 'TODOS';
    const autoRefreshSec = ((_e = props.config) === null || _e === void 0 ? void 0 : _e.autoRefreshSec) || 120;
    const onSettingChange = (key, value) => {
        props.onSettingChange({
            id: props.id,
            config: props.config.set(key, value)
        });
    };
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: settingStyle, className: "widget-setting-ontic", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: "Fuente de Datos ONTIC \u2022 MinTIC", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "brand-pill", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "\uD83C\uDDE8\uD83C\uDDF4 MinTIC \u2022 PotencIA Digital" }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: "T\u00EDtulo del Indicador", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { size: "sm", value: widgetTitle, onChange: e => onSettingChange('widgetTitle', e.target.value) }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: "URL del FeatureServer (Capa 0)", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { size: "sm", value: serviceUrl, onChange: e => onSettingChange('serviceUrl', e.target.value) }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: "Fuente / Nota Legal", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.TextInput, { size: "sm", value: sourceText, onChange: e => onSettingChange('sourceText', e.target.value) }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: "Segmento por Defecto", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { size: "sm", value: defaultSegmento, onChange: e => onSettingChange('defaultSegmento', e.target.value), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: "TODOS", children: "Todos (Prepago + Pospago)" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: "PREPAGO", children: "Solo Prepago" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Option, { value: "POSPAGO", children: "Solo Pospago" })] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: "Auto-refresco (segundos)", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.NumericInput, { size: "sm", value: autoRefreshSec, min: 30, max: 3600, onChange: val => onSettingChange('autoRefreshSec', val || 120) }) })] }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Setting);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hY2Nlc29zLWludGVybmV0LW1vdmlsLW9udGljL2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEOzs7Ozs7Ozs7OztBQ0FBLHdFOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGlGOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5ELGVBQWU7QUFDNEI7QUFFcUM7QUFDZjtBQUdqRSxNQUFNLFlBQVksR0FBRyw4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FpQnZCO0FBRUQsTUFBTSxPQUFPLEdBQUcsQ0FBQyxLQUFzQyxFQUFFLEVBQUU7O0lBQ3pELE1BQU0sVUFBVSxHQUFHLFlBQUssQ0FBQyxNQUFNLDBDQUFFLFVBQVUsS0FBSSwwRUFBMEU7SUFDekgsTUFBTSxXQUFXLEdBQUcsWUFBSyxDQUFDLE1BQU0sMENBQUUsV0FBVyxLQUFJLDBCQUEwQjtJQUMzRSxNQUFNLFVBQVUsR0FBRyxZQUFLLENBQUMsTUFBTSwwQ0FBRSxVQUFVLEtBQUksZ0RBQWdEO0lBQy9GLE1BQU0sZUFBZSxHQUFHLFlBQUssQ0FBQyxNQUFNLDBDQUFFLGVBQWUsS0FBSSxPQUFPO0lBQ2hFLE1BQU0sY0FBYyxHQUFHLFlBQUssQ0FBQyxNQUFNLDBDQUFFLGNBQWMsS0FBSSxHQUFHO0lBRTFELE1BQU0sZUFBZSxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQVUsRUFBRSxFQUFFO1FBQ2xELEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDcEIsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ1osTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7U0FDckMsQ0FBQztJQUNKLENBQUM7SUFFRCxPQUFPLENBQ0wseUVBQUssR0FBRyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUMsc0JBQXNCLFlBQ3RELGlFQUFDLCtFQUFjLElBQUMsS0FBSyxFQUFDLHFDQUFnQyxhQUNwRCx5RUFBSyxTQUFTLEVBQUMsWUFBWSxZQUN6QixnSkFBMkMsR0FDdkMsRUFFTixnRUFBQywyRUFBVSxJQUFDLEtBQUssRUFBQywyQkFBc0IsWUFDdEMsZ0VBQUMsOENBQVMsSUFDUixJQUFJLEVBQUMsSUFBSSxFQUNULEtBQUssRUFBRSxXQUFXLEVBQ2xCLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FDN0QsR0FDUyxFQUViLGdFQUFDLDJFQUFVLElBQUMsS0FBSyxFQUFDLGdDQUFnQyxZQUNoRCxnRUFBQyw4Q0FBUyxJQUNSLElBQUksRUFBQyxJQUFJLEVBQ1QsS0FBSyxFQUFFLFVBQVUsRUFDakIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUM1RCxHQUNTLEVBRWIsZ0VBQUMsMkVBQVUsSUFBQyxLQUFLLEVBQUMscUJBQXFCLFlBQ3JDLGdFQUFDLDhDQUFTLElBQ1IsSUFBSSxFQUFDLElBQUksRUFDVCxLQUFLLEVBQUUsVUFBVSxFQUNqQixRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQzVELEdBQ1MsRUFFYixnRUFBQywyRUFBVSxJQUFDLEtBQUssRUFBQyxzQkFBc0IsWUFDdEMsaUVBQUMsMkNBQU0sSUFDTCxJQUFJLEVBQUMsSUFBSSxFQUNULEtBQUssRUFBRSxlQUFlLEVBQ3RCLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUVqRSxnRUFBQywyQ0FBTSxJQUFDLEtBQUssRUFBQyxPQUFPLDBDQUFtQyxFQUN4RCxnRUFBQywyQ0FBTSxJQUFDLEtBQUssRUFBQyxTQUFTLDZCQUFzQixFQUM3QyxnRUFBQywyQ0FBTSxJQUFDLEtBQUssRUFBQyxTQUFTLDZCQUFzQixJQUN0QyxHQUNFLEVBRWIsZ0VBQUMsMkVBQVUsSUFBQyxLQUFLLEVBQUMsMEJBQTBCLFlBQzFDLGdFQUFDLGlEQUFZLElBQ1gsSUFBSSxFQUFDLElBQUksRUFDVCxLQUFLLEVBQUUsY0FBYyxFQUNyQixHQUFHLEVBQUUsRUFBRSxFQUNQLEdBQUcsRUFBRSxJQUFJLEVBQ1QsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FDOUQsR0FDUyxJQUNFLEdBQ2IsQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZSxPQUFPO0FBQ2QsU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2Vtb3Rpb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hY2Nlc29zLWludGVybmV0LW1vdmlsLW9udGljL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Vtb3Rpb25fcmVhY3RfanN4X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwganN4LCBjc3MgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gJ2ppbXUtZm9yLWJ1aWxkZXInXG5pbXBvcnQgeyBTZXR0aW5nU2VjdGlvbiwgU2V0dGluZ1JvdyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xuaW1wb3J0IHsgVGV4dElucHV0LCBOdW1lcmljSW5wdXQsIFNlbGVjdCwgT3B0aW9uIH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5cbmNvbnN0IHNldHRpbmdTdHlsZSA9IGNzc2BcbiAgLnNldHRpbmctaW5uZXIge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC5icmFuZC1waWxsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNnB4O1xuICAgIGJhY2tncm91bmQ6ICMwMDQ4ODQxNTtcbiAgICBjb2xvcjogIzAwNDg4NDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG5gXG5cbmNvbnN0IFNldHRpbmcgPSAocHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4pID0+IHtcbiAgY29uc3Qgc2VydmljZVVybCA9IHByb3BzLmNvbmZpZz8uc2VydmljZVVybCB8fCAnaHR0cHM6Ly9hcmNnaXMuZXNyaS5jby9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy9Ib3N0ZWQvT250aWMvRmVhdHVyZVNlcnZlci8wJ1xuICBjb25zdCB3aWRnZXRUaXRsZSA9IHByb3BzLmNvbmZpZz8ud2lkZ2V0VGl0bGUgfHwgJ0FjY2Vzb3MgYSBJbnRlcm5ldCBtw7N2aWwnXG4gIGNvbnN0IHNvdXJjZVRleHQgPSBwcm9wcy5jb25maWc/LnNvdXJjZVRleHQgfHwgJ1JlZ2lzdHJvIEFkbWluaXN0cmF0aXZvIFJlcG9ydGUgSEVDQUEgLSBNaW5USUMnXG4gIGNvbnN0IGRlZmF1bHRTZWdtZW50byA9IHByb3BzLmNvbmZpZz8uZGVmYXVsdFNlZ21lbnRvIHx8ICdUT0RPUydcbiAgY29uc3QgYXV0b1JlZnJlc2hTZWMgPSBwcm9wcy5jb25maWc/LmF1dG9SZWZyZXNoU2VjIHx8IDEyMFxuXG4gIGNvbnN0IG9uU2V0dGluZ0NoYW5nZSA9IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4ge1xuICAgIHByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogcHJvcHMuaWQsXG4gICAgICBjb25maWc6IHByb3BzLmNvbmZpZy5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17c2V0dGluZ1N0eWxlfSBjbGFzc05hbWU9XCJ3aWRnZXQtc2V0dGluZy1vbnRpY1wiPlxuICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPVwiRnVlbnRlIGRlIERhdG9zIE9OVElDIOKAoiBNaW5USUNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZC1waWxsXCI+XG4gICAgICAgICAgPHNwYW4+8J+HqPCfh7QgTWluVElDIOKAoiBQb3RlbmNJQSBEaWdpdGFsPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIlTDrXR1bG8gZGVsIEluZGljYWRvclwiPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICB2YWx1ZT17d2lkZ2V0VGl0bGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvblNldHRpbmdDaGFuZ2UoJ3dpZGdldFRpdGxlJywgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cblxuICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIlVSTCBkZWwgRmVhdHVyZVNlcnZlciAoQ2FwYSAwKVwiPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICB2YWx1ZT17c2VydmljZVVybH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uU2V0dGluZ0NoYW5nZSgnc2VydmljZVVybCcsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1NldHRpbmdSb3c+XG5cbiAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9XCJGdWVudGUgLyBOb3RhIExlZ2FsXCI+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIHZhbHVlPXtzb3VyY2VUZXh0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25TZXR0aW5nQ2hhbmdlKCdzb3VyY2VUZXh0JywgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cblxuICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD1cIlNlZ21lbnRvIHBvciBEZWZlY3RvXCI+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIHZhbHVlPXtkZWZhdWx0U2VnbWVudG99XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvblNldHRpbmdDaGFuZ2UoJ2RlZmF1bHRTZWdtZW50bycsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiVE9ET1NcIj5Ub2RvcyAoUHJlcGFnbyArIFBvc3BhZ28pPC9PcHRpb24+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiUFJFUEFHT1wiPlNvbG8gUHJlcGFnbzwvT3B0aW9uPlxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlBPU1BBR09cIj5Tb2xvIFBvc3BhZ288L09wdGlvbj5cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPC9TZXR0aW5nUm93PlxuXG4gICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPVwiQXV0by1yZWZyZXNjbyAoc2VndW5kb3MpXCI+XG4gICAgICAgICAgPE51bWVyaWNJbnB1dFxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIHZhbHVlPXthdXRvUmVmcmVzaFNlY31cbiAgICAgICAgICAgIG1pbj17MzB9XG4gICAgICAgICAgICBtYXg9ezM2MDB9XG4gICAgICAgICAgICBvbkNoYW5nZT17dmFsID0+IG9uU2V0dGluZ0NoYW5nZSgnYXV0b1JlZnJlc2hTZWMnLCB2YWwgfHwgMTIwKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1NldHRpbmdSb3c+XG4gICAgICA8L1NldHRpbmdTZWN0aW9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdcbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9