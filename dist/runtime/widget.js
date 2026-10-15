System.register(["jimu-core/emotion","jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE__emotion_react_jsx_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
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
/*!*************************************************************************************!*\
  !*** ./your-extensions/widgets/accesos-internet-movil-ontic/src/runtime/widget.tsx ***!
  \*************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ "@emotion/react/jsx-runtime");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/** @jsx jsx */

const TECH_COLORS = {
    '2G': { fill: '#F9E6CF', border: '#e8cdb0', text: '#5c452e' },
    '3G': { fill: '#FAC67A', border: '#e6a953', text: '#4d3208' },
    '4G': { fill: '#DA498D', border: '#be3475', text: '#ffffff' },
    '5G': { fill: '#69247C', border: '#4f175f', text: '#ffffff' }
};
const LucideIcons = {
    Refresh: () => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M21 3v5h-5" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M8 16H3v5" })] })),
    Download: () => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", { points: "7 10 12 15 17 10" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: "12", x2: "12", y1: "15", y2: "3" })] })),
    Table: () => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M3 9h18" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M3 15h18" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M9 3v18" })] })),
    BarChart: () => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: "18", x2: "18", y1: "20", y2: "10" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: "12", x2: "12", y1: "20", y2: "4" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: "6", x2: "6", y1: "20", y2: "14" })] }))
};
const widgetStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.css) `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@700;800&display=swap');

  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1a2a3a;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  user-select: none;

  .ontic-container {
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    height: 100%;
    box-sizing: border-box;
  }

  .mintic-brand-banner {
    position: relative;
    padding-bottom: 12px;
    border-bottom: 1px solid #e5edf5;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .mintic-stripe {
    height: 4px;
    background: linear-gradient(90deg, #FCD116 0%, #FCD116 33.3%, #003893 33.3%, #003893 66.6%, #CE1126 66.6%, #CE1126 100%);
    border-radius: 2px;
    margin-bottom: 4px;
  }

  .header-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .ontic-badge {
    background: linear-gradient(135deg, #004884 0%, #69247C 100%);
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    padding: 6px 10px;
    border-radius: 8px;
    box-shadow: 0 3px 8px rgba(0, 72, 132, 0.25);
  }

  .title-group {
    display: flex;
    flex-direction: column;
  }

  .indicator-tag {
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #004884;
  }

  .indicator-title {
    font-size: 1.15rem;
    font-weight: 800;
    color: #0b1f38;
    line-height: 1.2;
    margin: 2px 0;
  }

  .indicator-sub {
    font-size: 0.72rem;
    color: #59718d;
    font-weight: 500;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .kpi-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  .kpi-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    transition: transform 0.15s ease, border-color 0.15s ease;
  }
  .kpi-card:hover {
    border-color: #004884;
    transform: translateY(-1px);
  }

  .kpi-stripe-5g { border-top: 3px solid #69247C; }
  .kpi-stripe-4g { border-top: 3px solid #DA498D; }
  .kpi-stripe-3g { border-top: 3px solid #FAC67A; }
  .kpi-stripe-total { border-top: 3px solid #004884; }

  .kpi-label {
    font-size: 0.65rem;
    color: #64748b;
    font-weight: 600;
    line-height: 1.2;
  }

  .kpi-value {
    font-size: 1.18rem;
    font-weight: 900;
    color: #0f172a;
    margin: 4px 0 2px 0;
    font-family: 'JetBrains Mono', Consolas, monospace;
  }

  .kpi-subtext {
    font-size: 0.64rem;
    color: #059669;
    font-weight: 700;
  }

  .filters-bar {
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }

  .filter-group {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .filter-label {
    font-size: 0.70rem;
    font-weight: 700;
    color: #334155;
  }

  .filter-select {
    font-size: 0.72rem;
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid #cbd5e1;
    background: #ffffff;
    color: #1e293b;
    outline: none;
    cursor: pointer;
    max-width: 200px;
  }

  .pills-group {
    display: flex;
    align-items: center;
    background: #ffffff;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    overflow: hidden;
  }

  .pill-btn {
    font-size: 0.68rem;
    font-weight: 600;
    padding: 4px 9px;
    border: none;
    background: transparent;
    color: #64748b;
    cursor: pointer;
    transition: all 0.15s ease;
  }
  .pill-btn.active {
    background: #004884;
    color: #ffffff;
    font-weight: 700;
  }

  .chart-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 14px 16px 8px 16px;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
  }

  .chart-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .chart-y-title {
    font-size: 0.70rem;
    font-weight: 700;
    color: #64748b;
  }

  .chart-view-toggle {
    display: flex;
    gap: 6px;
  }

  .view-icon-btn {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.68rem;
    font-weight: 600;
    padding: 3px 8px;
    border-radius: 5px;
    border: 1px solid #cbd5e1;
    background: #ffffff;
    color: #475569;
    cursor: pointer;
  }
  .view-icon-btn.active {
    background: #004884;
    border-color: #004884;
    color: #ffffff;
  }

  .svg-chart-container {
    width: 100%;
    min-height: 290px;
    position: relative;
  }

  .svg-canvas {
    width: 100%;
    height: 100%;
    min-height: 290px;
    overflow: visible;
  }

  .chart-legend {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    padding: 10px 0 4px 0;
    border-top: 1px solid #f1f5f9;
    margin-top: 4px;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    padding: 3px 8px;
    border-radius: 6px;
    transition: opacity 0.15s ease;
  }
  .legend-item.dimmed {
    opacity: 0.35;
  }

  .legend-color-box {
    width: 14px;
    height: 14px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.15);
  }

  .legend-label {
    font-size: 0.72rem;
    font-weight: 700;
    color: #334155;
  }

  .chart-tooltip {
    position: absolute;
    pointer-events: none;
    background: rgba(11, 31, 56, 0.95);
    backdrop-filter: blur(4px);
    color: #ffffff;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 0.72rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
    z-index: 50;
    min-width: 180px;
    transform: translate(-50%, -105%);
    transition: opacity 0.15s ease, transform 0.1s ease;
  }

  .tooltip-title {
    font-weight: 800;
    font-size: 0.78rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 4px;
    margin-bottom: 6px;
    color: #FCD116;
  }

  .tooltip-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 3px;
  }

  .tooltip-total-row {
    border-top: 1px dashed rgba(255, 255, 255, 0.2);
    margin-top: 4px;
    padding-top: 4px;
    font-weight: 800;
  }

  .data-table-container {
    width: 100%;
    overflow-x: auto;
    max-height: 290px;
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.72rem;
  }

  .data-table th {
    background: #f1f5f9;
    color: #334155;
    font-weight: 700;
    padding: 8px 10px;
    text-align: right;
    border-bottom: 2px solid #cbd5e1;
    position: sticky;
    top: 0;
  }
  .data-table th:first-child { text-align: left; }

  .data-table td {
    padding: 7px 10px;
    border-bottom: 1px solid #f1f5f9;
    text-align: right;
    font-family: 'JetBrains Mono', Consolas, monospace;
  }
  .data-table td:first-child {
    text-align: left;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
  }

  .footer-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 0.68rem;
    color: #64748b;
    padding-top: 4px;
  }

  .btn-sync {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.68rem;
    font-weight: 700;
    padding: 4px 9px;
    border-radius: 6px;
    border: 1px solid #cbd5e1;
    background: #ffffff;
    color: #004884;
    cursor: pointer;
  }
  .btn-sync:hover {
    background: #f1f5f9;
  }

  .spin-icon {
    animation: rotateSpin 1s linear infinite;
  }
  @keyframes rotateSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @media (max-width: 680px) {
    .kpi-row { grid-template-columns: repeat(2, 1fr); }
  }
`;
const Widget = (props) => {
    var _a, _b, _c, _d;
    const serviceUrl = ((_a = props.config) === null || _a === void 0 ? void 0 : _a.serviceUrl) || 'https://arcgis.esri.co/server/rest/services/Hosted/Ontic/FeatureServer/0';
    const widgetTitle = ((_b = props.config) === null || _b === void 0 ? void 0 : _b.widgetTitle) || 'Accesos a Internet móvil';
    const sourceText = ((_c = props.config) === null || _c === void 0 ? void 0 : _c.sourceText) || 'Registro Administrativo Reporte HECAA - MinTIC';
    const autoRefreshSec = ((_d = props.config) === null || _d === void 0 ? void 0 : _d.autoRefreshSec) || 120;
    const [rawRecords, setRawRecords] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState([]);
    const [loading, setLoading] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(true);
    const [refreshing, setRefreshing] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(false);
    const [lastUpdated, setLastUpdated] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('Cargando...');
    // Filtros
    const [selectedProveedor, setSelectedProveedor] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('TODOS');
    const [selectedSegmento, setSelectedSegmento] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('TODOS');
    const [selectedTerminal, setSelectedTerminal] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('TODOS');
    const [viewMode, setViewMode] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState('stacked');
    const [activeTechs, setActiveTechs] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState({
        '2G': true,
        '3G': true,
        '4G': true,
        '5G': true
    });
    // Tooltip
    const [tooltipData, setTooltipData] = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useState(null);
    // Cargar datos desde el FeatureServer oficial
    const fetchServiceData = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useCallback((...args_1) => __awaiter(void 0, [...args_1], void 0, function* (isManual = false) {
        if (isManual)
            setRefreshing(true);
        try {
            const url = `${serviceUrl}/query?where=1%3D1&outFields=*&returnGeometry=false&f=json`;
            const res = yield fetch(url, { cache: 'no-store' });
            if (res.ok) {
                const json = yield res.json();
                if (json && json.features && Array.isArray(json.features)) {
                    const items = json.features.map((f) => f.attributes);
                    setRawRecords(items);
                    const now = new Date();
                    setLastUpdated(now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
                }
            }
        }
        catch (err) {
            console.warn('[ONTIC Widget] Error al consultar datos:', err);
        }
        finally {
            setLoading(false);
            setRefreshing(false);
        }
    }), [serviceUrl]);
    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useEffect(() => {
        fetchServiceData();
        const timer = setInterval(() => {
            fetchServiceData();
        }, Math.max(30, autoRefreshSec) * 1000);
        return () => clearInterval(timer);
    }, [fetchServiceData, autoRefreshSec]);
    // Lista de Proveedores únicos para el filtro
    const uniqueProveedores = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        const set = new Set();
        rawRecords.forEach(r => {
            if (r.proveedor)
                set.add(r.proveedor.trim());
        });
        return Array.from(set).sort();
    }, [rawRecords]);
    // Filtrado y agregación por Periodo (anio-trimestre)
    const aggregatedData = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        const map = new Map();
        rawRecords.forEach(r => {
            var _a, _b, _c;
            if (selectedProveedor !== 'TODOS' && ((_a = r.proveedor) === null || _a === void 0 ? void 0 : _a.trim()) !== selectedProveedor)
                return;
            if (selectedSegmento !== 'TODOS' && ((_b = r.segmento) === null || _b === void 0 ? void 0 : _b.trim()) !== selectedSegmento)
                return;
            if (selectedTerminal !== 'TODOS' && ((_c = r.terminal) === null || _c === void 0 ? void 0 : _c.trim()) !== selectedTerminal)
                return;
            const key = `${r.anio}-${r.trimestre}`;
            if (!map.has(key)) {
                map.set(key, { anio: r.anio, trimestre: r.trimestre, t2g: 0, t3g: 0, t4g: 0, t5g: 0 });
            }
            const entry = map.get(key);
            const count = r.abonados || 0;
            const tech = (r.tecnologia || '').toUpperCase();
            if (tech === '2G')
                entry.t2g += count;
            else if (tech === '3G')
                entry.t3g += count;
            else if (tech === '4G')
                entry.t4g += count;
            else if (tech === '5G')
                entry.t5g += count;
        });
        const sortedKeys = Array.from(map.keys()).sort((a, b) => {
            const [yA, qA] = a.split('-').map(Number);
            const [yB, qB] = b.split('-').map(Number);
            if (yA !== yB)
                return yA - yB;
            return qA - qB;
        });
        return sortedKeys.map(key => {
            const e = map.get(key);
            const v2g = activeTechs['2G'] ? e.t2g / 1000000 : 0;
            const v3g = activeTechs['3G'] ? e.t3g / 1000000 : 0;
            const v4g = activeTechs['4G'] ? e.t4g / 1000000 : 0;
            const v5g = activeTechs['5G'] ? e.t5g / 1000000 : 0;
            const total = v2g + v3g + v4g + v5g;
            return {
                periodKey: key,
                anio: e.anio,
                trimestre: e.trimestre,
                t2g: v2g,
                t3g: v3g,
                t4g: v4g,
                t5g: v5g,
                total: total
            };
        });
    }, [rawRecords, selectedProveedor, selectedSegmento, selectedTerminal, activeTechs]);
    // KPIs del último periodo
    const latestKPI = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        if (aggregatedData.length === 0)
            return null;
        const latest = aggregatedData[aggregatedData.length - 1];
        const pct4g = latest.total > 0 ? (latest.t4g / latest.total) * 100 : 0;
        const pct5g = latest.total > 0 ? (latest.t5g / latest.total) * 100 : 0;
        return {
            period: latest.periodKey,
            total: latest.total,
            v5g: latest.t5g,
            pct5g: pct5g,
            v4g: latest.t4g,
            pct4g: pct4g,
            v3g: latest.t3g
        };
    }, [aggregatedData]);
    const chartWidth = 740;
    const chartHeight = 270;
    const margin = { top: 20, right: 20, bottom: 35, left: 45 };
    const plotWidth = chartWidth - margin.left - margin.right;
    const plotHeight = chartHeight - margin.top - margin.bottom;
    const maxTotal = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        let max = 0;
        aggregatedData.forEach(d => { if (d.total > max)
            max = d.total; });
        return max > 0 ? Math.ceil(max * 1.15 / 5) * 5 : 50;
    }, [aggregatedData]);
    const barWidth = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useMemo(() => {
        if (aggregatedData.length === 0)
            return 30;
        return Math.min(42, Math.max(18, (plotWidth / aggregatedData.length) * 0.65));
    }, [aggregatedData, plotWidth]);
    const toggleTech = (tech) => {
        setActiveTechs(prev => (Object.assign(Object.assign({}, prev), { [tech]: !prev[tech] })));
    };
    const exportToCSV = () => {
        if (aggregatedData.length === 0)
            return;
        let csv = 'Periodo,Anio,Trimestre,2G_Millones,3G_Millones,4G_Millones,5G_Millones,Total_Millones\n';
        aggregatedData.forEach(d => {
            csv += `${d.periodKey},${d.anio},${d.trimestre},${d.t2g.toFixed(2)},${d.t3g.toFixed(2)},${d.t4g.toFixed(2)},${d.t5g.toFixed(2)},${d.total.toFixed(2)}\n`;
        });
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `ONTIC_Accesos_Internet_Movil.csv`;
        link.click();
    };
    return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: widgetStyle, className: "jimu-widget", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "ontic-container", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "mintic-brand-banner", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mintic-stripe" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "header-main", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "header-left", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "ontic-badge", children: "ONTIC" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "title-group", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "indicator-tag", children: "Indicador Sectorial \u2022 Conectividad" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { className: "indicator-title", children: widgetTitle }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "indicator-sub", children: ["N\u00FAmero de accesos m\u00F3viles a Internet en millones por tipo de tecnolog\u00EDa \u2022 ", sourceText] })] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "header-right", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { className: "btn-sync", onClick: () => fetchServiceData(true), title: "Actualizar datos desde el servicio ArcGIS", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: refreshing ? 'spin-icon' : '', children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LucideIcons.Refresh, {}) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Actualizar" })] }) })] })] }), latestKPI && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "kpi-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "kpi-card kpi-stripe-total", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "kpi-label", children: ["Total Accesos (", latestKPI.period, ")"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "kpi-value", children: [latestKPI.total.toFixed(1), " M"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "kpi-subtext", children: "Millones de accesos m\u00F3viles" })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "kpi-card kpi-stripe-4g", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "kpi-label", children: "Tecnolog\u00EDa 4G LTE" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "kpi-value", children: [latestKPI.v4g.toFixed(1), " M"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "kpi-subtext", children: [latestKPI.pct4g.toFixed(1), "% del mercado"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "kpi-card kpi-stripe-5g", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "kpi-label", children: "Despliegue 5G" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "kpi-value", children: [latestKPI.v5g.toFixed(1), " M"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "kpi-subtext", children: [latestKPI.pct5g.toFixed(1), "% en expansi\u00F3n"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "kpi-card kpi-stripe-3g", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "kpi-label", children: "3G en Transici\u00F3n" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "kpi-value", children: [latestKPI.v3g.toFixed(1), " M"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "kpi-subtext", children: "Tendencia en descenso" })] })] })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "filters-bar", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "filter-group", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "filter-label", children: "Operador:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { className: "filter-select", value: selectedProveedor, onChange: e => setSelectedProveedor(e.target.value), children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", { value: "TODOS", children: ["Todos los Operadores (", uniqueProveedores.length, ")"] }), uniqueProveedores.map(p => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: p, children: p }, p)))] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "filter-group", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "filter-label", children: "Segmento:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "pills-group", children: ['TODOS', 'PREPAGO', 'POSPAGO'].map(s => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: `pill-btn ${selectedSegmento === s ? 'active' : ''}`, onClick: () => setSelectedSegmento(s), children: s === 'TODOS' ? 'Todos' : s }, s))) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "filter-group", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "filter-label", children: "Terminal:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "pills-group", children: ['TODOS', 'TELÉFONO MÓVIL', 'DATA CARD'].map(t => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: `pill-btn ${selectedTerminal === t ? 'active' : ''}`, onClick: () => setSelectedTerminal(t), children: t === 'TODOS' ? 'Todos' : t === 'TELÉFONO MÓVIL' ? 'Móvil' : 'Módem' }, t))) })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "filter-group", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "chart-view-toggle", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { className: `view-icon-btn ${viewMode === 'stacked' ? 'active' : ''}`, onClick: () => setViewMode('stacked'), title: "Vista Gr\u00E1fico de Barras", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LucideIcons.BarChart, {}), " Gr\u00E1fica"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { className: `view-icon-btn ${viewMode === 'table' ? 'active' : ''}`, onClick: () => setViewMode('table'), title: "Vista Tabla de Datos", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LucideIcons.Table, {}), " Tabla"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { className: "view-icon-btn", onClick: exportToCSV, title: "Descargar datos en CSV", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LucideIcons.Download, {}), " CSV"] })] }) })] }), viewMode === 'stacked' ? ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "chart-card", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "chart-header", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "chart-y-title", children: "Millones de accesos" }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "svg-chart-container", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { className: "svg-canvas", viewBox: `0 0 ${chartWidth} ${chartHeight}`, children: [[0, 0.25, 0.5, 0.75, 1].map((pct, i) => {
                                            const yVal = maxTotal * (1 - pct);
                                            const yPos = margin.top + plotHeight * pct;
                                            return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: margin.left, y1: yPos, x2: chartWidth - margin.right, y2: yPos, stroke: "#e2e8f0", strokeDasharray: pct === 1 ? 'none' : '3,3', strokeWidth: "1" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("text", { x: margin.left - 8, y: yPos + 4, textAnchor: "end", fontSize: "10", fill: "#64748b", fontFamily: "JetBrains Mono, monospace", children: [Math.round(yVal), " M"] })] }, i));
                                        }), aggregatedData.map((d, colIdx) => {
                                            const colX = margin.left + (colIdx + 0.5) * (plotWidth / (aggregatedData.length || 1));
                                            const x = colX - barWidth / 2;
                                            const h2g = (d.t2g / maxTotal) * plotHeight;
                                            const h3g = (d.t3g / maxTotal) * plotHeight;
                                            const h4g = (d.t4g / maxTotal) * plotHeight;
                                            const h5g = (d.t5g / maxTotal) * plotHeight;
                                            const baseLine = margin.top + plotHeight;
                                            const y2g = baseLine - h2g;
                                            const y3g = y2g - h3g;
                                            const y4g = y3g - h4g;
                                            const y5g = y4g - h5g;
                                            const isHovered = (tooltipData === null || tooltipData === void 0 ? void 0 : tooltipData.period.periodKey) === d.periodKey;
                                            return ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", { cursor: "pointer", onMouseEnter: () => {
                                                    setTooltipData({
                                                        x: colX,
                                                        y: y5g,
                                                        period: d
                                                    });
                                                }, onMouseLeave: () => setTooltipData(null), children: [isHovered && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", { x: colX - (plotWidth / (aggregatedData.length || 1)) / 2, y: margin.top, width: plotWidth / (aggregatedData.length || 1), height: plotHeight, fill: "#f1f5f9", opacity: "0.6" })), h2g > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", { x: x, y: y2g, width: barWidth, height: h2g, fill: TECH_COLORS['2G'].fill, stroke: TECH_COLORS['2G'].border, strokeWidth: "0.8" })), h3g > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", { x: x, y: y3g, width: barWidth, height: h3g, fill: TECH_COLORS['3G'].fill, stroke: TECH_COLORS['3G'].border, strokeWidth: "0.8" })), h4g > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", { x: x, y: y4g, width: barWidth, height: h4g, fill: TECH_COLORS['4G'].fill, stroke: TECH_COLORS['4G'].border, strokeWidth: "0.8" })), h5g > 0 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", { x: x, y: y5g, width: barWidth, height: h5g, rx: "4", ry: "4", fill: TECH_COLORS['5G'].fill, stroke: TECH_COLORS['5G'].border, strokeWidth: "0.8" })), h4g > 18 && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", { x: colX, y: y4g + h4g / 2 + 3, textAnchor: "middle", fontSize: "9", fontWeight: "700", fill: "#ffffff", children: d.t4g.toFixed(1) })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", { x: colX, y: Math.min(baseLine - 4, y5g - 4), textAnchor: "middle", fontSize: isHovered ? '10' : '8.5', fontWeight: isHovered ? '800' : '600', fill: isHovered ? '#004884' : '#64748b', children: d.total.toFixed(1) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", { x: colX, y: baseLine + 16, textAnchor: "middle", fontSize: "9.5", fontWeight: isHovered ? '800' : '500', fill: isHovered ? '#004884' : '#334155', children: d.periodKey })] }, d.periodKey));
                                        })] }), tooltipData && ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "chart-tooltip", style: {
                                        left: `${(tooltipData.x / chartWidth) * 100}%`,
                                        top: `${Math.max(10, (tooltipData.y / chartHeight) * 100)}%`
                                    }, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "tooltip-title", children: ["Trimestre: ", tooltipData.period.periodKey] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "tooltip-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { color: TECH_COLORS['5G'].fill }, children: "\u25CF 5G:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [tooltipData.period.t5g.toFixed(2), " M (", tooltipData.period.total > 0 ? ((tooltipData.period.t5g / tooltipData.period.total) * 100).toFixed(1) : 0, "%)"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "tooltip-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { color: TECH_COLORS['4G'].fill }, children: "\u25CF 4G:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [tooltipData.period.t4g.toFixed(2), " M (", tooltipData.period.total > 0 ? ((tooltipData.period.t4g / tooltipData.period.total) * 100).toFixed(1) : 0, "%)"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "tooltip-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { color: TECH_COLORS['3G'].fill }, children: "\u25CF 3G:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [tooltipData.period.t3g.toFixed(2), " M (", tooltipData.period.total > 0 ? ((tooltipData.period.t3g / tooltipData.period.total) * 100).toFixed(1) : 0, "%)"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "tooltip-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { color: TECH_COLORS['2G'].border }, children: "\u25CF 2G:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [tooltipData.period.t2g.toFixed(2), " M (", tooltipData.period.total > 0 ? ((tooltipData.period.t2g / tooltipData.period.total) * 100).toFixed(1) : 0, "%)"] })] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "tooltip-row tooltip-total-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Total Accesos:" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { style: { color: '#FCD116' }, children: [tooltipData.period.total.toFixed(2), " Millones"] })] })] }))] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "chart-legend", children: ['2G', '3G', '4G', '5G'].map(tech => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: `legend-item ${!activeTechs[tech] ? 'dimmed' : ''}`, onClick: () => toggleTech(tech), title: `Clic para ${activeTechs[tech] ? 'ocultar' : 'mostrar'} ${tech}`, children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "legend-color-box", style: { background: TECH_COLORS[tech].fill, borderColor: TECH_COLORS[tech].border } }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "legend-label", children: tech })] }, tech))) })] })) : ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "chart-card", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "data-table-container", children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: "data-table", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: "Periodo" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: "2G (Millones)" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: "3G (Millones)" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: "4G (Millones)" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: "5G (Millones)" }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: "Total (Millones)" })] }) }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: aggregatedData.map(d => ((0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { children: [d.periodKey, " (", d.anio, " - T", d.trimestre, ")"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { style: { color: TECH_COLORS['2G'].text }, children: [d.t2g.toFixed(2), " M"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { style: { color: TECH_COLORS['3G'].text }, children: [d.t3g.toFixed(2), " M"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { style: { color: TECH_COLORS['4G'].text, fontWeight: 700 }, children: [d.t4g.toFixed(2), " M"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { style: { color: TECH_COLORS['5G'].fill, fontWeight: 700 }, children: [d.t5g.toFixed(2), " M"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { style: { fontWeight: 800, color: '#004884' }, children: [d.total.toFixed(2), " M"] })] }, d.periodKey))) })] }) }) })), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "footer-row", children: [(0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: ["Fuente: ", sourceText, " \u2022 Servicio Esri Hosted FeatureServer"] }), (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: ["Sincronizado: ", lastUpdated, " (", rawRecords.length, " registros cargados)"] })] })] }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hY2Nlc29zLWludGVybmV0LW1vdmlsLW9udGljL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLDJCOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkQsZUFBZTtBQUNpRDtBQXlCaEUsTUFBTSxXQUFXLEdBQW1FO0lBQ2xGLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQzdELElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQzdELElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQzdELElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0NBQzlEO0FBRUQsTUFBTSxXQUFXLEdBQUc7SUFDbEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQ2IsMEVBQUssS0FBSyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsY0FBYyxFQUFDLFdBQVcsRUFBQyxHQUFHLEVBQUMsYUFBYSxFQUFDLE9BQU8sRUFBQyxjQUFjLEVBQUMsT0FBTyxhQUM1SSwwRUFBTSxDQUFDLEVBQUMsb0RBQW9ELEdBQUUsNEVBQU0sQ0FBQyxFQUFDLFlBQVksR0FBRSw0RUFBTSxDQUFDLEVBQUMscURBQXFELEdBQUUsNEVBQU0sQ0FBQyxFQUFDLFdBQVcsR0FBRSxJQUNwSyxDQUNQO0lBQ0QsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQ2QsMEVBQUssS0FBSyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsY0FBYyxFQUFDLFdBQVcsRUFBQyxHQUFHLEVBQUMsYUFBYSxFQUFDLE9BQU8sRUFBQyxjQUFjLEVBQUMsT0FBTyxhQUM1SSwwRUFBTSxDQUFDLEVBQUMsMkNBQTJDLEdBQUUsZ0ZBQVUsTUFBTSxFQUFDLGtCQUFrQixHQUFFLDRFQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxHQUFHLEdBQUUsSUFDNUgsQ0FDUDtJQUNELEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUNYLDBFQUFLLEtBQUssRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLGNBQWMsRUFBQyxXQUFXLEVBQUMsR0FBRyxFQUFDLGFBQWEsRUFBQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE9BQU8sYUFDNUksMEVBQU0sS0FBSyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxHQUFFLDRFQUFNLENBQUMsRUFBQyxTQUFTLEdBQUUsNEVBQU0sQ0FBQyxFQUFDLFVBQVUsR0FBRSw0RUFBTSxDQUFDLEVBQUMsU0FBUyxHQUFFLElBQ3ZHLENBQ1A7SUFDRCxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FDZCwwRUFBSyxLQUFLLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLEdBQUcsRUFBQyxhQUFhLEVBQUMsT0FBTyxFQUFDLGNBQWMsRUFBQyxPQUFPLGFBQzVJLDBFQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxJQUFJLEdBQUUsNEVBQU0sRUFBRSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEdBQUcsR0FBRSw0RUFBTSxFQUFFLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsSUFBSSxHQUFFLElBQzlHLENBQ1A7Q0FDRjtBQUVELE1BQU0sV0FBVyxHQUFHLDhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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SUFBSSxDQUFDLENBQUMsSUFBSSxFQUM1QixNQUFNLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFDaEMsV0FBVyxFQUFDLEtBQUssR0FDakIsQ0FDSCxFQUVBLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FDViwwRUFDRSxDQUFDLEVBQUUsQ0FBQyxFQUNKLENBQUMsRUFBRSxHQUFHLEVBQ04sS0FBSyxFQUFFLFFBQVEsRUFDZixNQUFNLEVBQUUsR0FBRyxFQUNYLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUM1QixNQUFNLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFDaEMsV0FBVyxFQUFDLEtBQUssR0FDakIsQ0FDSCxFQUVBLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FDViwwRUFDRSxDQUFDLEVBQUUsQ0FBQyxFQUNKLENBQUMsRUFBRSxHQUFHLEVBQ04sS0FBSyxFQUFFLFFBQVEsRUFDZixNQUFNLEVBQUUsR0FBRyxFQUNYLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUM1QixNQUFNLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFDaEMsV0FBVyxFQUFDLEtBQUssR0FDakIsQ0FDSCxFQUVBLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FDViwwRUFDRSxDQUFDLEVBQUUsQ0FBQyxFQUNKLENBQUMsRUFBRSxHQUFHLEVBQ04sS0FBSyxFQUFFLFFBQVEsRUFDZixNQUFNLEVBQUUsR0FBRyxFQUNYLEVBQUUsRUFBQyxHQUFHLEVBQ04sRUFBRSxFQUFDLEdBQUcsRUFDTixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFDNUIsTUFBTSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQ2hDLFdBQVcsRUFBQyxLQUFLLEdBQ2pCLENBQ0gsRUFFQSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQ1gsMEVBQ0UsQ0FBQyxFQUFFLElBQUksRUFDUCxDQUFD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O0FBRUQsaUVBQWUsTUFBTTtBQUNiLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9lbW90aW9uXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hY2Nlc29zLWludGVybmV0LW1vdmlsLW9udGljL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZW1vdGlvbl9yZWFjdF9qc3hfcnVudGltZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcywganN4LCBjc3MgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5pbnRlcmZhY2UgRmVhdHVyZUF0dHIge1xuICBvYmplY3RpZDogbnVtYmVyXG4gIGFuaW86IG51bWJlclxuICB0cmltZXN0cmU6IG51bWJlclxuICBwcm92ZWVkb3I6IHN0cmluZ1xuICBzZWdtZW50bzogc3RyaW5nXG4gIHRlcm1pbmFsOiBzdHJpbmdcbiAgdGVjbm9sb2dpYTogc3RyaW5nXG4gIGFib25hZG9zOiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIFBlcmlvZEFnZyB7XG4gIHBlcmlvZEtleTogc3RyaW5nXG4gIGFuaW86IG51bWJlclxuICB0cmltZXN0cmU6IG51bWJlclxuICB0Mmc6IG51bWJlclxuICB0M2c6IG51bWJlclxuICB0NGc6IG51bWJlclxuICB0NWc6IG51bWJlclxuICB0b3RhbDogbnVtYmVyXG59XG5cbmNvbnN0IFRFQ0hfQ09MT1JTOiBSZWNvcmQ8c3RyaW5nLCB7IGZpbGw6IHN0cmluZzsgYm9yZGVyOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9PiA9IHtcbiAgJzJHJzogeyBmaWxsOiAnI0Y5RTZDRicsIGJvcmRlcjogJyNlOGNkYjAnLCB0ZXh0OiAnIzVjNDUyZScgfSxcbiAgJzNHJzogeyBmaWxsOiAnI0ZBQzY3QScsIGJvcmRlcjogJyNlNmE5NTMnLCB0ZXh0OiAnIzRkMzIwOCcgfSxcbiAgJzRHJzogeyBmaWxsOiAnI0RBNDk4RCcsIGJvcmRlcjogJyNiZTM0NzUnLCB0ZXh0OiAnI2ZmZmZmZicgfSxcbiAgJzVHJzogeyBmaWxsOiAnIzY5MjQ3QycsIGJvcmRlcjogJyM0ZjE3NWYnLCB0ZXh0OiAnI2ZmZmZmZicgfVxufVxuXG5jb25zdCBMdWNpZGVJY29ucyA9IHtcbiAgUmVmcmVzaDogKCkgPT4gKFxuICAgIDxzdmcgd2lkdGg9XCIxM1wiIGhlaWdodD1cIjEzXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPlxuICAgICAgPHBhdGggZD1cIk0zIDEyYTkgOSAwIDAgMSA5LTkgOS43NSA5Ljc1IDAgMCAxIDYuNzQgMi43NEwyMSA4XCIvPjxwYXRoIGQ9XCJNMjEgM3Y1aC01XCIvPjxwYXRoIGQ9XCJNMjEgMTJhOSA5IDAgMCAxLTkgOSA5Ljc1IDkuNzUgMCAwIDEtNi43NC0yLjc0TDMgMTZcIi8+PHBhdGggZD1cIk04IDE2SDN2NVwiLz5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgRG93bmxvYWQ6ICgpID0+IChcbiAgICA8c3ZnIHdpZHRoPVwiMTNcIiBoZWlnaHQ9XCIxM1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgIDxwYXRoIGQ9XCJNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNFwiLz48cG9seWxpbmUgcG9pbnRzPVwiNyAxMCAxMiAxNSAxNyAxMFwiLz48bGluZSB4MT1cIjEyXCIgeDI9XCIxMlwiIHkxPVwiMTVcIiB5Mj1cIjNcIi8+XG4gICAgPC9zdmc+XG4gICksXG4gIFRhYmxlOiAoKSA9PiAoXG4gICAgPHN2ZyB3aWR0aD1cIjEzXCIgaGVpZ2h0PVwiMTNcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+XG4gICAgICA8cmVjdCB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB4PVwiM1wiIHk9XCIzXCIgcng9XCIyXCIvPjxwYXRoIGQ9XCJNMyA5aDE4XCIvPjxwYXRoIGQ9XCJNMyAxNWgxOFwiLz48cGF0aCBkPVwiTTkgM3YxOFwiLz5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgQmFyQ2hhcnQ6ICgpID0+IChcbiAgICA8c3ZnIHdpZHRoPVwiMTNcIiBoZWlnaHQ9XCIxM1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgIDxsaW5lIHgxPVwiMThcIiB4Mj1cIjE4XCIgeTE9XCIyMFwiIHkyPVwiMTBcIi8+PGxpbmUgeDE9XCIxMlwiIHgyPVwiMTJcIiB5MT1cIjIwXCIgeTI9XCI0XCIvPjxsaW5lIHgxPVwiNlwiIHgyPVwiNlwiIHkxPVwiMjBcIiB5Mj1cIjE0XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmNvbnN0IHdpZGdldFN0eWxlID0gY3NzYFxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmZhbWlseT1KZXRCcmFpbnMrTW9ubzp3Z2h0QDcwMDs4MDAmZGlzcGxheT1zd2FwJyk7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzFhMmEzYTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgLm9udGljLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE0cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAubWludGljLWJyYW5kLWJhbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlZGY1O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbiAgfVxuXG4gIC5taW50aWMtc3RyaXBlIHtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGQ0QxMTYgMCUsICNGQ0QxMTYgMzMuMyUsICMwMDM4OTMgMzMuMyUsICMwMDM4OTMgNjYuNiUsICNDRTExMjYgNjYuNiUsICNDRTExMjYgMTAwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgfVxuXG4gIC5oZWFkZXItbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxMHB4O1xuICB9XG5cbiAgLmhlYWRlci1sZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG5cbiAgLm9udGljLWJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA0ODg0IDAlLCAjNjkyNDdDIDEwMCUpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDhweCByZ2JhKDAsIDcyLCAxMzIsIDAuMjUpO1xuICB9XG5cbiAgLnRpdGxlLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuaW5kaWNhdG9yLXRhZyB7XG4gICAgZm9udC1zaXplOiAwLjY1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjMDA0ODg0O1xuICB9XG5cbiAgLmluZGljYXRvci10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6ICMwYjFmMzg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBtYXJnaW46IDJweCAwO1xuICB9XG5cbiAgLmluZGljYXRvci1zdWIge1xuICAgIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgICBjb2xvcjogIzU5NzE4ZDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgLmhlYWRlci1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICB9XG5cbiAgLmtwaS1yb3cge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBnYXA6IDEwcHg7XG4gIH1cblxuICAua3BpLWNhcmQge1xuICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xuICB9XG4gIC5rcGktY2FyZDpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA0ODg0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgfVxuXG4gIC5rcGktc3RyaXBlLTVnIHsgYm9yZGVyLXRvcDogM3B4IHNvbGlkICM2OTI0N0M7IH1cbiAgLmtwaS1zdHJpcGUtNGcgeyBib3JkZXItdG9wOiAzcHggc29saWQgI0RBNDk4RDsgfVxuICAua3BpLXN0cmlwZS0zZyB7IGJvcmRlci10b3A6IDNweCBzb2xpZCAjRkFDNjdBOyB9XG4gIC5rcGktc3RyaXBlLXRvdGFsIHsgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMwMDQ4ODQ7IH1cblxuICAua3BpLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuNjVyZW07XG4gICAgY29sb3I6ICM2NDc0OGI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICB9XG5cbiAgLmtwaS12YWx1ZSB7XG4gICAgZm9udC1zaXplOiAxLjE4cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6ICMwZjE3MmE7XG4gICAgbWFyZ2luOiA0cHggMCAycHggMDtcbiAgICBmb250LWZhbWlseTogJ0pldEJyYWlucyBNb25vJywgQ29uc29sYXMsIG1vbm9zcGFjZTtcbiAgfVxuXG4gIC5rcGktc3VidGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjY0cmVtO1xuICAgIGNvbG9yOiAjMDU5NjY5O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cblxuICAuZmlsdGVycy1iYXIge1xuICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMTBweDtcbiAgfVxuXG4gIC5maWx0ZXItZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAuZmlsdGVyLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuNzByZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzMzNDE1NTtcbiAgfVxuXG4gIC5maWx0ZXItc2VsZWN0IHtcbiAgICBmb250LXNpemU6IDAuNzJyZW07XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjMWUyOTNiO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cblxuICAucGlsbHMtZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAucGlsbC1idG4ge1xuICAgIGZvbnQtc2l6ZTogMC42OHJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDRweCA5cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjNjQ3NDhiO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgfVxuICAucGlsbC1idG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA0ODg0O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cblxuICAuY2hhcnQtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMTRweCAxNnB4IDhweCAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICB9XG5cbiAgLmNoYXJ0LWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cblxuICAuY2hhcnQteS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjcwcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICM2NDc0OGI7XG4gIH1cblxuICAuY2hhcnQtdmlldy10b2dnbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA2cHg7XG4gIH1cblxuICAudmlldy1pY29uLWJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbiAgICBmb250LXNpemU6IDAuNjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgY29sb3I6ICM0NzU1Njk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC52aWV3LWljb24tYnRuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogIzAwNDg4NDtcbiAgICBib3JkZXItY29sb3I6ICMwMDQ4ODQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAuc3ZnLWNoYXJ0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMjkwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnN2Zy1jYW52YXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAyOTBweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuXG4gIC5jaGFydC1sZWdlbmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiAxNnB4O1xuICAgIHBhZGRpbmc6IDEwcHggMCA0cHggMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjVmOTtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gIH1cblxuICAubGVnZW5kLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogM3B4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBlYXNlO1xuICB9XG4gIC5sZWdlbmQtaXRlbS5kaW1tZWQge1xuICAgIG9wYWNpdHk6IDAuMzU7XG4gIH1cblxuICAubGVnZW5kLWNvbG9yLWJveCB7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB9XG5cbiAgLmxlZ2VuZC1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAwLjcycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMzMzQxNTU7XG4gIH1cblxuICAuY2hhcnQtdG9vbHRpcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTEsIDMxLCA1NiwgMC45NSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgICBmb250LXNpemU6IDAuNzJyZW07XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICB6LWluZGV4OiA1MDtcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMDUlKTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2UsIHRyYW5zZm9ybSAwLjFzIGVhc2U7XG4gIH1cblxuICAudG9vbHRpcC10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDAuNzhyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICBjb2xvcjogI0ZDRDExNjtcbiAgfVxuXG4gIC50b29sdGlwLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICB9XG5cbiAgLnRvb2x0aXAtdG90YWwtcm93IHtcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG5cbiAgLmRhdGEtdGFibGUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDI5MHB4O1xuICB9XG5cbiAgLmRhdGEtdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgZm9udC1zaXplOiAwLjcycmVtO1xuICB9XG5cbiAgLmRhdGEtdGFibGUgdGgge1xuICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gICAgY29sb3I6ICMzMzQxNTU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NiZDVlMTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgfVxuICAuZGF0YS10YWJsZSB0aDpmaXJzdC1jaGlsZCB7IHRleHQtYWxpZ246IGxlZnQ7IH1cblxuICAuZGF0YS10YWJsZSB0ZCB7XG4gICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWY1Zjk7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1mYW1pbHk6ICdKZXRCcmFpbnMgTW9ubycsIENvbnNvbGFzLCBtb25vc3BhY2U7XG4gIH1cbiAgLmRhdGEtdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuXG4gIC5mb290ZXItcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDhweDtcbiAgICBmb250LXNpemU6IDAuNjhyZW07XG4gICAgY29sb3I6ICM2NDc0OGI7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgfVxuXG4gIC5idG4tc3luYyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBmb250LXNpemU6IDAuNjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nOiA0cHggOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgY29sb3I6ICMwMDQ4ODQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5idG4tc3luYzpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgfVxuXG4gIC5zcGluLWljb24ge1xuICAgIGFuaW1hdGlvbjogcm90YXRlU3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgQGtleWZyYW1lcyByb3RhdGVTcGluIHtcbiAgICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2ODBweCkge1xuICAgIC5rcGktcm93IHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTsgfVxuICB9XG5gXG5jb25zdCBXaWRnZXQgPSAocHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPikgPT4ge1xuICBjb25zdCBzZXJ2aWNlVXJsID0gcHJvcHMuY29uZmlnPy5zZXJ2aWNlVXJsIHx8ICdodHRwczovL2FyY2dpcy5lc3JpLmNvL3NlcnZlci9yZXN0L3NlcnZpY2VzL0hvc3RlZC9PbnRpYy9GZWF0dXJlU2VydmVyLzAnXG4gIGNvbnN0IHdpZGdldFRpdGxlID0gcHJvcHMuY29uZmlnPy53aWRnZXRUaXRsZSB8fCAnQWNjZXNvcyBhIEludGVybmV0IG3Ds3ZpbCdcbiAgY29uc3Qgc291cmNlVGV4dCA9IHByb3BzLmNvbmZpZz8uc291cmNlVGV4dCB8fCAnUmVnaXN0cm8gQWRtaW5pc3RyYXRpdm8gUmVwb3J0ZSBIRUNBQSAtIE1pblRJQydcbiAgY29uc3QgYXV0b1JlZnJlc2hTZWMgPSBwcm9wcy5jb25maWc/LmF1dG9SZWZyZXNoU2VjIHx8IDEyMFxuXG4gIGNvbnN0IFtyYXdSZWNvcmRzLCBzZXRSYXdSZWNvcmRzXSA9IFJlYWN0LnVzZVN0YXRlPEZlYXR1cmVBdHRyW10+KFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPih0cnVlKVxuICBjb25zdCBbcmVmcmVzaGluZywgc2V0UmVmcmVzaGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgY29uc3QgW2xhc3RVcGRhdGVkLCBzZXRMYXN0VXBkYXRlZF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCdDYXJnYW5kby4uLicpXG4gIFxuICAvLyBGaWx0cm9zXG4gIGNvbnN0IFtzZWxlY3RlZFByb3ZlZWRvciwgc2V0U2VsZWN0ZWRQcm92ZWVkb3JdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignVE9ET1MnKVxuICBjb25zdCBbc2VsZWN0ZWRTZWdtZW50bywgc2V0U2VsZWN0ZWRTZWdtZW50b10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCdUT0RPUycpXG4gIGNvbnN0IFtzZWxlY3RlZFRlcm1pbmFsLCBzZXRTZWxlY3RlZFRlcm1pbmFsXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJ1RPRE9TJylcbiAgY29uc3QgW3ZpZXdNb2RlLCBzZXRWaWV3TW9kZV0gPSBSZWFjdC51c2VTdGF0ZTwnc3RhY2tlZCcgfCAndGFibGUnPignc3RhY2tlZCcpXG4gIGNvbnN0IFthY3RpdmVUZWNocywgc2V0QWN0aXZlVGVjaHNdID0gUmVhY3QudXNlU3RhdGU8UmVjb3JkPHN0cmluZywgYm9vbGVhbj4+KHtcbiAgICAnMkcnOiB0cnVlLFxuICAgICczRyc6IHRydWUsXG4gICAgJzRHJzogdHJ1ZSxcbiAgICAnNUcnOiB0cnVlXG4gIH0pXG5cbiAgLy8gVG9vbHRpcFxuICBjb25zdCBbdG9vbHRpcERhdGEsIHNldFRvb2x0aXBEYXRhXSA9IFJlYWN0LnVzZVN0YXRlPHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHBlcmlvZDogUGVyaW9kQWdnIH0gfCBudWxsPihudWxsKVxuXG4gIC8vIENhcmdhciBkYXRvcyBkZXNkZSBlbCBGZWF0dXJlU2VydmVyIG9maWNpYWxcbiAgY29uc3QgZmV0Y2hTZXJ2aWNlRGF0YSA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jIChpc01hbnVhbDogYm9vbGVhbiA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKGlzTWFudWFsKSBzZXRSZWZyZXNoaW5nKHRydWUpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVybCA9IGAke3NlcnZpY2VVcmx9L3F1ZXJ5P3doZXJlPTElM0QxJm91dEZpZWxkcz0qJnJldHVybkdlb21ldHJ5PWZhbHNlJmY9anNvbmBcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwgeyBjYWNoZTogJ25vLXN0b3JlJyB9KVxuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgICBpZiAoanNvbiAmJiBqc29uLmZlYXR1cmVzICYmIEFycmF5LmlzQXJyYXkoanNvbi5mZWF0dXJlcykpIHtcbiAgICAgICAgICBjb25zdCBpdGVtczogRmVhdHVyZUF0dHJbXSA9IGpzb24uZmVhdHVyZXMubWFwKChmOiBhbnkpID0+IGYuYXR0cmlidXRlcylcbiAgICAgICAgICBzZXRSYXdSZWNvcmRzKGl0ZW1zKVxuICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcbiAgICAgICAgICBzZXRMYXN0VXBkYXRlZChub3cudG9Mb2NhbGVUaW1lU3RyaW5nKCdlcy1DTycsIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0Jywgc2Vjb25kOiAnMi1kaWdpdCcgfSkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUud2FybignW09OVElDIFdpZGdldF0gRXJyb3IgYWwgY29uc3VsdGFyIGRhdG9zOicsIGVycilcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIHNldFJlZnJlc2hpbmcoZmFsc2UpXG4gICAgfVxuICB9LCBbc2VydmljZVVybF0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFNlcnZpY2VEYXRhKClcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGZldGNoU2VydmljZURhdGEoKVxuICAgIH0sIE1hdGgubWF4KDMwLCBhdXRvUmVmcmVzaFNlYykgKiAxMDAwKVxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyKVxuICB9LCBbZmV0Y2hTZXJ2aWNlRGF0YSwgYXV0b1JlZnJlc2hTZWNdKVxuXG4gIC8vIExpc3RhIGRlIFByb3ZlZWRvcmVzIMO6bmljb3MgcGFyYSBlbCBmaWx0cm9cbiAgY29uc3QgdW5pcXVlUHJvdmVlZG9yZXMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBzZXQgPSBuZXcgU2V0PHN0cmluZz4oKVxuICAgIHJhd1JlY29yZHMuZm9yRWFjaChyID0+IHtcbiAgICAgIGlmIChyLnByb3ZlZWRvcikgc2V0LmFkZChyLnByb3ZlZWRvci50cmltKCkpXG4gICAgfSlcbiAgICByZXR1cm4gQXJyYXkuZnJvbShzZXQpLnNvcnQoKVxuICB9LCBbcmF3UmVjb3Jkc10pXG5cbiAgLy8gRmlsdHJhZG8geSBhZ3JlZ2FjacOzbiBwb3IgUGVyaW9kbyAoYW5pby10cmltZXN0cmUpXG4gIGNvbnN0IGFnZ3JlZ2F0ZWREYXRhID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgbWFwID0gbmV3IE1hcDxzdHJpbmcsIHsgYW5pbzogbnVtYmVyOyB0cmltZXN0cmU6IG51bWJlcjsgdDJnOiBudW1iZXI7IHQzZzogbnVtYmVyOyB0NGc6IG51bWJlcjsgdDVnOiBudW1iZXIgfT4oKVxuXG4gICAgcmF3UmVjb3Jkcy5mb3JFYWNoKHIgPT4ge1xuICAgICAgaWYgKHNlbGVjdGVkUHJvdmVlZG9yICE9PSAnVE9ET1MnICYmIHIucHJvdmVlZG9yPy50cmltKCkgIT09IHNlbGVjdGVkUHJvdmVlZG9yKSByZXR1cm5cbiAgICAgIGlmIChzZWxlY3RlZFNlZ21lbnRvICE9PSAnVE9ET1MnICYmIHIuc2VnbWVudG8/LnRyaW0oKSAhPT0gc2VsZWN0ZWRTZWdtZW50bykgcmV0dXJuXG4gICAgICBpZiAoc2VsZWN0ZWRUZXJtaW5hbCAhPT0gJ1RPRE9TJyAmJiByLnRlcm1pbmFsPy50cmltKCkgIT09IHNlbGVjdGVkVGVybWluYWwpIHJldHVyblxuXG4gICAgICBjb25zdCBrZXkgPSBgJHtyLmFuaW99LSR7ci50cmltZXN0cmV9YFxuICAgICAgaWYgKCFtYXAuaGFzKGtleSkpIHtcbiAgICAgICAgbWFwLnNldChrZXksIHsgYW5pbzogci5hbmlvLCB0cmltZXN0cmU6IHIudHJpbWVzdHJlLCB0Mmc6IDAsIHQzZzogMCwgdDRnOiAwLCB0NWc6IDAgfSlcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVudHJ5ID0gbWFwLmdldChrZXkpIVxuICAgICAgY29uc3QgY291bnQgPSByLmFib25hZG9zIHx8IDBcbiAgICAgIGNvbnN0IHRlY2ggPSAoci50ZWNub2xvZ2lhIHx8ICcnKS50b1VwcGVyQ2FzZSgpXG5cbiAgICAgIGlmICh0ZWNoID09PSAnMkcnKSBlbnRyeS50MmcgKz0gY291bnRcbiAgICAgIGVsc2UgaWYgKHRlY2ggPT09ICczRycpIGVudHJ5LnQzZyArPSBjb3VudFxuICAgICAgZWxzZSBpZiAodGVjaCA9PT0gJzRHJykgZW50cnkudDRnICs9IGNvdW50XG4gICAgICBlbHNlIGlmICh0ZWNoID09PSAnNUcnKSBlbnRyeS50NWcgKz0gY291bnRcbiAgICB9KVxuXG4gICAgY29uc3Qgc29ydGVkS2V5cyA9IEFycmF5LmZyb20obWFwLmtleXMoKSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgW3lBLCBxQV0gPSBhLnNwbGl0KCctJykubWFwKE51bWJlcilcbiAgICAgIGNvbnN0IFt5QiwgcUJdID0gYi5zcGxpdCgnLScpLm1hcChOdW1iZXIpXG4gICAgICBpZiAoeUEgIT09IHlCKSByZXR1cm4geUEgLSB5QlxuICAgICAgcmV0dXJuIHFBIC0gcUJcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNvcnRlZEtleXMubWFwKGtleSA9PiB7XG4gICAgICBjb25zdCBlID0gbWFwLmdldChrZXkpIVxuICAgICAgY29uc3QgdjJnID0gYWN0aXZlVGVjaHNbJzJHJ10gPyBlLnQyZyAvIDEwMDAwMDAgOiAwXG4gICAgICBjb25zdCB2M2cgPSBhY3RpdmVUZWNoc1snM0cnXSA/IGUudDNnIC8gMTAwMDAwMCA6IDBcbiAgICAgIGNvbnN0IHY0ZyA9IGFjdGl2ZVRlY2hzWyc0RyddID8gZS50NGcgLyAxMDAwMDAwIDogMFxuICAgICAgY29uc3QgdjVnID0gYWN0aXZlVGVjaHNbJzVHJ10gPyBlLnQ1ZyAvIDEwMDAwMDAgOiAwXG4gICAgICBjb25zdCB0b3RhbCA9IHYyZyArIHYzZyArIHY0ZyArIHY1Z1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwZXJpb2RLZXk6IGtleSxcbiAgICAgICAgYW5pbzogZS5hbmlvLFxuICAgICAgICB0cmltZXN0cmU6IGUudHJpbWVzdHJlLFxuICAgICAgICB0Mmc6IHYyZyxcbiAgICAgICAgdDNnOiB2M2csXG4gICAgICAgIHQ0ZzogdjRnLFxuICAgICAgICB0NWc6IHY1ZyxcbiAgICAgICAgdG90YWw6IHRvdGFsXG4gICAgICB9IGFzIFBlcmlvZEFnZ1xuICAgIH0pXG4gIH0sIFtyYXdSZWNvcmRzLCBzZWxlY3RlZFByb3ZlZWRvciwgc2VsZWN0ZWRTZWdtZW50bywgc2VsZWN0ZWRUZXJtaW5hbCwgYWN0aXZlVGVjaHNdKVxuXG4gIC8vIEtQSXMgZGVsIMO6bHRpbW8gcGVyaW9kb1xuICBjb25zdCBsYXRlc3RLUEkgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoYWdncmVnYXRlZERhdGEubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IGxhdGVzdCA9IGFnZ3JlZ2F0ZWREYXRhW2FnZ3JlZ2F0ZWREYXRhLmxlbmd0aCAtIDFdXG4gICAgY29uc3QgcGN0NGcgPSBsYXRlc3QudG90YWwgPiAwID8gKGxhdGVzdC50NGcgLyBsYXRlc3QudG90YWwpICogMTAwIDogMFxuICAgIGNvbnN0IHBjdDVnID0gbGF0ZXN0LnRvdGFsID4gMCA/IChsYXRlc3QudDVnIC8gbGF0ZXN0LnRvdGFsKSAqIDEwMCA6IDBcbiAgICByZXR1cm4ge1xuICAgICAgcGVyaW9kOiBsYXRlc3QucGVyaW9kS2V5LFxuICAgICAgdG90YWw6IGxhdGVzdC50b3RhbCxcbiAgICAgIHY1ZzogbGF0ZXN0LnQ1ZyxcbiAgICAgIHBjdDVnOiBwY3Q1ZyxcbiAgICAgIHY0ZzogbGF0ZXN0LnQ0ZyxcbiAgICAgIHBjdDRnOiBwY3Q0ZyxcbiAgICAgIHYzZzogbGF0ZXN0LnQzZ1xuICAgIH1cbiAgfSwgW2FnZ3JlZ2F0ZWREYXRhXSlcblxuICBjb25zdCBjaGFydFdpZHRoID0gNzQwXG4gIGNvbnN0IGNoYXJ0SGVpZ2h0ID0gMjcwXG4gIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiAyMCwgcmlnaHQ6IDIwLCBib3R0b206IDM1LCBsZWZ0OiA0NSB9XG4gIGNvbnN0IHBsb3RXaWR0aCA9IGNoYXJ0V2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodFxuICBjb25zdCBwbG90SGVpZ2h0ID0gY2hhcnRIZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbVxuXG4gIGNvbnN0IG1heFRvdGFsID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IG1heCA9IDBcbiAgICBhZ2dyZWdhdGVkRGF0YS5mb3JFYWNoKGQgPT4geyBpZiAoZC50b3RhbCA+IG1heCkgbWF4ID0gZC50b3RhbCB9KVxuICAgIHJldHVybiBtYXggPiAwID8gTWF0aC5jZWlsKG1heCAqIDEuMTUgLyA1KSAqIDUgOiA1MFxuICB9LCBbYWdncmVnYXRlZERhdGFdKVxuXG4gIGNvbnN0IGJhcldpZHRoID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGFnZ3JlZ2F0ZWREYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDMwXG4gICAgcmV0dXJuIE1hdGgubWluKDQyLCBNYXRoLm1heCgxOCwgKHBsb3RXaWR0aCAvIGFnZ3JlZ2F0ZWREYXRhLmxlbmd0aCkgKiAwLjY1KSlcbiAgfSwgW2FnZ3JlZ2F0ZWREYXRhLCBwbG90V2lkdGhdKVxuXG4gIGNvbnN0IHRvZ2dsZVRlY2ggPSAodGVjaDogc3RyaW5nKSA9PiB7XG4gICAgc2V0QWN0aXZlVGVjaHMocHJldiA9PiAoeyAuLi5wcmV2LCBbdGVjaF06ICFwcmV2W3RlY2hdIH0pKVxuICB9XG5cbiAgY29uc3QgZXhwb3J0VG9DU1YgPSAoKSA9PiB7XG4gICAgaWYgKGFnZ3JlZ2F0ZWREYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG4gICAgbGV0IGNzdiA9ICdQZXJpb2RvLEFuaW8sVHJpbWVzdHJlLDJHX01pbGxvbmVzLDNHX01pbGxvbmVzLDRHX01pbGxvbmVzLDVHX01pbGxvbmVzLFRvdGFsX01pbGxvbmVzXFxuJ1xuICAgIGFnZ3JlZ2F0ZWREYXRhLmZvckVhY2goZCA9PiB7XG4gICAgICBjc3YgKz0gYCR7ZC5wZXJpb2RLZXl9LCR7ZC5hbmlvfSwke2QudHJpbWVzdHJlfSwke2QudDJnLnRvRml4ZWQoMil9LCR7ZC50M2cudG9GaXhlZCgyKX0sJHtkLnQ0Zy50b0ZpeGVkKDIpfSwke2QudDVnLnRvRml4ZWQoMil9LCR7ZC50b3RhbC50b0ZpeGVkKDIpfVxcbmBcbiAgICB9KVxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbY3N2XSwgeyB0eXBlOiAndGV4dC9jc3Y7Y2hhcnNldD11dGYtODsnIH0pXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcbiAgICBsaW5rLmRvd25sb2FkID0gYE9OVElDX0FjY2Vzb3NfSW50ZXJuZXRfTW92aWwuY3N2YFxuICAgIGxpbmsuY2xpY2soKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e3dpZGdldFN0eWxlfSBjbGFzc05hbWU9XCJqaW11LXdpZGdldFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbnRpYy1jb250YWluZXJcIj5cblxuICAgICAgICB7LyogRW5jYWJlemFkbyBJbnN0aXR1Y2lvbmFsIE1pblRJQyAvIE9OVElDICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbnRpYy1icmFuZC1iYW5uZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbnRpYy1zdHJpcGVcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLW1haW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbnRpYy1iYWRnZVwiPk9OVElDPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmRpY2F0b3ItdGFnXCI+SW5kaWNhZG9yIFNlY3RvcmlhbCDigKIgQ29uZWN0aXZpZGFkPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJpbmRpY2F0b3ItdGl0bGVcIj57d2lkZ2V0VGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmRpY2F0b3Itc3ViXCI+XG4gICAgICAgICAgICAgICAgICBOw7ptZXJvIGRlIGFjY2Vzb3MgbcOzdmlsZXMgYSBJbnRlcm5ldCBlbiBtaWxsb25lcyBwb3IgdGlwbyBkZSB0ZWNub2xvZ8OtYSDigKIge3NvdXJjZVRleHR9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1yaWdodFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXN5bmNcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZldGNoU2VydmljZURhdGEodHJ1ZSl9XG4gICAgICAgICAgICAgICAgdGl0bGU9XCJBY3R1YWxpemFyIGRhdG9zIGRlc2RlIGVsIHNlcnZpY2lvIEFyY0dJU1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3JlZnJlc2hpbmcgPyAnc3Bpbi1pY29uJyA6ICcnfT5cbiAgICAgICAgICAgICAgICAgIDxMdWNpZGVJY29ucy5SZWZyZXNoIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPkFjdHVhbGl6YXI8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBUYXJqZXRhcyBLUEkgZGUgUmVzdW1lbiAqL31cbiAgICAgICAge2xhdGVzdEtQSSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrcGktcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtwaS1jYXJkIGtwaS1zdHJpcGUtdG90YWxcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwia3BpLWxhYmVsXCI+VG90YWwgQWNjZXNvcyAoe2xhdGVzdEtQSS5wZXJpb2R9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwia3BpLXZhbHVlXCI+e2xhdGVzdEtQSS50b3RhbC50b0ZpeGVkKDEpfSBNPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJrcGktc3VidGV4dFwiPk1pbGxvbmVzIGRlIGFjY2Vzb3MgbcOzdmlsZXM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrcGktY2FyZCBrcGktc3RyaXBlLTRnXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImtwaS1sYWJlbFwiPlRlY25vbG9nw61hIDRHIExURTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwia3BpLXZhbHVlXCI+e2xhdGVzdEtQSS52NGcudG9GaXhlZCgxKX0gTTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwia3BpLXN1YnRleHRcIj57bGF0ZXN0S1BJLnBjdDRnLnRvRml4ZWQoMSl9JSBkZWwgbWVyY2Fkbzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtwaS1jYXJkIGtwaS1zdHJpcGUtNWdcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwia3BpLWxhYmVsXCI+RGVzcGxpZWd1ZSA1Rzwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwia3BpLXZhbHVlXCI+e2xhdGVzdEtQSS52NWcudG9GaXhlZCgxKX0gTTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwia3BpLXN1YnRleHRcIj57bGF0ZXN0S1BJLnBjdDVnLnRvRml4ZWQoMSl9JSBlbiBleHBhbnNpw7NuPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3BpLWNhcmQga3BpLXN0cmlwZS0zZ1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJrcGktbGFiZWxcIj4zRyBlbiBUcmFuc2ljacOzbjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwia3BpLXZhbHVlXCI+e2xhdGVzdEtQSS52M2cudG9GaXhlZCgxKX0gTTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwia3BpLXN1YnRleHRcIj5UZW5kZW5jaWEgZW4gZGVzY2Vuc288L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogQmFycmEgZGUgRmlsdHJvcyBJbnRlcmFjdGl2b3MgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVycy1iYXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1ncm91cFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsdGVyLWxhYmVsXCI+T3BlcmFkb3I6PC9zcGFuPlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXItc2VsZWN0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkUHJvdmVlZG9yfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTZWxlY3RlZFByb3ZlZWRvcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUT0RPU1wiPlRvZG9zIGxvcyBPcGVyYWRvcmVzICh7dW5pcXVlUHJvdmVlZG9yZXMubGVuZ3RofSk8L29wdGlvbj5cbiAgICAgICAgICAgICAge3VuaXF1ZVByb3ZlZWRvcmVzLm1hcChwID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17cH0gdmFsdWU9e3B9PntwfTwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItZ3JvdXBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbHRlci1sYWJlbFwiPlNlZ21lbnRvOjwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGlsbHMtZ3JvdXBcIj5cbiAgICAgICAgICAgICAge1snVE9ET1MnLCAnUFJFUEFHTycsICdQT1NQQUdPJ10ubWFwKHMgPT4gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17c31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHBpbGwtYnRuICR7c2VsZWN0ZWRTZWdtZW50byA9PT0gcyA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkU2VnbWVudG8ocyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3MgPT09ICdUT0RPUycgPyAnVG9kb3MnIDogc31cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWdyb3VwXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWx0ZXItbGFiZWxcIj5UZXJtaW5hbDo8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpbGxzLWdyb3VwXCI+XG4gICAgICAgICAgICAgIHtbJ1RPRE9TJywgJ1RFTMOJRk9OTyBNw5NWSUwnLCAnREFUQSBDQVJEJ10ubWFwKHQgPT4gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17dH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHBpbGwtYnRuICR7c2VsZWN0ZWRUZXJtaW5hbCA9PT0gdCA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkVGVybWluYWwodCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3QgPT09ICdUT0RPUycgPyAnVG9kb3MnIDogdCA9PT0gJ1RFTMOJRk9OTyBNw5NWSUwnID8gJ03Ds3ZpbCcgOiAnTcOzZGVtJ31cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWdyb3VwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0LXZpZXctdG9nZ2xlXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B2aWV3LWljb24tYnRuICR7dmlld01vZGUgPT09ICdzdGFja2VkJyA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaWV3TW9kZSgnc3RhY2tlZCcpfVxuICAgICAgICAgICAgICAgIHRpdGxlPVwiVmlzdGEgR3LDoWZpY28gZGUgQmFycmFzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMdWNpZGVJY29ucy5CYXJDaGFydCAvPiBHcsOhZmljYVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHZpZXctaWNvbi1idG4gJHt2aWV3TW9kZSA9PT0gJ3RhYmxlJyA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaWV3TW9kZSgndGFibGUnKX1cbiAgICAgICAgICAgICAgICB0aXRsZT1cIlZpc3RhIFRhYmxhIGRlIERhdG9zXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMdWNpZGVJY29ucy5UYWJsZSAvPiBUYWJsYVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZpZXctaWNvbi1idG5cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V4cG9ydFRvQ1NWfVxuICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVzY2FyZ2FyIGRhdG9zIGVuIENTVlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8THVjaWRlSWNvbnMuRG93bmxvYWQgLz4gQ1NWXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBHcsOhZmljbyBkZSBCYXJyYXMgQXBpbGFkYXMgU1ZHIE9maWNpYWwgTWluVElDICovfVxuICAgICAgICB7dmlld01vZGUgPT09ICdzdGFja2VkJyA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0LWNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoYXJ0LXktdGl0bGVcIj5NaWxsb25lcyBkZSBhY2Nlc29zPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLWNoYXJ0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInN2Zy1jYW52YXNcIiB2aWV3Qm94PXtgMCAwICR7Y2hhcnRXaWR0aH0gJHtjaGFydEhlaWdodH1gfT5cbiAgICAgICAgICAgICAgICB7WzAsIDAuMjUsIDAuNSwgMC43NSwgMV0ubWFwKChwY3QsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHlWYWwgPSBtYXhUb3RhbCAqICgxIC0gcGN0KVxuICAgICAgICAgICAgICAgICAgY29uc3QgeVBvcyA9IG1hcmdpbi50b3AgKyBwbG90SGVpZ2h0ICogcGN0XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZyBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgIDxsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICB4MT17bWFyZ2luLmxlZnR9XG4gICAgICAgICAgICAgICAgICAgICAgICB5MT17eVBvc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHgyPXtjaGFydFdpZHRoIC0gbWFyZ2luLnJpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgeTI9e3lQb3N9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjZTJlOGYwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheT17cGN0ID09PSAxID8gJ25vbmUnIDogJzMsMyd9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHg9e21hcmdpbi5sZWZ0IC0gOH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHk9e3lQb3MgKyA0fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFuY2hvcj1cImVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNjQ3NDhiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJKZXRCcmFpbnMgTW9ubywgbW9ub3NwYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7TWF0aC5yb3VuZCh5VmFsKX0gTVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAgICAge2FnZ3JlZ2F0ZWREYXRhLm1hcCgoZCwgY29sSWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBjb2xYID0gbWFyZ2luLmxlZnQgKyAoY29sSWR4ICsgMC41KSAqIChwbG90V2lkdGggLyAoYWdncmVnYXRlZERhdGEubGVuZ3RoIHx8IDEpKVxuICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IGNvbFggLSBiYXJXaWR0aCAvIDJcblxuICAgICAgICAgICAgICAgICAgY29uc3QgaDJnID0gKGQudDJnIC8gbWF4VG90YWwpICogcGxvdEhlaWdodFxuICAgICAgICAgICAgICAgICAgY29uc3QgaDNnID0gKGQudDNnIC8gbWF4VG90YWwpICogcGxvdEhlaWdodFxuICAgICAgICAgICAgICAgICAgY29uc3QgaDRnID0gKGQudDRnIC8gbWF4VG90YWwpICogcGxvdEhlaWdodFxuICAgICAgICAgICAgICAgICAgY29uc3QgaDVnID0gKGQudDVnIC8gbWF4VG90YWwpICogcGxvdEhlaWdodFxuXG4gICAgICAgICAgICAgICAgICBjb25zdCBiYXNlTGluZSA9IG1hcmdpbi50b3AgKyBwbG90SGVpZ2h0XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHkyZyA9IGJhc2VMaW5lIC0gaDJnXG4gICAgICAgICAgICAgICAgICBjb25zdCB5M2cgPSB5MmcgLSBoM2dcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHk0ZyA9IHkzZyAtIGg0Z1xuICAgICAgICAgICAgICAgICAgY29uc3QgeTVnID0geTRnIC0gaDVnXG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IGlzSG92ZXJlZCA9IHRvb2x0aXBEYXRhPy5wZXJpb2QucGVyaW9kS2V5ID09PSBkLnBlcmlvZEtleVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgICAgICAgIGtleT17ZC5wZXJpb2RLZXl9XG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUb29sdGlwRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNvbFgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHk1ZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyaW9kOiBkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRUb29sdGlwRGF0YShudWxsKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpc0hvdmVyZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeD17Y29sWCAtIChwbG90V2lkdGggLyAoYWdncmVnYXRlZERhdGEubGVuZ3RoIHx8IDEpKSAvIDJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHk9e21hcmdpbi50b3B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtwbG90V2lkdGggLyAoYWdncmVnYXRlZERhdGEubGVuZ3RoIHx8IDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e3Bsb3RIZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZjFmNWY5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICB7aDJnID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICB4PXt4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB5PXt5Mmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtiYXJXaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtoMmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e1RFQ0hfQ09MT1JTWycyRyddLmZpbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT17VEVDSF9DT0xPUlNbJzJHJ10uYm9yZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjAuOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICB7aDNnID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICB4PXt4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB5PXt5M2d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtiYXJXaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtoM2d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e1RFQ0hfQ09MT1JTWyczRyddLmZpbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT17VEVDSF9DT0xPUlNbJzNHJ10uYm9yZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjAuOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICB7aDRnID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICB4PXt4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB5PXt5NGd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtiYXJXaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtoNGd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e1RFQ0hfQ09MT1JTWyc0RyddLmZpbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT17VEVDSF9DT0xPUlNbJzRHJ10uYm9yZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjAuOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICB7aDVnID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICB4PXt4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB5PXt5NWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtiYXJXaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtoNWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJ4PVwiNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJ5PVwiNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e1RFQ0hfQ09MT1JTWyc1RyddLmZpbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT17VEVDSF9DT0xPUlNbJzVHJ10uYm9yZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjAuOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICB7aDRnID4gMTggJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeD17Y29sWH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgeT17eTRnICsgaDRnIC8gMiArIDN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbmNob3I9XCJtaWRkbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZmZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZC50NGcudG9GaXhlZCgxKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHg9e2NvbFh9XG4gICAgICAgICAgICAgICAgICAgICAgICB5PXtNYXRoLm1pbihiYXNlTGluZSAtIDQsIHk1ZyAtIDQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFuY2hvcj1cIm1pZGRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17aXNIb3ZlcmVkID8gJzEwJyA6ICc4LjUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD17aXNIb3ZlcmVkID8gJzgwMCcgOiAnNjAwJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e2lzSG92ZXJlZCA/ICcjMDA0ODg0JyA6ICcjNjQ3NDhiJ31cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZC50b3RhbC50b0ZpeGVkKDEpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cblxuICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB4PXtjb2xYfVxuICAgICAgICAgICAgICAgICAgICAgICAgeT17YmFzZUxpbmUgKyAxNn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbmNob3I9XCJtaWRkbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCI5LjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD17aXNIb3ZlcmVkID8gJzgwMCcgOiAnNTAwJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e2lzSG92ZXJlZCA/ICcjMDA0ODg0JyA6ICcjMzM0MTU1J31cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZC5wZXJpb2RLZXl9XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvc3ZnPlxuXG4gICAgICAgICAgICAgIHt0b29sdGlwRGF0YSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hhcnQtdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBgJHsodG9vbHRpcERhdGEueCAvIGNoYXJ0V2lkdGgpICogMTAwfSVgLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IGAke01hdGgubWF4KDEwLCAodG9vbHRpcERhdGEueSAvIGNoYXJ0SGVpZ2h0KSAqIDEwMCl9JWBcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sdGlwLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIFRyaW1lc3RyZToge3Rvb2x0aXBEYXRhLnBlcmlvZC5wZXJpb2RLZXl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFRFQ0hfQ09MT1JTWyc1RyddLmZpbGwgfX0+4pePIDVHOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Rvb2x0aXBEYXRhLnBlcmlvZC50NWcudG9GaXhlZCgyKX0gTSAoe3Rvb2x0aXBEYXRhLnBlcmlvZC50b3RhbCA+IDAgPyAoKHRvb2x0aXBEYXRhLnBlcmlvZC50NWcgLyB0b29sdGlwRGF0YS5wZXJpb2QudG90YWwpICogMTAwKS50b0ZpeGVkKDEpIDogMH0lKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sdGlwLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogVEVDSF9DT0xPUlNbJzRHJ10uZmlsbCB9fT7il48gNEc6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dG9vbHRpcERhdGEucGVyaW9kLnQ0Zy50b0ZpeGVkKDIpfSBNICh7dG9vbHRpcERhdGEucGVyaW9kLnRvdGFsID4gMCA/ICgodG9vbHRpcERhdGEucGVyaW9kLnQ0ZyAvIHRvb2x0aXBEYXRhLnBlcmlvZC50b3RhbCkgKiAxMDApLnRvRml4ZWQoMSkgOiAwfSUpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2x0aXAtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBURUNIX0NPTE9SU1snM0cnXS5maWxsIH19PuKXjyAzRzo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0b29sdGlwRGF0YS5wZXJpb2QudDNnLnRvRml4ZWQoMil9IE0gKHt0b29sdGlwRGF0YS5wZXJpb2QudG90YWwgPiAwID8gKCh0b29sdGlwRGF0YS5wZXJpb2QudDNnIC8gdG9vbHRpcERhdGEucGVyaW9kLnRvdGFsKSAqIDEwMCkudG9GaXhlZCgxKSA6IDB9JSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFRFQ0hfQ09MT1JTWycyRyddLmJvcmRlciB9fT7il48gMkc6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dG9vbHRpcERhdGEucGVyaW9kLnQyZy50b0ZpeGVkKDIpfSBNICh7dG9vbHRpcERhdGEucGVyaW9kLnRvdGFsID4gMCA/ICgodG9vbHRpcERhdGEucGVyaW9kLnQyZyAvIHRvb2x0aXBEYXRhLnBlcmlvZC50b3RhbCkgKiAxMDApLnRvRml4ZWQoMSkgOiAwfSUpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2x0aXAtcm93IHRvb2x0aXAtdG90YWwtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlRvdGFsIEFjY2Vzb3M6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyNGQ0QxMTYnIH19Pnt0b29sdGlwRGF0YS5wZXJpb2QudG90YWwudG9GaXhlZCgyKX0gTWlsbG9uZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0LWxlZ2VuZFwiPlxuICAgICAgICAgICAgICB7WycyRycsICczRycsICc0RycsICc1RyddLm1hcCh0ZWNoID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e3RlY2h9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BsZWdlbmQtaXRlbSAkeyFhY3RpdmVUZWNoc1t0ZWNoXSA/ICdkaW1tZWQnIDogJyd9YH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVRlY2godGVjaCl9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17YENsaWMgcGFyYSAke2FjdGl2ZVRlY2hzW3RlY2hdID8gJ29jdWx0YXInIDogJ21vc3RyYXInfSAke3RlY2h9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZ2VuZC1jb2xvci1ib3hcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBURUNIX0NPTE9SU1t0ZWNoXS5maWxsLCBib3JkZXJDb2xvcjogVEVDSF9DT0xPUlNbdGVjaF0uYm9yZGVyIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGVnZW5kLWxhYmVsXCI+e3RlY2h9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnQtY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLXRhYmxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZGF0YS10YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlBlcmlvZG88L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+MkcgKE1pbGxvbmVzKTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD4zRyAoTWlsbG9uZXMpPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPjRHIChNaWxsb25lcyk8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+NUcgKE1pbGxvbmVzKTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCAoTWlsbG9uZXMpPC90aD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICB7YWdncmVnYXRlZERhdGEubWFwKGQgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtkLnBlcmlvZEtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPntkLnBlcmlvZEtleX0gKHtkLmFuaW99IC0gVHtkLnRyaW1lc3RyZX0pPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgY29sb3I6IFRFQ0hfQ09MT1JTWycyRyddLnRleHQgfX0+e2QudDJnLnRvRml4ZWQoMil9IE08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBjb2xvcjogVEVDSF9DT0xPUlNbJzNHJ10udGV4dCB9fT57ZC50M2cudG9GaXhlZCgyKX0gTTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGNvbG9yOiBURUNIX0NPTE9SU1snNEcnXS50ZXh0LCBmb250V2VpZ2h0OiA3MDAgfX0+e2QudDRnLnRvRml4ZWQoMil9IE08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBjb2xvcjogVEVDSF9DT0xPUlNbJzVHJ10uZmlsbCwgZm9udFdlaWdodDogNzAwIH19PntkLnQ1Zy50b0ZpeGVkKDIpfSBNPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZm9udFdlaWdodDogODAwLCBjb2xvcjogJyMwMDQ4ODQnIH19PntkLnRvdGFsLnRvRml4ZWQoMil9IE08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXJvd1wiPlxuICAgICAgICAgIDxzcGFuPkZ1ZW50ZToge3NvdXJjZVRleHR9IOKAoiBTZXJ2aWNpbyBFc3JpIEhvc3RlZCBGZWF0dXJlU2VydmVyPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlNpbmNyb25pemFkbzoge2xhc3RVcGRhdGVkfSAoe3Jhd1JlY29yZHMubGVuZ3RofSByZWdpc3Ryb3MgY2FyZ2Fkb3MpPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0XG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==