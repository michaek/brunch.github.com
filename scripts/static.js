(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
require.register("compare", function(exports, require, module) {
var __templateData = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),nav = locals_.nav,filename = locals_.filename,social = locals_.social;buf.push("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><title>Brunch | HTML5 application assembler</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\"><link rel=\"stylesheet\" href=\"styles/app.css\"><!--[if lt IE 9]>\n<script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n<![endif]--><!-- Grunticon Loader: place this in the head of your page -->\n<script>\n/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */\nwindow.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!document.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||window.opera&&-1===navigator.userAgent.indexOf(\"Chrome\")),o=function(o){var r=t.document.createElement(\"link\"),a=t.document.getElementsByTagName(\"script\")[0];r.rel=\"stylesheet\",r.href=e[o&&n?0:o?1:2],a.parentNode.insertBefore(r,a)},r=new t.Image;r.onerror=function(){o(!1)},r.onload=function(){o(1===r.width&&1===r.height)},r.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\"}};\ngrunticon( [ \"/images/svg/icons.data.svg.css\", \"/images/svg/icons.data.png.css\", \"/images/svg/icons.fallback.css\" ] );</script>\n<noscript><link href=\"/images/svg/icons.fallback.css\" rel=\"stylesheet\"></noscript></head><body><div id=\"navbar\"><div class=\"container\"><a href=\"/\" class=\"icon-brunch-logo-web\"></a><ul class=\"nav nav--main-nav\">");
// iterate nav
;(function(){
  var $$obj = nav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div></div><div class=\"page__content container\"><div class=\"grid\"><div class=\"grid__item one-whole desk-two-thirds\"><h2>Compare</h2>\n<p>Brunch is similar to <a href=\"http://gruntjs.com\">Grunt</a>, LiveReload and CodeKit.</p>\n<p>And it’s also different.</p>\n<p>LiveReload and CodeKit partly resemble Brunch compilation pipeline, file watching and auto reloading, but they don’t support advanced features like modules, Bower support or source maps generation</p>\n<p>Grunt task manager is in some ways more flexible than Brunch, but its flexibility and explicitness can quickly become complexity.</p></p>\n</div><div class=\"grid__item one-whole desk-one-third\"><div class=\"social-buttons\">");
// iterate social
;(function(){
  var $$obj = social;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  }
}).call(this);

buf.push("</div></div></div><table>\n  <tr>\n    <th>Feature</th>\n    <th>Brunch</th>\n    <th>Grunt</th>\n    <th><span title=\"The Rails asset pipeline\">Rails</span></th>\n    <th>Comment</th>\n  </tr>\n  <tr>\n    <th>Builder, linter, concatenator, minifier</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td>Brunch can compile your JS, CoffeeScript, Stylus, Sass (+ Compass), LESS, Mustache, Handlebars, Jade, Eco (and much more) files, concatenate output to and minify it. It just doesn’t care about languages or frameworks you use.</td>\n  </tr>\n  <tr>\n    <th>File watcher</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td>Brunch recompiles and concats all your stuff automatically on any change, headlessly. No more need in compicated Makefiles and watchers.</td>\n  </tr>\n  <tr>\n    <th>Auto-reload</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td>Brunch reloads your browser window every time you change stuff (with autoreload plugin)</td>\n  </tr>\n  <tr>\n    <th>Framework-agnostic</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>Brunch just doesn’t care about stuff you’re using for structure. You can use any backend you like, be it node.js, Rails or Lift. You can even keep frontend and backend as separate projects.</td>\n  </tr>\n  <tr>\n    <th>Auto-support for modules</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>All script and template files may be wrapped in modules (CommonJS or AMD) to prohibit global public access and encapsulate code. Brunch may also do the job of r.js optimizer automatically.</td>\n  </tr>\n  <tr>\n    <th>Skeletons / boilerplates</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>Brunch can generate your project from predefined template. There’s a lot of great skeleton projects you can use already.</a></td>\n  </tr>\n  <tr>\n    <th>Blazing fast</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>Speed is important for app watchers. Usual brunch compilation takes less time than you need to alt-tab to browser window. Unlike Grunt, Brunch recompiles only changed parts of your app and extensively uses caching for others.</td>\n  </tr>\n  <tr>\n    <th>Incredibly simple</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>All you need to do with Brunch is run one command and everything will be managed for you, without need to write <a href=\"https://gist.github.com/paulmillr/3697384\">sophisticated 300LOC build configs</a>.</td>\n  </tr>\n  <tr>\n    <th>Headless <a href=\"http://bower.io\">Bower</a> integration</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>Brunch supports <a href=\"https://github.com/brunch/brunch/blob/stable/docs/faq.md#how-to-use-bower\">headless integration</a> with Bower package manager. Unlike with Grunt, you don’t need to specify all used files in details — brunch will auto-detect them in most cases and automatically concat in correct order</td>\n  </tr>\n  <tr>\n    <th>Headless source maps generation</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>Brunch automatically generates source maps for all your files so debugging becomes very simple even when all files are concatenated and minified. <!--Brunch simply generates even sophisticated source maps (compile coffeescript and templates -> concatenate all files -> minify with uglify.js)--></td>\n  </tr>\n  <tr>\n    <th>Cross-platform and free</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td>Brunch is free, both as in beer and as in speech and works everywhere.</td>\n  </tr>\n</table><footer><hr class=\"rule\"><p><small>Hosted on <a href=\"https://github.com/brunch/brunch.github.com\">GitHub Pages</a>. The content on this website is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/3.0/deed.en_US\">CC BY 3.0</a>.</small></p></footer></div><script src=\"scripts/app.js\"></script><script>require('scripts/app');\n</script>  <script type=\"text/javascript\">\n    var _gauges = _gauges || [];\n    (function() {\n      var t   = document.createElement('script');\n      t.type  = 'text/javascript';\n      t.async = true;\n      t.id    = 'gauges-tracker';\n      t.setAttribute('data-site-id', '4f1631bbcb25bc723b000007');\n      t.src = '//secure.gaug.es/track.js';\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(t, s);\n    })();\n  </script>\n</body></html>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("examples", function(exports, require, module) {
var __templateData = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),nav = locals_.nav,filename = locals_.filename,social = locals_.social;buf.push("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><title>Brunch | HTML5 application assembler</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\"><link rel=\"stylesheet\" href=\"styles/app.css\"><!--[if lt IE 9]>\n<script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n<![endif]--><!-- Grunticon Loader: place this in the head of your page -->\n<script>\n/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */\nwindow.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!document.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||window.opera&&-1===navigator.userAgent.indexOf(\"Chrome\")),o=function(o){var r=t.document.createElement(\"link\"),a=t.document.getElementsByTagName(\"script\")[0];r.rel=\"stylesheet\",r.href=e[o&&n?0:o?1:2],a.parentNode.insertBefore(r,a)},r=new t.Image;r.onerror=function(){o(!1)},r.onload=function(){o(1===r.width&&1===r.height)},r.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\"}};\ngrunticon( [ \"/images/svg/icons.data.svg.css\", \"/images/svg/icons.data.png.css\", \"/images/svg/icons.fallback.css\" ] );</script>\n<noscript><link href=\"/images/svg/icons.fallback.css\" rel=\"stylesheet\"></noscript></head><body><div id=\"navbar\"><div class=\"container\"><a href=\"/\" class=\"icon-brunch-logo-web\"></a><ul class=\"nav nav--main-nav\">");
// iterate nav
;(function(){
  var $$obj = nav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div></div><div class=\"page__content container\"><div class=\"grid\"><div class=\"grid__item one-whole desk-two-thirds\">\n<h1>Examples</h1>\n\n<p>\n  We know of a few folks who are using brunch already.\n  Ranging from internal tooling to high traffic facebook apps.\n</p>\n\n<p class=\"users\">\n  <img src=\"images/users/jimbeam.png\" alt=\"Jim Beam\">\n  <img src=\"images/users/redbull.png\" alt=\"Red Bull\">\n  <img src=\"images/users/uber.png\" alt=\"Uber\">\n  <img src=\"images/users/ykky.png\" alt=\"YKKY\">\n</p>\n\n<p>If you want to add your project here, simply <a href=\"https://github.com/brunch/brunch.github.com/blob/master/examples.html\">edit this page</a> and submit a pull request.</p>\n\n<h2>Ostio</h2>\n\n<p><a href=\"http://ost.io/\">Ostio</a> is an open-source forum for GitHub projects (<a href=\"https://github.com/paulmillr/ostio\">code</a>). Uses default <a href=\"https://github.com/paulmillr/brunch-with-chaplin\">Chaplin</a> as app skeleton and Rails for backend.</p>\n\n<p class=\"example-screenshot\">\n  <a href=\"http://ost.io/\">\n    <img src=\"images/screenshots/ostio.png\" alt=\"\">\n  </a>\n</p>\n\n<h2>Todos</h2>\n\n<p><a href=\"http://todomvc.com/labs/dependency-examples/chaplin-brunch/public/\">Todos</a> (<a href=\"https://github.com/addyosmani/todomvc/tree/gh-pages/labs/dependency-examples/chaplin-brunch\">code</a>) is a port of the famous backbone todos example app. Uses localStorage to persist data.</p>\n\n<p class=\"example-screenshot\">\n  <a href=\"http://todomvc.com/labs/dependency-examples/chaplin-brunch/public/\">\n    <img src=\"http://todomvc.com/site-assets/screenshot.png\" alt=\"\" />\n  </a>\n</p>\n\n<h2>Hackerank</h2>\n\n<p>\n  <a href=\"http://hackerank.herokuapp.com/\">Hackerank</a> is an example app that finds the top hackers of a github repo search.\n\n  Uses <a href=\"https://github.com/elving/brunch-with-hipsters\">brunch with hipsters</a> as base skeleton.\n</p>\n\n<p class=\"example-screenshot\">\n  <a href=\"http://hackerank.herokuapp.com/\">\n    <img src=\"images/screenshots/hackerank.png\" alt=\"Hackerank\" />\n  </a>\n</p>\n\n<h2>Ember-bloggr</h2>\n\n<p>\n  <a href=\"https://github.com/gcollazo/ember-bloggr\">Ember-bloggr</a>\n  is a simple demo app based on the\n  <a href=\"http://www.youtube.com/watch?v=Ga99hMi7wfY\">Building an App with Ember.js video</a>.\n</p>\n\n<p class=\"example-screenshot\">\n  <a href=\"http://dev.gcollazo.com/ember-bloggr/\">\n    <img src=\"https://a248.e.akamai.net/camo.github.com/4a4f78b309767559bfcde423941b9accab185762/687474703a2f2f692e696d6775722e636f6d2f47706e64794b792e706e67\" alt=\"Bloggr\">\n  </a>\n</p>\n\n<h1>In production</h1>\n\n<h2>Delicious</h2>\n<p><a href=\"https://delicious.com\">Delicious</a> is a free service designed to be the best place to save what you love on the web, whether it's a video, picture, product, blog post, article or music. We then help you remember and find it later. It’s using Brunch as application builder and <a href=\"http://chaplinjs.org\">Chaplin</a> as a framework on top of Backbone.</p>\n\n<p class=\"example-screenshot\">\n  <a href=\"https://delicious.com\">\n    <img src=\"images/screenshots/delicious.png\" alt=\"Delicious\" />\n  </a>\n</p>\n\n<h2>blossom</h2>\n<p><a href=\"https://www.blossom.io\">Blossom</a> is a lightweight project management tool for lean teams. Backbone.js is heavily used in combination with CoffeeScript to provide a smooth interaction experience. The RESTful backend is built with Flask on Google App Engine.</p>\n\n<p class=\"example-screenshot\">\n  <a href=\"https://www.blossom.io/\">\n    <img src=\"images/screenshots/blossom.png\" alt=\"Blossom\" />\n  </a>\n</p>\n\n<h2>ChainCal</h2>\n<p><a href=\"http://chaincalapp.com\">ChainCal</a> is an iPhone app that helps you to track your daily goals in a minimalist, visual way. The app is written almost entirely in CoffeeScript, Backbone handles the models, collections and views, and persistence is done with a Backbone.sync localStorage adapter. Templates are written in Eco and the app is packaged with Brunch and deployed with Phonegap.</p>\n\n<p>\n  <a href=\"http://chaincalapp.com\">\n    <img src=\"images/screenshots/chaincal.png\" alt=\"Chaincal\" />\n  </a>\n</p>\n\n\n<h2>Blimp</h2>\n<p>\n  <a href=\"http://www.getblimp.com/\">Blimp</a> is a super easy to use and beautiful project management software for people who want to DO more and manage less.\n</p>\n<p class=\"example-screenshot\">\n  <a href=\"http://www.getblimp.com/\">\n    <img src=\"https://github-camo.global.ssl.fastly.net/fe80a77a9d6ff081b4603c19a4af00b2bd43a2d6/687474703a2f2f692e696d6775722e636f6d2f30454a757576582e706e67\" alt=\"\" />\n  </a>\n</p>\n\n\n<h2>Dogkr</h2>\n<p>\n  <a href=\"http://www.dogkr.com\">Dogkr</a> is an online logger to record all your beloved dogs’ life moments, even tiny instants became timeless memories.\n</p>\n<p>Brunch.js, along with Chaplin.js, is the major framework used in Dogkr's front-end. It helped us increase development productivity dramatically. Brunch.js made the whole project retain at manageable scale while the project size and complexity goes up wildly.</p>\n<p class=\"example-screenshot\">\n  <a href=\"http://dogkr.com\">\n    <img src=\"https://github-camo.global.ssl.fastly.net/e61eb63e444eed708f07e15622a82950128e4331/687474703a2f2f63646e2e646f676b722e636f6d2f7374617469632f696d616765732f686f6d655f73686f742e6a7067\" alt=\"\" />\n  </a>\n</p>\n\n<h2>Cozy Cloud</h2>\n<p>\n  <a href=\"https://www.cozycloud.cc/\">Cozy Cloud</a> is your own private personal cloud. A server you can trust to store your personal data and host web apps. You can host it with us at Cozy or host it at home, it's up to you!\n</p>\n\n<p>\n  Cozy cloud aims at using only standard execution environments. For each of them they suggest a coherent set of powerful technologies.\n</p>\n\n<p class=\"example-screenshot\">\n  <a href=\"http://www.cozycloud.cc\">\n    <img src=\"images/screenshots/cozycloud.png\" alt=\"Cozycloud\" />\n  </a>\n</p>\n\n\n<h2>MazeMap</h2>\n<p>\n  <a href=\"http://use.mazemap.com/\">MazeMap</a> <a href=\"use.mazemap.com\">(test site)</a> is an indoor navigation utility that works in the browser on desktop and mobile devices. Customers with big indoor areas can provide MazeMap as a service to their visitors who can then use the MazeMap application to find their way around with a-to-b indoor paths, and viewing their own position inside a building where GPS signals don't work. Searching for any room also works beautifully.\n\n</p>\n<p class=\"example-screenshot\">\n  <a href=\"http://use.mazemap.com/\">\n    <img src=\"https://github-camo.global.ssl.fastly.net/62be3b07faf65d0cb04961fcd20198293f7d3076/687474703a2f2f7331362e706f7374696d672e6f72672f636e3771396a6b68682f6272756e63685f77696b695f73637265656e73686f745f6269672e706e67\" alt=\"\" />\n  </a>\n</p>\n\n\n\n<h2>Hopstop</h2>\n<p>\n  <a href=\"https://github.com/jhabdas/hopstop\">Hopstop</a> enables instant retrieval of beer information accessible through Untappd. It comes in handy for searching the basics while on the go.\n</p>\n<p class=\"example-screenshot\">\n  <a href=\"http://lab.habdas.org\">\n    <img src=\"https://f.cloud.github.com/assets/440298/983199/47d5cf20-0847-11e3-89bf-d36f3cd0b844.png\" alt=\"\" />\n  </a>\n</p>\n\n<h2>Uber</h2>\n<p>\n  <a href=\"http://uber.com\">Uber</a> is everyone’s private driver. Their <a href=\"http://clients.uber.com/\">clients app</a> is made with brunch.\n</p>\n</div><div class=\"grid__item one-whole desk-one-third\"><div class=\"social-buttons\">");
// iterate social
;(function(){
  var $$obj = social;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  }
}).call(this);

buf.push("</div></div></div><footer><hr class=\"rule\"><p><small>Hosted on <a href=\"https://github.com/brunch/brunch.github.com\">GitHub Pages</a>. The content on this website is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/3.0/deed.en_US\">CC BY 3.0</a>.</small></p></footer></div><script src=\"scripts/app.js\"></script><script>require('scripts/app');\n</script>  <script type=\"text/javascript\">\n    var _gauges = _gauges || [];\n    (function() {\n      var t   = document.createElement('script');\n      t.type  = 'text/javascript';\n      t.async = true;\n      t.id    = 'gauges-tracker';\n      t.setAttribute('data-site-id', '4f1631bbcb25bc723b000007');\n      t.src = '//secure.gaug.es/track.js';\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(t, s);\n    })();\n  </script>\n</body></html>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("index", function(exports, require, module) {
var __templateData = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),nav = locals_.nav,filename = locals_.filename,social = locals_.social;buf.push("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><title>Brunch | HTML5 application assembler</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\"><link rel=\"stylesheet\" href=\"styles/app.css\"><!--[if lt IE 9]>\n<script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n<![endif]--><!-- Grunticon Loader: place this in the head of your page -->\n<script>\n/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */\nwindow.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!document.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||window.opera&&-1===navigator.userAgent.indexOf(\"Chrome\")),o=function(o){var r=t.document.createElement(\"link\"),a=t.document.getElementsByTagName(\"script\")[0];r.rel=\"stylesheet\",r.href=e[o&&n?0:o?1:2],a.parentNode.insertBefore(r,a)},r=new t.Image;r.onerror=function(){o(!1)},r.onload=function(){o(1===r.width&&1===r.height)},r.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\"}};\ngrunticon( [ \"/images/svg/icons.data.svg.css\", \"/images/svg/icons.data.png.css\", \"/images/svg/icons.fallback.css\" ] );</script>\n<noscript><link href=\"/images/svg/icons.fallback.css\" rel=\"stylesheet\"></noscript></head><body><div id=\"navbar\"><div class=\"container\"><a href=\"/\" class=\"icon-brunch-logo-web\"></a><ul class=\"nav nav--main-nav\">");
// iterate nav
;(function(){
  var $$obj = nav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div></div><div class=\"hero\"><div class=\"container\"><div class=\"grid\"><div class=\"grid__item one-whole desk-one-third\"><div class=\"icon-brunch-logo-napkin\"></div></div><div class=\"grid__item one-whole desk-two-thirds\"><div class=\"hero__content\"><h1 class=\"kilo\">Will you be coming to brunch?</h1><h3 class=\"flush--bottom soft-half--bottom\">Brunch...</h3><ul class=\"nav nav--keywords nav--sentence\"><li><strong>compiles</strong> your scripts, templates, styles</li><li><strong>lints</strong> them</li><li><strong>wraps</strong> the scripts and templates in common.js / AMD modules.</li><li><strong>concatenates</strong> scripts and styles</li><li><strong>generates source maps</strong> for concatenated files</li><li><strong>copies</strong> assets and static files</li><li><strong>shrinks</strong> the output by minifying code and optimizing images</li><li><strong>watches</strong> your files for changes</li><li><strong>notifies</strong> you about errors via console and system notifications</li></ul></div></div></div></div></div><div class=\"page__content container\"><div class=\"grid\"><div class=\"grid__item one-whole desk-two-thirds\"><h1>Brunch is an assembler for HTML5 applications</h1><p>Installation is one-line, once you have <a href=\"http://nodejs.org/download/\">node.js</a>. In your console, run:</p>\n<pre><code>code npm install -g brunch</code></pre>\n<h2>Getting started</h2>\n<h4>Create a new Brunch project:</h4>\n<pre><code>brunch new &lt;skeleton-path-or-URI&gt; [optional-output-dir]</code></pre>\n<p><code>skeleton-path-or-URI</code> specifies a <a href=\"/skeletons.html\">skeleton</a> from which your application will be initialized. </p>\n<p>See the <a href=\"https://github.com/brunch/brunch/blob/stable/docs/README.md\">README</a> for a complete description of app structure.</p>\n<h4>Develop with Brunch:</h4>\n<pre><code>brunch watch --server</code></pre>\n<p>tells Brunch to watch your project and incrementally rebuild it when source files are changed. The optional <code>server</code> flag launches a simple web server with <a href=\"http://diveintohtml5.info/history.html\">pushState</a> support.</p>\n<p>If you use OS X and want brunch to show system notification every time compilation error happens, you will need to install <a href=\"https://github.com/alloy/terminal-notifier\">terminal-notifier</a>: <code>[sudo] gem install terminal-notifier</code>.</p>\n<h4>Build with Brunch:</h4>\n<pre><code>brunch build --optimize</code></pre>\n<p>builds a project for distribution. The optionsl <code>optimize</code> flag enables minification.</p>\n<h1>Documentation</h1>\n<p>All docs are available <a href=\"https://github.com/brunch/brunch/tree/stable/docs\">on GitHub</a>.</p>\n<h2>A Quick Demo</h2>\n<p>See the <a href=\"http://vimeo.com/61056660\">video that shows starting new app with Brunch</a>:</p>\n<iframe src=\"http://player.vimeo.com/video/75702540\" style=\"width: 100%; height: 400px\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>\n\n<h2>Deploying</h2>\n\n<p>\n  Brunch-generated applications are a bunch of simple static files. You can\n  host them everywhere, even on free hostings, like\n  <a href=\"http://help.github.com/pages/\">GitHub pages</a>.\n\n  Because production environments are usually\n  slightly different than development envs,\n  brunch has <code>optimize</code> option.\n</p>\n\n<p>To build application that has minified JS and CSS, execute <code>brunch build --optimize</code>. Then you can deploy it:</p>\n\n<ul>\n  <li>\n    If you use <strong>static hosting site</strong>: build your application\n    on your machine and just upload <code>public/</code>\n    directory to the directory that is served by a webserver.\n  </li>\n  <li>\n    If you use <strong>hosting that supports node.js</strong>, you can\n    install brunch there and auto-build app every time.\n  </li>\n  <li>\n    If you prefer <a href=\"http://heroku.com/\">Heroku</a>,\n    there is <a href=\"https://gist.github.com/3596447\">a nice small guide</a>\n    on deploying.\n    Should work even on free instances.\n  </li>\n  <li>\n    If you’re into\n    <a href=\"http://help.github.com/pages/\">GitHub pages</a>,\n    you’ll need to build your app,\n    move <code>public/</code> directory to somewhere,\n    <a href=\"http://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging\">switch to <code>gh-pages</code>\n    git branch</a>,\n    remove files from directory and move files from your temporary\n    dir here.\n  </li>\n</ul>\n\n<h2>Brought to you by</h2><ul class=\"block-list\"><li><a href=\"http://paulmillr.com/\" rel=\"author\"><img src=\"https://secure.gravatar.com/avatar/d342e4ef045c54a6a6f41d070d8a0406?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\" width=\"48\" alt=\"Paul Miller\"><span class=\"name\">Paul</span> Miller</a></li><li><a href=\"http://nikgraf.com/\"><img src=\"https://secure.gravatar.com/avatar/8fc75580dbacd91ff28514b68baf1a8a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\" width=\"48\" alt=\"Nik Graf\"><span class=\"name\">Nik</span> Graf</a></li><li><a href=\"http://ramen.io/\"><img src=\"https://secure.gravatar.com/avatar/37c5132eed30539456c79906dd8c6065?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\" width=\"48\" alt=\"Thomas Schranz\"><span class=\"name\">Thomas</span> Schranz</a></li><li><a href=\"https://github.com/es128\"><img src=\"https://secure.gravatar.com/avatar/c8c06173c01b4e95594e4af3a8a815f1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\" width=\"48\" alt=\"Elan Shanker\"><span class=\"name\">Elan</span> Shanker</a></li></ul></div><div class=\"grid__item one-whole desk-one-third\"><div class=\"social-buttons\">");
// iterate social
;(function(){
  var $$obj = social;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  }
}).call(this);

buf.push("</div></div></div><footer><hr class=\"rule\"><p><small>Hosted on <a href=\"https://github.com/brunch/brunch.github.com\">GitHub Pages</a>. The content on this website is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/3.0/deed.en_US\">CC BY 3.0</a>.</small></p></footer></div><script src=\"scripts/app.js\"></script><script>require('scripts/app');\n</script>  <script type=\"text/javascript\">\n    var _gauges = _gauges || [];\n    (function() {\n      var t   = document.createElement('script');\n      t.type  = 'text/javascript';\n      t.async = true;\n      t.id    = 'gauges-tracker';\n      t.setAttribute('data-site-id', '4f1631bbcb25bc723b000007');\n      t.src = '//secure.gaug.es/track.js';\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(t, s);\n    })();\n  </script>\n</body></html>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("plugins", function(exports, require, module) {
var __templateData = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),nav = locals_.nav,filename = locals_.filename,social = locals_.social;buf.push("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><title>Brunch | HTML5 application assembler</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\"><link rel=\"stylesheet\" href=\"styles/app.css\"><!--[if lt IE 9]>\n<script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n<![endif]--><!-- Grunticon Loader: place this in the head of your page -->\n<script>\n/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */\nwindow.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!document.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||window.opera&&-1===navigator.userAgent.indexOf(\"Chrome\")),o=function(o){var r=t.document.createElement(\"link\"),a=t.document.getElementsByTagName(\"script\")[0];r.rel=\"stylesheet\",r.href=e[o&&n?0:o?1:2],a.parentNode.insertBefore(r,a)},r=new t.Image;r.onerror=function(){o(!1)},r.onload=function(){o(1===r.width&&1===r.height)},r.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\"}};\ngrunticon( [ \"/images/svg/icons.data.svg.css\", \"/images/svg/icons.data.png.css\", \"/images/svg/icons.fallback.css\" ] );</script>\n<noscript><link href=\"/images/svg/icons.fallback.css\" rel=\"stylesheet\"></noscript></head><body><div id=\"navbar\"><div class=\"container\"><a href=\"/\" class=\"icon-brunch-logo-web\"></a><ul class=\"nav nav--main-nav\">");
// iterate nav
;(function(){
  var $$obj = nav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div></div><div class=\"page__content container\"><div class=\"grid\"><div class=\"grid__item one-whole desk-two-thirds\"><h1>Plugins</h1>\n<p>\n  Brunch has a plugin ecosystem to achieve interoperability\n  with various stuff simply via\n  <a href=\"http://brunch.readthedocs.org/en/latest/plugins.html\">plugin API</a>.\n</p>\n\n<p>\n  For example, if you use JavaScript files in your project,\n  you’ll need a plugin that adds JS support.\n  Same with styles, templates, minifiers, linters and much more.\n</p>\n\n<p>\n  To install new plugin, simply execute <code>npm install --save plugin-name</code>. This will install its node.js dependencies and save to <code>package.json</code>.\n</p>\n\n<p>To remove it, edit <code>package.json</code>’s <code>dependencies</code> hash.\n  See <a href=\"http://npmjs.org/doc/json.html#dependencies\">npm docs</a>\n  for more docs on packages.\n</p>\n\n<p>\n  All plugins are available at\n  <a href=\"https://github.com/brunch/brunch/wiki/Plugins\">the Plugins wiki page</a>.\n  Feel free to add your plugins to it.\n  Some interesting plugins from there:\n</p>\n\n<ul>\n  <li>\n    Programming languages: JavaScript,\n    <a href=\"http://coffeescript.org\">CoffeeScript</a>,\n    <a href=\"http://livescript.net\">LiveScript</a>,\n    <a href=\"http://maxtaco.github.com/coffee-script\">IcedCoffeeScript</a>,\n    <a href=\"http://roy.brianmckenna.org\">Roy</a>\n  </li>\n\n  <li>\n    Pre-compiled templates:\n    <a href=\"http://handlebarsjs.com/\">Handlebars.js</a>,\n    <a href=\"http://visionmedia.github.com/jade/\">Jade</a>,\n    <a href=\"http://twitter.github.com/hogan.js/\">Mustache</a>,\n    <a href=\"https://github.com/sstephenson/eco\">Eco</a>,\n    <a href=\"https://github.com/machty/emblem-brunch\">Emblem</a>,\n    <a href=\"https://github.com/mgarbacz/dustjs-linkedin-brunch\">Dust</a>\n  </li>\n\n  <li>\n    Styles: CSS,\n    <a href=\"http://learnboost.github.com/stylus/\">Stylus</a>,\n    <a href=\"http://lesscss.org/\">LESS</a>,\n    <a href=\"http://sass-lang.com/\">Sass</a>\n  </li>\n\n  <li>\n    Linters:\n    <a href=\"http://www.jshint.com\">JSHint</a>,\n    <a href=\"http://www.coffeelint.org\">CoffeeLint</a>\n  </li>\n\n  <li>\n    Optimizers:\n    <a href=\"https://github.com/mishoo/UglifyJS2\">uglify.js</a>,\n    <a href=\"https://github.com/GoalSmashers/clean-css\">clean-css</a>,\n    <a href=\"https://github.com/steffenmllr/imageoptmizer-brunch\">OptiPNG / OptiJPG</a>\n  </li>\n</ul>\n\n<h2>Scaffolding and testing</h2>\n\n<p>\n  If you need scaffolding, there is a separate\n  <a href=\"https://github.com/paulmillr/scaffolt\">scaffolt</a> project,\n  which was once used to be a part of brunch as <code>brunch generate</code>.\n  It is the simplest one, with implementation based on JSON scaffolder specifications and Handlebars templates for stuff.\n  Use it like this: <code>scaffolt model user</code>.\n</p>\n\n<p>\n  If you need console test runner and don’t want to launch browser,\n  there is a separate\n  <a href=\"http://metaskills.net/mocha-phantomjs/\">mocha-phantomjs</a> project,\n  a successor of <code>brunch test</code> command.\n  Use it like this: <code>mocha-phantomjs public/test/index.html</code>.\n</p></div><div class=\"grid__item one-whole desk-one-third\"><div class=\"social-buttons\">");
// iterate social
;(function(){
  var $$obj = social;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  }
}).call(this);

buf.push("</div></div></div><footer><hr class=\"rule\"><p><small>Hosted on <a href=\"https://github.com/brunch/brunch.github.com\">GitHub Pages</a>. The content on this website is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/3.0/deed.en_US\">CC BY 3.0</a>.</small></p></footer></div><script src=\"scripts/app.js\"></script><script>require('scripts/app');\n</script>  <script type=\"text/javascript\">\n    var _gauges = _gauges || [];\n    (function() {\n      var t   = document.createElement('script');\n      t.type  = 'text/javascript';\n      t.async = true;\n      t.id    = 'gauges-tracker';\n      t.setAttribute('data-site-id', '4f1631bbcb25bc723b000007');\n      t.src = '//secure.gaug.es/track.js';\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(t, s);\n    })();\n  </script>\n</body></html>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("skeletons", function(exports, require, module) {
var __templateData = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),nav = locals_.nav,filename = locals_.filename,social = locals_.social;buf.push("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><title>Brunch | HTML5 application assembler</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\"><link rel=\"stylesheet\" href=\"styles/app.css\"><!--[if lt IE 9]>\n<script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n<![endif]--><!-- Grunticon Loader: place this in the head of your page -->\n<script>\n/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */\nwindow.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!document.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||window.opera&&-1===navigator.userAgent.indexOf(\"Chrome\")),o=function(o){var r=t.document.createElement(\"link\"),a=t.document.getElementsByTagName(\"script\")[0];r.rel=\"stylesheet\",r.href=e[o&&n?0:o?1:2],a.parentNode.insertBefore(r,a)},r=new t.Image;r.onerror=function(){o(!1)},r.onload=function(){o(1===r.width&&1===r.height)},r.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\"}};\ngrunticon( [ \"/images/svg/icons.data.svg.css\", \"/images/svg/icons.data.png.css\", \"/images/svg/icons.fallback.css\" ] );</script>\n<noscript><link href=\"/images/svg/icons.fallback.css\" rel=\"stylesheet\"></noscript></head><body><div id=\"navbar\"><div class=\"container\"><a href=\"/\" class=\"icon-brunch-logo-web\"></a><ul class=\"nav nav--main-nav\">");
// iterate nav
;(function(){
  var $$obj = nav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div></div><div class=\"page__content container\"><div class=\"grid\"><div class=\"grid__item one-whole desk-two-thirds\"><h1>Skeletons</h1>\n<p>A Brunch skeleton is basically an application boilerplate that provides a good starting point for new applications.</p>\n<p>Creating new application with any skeleton is pretty simple:</p>\n<pre><code>brunch new &lt;path-or-URI&gt; [optional-output-dir]\n# Example from GitHub\nbrunch new gh:brunch/dead-simple\n# Example from a full URL\nbrunch new https://github.com/paulmillr/brunch-with-chaplin</code></pre>\n<p>Brunch doesn’t encourage you to use any particular technology,\nbut application skeletons can start you on your way with a specific pattern.</p>\n<p>The <a href=\"https://github.com/brunch/brunch/wiki/Skeletons\">complete skeletons list</a> is on GitHub. If you create your own open-source skeleton,\nfeel free to add it!</p>\n<h3>Selected interesting skeletons:</h3>\n<ul>\n  <li>\n    <a href=\"https://github.com/brunch/dead-simple\">Dead-simple brunch</a> — super minimal skeleton, useful if you want to port\n    existing application or use your own stack.\n  </li>\n\n  <li>\n    <a href=\"https://github.com/paulmillr/brunch-with-chaplin\">Brunch with Chaplin</a>:\n    HTML5 Boilerplate,\n    <a href=\"http://chaplinjs.org/\">Chaplin</a>\n    framework over Backbone.js. Main languages are CoffeeScript,\n    Stylus and Handlebars. Pretty useful for big apps.\n    There are also\n    <a href=\"https://github.com/bc-luke/sassy-brunch\">SASS</a>,\n    <a href=\"https://github.com/Nami-Doc/sticky-brunch\">LiveScript</a> and\n    <a href=\"https://github.com/jupl/chapless-brunch\">Bootstrap + Stickit</a>\n    alternatives available.\n  </li>\n\n  <li>\n    <a href=\"http://backbonejs.org\">Backbone</a>-based:\n    <ul>\n      <li>\n        <a href=\"https://github.com/Anaphase/brunch-banana-pancakes\">Brunch with banana pancakes</a>:\n        tasty. Main languages are JavaScript, Sass, LESS &amp; Handlebars.\n        Includes Backbone.Mediator &amp; Twitter Bootstrap.\n      </li>\n\n      <li>\n        <a href=\"https://github.com/elving/brunch-with-hipsters\">Brunch with hipsters</a>:\n        Modernizr, Lodash, Backbone-Mediator,\n        Font Awesome, Brunch Auto-Reload. Main languages are Coffee, Stylus and\n        Handlebars.\n      </li>\n\n      <li>\n        <a href=\"https://github.com/SimbCo/brunch-with-marionette\">Brunch with Marionette</a>,\n        <a href=\"https://github.com/pkmishra/Dhancha\">Aura-brunch</a>\n        and <a href=\"https://github.com/damassi/Backbone.Create\">create.js canvas</a> skeletons\n      </li>\n    </ul>\n  </li>\n\n  <li>\n    <a href=\"http://angularjs.org\">Angular</a>-based:\n    <ul>\n      <li>\n        <a href=\"https://github.com/scotch/angular-brunch-seed\">Angular brunch seed</a>:\n        AngularJS, Twitter Bootstrap. Main languages are CoffeeScript, Jade and Less.\n        There are also\n        <a href=\"https://github.com/scoarescoare/angular-brunch-true-north\">sass + H5BP</a>\n        and\n        <a href=\"https://github.com/clkao/angular-brunch-seed-livescript\">LiveScript</a> versions.\n      </li>\n      <li><a href=\"https://github.com/exlee/brunch-on-asteroids\">Brunch on asteroids</a> — version with Jade, CoffeeScript, D3.js</li>\n    </ul>\n  </li>\n\n  <li>\n    <a href=\"http://emberjs.com\">Ember</a>-based:\n    <ul>\n      <li><a href=\"https://github.com/gcollazo/brunch-with-ember-reloaded\">Brunch with Ember Reloaded</a>: Handlebars, H5BP, Swag; based on the official ember starter kit</li>\n      <li><a href=\"https://github.com/icholy/ember-brunch\">Brunch with Ember</a>: Bootstrap, Handlebars</li>\n      <li><a href=\"https://github.com/wordofchristian/brunch-with-hampsters\">Brunch with Hampsters</a>: Coffee, Stylus, Embem.js, Swag, Font Awesome and modernizr</li>\n      <li><a href=\"https://github.com/mutewinter/tapas-with-ember\">Tapas with Ember</a>: CoffeeScript, Stylus, Handlebars, Ember Data, Ember Model.</li>\n    </ul>\n\n<p>  </li></p>\n<p>  <li>\n    And others:\n    <ul>\n      <li>\n        <a href=\"https://github.com/markmarijnissen/spine-livescript-brunch-skeleton\">Spine on Brunch</a>:\n        with <a href=\"http://spinejs.com\">Spine.js</a>.\n        Main languages are LiveScript, Less and Jade.\n      </li>\n      <li>\n        <a href=\"https://github.com/jupl/cordova-brunch\">Cordova-brunch</a> which works nice with <a href=\"http://cordova.apache.org\">Apache Cordova</a> (aka phonegap)\n      </li>\n    </ul>\n  </li>\n</ul></p>\n</div><div class=\"grid__item one-whole desk-one-third\"><div class=\"social-buttons\">");
// iterate social
;(function(){
  var $$obj = social;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  }
}).call(this);

buf.push("</div></div></div><footer><hr class=\"rule\"><p><small>Hosted on <a href=\"https://github.com/brunch/brunch.github.com\">GitHub Pages</a>. The content on this website is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/3.0/deed.en_US\">CC BY 3.0</a>.</small></p></footer></div><script src=\"scripts/app.js\"></script><script>require('scripts/app');\n</script>  <script type=\"text/javascript\">\n    var _gauges = _gauges || [];\n    (function() {\n      var t   = document.createElement('script');\n      t.type  = 'text/javascript';\n      t.async = true;\n      t.id    = 'gauges-tracker';\n      t.setAttribute('data-site-id', '4f1631bbcb25bc723b000007');\n      t.src = '//secure.gaug.es/track.js';\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(t, s);\n    })();\n  </script>\n</body></html>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("support", function(exports, require, module) {
var __templateData = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),nav = locals_.nav,filename = locals_.filename,social = locals_.social;buf.push("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><title>Brunch | HTML5 application assembler</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\"><link rel=\"stylesheet\" href=\"styles/app.css\"><!--[if lt IE 9]>\n<script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n<![endif]--><!-- Grunticon Loader: place this in the head of your page -->\n<script>\n/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */\nwindow.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!document.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||window.opera&&-1===navigator.userAgent.indexOf(\"Chrome\")),o=function(o){var r=t.document.createElement(\"link\"),a=t.document.getElementsByTagName(\"script\")[0];r.rel=\"stylesheet\",r.href=e[o&&n?0:o?1:2],a.parentNode.insertBefore(r,a)},r=new t.Image;r.onerror=function(){o(!1)},r.onload=function(){o(1===r.width&&1===r.height)},r.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\"}};\ngrunticon( [ \"/images/svg/icons.data.svg.css\", \"/images/svg/icons.data.png.css\", \"/images/svg/icons.fallback.css\" ] );</script>\n<noscript><link href=\"/images/svg/icons.fallback.css\" rel=\"stylesheet\"></noscript></head><body><div id=\"navbar\"><div class=\"container\"><a href=\"/\" class=\"icon-brunch-logo-web\"></a><ul class=\"nav nav--main-nav\">");
// iterate nav
;(function(){
  var $$obj = nav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

var active = ((filename == item.path + '.jade') || (filename == 'index.jade' && !item.path));
buf.push("<li><a" + (jade.attrs({ terse: true, 'href':('/'+item.path+(item.path?'.html':'')), "class": [('nav__item--main-nav'),(active?'active':null)] }, {"class":true,"href":true})) + ">" + (jade.escape(null == (jade.interp = item.title) ? "" : jade.interp)) + "</a></li>");
    }

  }
}).call(this);

