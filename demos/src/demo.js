/*global require*/
require('../../main');

var sani = require('sanitize-html'),
	whitelistTags = ['a',  'abbr',  'acronym',  'address',  'article',  'aside',  'b',  'blockquote',  'caption',  'code',  'div',  'dl',  'dt',  'em',  'figcaption',  'figure',  'h1',  'h2',  'h3',  'h4',  'h5',  'h6',  'hr',  'i',  'img',  'ins',  'li',  'map',  'meter',  'nav',  'ol',  'output',  'p',  'pre',  'q',  's',  'section',  'small',  'span',  'strong',  'sub',  'sup',  'table',  'tbody',  'td',  'tfoot',  'th',  'thead',  'time',  'tr',  'u',  'ul',  'var',  'wbr'],
	saniOpts = {allowedTags: whitelistTags};

document.addEventListener("DOMContentLoaded", function() {
	"use strict";
	document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
});

var testContent = {
	title: 'Test Accordion',
	excerpt: 'A test of the accordion for content.',
	content: '	<div class="demo-panel">		<div class="demo-panel-heading">			<h5 data-toggle="o-collapse"				data-target="#item-1"				data-parent="#accordion">Item 1</h5>		</div>		<div class="demo-panel-body">			<p id="item-1" class="o-collapse">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>		</div>	</div>	<div class="demo-panel">		<div class="demo-panel-heading">			<h5 data-toggle="o-collapse"				data-target="#item-2"				data-parent="#accordion">Item 2</h5>		</div>		<div class="demo-panel-body">			<p id="item-2" class="o-collapse">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>		</div>	</div>	<div class="demo-panel">		<div class="demo-panel-heading">			<h5 data-toggle="o-collapse"				data-target="#item-3"				data-parent="#accordion">Item 3</h5>		</div>		<div class="demo-panel-body">			<p id="item-3" class="o-collapse">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>		</div>	</div>	<div class="demo-panel">		<div class="demo-panel-heading">			<h5 data-toggle="o-collapse"				data-target="#item-4"				data-parent="#accordion">Item 4</h5>		</div>		<div class="demo-panel-body">			<p id="item-4" class="o-collapse">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>		</div>	</div>'
};
function getAndConsoleLogHelp(){
	var help = document.getElementById('o-contextual-help-drawer').oContextualHelp;
	console.log(help);
}

function openSpecificArticle(topic){
	var help = document.getElementById('o-contextual-help-drawer').oContextualHelp;
	help.openHelpTopic(topic);
}

function issueHelpClickFromHeader(){
	var el = document.querySelector('.o-app-header');
	// now make it emit and oAppHeader.help.toggle
	if(document.createEvent && el.dispatchEvent){
		var evt = document.createEvent('Event');
		evt.initEvent('oAppHeader.help.toggle', true, true)
		el.dispatchEvent(evt);
	}
}

function openThenAddATopicsAfterTime(topics, delay){
	var help = document.getElementById('o-contextual-help-drawer').oContextualHelp;
	help.open();
	setTimeout(function(){
		help.addTopics(topics)
	}, delay);
}

function openThenRemoveTopics(topics, delay){
	var help = document.getElementById('o-contextual-help-drawer').oContextualHelp;
	help.open();
	setTimeout(function(){
		help.removeTopics(topics)
	}, delay);
}

function openThenRemoveAll(){
	var help = document.getElementById('o-contextual-help-drawer').oContextualHelp;
	help.open();
	setTimeout(function(){
		help.removeAllTopics()
	}, 500);
}

function openAndRandomSort(){
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

function testAccordion(){
	var help = document.getElementById('o-contextual-help-drawer').oContextualHelp;
	help.cache.accordion = testContent;
	help.openHelpTopic('accordion');
}

function signinTest(){
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
		data.title = sani(titleEl.innerHTML, saniOpts);
		titleEl.parentNode.removeChild(titleEl);
		data.content = sani(secretDOM.innerHTML, saniOpts);
	}
	var contentWords = [];
	var contentParagraphs = secretDOM.querySelectorAll('p');
	for(var i=0, l=contentParagraphs.length; i<l; i++){
		var para = contentParagraphs[i];
		var words = sani(para.innerHTML, {allowedTags: []}). split(' ');
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
