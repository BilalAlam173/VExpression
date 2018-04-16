angular.module("VExpress").controller("ctrl",['$scope','$window',function(scope,window){
	//scope.paramValue="as";
	var tester = VerEx()
	.startOfLine()
	.anything()
	.endOfLine();
	console.log(tester);
	console.log(tester.test("https://www.fb.com"));
	

	scope.exampleFlag=false;
	scope.vexname="enter"
	var test=VerEx();

	scope.eg_vex=
	{
		type:"Web Url",
		rex:"^(http)(s)?(\:\/\/)(www\.)?([^\ ]*)$",
		vex:["VerEx().","startOfLine().","then('http').","maybe('s').","then('://').","maybe('www.').","anythingBut(' ').",".endOfLine();"]
	};

	scope.vexMethods=[
	{
		name:"startOfLine",
		parametre:false
	},
	{
		name:"endOfLine",
		parametre:false
	},
	{
		name:"anything",
		parametre:false
	},
	{
		name:"anythingBut",
		parametre:true
	},
	{
		name:"maybe",
		parametre:true
	},

	{
		name:"then",
		parametre:true
	}
	];

	scope.userVex=[];

	function generateRE(method){
		console.log(test);
		switch(method.name) {
			case "startOfLine":
			test=test.startOfLine();
			break;
			case "endOfLine":
			test=test.endOfLine();
			break;
			case "anything":
			test=test.anything();
			break;
			case "anythingBut":
			test=test.anythingBut(method.value);
			break;
			case "maybe":
			test=test.maybe(method.value);
			break;
			case "then":
			test=test.then(method.value);
			break;
		}
		scope.RE=test;
		console.log(scope.RE)
	}
	

	scope.example=function(flag){

		scope.exampleFlag=((flag) ? true : false);
	}
	var i=0;
	scope.add=function(method){
		method.id=i;
		i++;
		console.log(method);
		scope.userVex.push(method);
		generateRE(method);
	}
	

	scope.testRE=function(){
		//console.log(test.test(scope.testString));
		window.alert(test.test(scope.testString));
		//scope.testResult=test.test(scope.testString);
		//console.log(scope.testResult);
		
	}

}]);