buf.push("</ul></div></div><div class=\"page__content container\"><div class=\"grid\"><div class=\"grid__item one-whole desk-two-thirds\"><h1>Community</h1>\n\n<p>Follow <a href=\"http://twitter.com/brunch\">@brunch</a> and <a href=\"http://twitter.com/paulmillr\">@paulmillr</a> on twitter to get latest updates &amp; news.\nFeel free to discuss things with other users and ask for help in our ost.io <a href=\"http://ost.io/@brunch/brunch\">forum section</a>.\n\nYou can also ask questions with <a href=\"http://stackoverflow.com/questions/tagged/brunch\">#brunch tag at Stack Overflow</a>\n</p>\n\n<p>\n  If you want to add something new to brunch or\n  create your own plugin, <a href=\"https://github.com/brunch/brunch/blob/master/CONTRIBUTING.md\">contributing guidelines</a>\n  can help you.\n</p>\n\n<p>There are also some text editor plugins that simplify developing apps:</p>\n\n<ul>\n  <li><a href=\"https://github.com/drichard/vim-brunch\">Vim-brunch</a> by <a href=\"https://github.com/drichard\">@drichard</a></li>\n</ul>\n\n<h2>Commercial support</h2>\n\n<p>\n  <a href=\"http://paulmillr.com/\">Paul</a>, brunch core dev is offering\n  commercial support, consulting and training for Brunch, Chaplin and Backbone-based web\n  applications. Send him\n  <a href=\"mailto:&#112;&#97;&#117;&#108;&#43;&#99;&#111;&#110;&#115;&#117;&#108;&#116;&#105;&#110;&#103;&#64;&#112;&#97;&#117;&#108;&#109;&#105;&#108;&#108;&#114;&#46;&#99;&#111;&#109;\">an email</a>\n  for more information.\n</p>\n\n<p>\n   <a href=\"http://andriy.drozdyuk.com\">Andriy Drozdyuk</a> in Fredericton, NB, Canada. Contact me at <a href=\"mailto:drozzy@gmail.com\">drozzy@gmail.com</a> for more information.\n   Local only.\n</p>\n<p>Are you providing Brunch consulting too? <a href=\"https://github.com/brunch/brunch.github.com/edit/master/index.html\">Place yourself here!</a></p>\n</div><div class=\"grid__item one-whole desk-one-third\"><div class=\"social-buttons\">");
// iterate social
;(function(){
  var $$obj = social;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var service = $$obj[$index];

buf.push("<div><iframe" + (jade.attrs({ terse: true, 'allowtransparency':("true"), 'frameborder':("0"), 'scrolling':("no"), 'src':(service.src), 'style':("width: " + (service.width) + "; height:30px;"), "class": [("social-button-" + (service.classname) + "")] }, {"class":true,"allowtransparency":true,"frameborder":true,"scrolling":true,"src":true,"style":true})) + "></iframe></div>");
    }

  }
}).call(this);

buf.push("</div></div></div><footer><hr class=\"rule\"><p><small>Hosted on <a href=\"https://github.com/brunch/brunch.github.com\">GitHub Pages</a>. The content on this website is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/3.0/deed.en_US\">CC BY 3.0</a>.</small></p></footer></div><script src=\"scripts/app.js\"></script><script>require('scripts/app');\n</script>  <script type=\"text/javascript\">\n    var _gauges = _gauges || [];\n    (function() {\n      var t   = document.createElement('script');\n      t.type  = 'text/javascript';\n      t.async = true;\n      t.id    = 'gauges-tracker';\n      t.setAttribute('data-site-id', '4f1631bbcb25bc723b000007');\n      t.src = '//secure.gaug.es/track.js';\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(t, s);\n    })();\n  </script>\n</body></html>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;
//@ sourceMappingURL=static.js.map