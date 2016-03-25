/*global require, module*/
'use strict';

// bundled styling
require('./main.scss');

var ContextualHelp = require('./src/js/ContextualHelp'),
		Drawer = require('@pearson-components/drawer/main');


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
