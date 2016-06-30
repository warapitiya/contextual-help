# contextual-help [![Build Status](https://travis-ci.org/Pearson-Higher-Ed/contextual-help.svg?branch=master)](https://travis-ci.org/Pearson-Higher-Ed/contextual-help) [![Coverage Status](https://coveralls.io/repos/Pearson-Higher-Ed/contextual-help/badge.svg?branch=master&service=github)](https://coveralls.io/github/Pearson-Higher-Ed/contextual-help?branch=master)

## How to Consume in an Application

Platform requirements: npm 2+ and the [Elements SDK](https://www.npmjs.com/package/pearson-elements)

	> npm i --save @pearson-components/contextual-help

### Integration with @pearson-components/app-header

Most commonly, contextual-help is used with the app-header component, which emits the `oAppHeader.help.toggle` event when
 the Help link is clicked. Contextual-help, when initialized, will automatically check for app-header in the DOM, and 
 then add the app-header event listener.

To successfully integrate with app-header, **initialize the app-header first**, and then initialize contextual-help next
as described below.

### Script Include (Preferred)

The javascript bundle is available in /node_modules/@pearson-components/contextual-help/build/dist.contextual-help.js.

Add the following script include to your web page:

```html
<script src="path/to/dist.contextual-help.js"></script>
```

Initialize contextual-help in your javascript (after app-header initialization):

```js
document.dispatchEvent(new CustomEvent('o.InitContextualHelp'));
```
  
The config property options are outlined further down in this README.

### CommonJS

This method requires a web dependency bundler, such as webpack or browserify.

After installing the component from npm:

```js
var ContextualHelp = require('@pearson-components/contextual-help');
ContextualHelp.init();
```

## Example Configuration
Start by adding a list of help topics to display, via configuration script element.

```html
<script type="application/json" data-o-contextual-help-config>
  {
    "helpTopics": [
      "console/student/freetrial",
      "console/student/studentresources",
      "console/student/contactsupport"
    ]
  }
</script>
```

This gives contextual-help something to load.  The topics list is presented in order and the values are derived from the path of the files at https://github.com/Pearson-Higher-Ed/help-content in the /out directory without the language code.  The language code can be set dynamically in this component and it's addition to the fetch URL is managed for you.

Do not include the filename extension in the list of configured topics.

This module will automatically inject and initialize itself on the page, with an ID of 'o-contextual-help-drawer'.  The object itself will then be added on to the same element as .oContextualHelp.  So, to access the object after it's initialized, simply use the following.

```js
document.getElementById('o-contextual-help-drawer').oContextualHelp;
```

## Initialization
This module will initialize when o.InitContextualHelp fires.  It can be manually initialized with the static `init()` method.

## API

### Methods

`open()`

Opens the drawer.

`close()`

Closes the drawer.

`toggle()`

Toggles the current state of the drawer.

`setLanguage(langCode)`

Sets the internal member variable for use in fetching content.  Default is 'en-us'.

`openHelpTopic(topicId)`

Directly opens the help contents to a specific topic.  This will bypass the list and is also used internally to go from the help topic list to the help topic contents.

`addTopics(topic || [topic, topic, ...])`

Add a topic or topics to the internal array of topics to display in the list.

`removeTopics(topic || [topic, topic, ...])`

Remove a topic or topics to the internal array of topics to display in the list.

`removeAllTopics()`

Empty the internal help topic array.

`getTopics()`

Returns the internal help topic array.

### Events

Refer to the [drawer](https://github.com/Pearson-Higher-Ed/drawer) documentation for the supported events.


```js
document.getElementById('o-contextual-help-drawer').addEventListener('oDrawer.open', function (e) {
  // Do something
});
```

### How do I debug?

Source maps are enabled for the webpack dev server. Using **Chrome dev tools** - open the "Sources" tab, navigate to 
`top/webpack://./`, and you will find the original source files for which you can set breakpoints in Chrome's debugger.

## Accessibility

The module will automatically update `aria-expanded` depending on the state of the target element.
Do to: https://docs.google.com/document/d/15B4TRmw2pMXl0NcLKWWE9OuiyA9AqnUN_3rJiStijwc/edit

## License

This software is published by Pearson Education under the [MIT license](LICENSE).
