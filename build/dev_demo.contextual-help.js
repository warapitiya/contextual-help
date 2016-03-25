/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(22);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	/*globals window __webpack_hash__ */
	if(false) {
		var lastData;
		var upToDate = function upToDate() {
			return lastData.indexOf(__webpack_hash__) >= 0;
		};
		var check = function check() {
			module.hot.check(true, function(err, updatedModules) {
				if(err) {
					if(module.hot.status() in {
							abort: 1,
							fail: 1
						}) {
						console.warn("[HMR] Cannot apply update. Need to do a full reload!");
						console.warn("[HMR] " + err.stack || err.message);
						window.location.reload();
					} else {
						console.warn("[HMR] Update failed: " + err.stack || err.message);
					}
					return;
				}

				if(!updatedModules) {
					console.warn("[HMR] Cannot find update. Need to do a full reload!");
					console.warn("[HMR] (Probably because of restarting the webpack-dev-server)");
					window.location.reload();
					return;
				}

				if(!upToDate()) {
					check();
				}

				require("./log-apply-result")(updatedModules, updatedModules);

				if(upToDate()) {
					console.log("[HMR] App is up to date.");
				}

			});
		};
		var addEventListener = window.addEventListener ? function(eventName, listener) {
			window.addEventListener(eventName, listener, false);
		} : function(eventName, listener) {
			window.attachEvent("on" + eventName, listener);
		};
		addEventListener("message", function(event) {
			if(typeof event.data === "string" && event.data.indexOf("webpackHotUpdate") === 0) {
				lastData = event.data;
				if(!upToDate() && module.hot.status() === "idle") {
					console.log("[HMR] Checking for updates on the server...");
					check();
				}
			}
		});
		console.log("[HMR] Waiting for update signal from WDS...");
	} else {
		throw new Error("[HMR] Hot Module Replacement is disabled.");
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*global require, module*/
	'use strict';

	// bundled styling
	__webpack_require__(3);

	var ContextualHelp = __webpack_require__(6),
			Drawer = __webpack_require__(15);


	var startContextualHelp = function () {

		// initialize all drawer elements on the page
		//document.dispatchEvent(new CustomEvent('o.InitAllDrawerElements'));

		// remove handler
		document.removeEventListener('o.DOMContentLoaded', startContextualHelp);

		// add drawer div to page
		var container = document.createElement('div');
		container.id = 'o-contextual-help-drawer';
		container.setAttribute('data-o-component', 'o-drawer');
		container.setAttribute('aria-role', 'menu');
		container.setAttribute('aria-expanded', 'false');
		container.setAttribute('role', 'menu');
		container.classList.add('o-drawer-right', 'o-drawer-animated', 'o-contextual-help__drawer');
		container.style.display = 'none';
		var par = document.getElementsByTagName("body")[0];
		var target = document.querySelector('header.o-app-header') || par.firstChild;
		par.insertBefore(container, target? target.nextSibling : target);

		// init help inside of drawer
		var help = new ContextualHelp(container);

		// init Drawer on container
		var drawer = new Drawer(container);

		// bind drawer open / close events to ContextualHelp events for open
		help.open = function(){ drawer.open(); };
		help.close = function(){ drawer.close(); };
		help.toggle = function(){ drawer.toggle(); };

	};

	document.addEventListener('o.DOMContentLoaded', startContextualHelp);

	ContextualHelp.init = startContextualHelp;

	module.exports = ContextualHelp;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./main.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var XHR = __webpack_require__(7),
			Collapse = __webpack_require__(8);

	// setup templates
	var helpTemplate = requireText('../html/helpT.html'),
	topicExcerptTemplate = requireText('../html/excerptT.html'),
	topicTemplate = requireText('../html/contentT.html');


	function ContextualHelp(el){

		var me = this,
		baseURL = 'https://raw.githubusercontent.com/Pearson-Higher-Ed/help-content/master/out/';

		function getConfig(){
			var conf = {},
			configEl = document.querySelector('[data-o-contextual-help-config]');
			if (!configEl){
				return conf;
			}
			try{
				conf = JSON.parse(configEl.textContent);
			}
			catch(e){
				conf = {};
				throw new Error('Unable to parse configuration object: invalid JSON');
			}
			return conf;
		}

		this.fetchHelpContent = function(contentId, cb){
			cb = cb || function(){};
			if(contentId.replace(/\s/,'') === ''){
				cb("no content ID issued");
			}
			if(me.cache && me.cache[contentId]){
				cb(null, me.cache[contentId]);
				return;
			}
			// get it from github
			XHR({
				url: baseURL + me.lang + '/' + contentId + '.json',
				onSuccess: function (req){
					var data = JSON.parse(req.responseText);
					// if found, stick in cache
					me.cache[contentId] = data;
					// return in cb(null, content)
					cb(null, data);
				},
				onError: function (req) {
					// retry as en-us
					if(me.lang !== me.defaultLang){
						var tempLang = me.defaultLang;
						XHR({
							url: baseURL + '/' + tempLang + '/' + contentId + '.json',
							onSuccess: function(reqInner){
								var data = JSON.parse(reqInner.responseText);
								me.cache[contentId] = data;
								cb(null, data);
							},
							onError: function(reqInner){
								cb(reqInner);
							}
						});
					}
					else{
						cb(req);
					}
				}
			});
		};

		this.defaultLang = 'en-us';
		this.lang = this.defaultLang;
		// figure out what el is and go get it if necessary
		if(el instanceof String){
			el = document.querySelector('#'+el);
		}

		this._el = el;
		// init content cache
		this.cache = {};

		// init topics list
		this.topics = [];


		// add templates to target el
		if(el.nodeType){
			el.innerHTML = helpTemplate;
		}
		// add event helpers for inner templates
		el.querySelector('#contextual-help-close-content').onclick = function(){
			me._el.classList.remove('o-contextual-help__detail--visible');
			return false;
		};
		// establish configuration
		var conf = getConfig();
		if(conf && conf.helpTopics && conf.helpTopics.length > 0){
			this.topics = conf.helpTopics;
		}
		// populate excerpts into topic list
		this.populateFromList = function(list, cb){
			cb = cb || function(){};
			if(list.length > 0){
				var item = list.splice(0,1)[0];
				me.fetchHelpContent(item, function(err, cData){
					if(!cData || err){
						if(list.length > 0){
							me.populateFromList(list, cb);
						}
					}
					var nExcerpt = document.createElement('div');
					nExcerpt.innerHTML = topicExcerptTemplate;
					var title = nExcerpt.querySelector('h4 a');
					title.innerHTML = cData.title;
					title.onclick = function(){
						me.openHelpTopic(item);
					};
					nExcerpt.querySelector('p').innerHTML = cData.excerpt;
					me._el.querySelector('.o-contextual-help__excerpt-list').appendChild(nExcerpt);
					if(list.length > 0){
						me.populateFromList(list, cb);
					}
					else{
						cb();
					}
				});
			}
			else{
				cb();
			}
		};

		this._initRunning = false;
		this._rerunInit = false;

		this.init = function(){
			this._initRunning = true;
			// remove everything
			this._el.querySelector('.o-contextual-help__excerpt-list').innerHTML = '';
			// populate from list
			var theList = this.deDupeTopics();
			this.populateFromList(theList, function(){
				me._initRunning = false;
				if(me._rerunInit){
					me._rerunInit = false;
					me.init();
				}
			});
			return;
		};

		// bind header event for show / hide
		var eventEl = document.querySelector('header.o-app-header');
		if(eventEl){
			eventEl.addEventListener('oAppHeader.help.toggle', function(){
				if(me.toggle){ me.toggle(); }
				});
			}

			this.scheduleInit();
			this._el.oContextualHelp = this;
			return this;
		}

		ContextualHelp.prototype.scheduleInit = function(){
			if(!this._initRunning){
				this.init();
			}
			else{
				this._rerunInit = true;
			}
		}

		ContextualHelp.prototype.deDupeTopics = function(){
			var arr = this.topics;
			var t = arr.filter(function(item, pos){
				return arr.indexOf(item) == pos;
			});
			return t;
		}

		ContextualHelp.prototype.setLanguage = function(langCode){
			this.lang = langCode;
			this._el.classList.add('o-contextual-help__detail--visible');
		};

		ContextualHelp.prototype.openHelpTopic = function(topic){

			var contentTarget = this._el.querySelector('#o-contextual-help-topic-content-target');
			if(!topic){
				contentTarget.innerHTML = '';
			}
			// fetch it and put the content in the content target
			if(topic){
				this.fetchHelpContent(topic, function(err, cData){
					if(err){
						throw err;
					}
					if(!cData){
						return;
					}
					contentTarget.innerHTML = topicTemplate;
					contentTarget.querySelector('h4').innerHTML = cData.title;
					var contentCT = contentTarget.querySelector('div');
					contentCT.innerHTML = cData.content;
					Collapse.init(contentCT);
				});
			}
			this._el.classList.add('o-contextual-help__detail--visible');
			if(this.open){
				this.open();
			}
		};

		/*
		takes string topic or array of strings
		adds these topics to the topic list
		*/
		ContextualHelp.prototype.addTopics = function(topic){
			if(typeof topic === 'string'){
				topic = [topic];
			}
			for(var i=0, l=topic.length; i<l; i++){
				var t = topic[i];
				if(this.topics.indexOf(t) < 0){
					this.topics.push(t);
				}
			}
			this.scheduleInit();
		};
		ContextualHelp.prototype.removeTopics = function(topic){
			if(typeof topic === 'string'){
				topic = [topic];
			}
			for(var i=0, l=topic.length; i<l; i++){
				var t = topic[i];
				if(this.topics.indexOf(t) >= 0){
					this.topics.splice(this.topics.indexOf(t), 1);
				}
			}
			this.scheduleInit();
		};

		/*
		removes all topics from current config
		*/
		ContextualHelp.prototype.removeAllTopics = function(){
			this.topics.splice(0,this.topics.length);
			this.scheduleInit();
			return;
		};

		/*
		returns list of all topics corruntly in use
		*/
		ContextualHelp.prototype.getTopics = function(){
			return this.topics;
		};

		module.exports = ContextualHelp;


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	module.exports = createXhr;

	function createXhr(options) {
		if (arguments.length === 0) throw new TypeError('Expected 1 argument, got 0');
		if (typeof options === 'string') {
			options = {
				url: options
			};
		}
		if (!options.url) throw new TypeError('The \'url\' option is required');

		options.method = options.method || 'GET';
		options.onSuccess = options.onSuccess || noop;
		options.onError = options.onError || noop;
		options.headers = options.headers || {};
		options.data = options.data || '';

		var request = options.xhr || new XMLHttpRequest();

		function handleReadystatechange() {
			if (request.readyState !== 4) return;
			if (!isSuccess(request.status)) options.onError(request);
			else options.onSuccess(request);
		}

		request.open(options.method, options.url, true);
		request.onreadystatechange = handleReadystatechange;
		for(var h in options.headers) {
			if (options.headers.hasOwnProperty(h)) {
				var hv = options.headers[h];
				request.setRequestHeader(h,hv);
			}

		}
		request.send(options.data);

		return request;
	}

	function noop() { }

	function isSuccess(status) {
		return status >= 200 && status <= 299;
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*global require, module*/
	'use strict';

	var Collapse = __webpack_require__(9);

	//var constructAll = function () {
	//	Collapse.init();
	//	document.removeEventListener('o.DOMContentLoaded', constructAll);
	//};
	//
	//document.addEventListener('o.DOMContentLoaded', constructAll);

	module.exports = Collapse;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*jshint -W079 */

	'use strict';

	var DomDelegate = __webpack_require__(10);
	var WeakMap = __webpack_require__(12);
	var dispatchEvent = __webpack_require__(14).dispatchEvent;
	var forEach = __webpack_require__(14).forEach;

	function Collapse(element) {
		if (!(this instanceof Collapse)) throw new TypeError('Failed to construct Collapse: constructor requires \'new\'.');
		if (arguments.length === 0) throw new TypeError('Failed to construct Collapse: 1 argument required, but 0 provided.');
		if (!(element instanceof HTMLElement)) element = document.querySelector(element);
		if (!element) return;
		if (typeof Collapse.cache.get(element, this) !== 'undefined') return Collapse.cache.get(element, this);

		var triggerSelector =
			'[data-toggle="o-collapse"][href="#' + element.id + '"],' +
			'[data-toggle="o-collapse"][data-target="#' + element.id + '"]';

		this.target = element;
		this.trigger = document.querySelectorAll(triggerSelector);
		Collapse.cache.set(element, this);

		if (!element.classList.contains('o-collapse')) element.classList.add('o-collapse');

		if (!Collapse.bodyDelegate) {
			var bodyDelegate = new DomDelegate(document.body);

			bodyDelegate.on('click', '[data-toggle="o-collapse"]', function handleClick(e) {
				e.preventDefault();

				var trigger = getTrigger(e.target);
				var targets = getTargetsFromTrigger(trigger);

				if (trigger.hasAttribute('data-parent')) {
					var selector = '[data-parent="' + trigger.getAttribute('data-parent') + '"]';

					forEach(document.querySelectorAll(selector), function (idx, el) {
						var childTargets = getTargetsFromTrigger(el);

						forEach(childTargets, function (index, childTarget) {
							if (childTarget === targets[0]) return;

							var collapsible = getOrCreateInstance(childTarget);

							if (collapsible) collapsible.hide();
						});
					});
				}

				forEach(targets, function (index, target) {
					var collapsible = getOrCreateInstance(target);

					if (collapsible) collapsible.toggle();
				});
			});

			Collapse.bodyDelegate = bodyDelegate;
		}
	}

	Collapse.cache = new WeakMap();

	/**
	 * Initializes all collapsible elements on the page or within
	 * the element passed in.
	 * @param  {HTMLElement|string} element DOM element or selector.
	 * @return {Collapse[]} List of Collapse instances that
	 * have been initialized.
	 */
	Collapse.init = function (element) {
		var collapseEls = selectAll(element);
		var collapsibles = [];

		for (var i = 0, l = collapseEls.length; i < l; i++) {
			collapsibles.push(new Collapse(collapseEls[i]));
		}

		return collapsibles;
	};

	/**
	 * Destroys all collapsible elements on the page.
	 */
	Collapse.destroy = function () {
		if (Collapse.bodyDelegate) Collapse.bodyDelegate.destroy();
	};

	/**
	 * Expands the collapsible element if it is not already expanded.
	 */
	Collapse.prototype.show = function () {
		var target = this.target;
		var trigger = this.trigger;

		if (target.classList.contains('o-collapse--expanded')) return;

		dispatchEvent(target, 'oCollapse.show');

		target.classList.add('o-collapse--expanded');
		target.setAttribute('aria-expanded', true);

		forEach(trigger, function (index, trigger) {
			trigger.setAttribute('aria-expanded', true);
		});
	};

	/**
	 * Collapses the collapsible element if it is not already collapsed.
	 */
	Collapse.prototype.hide = function () {
		var target = this.target;
		var trigger = this.trigger;

		if (!target.classList.contains('o-collapse--expanded')) return;

		dispatchEvent(target, 'oCollapse.hide');

		target.classList.remove('o-collapse--expanded');
		target.setAttribute('aria-expanded', false);

		forEach(trigger, function (index, trigger) {
			trigger.setAttribute('aria-expanded', false);
		});
	};

	/**
	 * Toggles the collapsible element based on its current state.
	 */
	Collapse.prototype.toggle = function () {
		this[this.target.classList.contains('o-collapse--expanded') ? 'hide' : 'show']();
	};

	function selectAll(element) {
		if (!element) {
			element = document.body;
		} else if (!(element instanceof HTMLElement)) {
			element = document.querySelector(element);
		}

		return element.querySelectorAll('.o-collapse');
	}

	function getTrigger(element) {
		while (element && element.getAttribute('data-toggle') !== 'o-collapse') {
			element = element.parentElement;
		}

		return element;
	}

	function getTargetsFromTrigger(element) {
		var target = element.getAttribute('data-target') || element.getAttribute('href');
		return document.querySelectorAll(target);
	}

	function getOrCreateInstance(element) {
		var collapsible = Collapse.cache.get(element);

		if (!collapsible && element.classList.contains('o-collapse')) {
			collapsible = new Collapse(element);
		}

		return collapsible;
	}

	module.exports = Collapse;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*jshint browser:true, node:true*/

	'use strict';

	/**
	 * @preserve Create and manage a DOM event delegator.
	 *
	 * @version 0.3.0
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
	var Delegate = __webpack_require__(11);

	module.exports = function(root) {
	  return new Delegate(root);
	};

	module.exports.Delegate = Delegate;


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*jshint browser:true, node:true*/

	'use strict';

	module.exports = Delegate;

	/**
	 * DOM event delegator
	 *
	 * The delegator will listen
	 * for events that bubble up
	 * to the root node.
	 *
	 * @constructor
	 * @param {Node|string} [root] The root node or a selector string matching the root node
	 */
	function Delegate(root) {

	  /**
	   * Maintain a map of listener
	   * lists, keyed by event name.
	   *
	   * @type Object
	   */
	  this.listenerMap = [{}, {}];
	  if (root) {
	    this.root(root);
	  }

	  /** @type function() */
	  this.handle = Delegate.prototype.handle.bind(this);
	}

	/**
	 * Start listening for events
	 * on the provided DOM element
	 *
	 * @param  {Node|string} [root] The root node or a selector string matching the root node
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.root = function(root) {
	  var listenerMap = this.listenerMap;
	  var eventType;

	  // Remove master event listeners
	  if (this.rootElement) {
	    for (eventType in listenerMap[1]) {
	      if (listenerMap[1].hasOwnProperty(eventType)) {
	        this.rootElement.removeEventListener(eventType, this.handle, true);
	      }
	    }
	    for (eventType in listenerMap[0]) {
	      if (listenerMap[0].hasOwnProperty(eventType)) {
	        this.rootElement.removeEventListener(eventType, this.handle, false);
	      }
	    }
	  }

	  // If no root or root is not
	  // a dom node, then remove internal
	  // root reference and exit here
	  if (!root || !root.addEventListener) {
	    if (this.rootElement) {
	      delete this.rootElement;
	    }
	    return this;
	  }

	  /**
	   * The root node at which
	   * listeners are attached.
	   *
	   * @type Node
	   */
	  this.rootElement = root;

	  // Set up master event listeners
	  for (eventType in listenerMap[1]) {
	    if (listenerMap[1].hasOwnProperty(eventType)) {
	      this.rootElement.addEventListener(eventType, this.handle, true);
	    }
	  }
	  for (eventType in listenerMap[0]) {
	    if (listenerMap[0].hasOwnProperty(eventType)) {
	      this.rootElement.addEventListener(eventType, this.handle, false);
	    }
	  }

	  return this;
	};

	/**
	 * @param {string} eventType
	 * @returns boolean
	 */
	Delegate.prototype.captureForType = function(eventType) {
	  return ['blur', 'error', 'focus', 'load', 'resize', 'scroll'].indexOf(eventType) !== -1;
	};

	/**
	 * Attach a handler to one
	 * event for all elements
	 * that match the selector,
	 * now or in the future
	 *
	 * The handler function receives
	 * three arguments: the DOM event
	 * object, the node that matched
	 * the selector while the event
	 * was bubbling and a reference
	 * to itself. Within the handler,
	 * 'this' is equal to the second
	 * argument.
	 *
	 * The node that actually received
	 * the event can be accessed via
	 * 'event.target'.
	 *
	 * @param {string} eventType Listen for these events
	 * @param {string|undefined} selector Only handle events on elements matching this selector, if undefined match root element
	 * @param {function()} handler Handler function - event data passed here will be in event.data
	 * @param {Object} [eventData] Data to pass in event.data
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.on = function(eventType, selector, handler, useCapture) {
	  var root, listenerMap, matcher, matcherParam;

	  if (!eventType) {
	    throw new TypeError('Invalid event type: ' + eventType);
	  }

	  // handler can be passed as
	  // the second or third argument
	  if (typeof selector === 'function') {
	    useCapture = handler;
	    handler = selector;
	    selector = null;
	  }

	  // Fallback to sensible defaults
	  // if useCapture not set
	  if (useCapture === undefined) {
	    useCapture = this.captureForType(eventType);
	  }

	  if (typeof handler !== 'function') {
	    throw new TypeError('Handler must be a type of Function');
	  }

	  root = this.rootElement;
	  listenerMap = this.listenerMap[useCapture ? 1 : 0];

	  // Add master handler for type if not created yet
	  if (!listenerMap[eventType]) {
	    if (root) {
	      root.addEventListener(eventType, this.handle, useCapture);
	    }
	    listenerMap[eventType] = [];
	  }

	  if (!selector) {
	    matcherParam = null;

	    // COMPLEX - matchesRoot needs to have access to
	    // this.rootElement, so bind the function to this.
	    matcher = matchesRoot.bind(this);

	  // Compile a matcher for the given selector
	  } else if (/^[a-z]+$/i.test(selector)) {
	    matcherParam = selector;
	    matcher = matchesTag;
	  } else if (/^#[a-z0-9\-_]+$/i.test(selector)) {
	    matcherParam = selector.slice(1);
	    matcher = matchesId;
	  } else {
	    matcherParam = selector;
	    matcher = matches;
	  }

	  // Add to the list of listeners
	  listenerMap[eventType].push({
	    selector: selector,
	    handler: handler,
	    matcher: matcher,
	    matcherParam: matcherParam
	  });

	  return this;
	};

	/**
	 * Remove an event handler
	 * for elements that match
	 * the selector, forever
	 *
	 * @param {string} [eventType] Remove handlers for events matching this type, considering the other parameters
	 * @param {string} [selector] If this parameter is omitted, only handlers which match the other two will be removed
	 * @param {function()} [handler] If this parameter is omitted, only handlers which match the previous two will be removed
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.off = function(eventType, selector, handler, useCapture) {
	  var i, listener, listenerMap, listenerList, singleEventType;

	  // Handler can be passed as
	  // the second or third argument
	  if (typeof selector === 'function') {
	    useCapture = handler;
	    handler = selector;
	    selector = null;
	  }

	  // If useCapture not set, remove
	  // all event listeners
	  if (useCapture === undefined) {
	    this.off(eventType, selector, handler, true);
	    this.off(eventType, selector, handler, false);
	    return this;
	  }

	  listenerMap = this.listenerMap[useCapture ? 1 : 0];
	  if (!eventType) {
	    for (singleEventType in listenerMap) {
	      if (listenerMap.hasOwnProperty(singleEventType)) {
	        this.off(singleEventType, selector, handler);
	      }
	    }

	    return this;
	  }

	  listenerList = listenerMap[eventType];
	  if (!listenerList || !listenerList.length) {
	    return this;
	  }

	  // Remove only parameter matches
	  // if specified
	  for (i = listenerList.length - 1; i >= 0; i--) {
	    listener = listenerList[i];

	    if ((!selector || selector === listener.selector) && (!handler || handler === listener.handler)) {
	      listenerList.splice(i, 1);
	    }
	  }

	  // All listeners removed
	  if (!listenerList.length) {
	    delete listenerMap[eventType];

	    // Remove the main handler
	    if (this.rootElement) {
	      this.rootElement.removeEventListener(eventType, this.handle, useCapture);
	    }
	  }

	  return this;
	};


	/**
	 * Handle an arbitrary event.
	 *
	 * @param {Event} event
	 */
	Delegate.prototype.handle = function(event) {
	  var i, l, type = event.type, root, phase, listener, returned, listenerList = [], target, /** @const */ EVENTIGNORE = 'ftLabsDelegateIgnore';

	  if (event[EVENTIGNORE] === true) {
	    return;
	  }

	  target = event.target;

	  // Hardcode value of Node.TEXT_NODE
	  // as not defined in IE8
	  if (target.nodeType === 3) {
	    target = target.parentNode;
	  }

	  root = this.rootElement;

	  phase = event.eventPhase || ( event.target !== event.currentTarget ? 3 : 2 );
	  
	  switch (phase) {
	    case 1: //Event.CAPTURING_PHASE:
	      listenerList = this.listenerMap[1][type];
	    break;
	    case 2: //Event.AT_TARGET:
	      if (this.listenerMap[0] && this.listenerMap[0][type]) listenerList = listenerList.concat(this.listenerMap[0][type]);
	      if (this.listenerMap[1] && this.listenerMap[1][type]) listenerList = listenerList.concat(this.listenerMap[1][type]);
	    break;
	    case 3: //Event.BUBBLING_PHASE:
	      listenerList = this.listenerMap[0][type];
	    break;
	  }

	  // Need to continuously check
	  // that the specific list is
	  // still populated in case one
	  // of the callbacks actually
	  // causes the list to be destroyed.
	  l = listenerList.length;
	  while (target && l) {
	    for (i = 0; i < l; i++) {
	      listener = listenerList[i];

	      // Bail from this loop if
	      // the length changed and
	      // no more listeners are
	      // defined between i and l.
	      if (!listener) {
	        break;
	      }

	      // Check for match and fire
	      // the event if there's one
	      //
	      // TODO:MCG:20120117: Need a way
	      // to check if event#stopImmediatePropagation
	      // was called. If so, break both loops.
	      if (listener.matcher.call(target, listener.matcherParam, target)) {
	        returned = this.fire(event, target, listener);
	      }

	      // Stop propagation to subsequent
	      // callbacks if the callback returned
	      // false
	      if (returned === false) {
	        event[EVENTIGNORE] = true;
	        event.preventDefault();
	        return;
	      }
	    }

	    // TODO:MCG:20120117: Need a way to
	    // check if event#stopPropagation
	    // was called. If so, break looping
	    // through the DOM. Stop if the
	    // delegation root has been reached
	    if (target === root) {
	      break;
	    }

	    l = listenerList.length;
	    target = target.parentElement;
	  }
	};

	/**
	 * Fire a listener on a target.
	 *
	 * @param {Event} event
	 * @param {Node} target
	 * @param {Object} listener
	 * @returns {boolean}
	 */
	Delegate.prototype.fire = function(event, target, listener) {
	  return listener.handler.call(target, event, target);
	};

	/**
	 * Check whether an element
	 * matches a generic selector.
	 *
	 * @type function()
	 * @param {string} selector A CSS selector
	 */
	var matches = (function(el) {
	  if (!el) return;
	  var p = el.prototype;
	  return (p.matches || p.matchesSelector || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector);
	}(Element));

	/**
	 * Check whether an element
	 * matches a tag selector.
	 *
	 * Tags are NOT case-sensitive,
	 * except in XML (and XML-based
	 * languages such as XHTML).
	 *
	 * @param {string} tagName The tag name to test against
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesTag(tagName, element) {
	  return tagName.toLowerCase() === element.tagName.toLowerCase();
	}

	/**
	 * Check whether an element
	 * matches the root.
	 *
	 * @param {?String} selector In this case this is always passed through as null and not used
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesRoot(selector, element) {
	  /*jshint validthis:true*/
	  if (this.rootElement === window) return element === document;
	  return this.rootElement === element;
	}

	/**
	 * Check whether the ID of
	 * the element in 'this'
	 * matches the given ID.
	 *
	 * IDs are case-sensitive.
	 *
	 * @param {string} id The ID to test against
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesId(id, element) {
	  return id === element.id;
	}

	/**
	 * Short hand for off()
	 * and root(), ie both
	 * with no parameters
	 *
	 * @return void
	 */
	Delegate.prototype.destroy = function() {
	  this.off();
	  this.root();
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*global require, module*/
	'use strict';

	module.exports = __webpack_require__(13);

/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	 */
	// @version 0.7.9

	(function (root) {
		var defineProperty = Object.defineProperty;
		var counter = Date.now() % 1e9;

		var WeakMap = function() {
			this.name = "__st" + (Math.random() * 1e9 >>> 0) + (counter++ + "__");
		};

		WeakMap.prototype = {
			set: function(key, value) {
				var entry = key[this.name];
				if (entry && entry[0] === key) entry[1] = value; else defineProperty(key, this.name, {
					value: [ key, value ],
					writable: true
				});
				return this;
			},
			get: function(key) {
				var entry;
				return (entry = key[this.name]) && entry[0] === key ? entry[1] : undefined;
			},
			"delete": function(key) {
				var entry = key[this.name];
				if (!entry || entry[0] !== key) return false;
				entry[0] = entry[1] = undefined;
				return true;
			},
			has: function(key) {
				var entry = key[this.name];
				if (!entry) return false;
				return entry[0] === key;
			}
		};

		module.exports = (root || {}).WeakMap || WeakMap;

	})(this || window);

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	exports.dispatchEvent = function(element, name, data) {
		if (document.createEvent && element.dispatchEvent) {
			var event = document.createEvent('Event');
			event.initEvent(name, true, true);

			if (data) {
				event.detail = data;
			}

			element.dispatchEvent(event);
		}
	};

	exports.forEach = function (array, callback) {
		for (var i = 0, l = array.length; i < l; i++) {
			callback.call(this, i, array[i]);
		}
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*global require, module*/
	'use strict';

	// bundled styling
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./main.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var Drawer = __webpack_require__(17);

	var constructAll = function () {
		Drawer.init();
		document.removeEventListener('o.InitAllDrawerElements', constructAll);
	};

	document.addEventListener('o.InitAllDrawerElements', constructAll);

	module.exports = Drawer;


/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint -W079 */

	'use strict';

	var DomDelegate = __webpack_require__(18);
	var WeakMap = __webpack_require__(20);

	var dispatchEvent = function(element, name, data) {
		if (document.createEvent && element.dispatchEvent) {
			var event = document.createEvent('Event');
			event.initEvent(name, true, true);

			if (data) {
				event.detail = data;
			}

			element.dispatchEvent(event);
		}
	};

	function Drawer(el){
		if (!(this instanceof Drawer)){
			throw new TypeError('Constructor Drawer requires \'new\'');
		}
		if (!el){
			throw new TypeError('missing required argument: element');
		}
		if(typeof el === 'string'){
			el = document.querySelector(el);
		}

		var triggerSelector =
			'[data-toggle="o-drawer"][href="#' + el.id + '"],' +
			'[data-toggle="o-drawer"][data-target="#' + el.id + '"]';

		this.target = el;
		this.trigger = document.querySelectorAll(triggerSelector);
		Drawer.cache.set(el, this);

		this.target.classList.add('o-drawer');

		var hasAlignmentClass = this.target.classList.contains('o-drawer-left') ||
			this.target.classList.contains('o-drawer-right');

		if(!hasAlignmentClass){
			this.target.classList.add('o-drawer-left');
		}
		this.target.setAttribute('aria-expanded', false);

		if(!Drawer.delegate){
			var delegate = new DomDelegate(document.body);
			delegate.on('click', '[data-toggle="o-drawer"], [data-close="o-drawer"], [data-open="o-drawer"]', function handleClick(e) {
				e.preventDefault();


				var trigger = getTrigger(e.target);
				var target = getTargetFromTrigger(trigger);

				for(var i=0, l = target.length; i<l; i++){
					var t = target[i];
					var drawer = Drawer.cache.get(t);

					if (!drawer && t.getAttribute('data-o-component') === 'o-collapse') {
						drawer = new Drawer(t);
					}

					if (drawer) {
						var action = openCloseToggle(trigger);
						drawer[action]();
					}
				}
			});
			Drawer.delegate = delegate;
		}

		return this;
	}

	Drawer.cache = new WeakMap();

	/**
	 * Initializes all drawer elements on the page or within
	 * the element passed in.
	 * @param	{HTMLElement|string} element DOM element or selector.
	 * @return {DropdownMenu[]} List of Drawer instances that
	 * have been initialized.
	 */
	Drawer.init = function(element){
		var drawerEls = selectAll(element);
		var drawers = [];

		for(var i = 0, l = drawerEls.length; i < l; i++){
			drawers.push(new Drawer(drawerEls[i]));
		}

		return drawers;
	};

	/**
	 * Destroy all Drawer Components on the page
	 */
	Drawer.destroy = function () {
		if (Drawer.bodyDelegate) {
			Drawer.bodyDelegate.destroy();
		}
	};

	/**
	 * Opens the Drawer
	 * @return {Drawer} self, for chainability
	 */

	Drawer.prototype.open = function(){
		this.target.style.display = 'block';
		var t= this.target;
		setTimeout(function(){
			t.classList.add('o-drawer-open');
			t.setAttribute('aria-expanded', true);
		}, 50);

		dispatchEvent(this.target, 'oDrawer.open');
		return this;
	};

	/**
	* Closes the Drawer
	* @return {Drawer} self, for chainability
	*/

	Drawer.prototype.close = function(){
		this.target.classList.remove('o-drawer-open');
		this.target.setAttribute('aria-expanded', true);
		dispatchEvent(this.target, 'oDrawer.close');
		if(this.target.classList.contains('o-drawer-animated')){
			var t = this.target;
			setTimeout(function(){
				t.style.display = 'none';
			}, 400);
		}else{
			this.target.style.display = 'none';
		}
		return this;
	};

	/**
	* Toggles the Drawer
	* @return {Drawer} self, for chainability
	*/

	Drawer.prototype.toggle = function(){
		var visible = this.target.classList.contains('o-drawer-open');
		if(visible){
			this.close();
		}
		else{
			this.open();
		}
		return this;
	};

	function selectAll(element){
		if(!element){
			element = document.body;
		}
		else if(!(element instanceof HTMLElement)){
			element = document.querySelectorAll(element)[0];
		}

		return element.querySelectorAll('[data-o-component="o-drawer"]');
	}

	function openCloseToggle(el) {
		if(el){
			if(el.getAttribute('data-toggle') === 'o-drawer'){
				return 'toggle';
			}
			else if(el.getAttribute('data-close') === 'o-drawer'){
				return 'close';
			}
			else if(el.getAttribute('data-open') === 'o-drawer'){
				return 'open';
			}
		}
		return false;
	}

	function getTrigger(element) {
		while (element && element.getAttribute('data-toggle') !== 'o-drawer' &&
						element.getAttribute('data-close') !== 'o-drawer' &&
						element.getAttribute('data-open') !== 'o-drawer') {
			element = element.parentElement;
		}

		return element;
	}

	function getTargetFromTrigger(element) {
		var target = element.getAttribute('data-target') || element.getAttribute('href');
		return document.querySelectorAll(target);
	}

	module.exports = Drawer;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*jshint browser:true, node:true*/

	'use strict';

	/**
	 * @preserve Create and manage a DOM event delegator.
	 *
	 * @version 0.3.0
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
	var Delegate = __webpack_require__(19);

	module.exports = function(root) {
	  return new Delegate(root);
	};

	module.exports.Delegate = Delegate;


/***/ },
/* 19 */
/***/ function(module, exports) {

	/*jshint browser:true, node:true*/

	'use strict';

	module.exports = Delegate;

	/**
	 * DOM event delegator
	 *
	 * The delegator will listen
	 * for events that bubble up
	 * to the root node.
	 *
	 * @constructor
	 * @param {Node|string} [root] The root node or a selector string matching the root node
	 */
	function Delegate(root) {

	  /**
	   * Maintain a map of listener
	   * lists, keyed by event name.
	   *
	   * @type Object
	   */
	  this.listenerMap = [{}, {}];
	  if (root) {
	    this.root(root);
	  }

	  /** @type function() */
	  this.handle = Delegate.prototype.handle.bind(this);
	}

	/**
	 * Start listening for events
	 * on the provided DOM element
	 *
	 * @param  {Node|string} [root] The root node or a selector string matching the root node
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.root = function(root) {
	  var listenerMap = this.listenerMap;
	  var eventType;

	  // Remove master event listeners
	  if (this.rootElement) {
	    for (eventType in listenerMap[1]) {
	      if (listenerMap[1].hasOwnProperty(eventType)) {
	        this.rootElement.removeEventListener(eventType, this.handle, true);
	      }
	    }
	    for (eventType in listenerMap[0]) {
	      if (listenerMap[0].hasOwnProperty(eventType)) {
	        this.rootElement.removeEventListener(eventType, this.handle, false);
	      }
	    }
	  }

	  // If no root or root is not
	  // a dom node, then remove internal
	  // root reference and exit here
	  if (!root || !root.addEventListener) {
	    if (this.rootElement) {
	      delete this.rootElement;
	    }
	    return this;
	  }

	  /**
	   * The root node at which
	   * listeners are attached.
	   *
	   * @type Node
	   */
	  this.rootElement = root;

	  // Set up master event listeners
	  for (eventType in listenerMap[1]) {
	    if (listenerMap[1].hasOwnProperty(eventType)) {
	      this.rootElement.addEventListener(eventType, this.handle, true);
	    }
	  }
	  for (eventType in listenerMap[0]) {
	    if (listenerMap[0].hasOwnProperty(eventType)) {
	      this.rootElement.addEventListener(eventType, this.handle, false);
	    }
	  }

	  return this;
	};

	/**
	 * @param {string} eventType
	 * @returns boolean
	 */
	Delegate.prototype.captureForType = function(eventType) {
	  return ['blur', 'error', 'focus', 'load', 'resize', 'scroll'].indexOf(eventType) !== -1;
	};

	/**
	 * Attach a handler to one
	 * event for all elements
	 * that match the selector,
	 * now or in the future
	 *
	 * The handler function receives
	 * three arguments: the DOM event
	 * object, the node that matched
	 * the selector while the event
	 * was bubbling and a reference
	 * to itself. Within the handler,
	 * 'this' is equal to the second
	 * argument.
	 *
	 * The node that actually received
	 * the event can be accessed via
	 * 'event.target'.
	 *
	 * @param {string} eventType Listen for these events
	 * @param {string|undefined} selector Only handle events on elements matching this selector, if undefined match root element
	 * @param {function()} handler Handler function - event data passed here will be in event.data
	 * @param {Object} [eventData] Data to pass in event.data
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.on = function(eventType, selector, handler, useCapture) {
	  var root, listenerMap, matcher, matcherParam;

	  if (!eventType) {
	    throw new TypeError('Invalid event type: ' + eventType);
	  }

	  // handler can be passed as
	  // the second or third argument
	  if (typeof selector === 'function') {
	    useCapture = handler;
	    handler = selector;
	    selector = null;
	  }

	  // Fallback to sensible defaults
	  // if useCapture not set
	  if (useCapture === undefined) {
	    useCapture = this.captureForType(eventType);
	  }

	  if (typeof handler !== 'function') {
	    throw new TypeError('Handler must be a type of Function');
	  }

	  root = this.rootElement;
	  listenerMap = this.listenerMap[useCapture ? 1 : 0];

	  // Add master handler for type if not created yet
	  if (!listenerMap[eventType]) {
	    if (root) {
	      root.addEventListener(eventType, this.handle, useCapture);
	    }
	    listenerMap[eventType] = [];
	  }

	  if (!selector) {
	    matcherParam = null;

	    // COMPLEX - matchesRoot needs to have access to
	    // this.rootElement, so bind the function to this.
	    matcher = matchesRoot.bind(this);

	  // Compile a matcher for the given selector
	  } else if (/^[a-z]+$/i.test(selector)) {
	    matcherParam = selector;
	    matcher = matchesTag;
	  } else if (/^#[a-z0-9\-_]+$/i.test(selector)) {
	    matcherParam = selector.slice(1);
	    matcher = matchesId;
	  } else {
	    matcherParam = selector;
	    matcher = matches;
	  }

	  // Add to the list of listeners
	  listenerMap[eventType].push({
	    selector: selector,
	    handler: handler,
	    matcher: matcher,
	    matcherParam: matcherParam
	  });

	  return this;
	};

	/**
	 * Remove an event handler
	 * for elements that match
	 * the selector, forever
	 *
	 * @param {string} [eventType] Remove handlers for events matching this type, considering the other parameters
	 * @param {string} [selector] If this parameter is omitted, only handlers which match the other two will be removed
	 * @param {function()} [handler] If this parameter is omitted, only handlers which match the previous two will be removed
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.off = function(eventType, selector, handler, useCapture) {
	  var i, listener, listenerMap, listenerList, singleEventType;

	  // Handler can be passed as
	  // the second or third argument
	  if (typeof selector === 'function') {
	    useCapture = handler;
	    handler = selector;
	    selector = null;
	  }

	  // If useCapture not set, remove
	  // all event listeners
	  if (useCapture === undefined) {
	    this.off(eventType, selector, handler, true);
	    this.off(eventType, selector, handler, false);
	    return this;
	  }

	  listenerMap = this.listenerMap[useCapture ? 1 : 0];
	  if (!eventType) {
	    for (singleEventType in listenerMap) {
	      if (listenerMap.hasOwnProperty(singleEventType)) {
	        this.off(singleEventType, selector, handler);
	      }
	    }

	    return this;
	  }

	  listenerList = listenerMap[eventType];
	  if (!listenerList || !listenerList.length) {
	    return this;
	  }

	  // Remove only parameter matches
	  // if specified
	  for (i = listenerList.length - 1; i >= 0; i--) {
	    listener = listenerList[i];

	    if ((!selector || selector === listener.selector) && (!handler || handler === listener.handler)) {
	      listenerList.splice(i, 1);
	    }
	  }

	  // All listeners removed
	  if (!listenerList.length) {
	    delete listenerMap[eventType];

	    // Remove the main handler
	    if (this.rootElement) {
	      this.rootElement.removeEventListener(eventType, this.handle, useCapture);
	    }
	  }

	  return this;
	};


	/**
	 * Handle an arbitrary event.
	 *
	 * @param {Event} event
	 */
	Delegate.prototype.handle = function(event) {
	  var i, l, type = event.type, root, phase, listener, returned, listenerList = [], target, /** @const */ EVENTIGNORE = 'ftLabsDelegateIgnore';

	  if (event[EVENTIGNORE] === true) {
	    return;
	  }

	  target = event.target;

	  // Hardcode value of Node.TEXT_NODE
	  // as not defined in IE8
	  if (target.nodeType === 3) {
	    target = target.parentNode;
	  }

	  root = this.rootElement;

	  phase = event.eventPhase || ( event.target !== event.currentTarget ? 3 : 2 );
	  
	  switch (phase) {
	    case 1: //Event.CAPTURING_PHASE:
	      listenerList = this.listenerMap[1][type];
	    break;
	    case 2: //Event.AT_TARGET:
	      if (this.listenerMap[0] && this.listenerMap[0][type]) listenerList = listenerList.concat(this.listenerMap[0][type]);
	      if (this.listenerMap[1] && this.listenerMap[1][type]) listenerList = listenerList.concat(this.listenerMap[1][type]);
	    break;
	    case 3: //Event.BUBBLING_PHASE:
	      listenerList = this.listenerMap[0][type];
	    break;
	  }

	  // Need to continuously check
	  // that the specific list is
	  // still populated in case one
	  // of the callbacks actually
	  // causes the list to be destroyed.
	  l = listenerList.length;
	  while (target && l) {
	    for (i = 0; i < l; i++) {
	      listener = listenerList[i];

	      // Bail from this loop if
	      // the length changed and
	      // no more listeners are
	      // defined between i and l.
	      if (!listener) {
	        break;
	      }

	      // Check for match and fire
	      // the event if there's one
	      //
	      // TODO:MCG:20120117: Need a way
	      // to check if event#stopImmediatePropagation
	      // was called. If so, break both loops.
	      if (listener.matcher.call(target, listener.matcherParam, target)) {
	        returned = this.fire(event, target, listener);
	      }

	      // Stop propagation to subsequent
	      // callbacks if the callback returned
	      // false
	      if (returned === false) {
	        event[EVENTIGNORE] = true;
	        event.preventDefault();
	        return;
	      }
	    }

	    // TODO:MCG:20120117: Need a way to
	    // check if event#stopPropagation
	    // was called. If so, break looping
	    // through the DOM. Stop if the
	    // delegation root has been reached
	    if (target === root) {
	      break;
	    }

	    l = listenerList.length;
	    target = target.parentElement;
	  }
	};

	/**
	 * Fire a listener on a target.
	 *
	 * @param {Event} event
	 * @param {Node} target
	 * @param {Object} listener
	 * @returns {boolean}
	 */
	Delegate.prototype.fire = function(event, target, listener) {
	  return listener.handler.call(target, event, target);
	};

	/**
	 * Check whether an element
	 * matches a generic selector.
	 *
	 * @type function()
	 * @param {string} selector A CSS selector
	 */
	var matches = (function(el) {
	  if (!el) return;
	  var p = el.prototype;
	  return (p.matches || p.matchesSelector || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector);
	}(Element));

	/**
	 * Check whether an element
	 * matches a tag selector.
	 *
	 * Tags are NOT case-sensitive,
	 * except in XML (and XML-based
	 * languages such as XHTML).
	 *
	 * @param {string} tagName The tag name to test against
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesTag(tagName, element) {
	  return tagName.toLowerCase() === element.tagName.toLowerCase();
	}

	/**
	 * Check whether an element
	 * matches the root.
	 *
	 * @param {?String} selector In this case this is always passed through as null and not used
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesRoot(selector, element) {
	  /*jshint validthis:true*/
	  if (this.rootElement === window) return element === document;
	  return this.rootElement === element;
	}

	/**
	 * Check whether the ID of
	 * the element in 'this'
	 * matches the given ID.
	 *
	 * IDs are case-sensitive.
	 *
	 * @param {string} id The ID to test against
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesId(id, element) {
	  return id === element.id;
	}

	/**
	 * Short hand for off()
	 * and root(), ie both
	 * with no parameters
	 *
	 * @return void
	 */
	Delegate.prototype.destroy = function() {
	  this.off();
	  this.root();
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/*global require, module*/
	'use strict';

	module.exports = __webpack_require__(21);

/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	 */
	// @version 0.7.9

	(function (root) {
		var defineProperty = Object.defineProperty;
		var counter = Date.now() % 1e9;

		var WeakMap = function() {
			this.name = "__st" + (Math.random() * 1e9 >>> 0) + (counter++ + "__");
		};

		WeakMap.prototype = {
			set: function(key, value) {
				var entry = key[this.name];
				if (entry && entry[0] === key) entry[1] = value; else defineProperty(key, this.name, {
					value: [ key, value ],
					writable: true
				});
				return this;
			},
			get: function(key) {
				var entry;
				return (entry = key[this.name]) && entry[0] === key ? entry[1] : undefined;
			},
			"delete": function(key) {
				var entry = key[this.name];
				if (!entry || entry[0] !== key) return false;
				entry[0] = entry[1] = undefined;
				return true;
			},
			has: function(key) {
				var entry = key[this.name];
				if (!entry) return false;
				return entry[0] === key;
			}
		};

		module.exports = (root || {}).WeakMap || WeakMap;

	})(this || window);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/*global require*/
	__webpack_require__(2);

	document.addEventListener("DOMContentLoaded", function() {
		"use strict";
		document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
	});

	var testContent = {
		title: 'Test Accordion',
		excerpt: 'A test of the accordion for content.',
		content: '	<div class="demo-panel">		<div class="demo-panel-heading">			<h5 data-toggle="o-collapse"				data-target="#item-1"				data-parent="#accordion">Item 1</h5>		</div>		<div class="demo-panel-body">			<p id="item-1" class="o-collapse">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>		</div>	</div>	<div class="demo-panel">		<div class="demo-panel-heading">			<h5 data-toggle="o-collapse"				data-target="#item-2"				data-parent="#accordion">Item 2</h5>		</div>		<div class="demo-panel-body">			<p id="item-2" class="o-collapse">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>		</div>	</div>	<div class="demo-panel">		<div class="demo-panel-heading">			<h5 data-toggle="o-collapse"				data-target="#item-3"				data-parent="#accordion">Item 3</h5>		</div>		<div class="demo-panel-body">			<p id="item-3" class="o-collapse">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>		</div>	</div>	<div class="demo-panel">		<div class="demo-panel-heading">			<h5 data-toggle="o-collapse"				data-target="#item-4"				data-parent="#accordion">Item 4</h5>		</div>		<div class="demo-panel-body">			<p id="item-4" class="o-collapse">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>		</div>	</div>'
	};
	window.getAndConsoleLogHelp = function(){
		var help = document.getElementById('o-contextual-help-drawer').oContextualHelp;
		console.log(help);
	}

	window.openSpecificArticle = function(topic){
		var help = document.getElementById('o-contextual-help-drawer').oContextualHelp;
		help.openHelpTopic(topic);
	}

	window.issueHelpClickFromHeader = function(){
		var el = document.querySelector('.o-app-header');
		// now make it emit and oAppHeader.help.toggle
		if(document.createEvent && el.dispatchEvent){
			var evt = document.createEvent('Event');
			evt.initEvent('oAppHeader.help.toggle', true, true)
			el.dispatchEvent(evt);
		}
	}

	window.openThenAddATopicsAfterTime = function(topics, delay){
		var help = document.getElementById('o-contextual-help-drawer').oContextualHelp;
		help.open();
		setTimeout(function(){
			help.addTopics(topics)
		}, delay);
	}

	window.openThenRemoveTopics = function(topics, delay){
		var help = document.getElementById('o-contextual-help-drawer').oContextualHelp;
		help.open();
		setTimeout(function(){
			help.removeTopics(topics)
		}, delay);
	}

	window.openThenRemoveAll = function(){
		var help = document.getElementById('o-contextual-help-drawer').oContextualHelp;
		help.open();
		setTimeout(function(){
			help.removeAllTopics()
		}, 500);
	}

	window.openAndRandomSort = function(){
		if(window.loop){
			clearInterval(window.loop);
		}
		var help = document.getElementById('o-contextual-help-drawer').oContextualHelp;
		help.open();
		function rndSort(){
			var ts = help.getTopics();
			ts.sort(function(){
				return Math.floor(Math.random()*3) - 1;
			});
			help.removeAllTopics();
			help.addTopics(ts);
		}
		setTimeout(function(){
			window.loop = setInterval(rndSort, 300);
		}, 500);
		setTimeout(function(){
			clearInterval(window.loop);
		}, 5500);
	}

	window.testAccordion = function(){
		var help = document.getElementById('o-contextual-help-drawer').oContextualHelp;
		help.cache.accordion = testContent;
		help.openHelpTopic('accordion');
	}

	window.signinTest = function(){
		var help = document.getElementById('o-contextual-help-drawer').oContextualHelp;
		help.removeAllTopics();
		var newTopics = [
			'console/instructor/validationtime',
			'console/instructor/validatedinstructor',
			'console/instructor/courseregsettings',
			'console/instructor/educatorresources',
			'console/instructor/contactsupport'
		];
		help.addTopics(newTopics);
	}

	window.testCustomContent = function(){
		var customContent = document.getElementById('custom-content').value,
			secretDOM = document.getElementById('secret-dom');
		console.log('customContent', customContent);
		secretDOM.innerHTML = customContent;
		var data = {
			title: false,
			excerpt: '',
			content: false
		};
		var titleEl = secretDOM.getElementsByTagName('h1');
		if(titleEl && titleEl.length > 0){
			titleEl = titleEl[0];
			data.title = titleEl.innerHTML;
			titleEl.parentNode.removeChild(titleEl);
			data.content = secretDOM.innerHTML;
		}
		var contentWords = [];
		var contentParagraphs = secretDOM.querySelectorAll('p');
		for(var i=0, l=contentParagraphs.length; i<l; i++){
			var para = contentParagraphs[i];
			var words = para.innerHTML.split(' ');
			contentWords.push(words);
		}
		contentWords.forEach(function(w){
	    // 80 character excerpt limit
	    if(data.excerpt.length + w.length + 1 < 80){
	      data.excerpt += w + ' ';
	    }
	  });

		var now = new Date().getTime();
		var help = document.getElementById('o-contextual-help-drawer').oContextualHelp;
		help.cache['help-'+now] = data;
		help.openHelpTopic('help-'+now);
	}


/***/ }
/******/ ]);