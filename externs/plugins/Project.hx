@:keepSub @:expose extern class Project {
	inline public static var HAXE:Int = 0;
	inline public static var OPENFL:Int = 1;
	inline public static var HXML:Int = 2;
	
	inline public static var FLASH:Int = 0;
	inline public static var JAVASCRIPT:Int = 1;
	inline public static var PHP:Int = 2;
	inline public static var CPP:Int = 3;
	inline public static var JAVA:Int = 4;
	inline public static var CSHARP:Int = 5;
	inline public static var NEKO:Int = 6;
	
	inline public static var URL:Int = 0;
	inline public static var FILE:Int = 1;
	inline public static var COMMAND:Int = 2;
	
	public var type:Int;
	public var target:Int;
	
	public var name:String;
	public var main:String;
	public var projectPackage:String;
	public var company:String;
	public var license:String;
	public var url:String;
	
	public var customArgs:Bool;
	public var args:Array<String>;
	
	public var files:Array<String>;
	
	public var path:String;
	
	public var openFLTarget:String;
	
	public var runActionType:Int;
	public var runActionText:String;
	
	public var buildActionCommand:String;
	
	function new() : Void;
}