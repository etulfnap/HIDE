(function ($hx_exports) { "use strict";
var HaxeServer = $hx_exports.HaxeServer = function() { };
HaxeServer.start = function() {
	HaxeServer.haxeCompletionServer = js.Node.require("child_process").exec(["haxe","--wait","6001"].join(" "),{ },function(error,stdout,stderr) {
		console.log(stdout);
		console.log(stderr);
		console.log("haxeCompletionServer process exit code " + error.code);
	});
	js.Node.require("nw.gui").Window.get().on("close",function(e) {
		HaxeServer.terminate();
	});
};
HaxeServer.terminate = function() {
	HaxeServer.haxeCompletionServer.kill();
};
var HxOverrides = function() { };
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
var Main = function() { };
Main.main = function() {
	HaxeServer.start();
	HIDE.notifyLoadingComplete(Main.$name);
};
var Std = function() { };
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
var js = {};
js.Node = function() { };
if(Array.prototype.map == null) Array.prototype.map = function(f) {
	var a = [];
	var _g1 = 0;
	var _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		a[i] = f(this[i]);
	}
	return a;
};
var module, setImmediate, clearImmediate;
js.Node.setTimeout = setTimeout;
js.Node.clearTimeout = clearTimeout;
js.Node.setInterval = setInterval;
js.Node.clearInterval = clearInterval;
js.Node.global = global;
js.Node.process = process;
js.Node.require = require;
js.Node.console = console;
js.Node.module = module;
js.Node.stringify = JSON.stringify;
js.Node.parse = JSON.parse;
var version = HxOverrides.substr(js.Node.process.version,1,null).split(".").map(Std.parseInt);
if(version[0] > 0 || version[1] >= 9) {
	js.Node.setImmediate = setImmediate;
	js.Node.clearImmediate = clearImmediate;
}
Main.$name = "boyan.compilation.server";
Main.main();
})(typeof window != "undefined" ? window : exports);

//# sourceMappingURL=Main.js.map