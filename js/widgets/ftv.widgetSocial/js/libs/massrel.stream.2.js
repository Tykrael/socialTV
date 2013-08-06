;(function(window, undefined) {
/**
 * almond 0.2.4 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

var massreljs;(function(){if(typeof massreljs=="undefined"){massreljs={};var e,t,n;(function(r){function d(e,t){return h.call(e,t)}function v(e,t){var n,r,i,s,o,u,a,f,c,h,p=t&&t.split("/"),d=l.map,v=d&&d["*"]||{};if(e&&e.charAt(0)===".")if(t){p=p.slice(0,p.length-1),e=p.concat(e.split("/"));for(f=0;f<e.length;f+=1){h=e[f];if(h===".")e.splice(f,1),f-=1;else if(h===".."){if(f===1&&(e[2]===".."||e[0]===".."))break;f>0&&(e.splice(f-1,2),f-=2)}}e=e.join("/")}else e.indexOf("./")===0&&(e=e.substring(2));if((p||v)&&d){n=e.split("/");for(f=n.length;f>0;f-=1){r=n.slice(0,f).join("/");if(p)for(c=p.length;c>0;c-=1){i=d[p.slice(0,c).join("/")];if(i){i=i[r];if(i){s=i,o=f;break}}}if(s)break;!u&&v&&v[r]&&(u=v[r],a=f)}!s&&u&&(s=u,o=a),s&&(n.splice(0,o,s),e=n.join("/"))}return e}function m(e,t){return function(){return s.apply(r,p.call(arguments,0).concat([e,t]))}}function g(e){return function(t){return v(t,e)}}function y(e){return function(t){a[e]=t}}function b(e){if(d(f,e)){var t=f[e];delete f[e],c[e]=!0,i.apply(r,t)}if(!d(a,e)&&!d(c,e))throw new Error("No "+e);return a[e]}function w(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function E(e){return function(){return l&&l.config&&l.config[e]||{}}}var i,s,o,u,a={},f={},l={},c={},h=Object.prototype.hasOwnProperty,p=[].slice;o=function(e,t){var n,r=w(e),i=r[0];return e=r[1],i&&(i=v(i,t),n=b(i)),i?n&&n.normalize?e=n.normalize(e,g(t)):e=v(e,t):(e=v(e,t),r=w(e),i=r[0],e=r[1],i&&(n=b(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},u={require:function(e){return m(e)},exports:function(e){var t=a[e];return typeof t!="undefined"?t:a[e]={}},module:function(e){return{id:e,uri:"",exports:a[e],config:E(e)}}},i=function(e,t,n,i){var s,l,h,p,v,g=[],w;i=i||e;if(typeof n=="function"){t=!t.length&&n.length?["require","exports","module"]:t;for(v=0;v<t.length;v+=1){p=o(t[v],i),l=p.f;if(l==="require")g[v]=u.require(e);else if(l==="exports")g[v]=u.exports(e),w=!0;else if(l==="module")s=g[v]=u.module(e);else if(d(a,l)||d(f,l)||d(c,l))g[v]=b(l);else{if(!p.p)throw new Error(e+" missing "+l);p.p.load(p.n,m(i,!0),y(l),{}),g[v]=a[l]}}h=n.apply(a[e],g);if(e)if(s&&s.exports!==r&&s.exports!==a[e])a[e]=s.exports;else if(h!==r||!w)a[e]=h}else e&&(a[e]=n)},e=t=s=function(e,t,n,a,f){return typeof e=="string"?u[e]?u[e](t):b(o(e,t).f):(e.splice||(l=e,t.splice?(e=t,t=n,n=null):e=r),t=t||function(){},typeof n=="function"&&(n=a,a=f),a?i(r,e,t,n):setTimeout(function(){i(r,e,t,n)},4),s)},s.config=function(e){return l=e,s},n=function(e,t,n){t.splice||(n=t,t=[]),!d(a,e)&&!d(f,e)&&(f[e]=[e,t,n])},n.amd={jQuery:!0}})(),massreljs.requirejs=e,massreljs.require=t,massreljs.define=n}})(),massreljs.define("globals",{host:"tweetriver.com",timeout:1e4,protocol:document.location.protocol==="https:"?"https":"http",min_poll_interval:5e3,max_backoff_interval:6e4,backoff_rate:1.8,max_reqs_per_min:5,jsonp_param:"jsonp"}),massreljs.define("helpers",["globals"],function(e){var t={},n=encodeURIComponent;t.step_through=function(e,n,r){e=t.is_array(e)?e:[e];var i=e.length-1;if(i>=0)for(;i>=0;i--){var s=e[i];for(var o=0,u=n.length;o<u;o++)n[o].call(r,s)}},t.extend=function(e,t){var n;for(n in t)typeof e[n]=="undefined"&&(e[n]=t[n]);return e},t.api_url=function(e,t){var t=t||massrel.host,n=massrel.port,r=massrel.protocol+"://"+t+(n?":"+n:"");return r+e},t.req={},t.req.supportsXhr2="XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest,t.req.supportsCors=t.req.supportsXhr2||"XDomainRequest"in window,t.req.supportsJSON="JSON"in window,t.req.xdr=function(n,r,i,s,o,u){var a,f=!1,l,c=function(e){f=!0;var n,r=!1;try{n=JSON.parse(e)}catch(i){r=!0,h(new Error("JSON parse error"))}r||(typeof o=="function"?o(n):t.is_array(o)&&o.length>0&&t.step_through(n,o,s))},h=function(e){f=!0,typeof u=="function"&&u(e)};window.XMLHttpRequest&&t.req.supportsXhr2?a=new XMLHttpRequest:window.XDomainRequest&&(a=new XDomainRequest),a?(a.open("GET",n+"?"+t.to_qs(r)),a.timeout=e.timeout,a.onerror=h,a.onprogress=function(){},a.ontimeout=h,a.onload=function(){c(a.responseText)},a.send(null),l=setTimeout(function(){f||(a.onerror=function(){},a.onprogress=function(){},a.ontimeout=function(){},a.onload=function(){},a.abort&&a.abort(),h())},e.timeout)):h(new Error("CORS not supported"))},t.req.jsonp=function(n,i,s,o,u,a){var f=s+ ++r,l=!1,c;e._json_callbacks[f]=function(n){typeof u=="function"?u(n):t.is_array(u)&&u.length>0&&t.step_through(n,u,o),delete e._json_callbacks[f],l=!0,clearTimeout(c)},i.push([e.jsonp_param,"massrel._json_callbacks."+f]);var h=t.load(n+"?"+t.to_qs(i));c=setTimeout(function(){l||(e._json_callbacks[f]=function(){delete e._json_callbacks[f]},typeof a=="function"&&a(),h.stop())},e.timeout)},t.jsonp_factory=t.req.jsonp,t.req.counts=[],t.req.total_counts=0,t.req.counter=function(n){var r=+(new Date),i=e.max_reqs_per_min,s=t.req.counts,o=6e4;t.req.total_counts=t.req.total_counts+1;while(s.length>i)s.shift();if(s.length===i){var u=r-s[0];if(u<o){var a="Warn: requested more than "+i+" times in the last minute ("+t.req.total_counts+" reqs total)";if(n)throw new Error(a);window.console&&console.warn&&console.warn(a)}}while(s.length>=i)s.shift();return s.push(r),r};var r=0;e._json_callbacks={},t.request_factory=function(e,n,r,i,s,o){t.req.counter(),t.req.supportsCors&&t.req.supportsJSON?t.req.xdr(e,n,r,i,s,o):t.req.jsonp(e,n,r,i,s,o)},t.is_array=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"};var i=document.getElementsByTagName("head")[0]||document.body;t.load=function(e,t){var n=document.createElement("script");n.type="text/javascript",n.src=e;var r=!1;return n.onload=n.onreadystatechange=function(){!r&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")&&(r=!0,n.onload=n.onreadystatechange=null,i&&n.parentNode&&i.removeChild(n),typeof t=="function"&&t())},i.insertBefore(n,i.firstChild),{stop:function(){n.onload=n.onreadystatechange=null,i&&n.parentNode&&i.removeChild(n),n.src="#"}}},t.to_qs=function(e){var r=[],i;if(e&&e.length){for(var s=0,o=e.length;s<o;s++){i=e[s][1];if(t.is_array(i)){var u=[];for(var a=0,f=i.length;a<f;a++)u[a]=n(i[a]||"");i=u.join(",")}else i!==undefined&&i!==null?i=n(i):i="";r.push(n(e[s][0])+"="+i)}return r.join("&")}return""};var s=/\+\d{4} \d{4}$/,o=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\+\d{4})$/,u=/^(\d{4})-(\d\d)-(\d\d)T(\d\d)\:(\d\d)\:(\d\d)\.(\d{3})Z$/;return t.fix_date=t.fix_twitter_date=function(e){e=e.toString();if(s.test(e)){e=e.split(" ");var t=e.pop();e.splice(3,0,t),e=e.join(" ")}else o.test(e)?e=e.replace(o,"$1/$2/$3 $4:$5:$6 $7"):u.test(e)&&(e=e.replace(u,"$1/$2/$3 $4:$5:$6 +0000"));return e},t.parse_params=function(e){e=e||window.location.search.substring(1);var t={};e.charAt(0)==="?"&&(e=e.substring(1));if(e.length>0){e=e.replace(/\+/g," ");var n=e.split(/[&;]/g);for(var r=0;r<n.length;r++){var i=n[r].split("="),s=decodeURIComponent(i[0]),o=i.length>1?decodeURIComponent(i[1]):"";if(s in t){var u=t[s];typeof u!="string"?t[s].push(o):(t[s]=[],t[s].push(u),t[s].push(o))}else t[s]=o}}return t},t.poll_interval=function(t){var n=e.min_poll_interval;return Math.max(t||n,n)},t.poll_backoff=function(t,n){var r=e.max_backoff_interval;return t<r&&(n=Math.max(n-1,0),t*=Math.pow(e.backoff_rate,n),t=Math.min(t||r,r)),t},t.callback_group=function(e){e=e||1;var t=0,n=!0,r=function(r,i){return function(){if(n){if(t<=e)return r.apply(i||this,arguments);throw new Error("Callback group max call count exceeded")}}};return r.deactivate=function(){n=!1},r},t}),massreljs.define("generic_poller_cycle",["helpers"],function(e){function t(t,n,r){this.cg=e.callback_group(),this.skip=this.cg(t),this.callback=this.cg(n),this.errback=this.cg(r),this._enabled=!0}return t.prototype.enabled=function(){return this._enabled},t.prototype.disable=function(){this.cg.deactivate(),this._enabled=!1},t}),massreljs.define("generic_poller",["helpers","generic_poller_cycle"],function(e,t){function n(r,i){var s=this,o=function(){if(f){var i=e.callback_group(),o=i(u),l=function(t){s.consecutive_errors=0,n.failure_mode=s.failure_mode=!1;if(f){for(var r=0,i=s._filters.length;r<i;r++)t=s._filters[r].call(s,t);e.step_through([t],s._listeners,s),f&&o()}},c=function(){s.consecutive_errors+=1,n.failure_mode=s.failure_mode=!0,o(!0)};a=new t(o,l,c),s.fetch(r,s.opts,a)}},u=function(t){var n=e.poll_interval(s.frequency*1e3);t&&(n=e.poll_backoff(n,s.consecutive_errors)),l=setTimeout(o,n)},a=null,f=!1,l;this._listeners=[],this._filters=[],this.object=r,this.opts=i||{},this.frequency=this.opts.frequency||30,this.alive_count=0,this.consecutive_errors=0,this.failure_mode=!1,this.start=function(){return f||(f=!0,o()),this},this.stop=function(){return a&&(a.disable(),a=null),clearTimeout(l),f=!1,this}}return n.prototype.fetch=function(e,t,n){return e.load(t,n.callback,n.errback),this},n.prototype.data=function(e){return this._listeners.push(e),this},n.prototype.filter=function(e){return this._filters.push(e),this},n.failure_mode=!1,n}),massreljs.define("poller_queue",["helpers"],function(e){function t(t,n){function l(){a=f.total,setTimeout(function(){if(f.poller.enabled&&f.total===a&&i.length>0&&r.length===0){var e=Math.min(Math.floor(i.length*Math.random()),i.length-1),t=i[e];r.push(t),f.total+=1,f.enqueued+=1,f.reused+=1,c()}l()},n.history_timeout*1e3)}function c(){if(!o&&r.length>0&&typeof s=="function"){var e=++u;f.enqueued-=1,f.count+=1;var t=r.shift();o=!0,s.call(f,t,function(){e===u&&(o=!1,setTimeout(c,0))}),n.history_size>0&&!t.__recycled&&(n.history_size===i.length&&i.shift(),t.__recycled=!0,i.push(t))}}this.poller=t,n=e.extend(n||{},{history_size:0,history_timeout:t.frequency/1e3});var r=[],i=[],s=null,o=!1,u=0,a=0;this.total=0,this.enqueued=0,this.count=0,this.reused=0;var f=this;t.batch(function(e){var t=e.length,n=t-1;for(;n>=0;n--)r.push(e[n]);f.total+=t,f.enqueued+=t,c()}),n.history_size>0&&l(),this.next=function(e){!o&&typeof e=="function"&&(s=e,c())}}return t}),massreljs.define("poller",["helpers","generic_poller","poller_queue"],function(e,t,n){function r(e,n){t.call(this,e,n),this.stream=this.object,this.filter(this.filter_newer);var n=this.opts;this.newest_timestamp=n.newest_timestamp||null,this.stay_realtime="stay_realtime"in n?!!n.stay_realtime:!0,this.hail_mary_mode=!!n.hail_mary_mode,this.first=!0}return e.extend(r.prototype,t.prototype),r.prototype.fetch=function(t,n,r){var i=this,s={start_id:null},o=this.stay_realtime?"since_id":"from_id";return s[o]=i.since_id,n=e.extend({},n),this.first&&(n=e.extend(n.initial||{},n),delete n.initial),s=e.extend(s,n),this.cursorable()||delete s.since_id,t.load(s,function(e){r.enabled()&&(e&&e.length>0&&(i.since_id=e[0].entity_id,i.start_id||(i.start_id=e[e.length-1].entity_id)),r.callback(e),i.first=!1)},r.errback),this},r.prototype.batch=function(e){return this.data(r.createEnumerator(e,!1))},r.prototype.each=function(e){return this.data(r.createEnumerator(e,!0))},r.prototype.queue=function(e){var t=new n(this);return t.next(e),this},r.prototype.more=function(t,n){var r=this,i=function(){r.object.load(e.extend({start_id:r.start_id,since_id:null},r.opts),function(e){e.length>0&&(r.start_id=e[e.length-1].entity_id,r.since_id||(r.since_id=e[0].entity_id)),t.call(r,e)},function(){typeof n=="function"&&n()})};return i(),this},r.prototype.cursorable=function(){return!(t.failure_mode||this.failure_mode||this.hail_mary_mode)},r.prototype.filter_newer=function(e){return e=r.filter_newer(e,this.newest_timestamp),e&&e.length>0&&(this.newest_timestamp=e[0].queued_at),e},r.prototype.poke=function(){return this},r.createEnumerator=function(t,n){return n?function(n){n&&n.length>0&&e.step_through(n,[t],this)}:function(e){e&&e.length>0&&t.call(this,e)}},r.filter_newer=function(e,t){var n="queued_at";if(e&&e.length>0){var r=this.limit||Infinity;if(t)if(e[0][n]<=t)e=[];else if(e[e.length-1][n]>t)e.length>r&&e.splice(this.limit,e.length-r);else{var i=[];for(var s=0,o=e.length;s<o&&i.length<r;s++){var u=e[s];if(!(u[n]>t))break;i.push(u)}e=i}else e.length>r&&e.splice(this.limit,e.length-r)}return e},r}),massreljs.define("meta_poller",["helpers","generic_poller"],function(e,t){function n(){t.apply(this,arguments)}return e.extend(n.prototype,t.prototype),n.prototype.fetch=function(e,t,n){return e.meta(t,n.callback,n.errback),this},n.prototype.each=n.prototype.data,n}),massreljs.define("stream",["helpers","poller","meta_poller"],function(e,t,n){function i(){var e=arguments.length===1?arguments[0].split("/"):arguments;this.account=e[0],this.stream_name=e[1],this._enumerators=[]}var r=encodeURIComponent;return i.prototype.stream_url=function(){return e.api_url("/"+r(this.account)+"/"+r(this.stream_name)+".json")},i.prototype.meta_url=function(){return e.api_url("/"+r(this.account)+"/"+r(this.stream_name)+"/meta.json")},i.prototype.load=function(t,n,r){t=e.extend(t||{},{});var i=this.buildParams(t);return e.request_factory(this.stream_url(),i,"_",this,n||this._enumerators,r),this},i.prototype.buildParams=function(e){e=e||{};var t=[];return e.limit&&t.push(["limit",e.limit]),e.since_id?t.push(["since_id",e.since_id]):e.from_id?t.push(["from_id",e.from_id]):(e.start_id||e.start)&&t.push(["start",e.start_id||e.start]),e.replies&&t.push(["replies","1"]),e.geo_hint&&t.push(["geo_hint","1"]),e.keywords&&t.push(["keywords",e.keywords]),e.network&&t.push(["network",e.network]),e.timeline_search&&t.push(["timeline_search","1"]),t},i.prototype.each=function(e){return this._enumerators.push(e),this},i.prototype.poller=function(e){return new t(this,e)},i.prototype.meta=function(){var t,n,r;if(typeof arguments[0]=="function")n=arguments[0],r=arguments[1],t={};else{if(typeof arguments[0]!="object")throw new Error("incorrect arguments");t=arguments[0],n=arguments[1],r=arguments[2]}var i=this.buildMetaParams(t);return e.request_factory(this.meta_url(),i,"meta_",this,n,r),this},i.prototype.buildMetaParams=function(e){e=e||{};var t=[];return e.disregard&&t.push(["disregard",e.disregard]),e.num_minutes&&t.push(["num_minutes",e.num_minutes]),e.num_hours&&t.push(["num_hours",e.num_hours]),e.num_days&&t.push(["num_days",e.num_days]),e.num_trends&&t.push(["num_trends",e.num_trends]),e.top_periods&&t.push(["top_periods",e.top_periods]),e.top_periods_relative&&t.push(["top_periods_relative",e.top_periods_relative]),e.top_count&&t.push(["top_count",e.top_count]),e.finish&&t.push(["finish",e.finish]),e.networks&&t.push(["networks","1"]),t},i.prototype.metaPoller=function(e){return new n(this,e)},i}),massreljs.define("account",["helpers","meta_poller"],function(e,t){function r(e){this.user=e}var n=encodeURIComponent;return r.prototype.meta_url=function(){return e.api_url("/"+n(this.user)+".json")},r.prototype.meta=function(){var t,n,r;if(typeof arguments[0]=="function")n=arguments[0],r=arguments[1],t={};else{if(typeof arguments[0]!="object")throw new Error("incorrect arguments");t=arguments[0],n=arguments[1],r=arguments[2]}var i=this.buildMetaParams(t);return e.request_factory(this.meta_url(),i,"meta_",this,n,r),this},r.prototype.buildMetaParams=function(t){t=t||{};var n=[];t.quick_stats&&n.push(["quick_stats","1"]);if(t.streams){var r=e.is_array(t.streams)?t.streams:[t.streams];n.push(["streams",r.join(",")])}return n},r.prototype.metaPoller=function(e){return new t(this,e)},r.prototype.toString=function(){return this.user},r}),massreljs.define("context",["helpers"],function(e){function t(e){this.status=e,this.source={facebook:!1,twitter:!1,google:!1,instagram:!1,message:!1},this.known=!1,this.intents=!0}return t.create=function(n,r){n=n||{};var i=new t(n);return r=e.extend(r||{},{intents:!0,retweeted_by:!0}),i.intents=r.intents,n.id_str&&n.text&&n.entities&&(i.source.twitter=i.known=!0),n.facebook_id?(i.source.facebook=!0,i.known=typeof n.message=="string"):n.network==="google_plus"?i.source.google=i.known=!0:n.network==="instagram"?i.source.instagram=i.known=!0:n.network==="massrelevance"&&(i.source.message=i.known=!0),i.source.twitter&&n.retweeted_status&&r.retweeted_by&&(i.retweet=!0,i.retweeted_by_user=n.user,i.status=n.retweeted_status),i},t}),massreljs.define("compare_poller",["helpers","generic_poller"],function(e,t){function n(){t.apply(this,arguments)}return e.extend(n.prototype,t.prototype),n.prototype.fetch=function(e,t,n){return e.load(t,n.callback,n.errback),this},n.prototype.each=n.prototype.data,n}),massreljs.define("compare",["helpers","compare_poller"],function(e,t){function n(t){e.is_array(t)?this.streams=t.slice(0):typeof t=="string"?this.streams=[t]:this.streams=[]}return n.prototype.compare_url=function(){return e.api_url("/compare.json")},n.prototype.buildParams=function(e){var t=[];return e=e||{},e.streams&&t.push(["streams",e.streams]),(e.target||e.target>=0)&&t.push("target",e.target.toString()),t},n.prototype.load=function(t,n,r){typeof t=="function"&&(r=n,n=t,t=null);var i=this.buildParams(e.extend({streams:this.streams},t||{}));return e.request_factory(this.compare_url(),i,"meta_",this,n,r),this},n.prototype.poller=function(e){return new t(this,e)},n}),massreljs.define("intents",["helpers"],function(e){var t={base_url:"https://twitter.com/intent/",params:{text:"(string): default text, for tweet/reply",url:"(string): prefill url, for tweet/reply",hashtags:"(string): hashtag (or list with ,) without #, for tweet/reply",related:"(string): screen name (or list with ,) without @, available for all",in_reply_to:"(number): tweet id, only for reply",via:"(string): screen name without @, tweet/reply",tweet_id:"(number): tweet id, for retweet and favorite",screen_name:"(string): only for user/profile",user_id:"(number): only for user/profile",original_referer:'(string): url to display with related ("www.yahoo.com suggests you follow:")'},original_referer:window.top!==window.self&&document.referrer||null};return t.url=function(n,r){r=r||{},r.original_referer===undefined&&t.original_referer&&(r.original_referer=t.original_referer);var i=[];for(var s in r)i.push([s,r[s]]);return t.base_url+encodeURIComponent(n)+"?"+e.to_qs(i)},t.tweet=function(e){return t.url("tweet",e)},t.reply=function(e,n){return n=n||{},n.in_reply_to=e,t.tweet(n)},t.retweet=function(e,n){return n=n||{},n.tweet_id=e,t.url("retweet",n)},t.favorite=function(e,n){return n=n||{},n.tweet_id=e,t.url("favorite",n)},t.user=function(e,n){return n=n||{},isNaN(parseInt(e,10))?n.screen_name=e:n.user_id=e,t.url("user",n)},t.profile=t.user,t}),massreljs.define("massrel",["globals","helpers","stream","account","generic_poller","generic_poller_cycle","poller","meta_poller","poller_queue","context","compare","compare_poller","intents"],function(e,t,n,r,i,s,o,u,a,f,l,c,h){var p=window.massrel;typeof p=="undefined"?p=window.massrel=e:t.extend(p,e),p.Stream=n,p.Account=r,p.GenericPoller=i,p.GenericPollerCycle=s,p.Poller=o,p.MetaPoller=u,p.PollerQueue=a,p.Context=f,p.Compare=l,p.ComparePoller=c,p.helpers=t,p.intents=h;var d=t.parse_params();return d["massrel[host]"]&&(p.host=d["massrel[host]"]),p});// call massrel module
var massrel = massreljs.require('massrel');

// If there's an external AMD loader defined, define this library in that context.
if (typeof define === 'function' && define.amd) {
  define(massrel);
}

})(window);