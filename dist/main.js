/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(htmlArray){\n    this.htmlArray = htmlArray;\n  }\n  \n  html(string) {\n    if (string) {\n      return this.htmlArray.map((node) => {\n        node.innerHTML = string;\n      });\n    } else {\n      return this.htmlArray[0].innerHTML();\n    }\n  }\n  \n  empty() {\n    return this.htmlArray.map((node) => {\n      node.innerHTML = '';\n    });\n  }\n  \n  append(argument) {\n    this.htmlArray.map((node) => {\n      node.innerHTML += argument;\n    });\n  }\n  \n  attr(attribute, value) {\n    this.htmlArray.map((node) => {\n      if (value) {\n        node.setAttribute(attribute, value);\n      } else {\n        node.setAttribute(attribute);\n      }\n    });\n  }\n  \n  addClass(newClass) {\n    this.htmlArray.map((node) => {\n      let currentClass = node.className;\n      if (!currentClass.length) {\n        node.setAttribute(\"class\", newClass);\n      } else {\n        node.setAttribute(\"class\", `${currentClass} ${newClass}`);\n      }\n    });\n  }\n  \n  removeClass() {\n    this.htmlArray.map((node) => {\n      node.setAttribute(\"class\", \"\");\n    });\n  }\n  \n  children() {\n    let allChildren = [];\n    this.htmlArray.map((node) => {\n      let nodeChildren = node.children;\n      for (var i = 0; i < nodeChildren.length; i++) {\n        allChildren.push(nodeChildren[i]);\n      }\n    });\n    \n    return new DOMNodeCollection(allChildren);\n  }\n  \n  parent() {\n    let parents = [];\n    this.htmlArray.map((node) => {\n      let parent = node.parentNode;\n      if (!parents.includes(parent)) {\n        parents.push(parent);\n      }\n    });\n    \n    return new DOMNodeCollection(parents);\n  }\n  \n  find(selector) {\n    let selectedChildren = [];\n    this.htmlArray.map((node) => {\n      let children = node.querySelectorAll(selector);\n      for (var i = 0; i < children.length; i++) {\n        selectedChildren.push(children[i]);\n      }  \n    });\n    return new DOMNodeCollection(selectedChildren);\n  }\n  \n  remove() {\n    this.each(node => node.parentNode.removeChild(node));\n  }\n}\n\n\nmodule.exports = DOMNodeCollection;\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\n\nfunction $l(selector) {\n  let nodeArray = [];\n  \n  if (selector instanceof HTMLElement) {\n    nodeArray.push(selector);\n  } else if (typeof selector === \"string\") {\n    const nodeList = document.querySelectorAll(selector);\n    for (var i = 0; i < nodeList.length; i++) {\n      nodeArray.push(nodeList[i]);\n    }\n  }\n  \n  return new DOMNodeCollection(nodeArray);\n}\n\nwindow.$l = $l;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });