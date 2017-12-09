module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_Home__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_News__ = __webpack_require__(8);



var routes = [{
  path: '/',
  component: __WEBPACK_IMPORTED_MODULE_0__home_Home__["a" /* default */],
  exact: true
}, {
  path: '/news',
  component: __WEBPACK_IMPORTED_MODULE_1__news_News__["a" /* default */]
}];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_App__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_routes__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cors__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_fetch__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_serialize_javascript__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_source_map_support__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_source_map_support___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_source_map_support__);
var _jsxFileName = '/home/edwin-moses/Projects/ssr-react/src/server/index.js',
    _this = this;












if (process.env.NODE_ENV === 'development') {
  __WEBPACK_IMPORTED_MODULE_9_source_map_support___default.a.install();
}

var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

//cors Middleware
app.use(__WEBPACK_IMPORTED_MODULE_5_cors___default()());

//static files middleware
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static('public'));

app.get('/api/news', function (req, res) {
  res.json([{
    id: 1,
    upvotes: 257,
    title: "Fianto Duri, the complete tutorial",
    author: "RubeusH",
    date: new Date(Date.now() - 15000000)
  }, {
    id: 2,
    upvotes: 221,
    title: "Untransfiguration classes to become compulsory at Hogwarts",
    author: "Baddock",
    date: new Date(Date.now() - 45000000)
  }, {
    id: 3,
    upvotes: 198,
    title: "Cracking the Aurologist Interview ",
    author: "Hetty",
    date: new Date(Date.now() - 900000)
  }, {
    id: 4,
    upvotes: 171,
    title: "ASK WN: What do you use to digitalize your scrolls?",
    author: "Alphard",
    date: new Date(Date.now() - 40000000)
  }, {
    id: 5,
    upvotes: 166,
    title: "The Pragmatic Dragon Feeder",
    author: "Baruffio",
    date: new Date(Date.now() - 10000000)
  }, {
    id: 6,
    upvotes: 145,
    title: "The complete quidditch statistics",
    author: "Hbeery",
    date: new Date(Date.now() - 5000000)
  }, {
    id: 7,
    upvotes: 126,
    title: "Ordinary Wizarding Levels study guide",
    author: "BathBabb",
    date: new Date(Date.now() - 600000)
  }, {
    id: 8,
    upvotes: 114,
    title: "Is muggle-baiting ever acceptable?",
    author: "Falco",
    date: new Date(Date.now() - 60000000)
  }, {
    id: 9,
    upvotes: 74,
    title: "Conserving waterplants cheatsheet.",
    author: "Otto",
    date: new Date(Date.now() - 3000000)
  }, {
    id: 10,
    upvotes: 59,
    title: "Could wizards prevent WW3?",
    author: "Cuthbert",
    date: new Date(Date.now() - 6000000)
  }, {
    id: 11,
    upvotes: 46,
    title: "Show WN: Wand-Extinguishing Protection",
    author: "Humphrey22",
    date: new Date(Date.now() - 50000)
  }, {
    id: 12,
    upvotes: 30,
    title: "Do you still use Alarte Ascendare?",
    author: "Bellatrix1",
    date: new Date(Date.now() - 6000000)
  }, {
    id: 13,
    upvotes: 10,
    title: "Mailing lists WN readers ought to know about?",
    author: "Dracod",
    date: new Date(Date.now() - 60000)
  }, {
    id: 14,
    upvotes: 8,
    title: "How to tell which spell used on a bug?",
    author: "Lupin",
    date: new Date()
  }]);
});

app.get('*', function (req, res, next) {

  var currentRoute = __WEBPACK_IMPORTED_MODULE_4__shared_routes__["a" /* default */].find(function (route) {
    return Object(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["matchPath"])(req.url, route);
  });
  var requestInitialData = currentRoute.component.requestInitialData && currentRoute.component.requestInitialData();

  Promise.resolve(requestInitialData).then(function (initialData) {
    var context = { initialData: initialData };
    var markup = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_7_react_router_dom__["StaticRouter"],
      { location: req.url, context: context, __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__shared_App__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: _this
      })
    ));

    res.send('\n          <!DOCTYPE html>\n          <head>\n            <title>W Combinator</title>\n            <link rel="stylesheet" href="/css/main.css" />\n            <script src="/bundle.js" defer></script>\n            <script>window.__initialData__ = ' + __WEBPACK_IMPORTED_MODULE_8_serialize_javascript___default()(initialData) + '</script>\n          </head>\n\n          <body>\n            <div id="root">' + markup + '</div>\n          </body>\n        </html>\n      ');
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('http://localhost:' + (process.env.PORT || 3000));
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(2);
var _jsxFileName = '/home/edwin-moses/Projects/ssr-react/src/shared/App.js',
    _this = this;





var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_2__routes__["a" /* default */].map(function (route, i) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], Object.assign({ key: i }, route, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: _this
      }));
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
var _jsxFileName = '/home/edwin-moses/Projects/ssr-react/src/shared/home/Home.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            },
            __self: this
          },
          'Home Component'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
          { to: '/news', __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            },
            __self: this
          },
          'News'
        )
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NewsList__ = __webpack_require__(9);
var _jsxFileName = '/home/edwin-moses/Projects/ssr-react/src/shared/news/News.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var News = function (_Component) {
  _inherits(News, _Component);

  function News(props) {
    _classCallCheck(this, News);

    var _this = _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).call(this, props));

    var initialData = void 0;

    if (props.staticContext) {
      initialData = props.staticContext.initialData;
    } else {
      initialData = window.__initialData__;
      delete window.__initialData__;
    }

    _this.state = { news: initialData };

    return _this;
  }

  _createClass(News, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.state.news) {
        News.requestInitialData().then(function (news) {
          return _this2.setState({ news: news });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var news = this.state.news;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__NewsList__["a" /* default */], { news: news, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      });
    }
  }], [{
    key: 'requestInitialData',
    value: function requestInitialData() {
      return fetch('http://localhost:3000/api/news').then(function (response) {
        return response.json();
      });
    }
  }]);

  return News;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (News);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_time_ago__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_time_ago___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_node_time_ago__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_orderby__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_orderby___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_orderby__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NewsList_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NewsList_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__NewsList_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__w18_png__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__w18_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__w18_png__);
var _jsxFileName = '/home/edwin-moses/Projects/ssr-react/src/shared/news/NewsList.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var NewsList = function (_Component) {
  _inherits(NewsList, _Component);

  function NewsList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NewsList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewsList.__proto__ || Object.getPrototypeOf(NewsList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      sortOrder: 'upvotes'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NewsList, [{
    key: 'setOrder',
    value: function setOrder(order, event) {
      event.preventDefault();
      this.setState({ sortOrder: order });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var news = __WEBPACK_IMPORTED_MODULE_2_lodash_orderby___default()(this.props.news, this.state.sortOrder, 'asc');
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'newslist', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'header', __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'header-title', __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_4__w18_png___default.a, width: '18', height: '18', className: 'logo', __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                },
                __self: this
              },
              'Wizard News'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'sort', __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              },
              __self: this
            },
            'Sort By: ',
            ' ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              {
                href: '#',
                className: this.state.sortOrder ? 'upvotes' : 'sort-selected',
                onClick: this.setOrder.bind(this, 'upvotes'), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                },
                __self: this
              },
              'Upvotes'
            ),
            '|',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              {
                href: '#',
                className: this.state.sortOrder ? 'date' : 'sort-selected',
                onClick: this.setOrder.bind(this, 'date'), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                },
                __self: this
              },
              'Date'
            )
          )
        ),
        news && news.map(function (post) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: post.id, className: 'news-item', __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: _this2
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                },
                __self: _this2
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { className: 'news-position', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  },
                  __self: _this2
                },
                post.id,
                '. '
              ),
              ' ',
              post.title,
              ' ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'small',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  },
                  __self: _this2
                },
                '(by ',
                post.author,
                ')'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'small',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                },
                __self: _this2
              },
              post.upvotes,
              ' Upvotes | ',
              __WEBPACK_IMPORTED_MODULE_1_node_time_ago___default()(post.date)
            )
          );
        })
      );
    }
  }]);

  return NewsList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (NewsList);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("node-time-ago");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("lodash.orderby");

/***/ }),
/* 12 */
/***/ (function(module, exports) {



/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "/media/w18.png";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map