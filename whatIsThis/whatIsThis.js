/*******************************/
/*   Setting up the examples   */
/*******************************/
var whatIsThis = function(a, b) {
	console.log('This is...', this);
	console.log('a = ', a);
	console.log('b = ', b);
};

var inAnObject = {
	name: 'inAnObject',
	test1: whatIsThis,
	anotherObject: {
		name: 'anotherObject',
		test2: whatIsThis
	}
};

var inAFunction = function(a, b) {
	this.name = 'Sally';
	whatIsThis(a, b);
};

inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
	name: 'trickyTricky',
	why: 'does this work?',
	what: 'is going on here?'
};

var confusing = {
	name: 'confusing',
	state: 'Alaska',
	city: 'Anchorage'
};


/*******************************/
/*     Running the examples    */
/*******************************/

// Instructions:
// You are a scientist who has just discovered a *mysterious* new element
// in your lab. Since creativity isn't your strong suit, you name the element
// `this`. Your job is to figure out the properties of this new element as
// well as how it interacts with its environment. Run through each of the
// examples in whatIsThis.js, one by one (commenting out the previous example
// and uncomment the current example as necessary). In the comments section
// below each example fill in what `this` is referencing inside of the
// whatIsThis function. Why? If it throws an error, why is it throwing an
// error?

// You can open index.html in your browser and view your console to get
// started.

// * Problem 1
// whatIsThis('hello', 'world');
// * "this" is ...
    //the Window object
// * because ...
    //because the return value of the whatIsThis function lives on the window. Since 'this' in this instance is part of the return value, it is scoped to the window object.




// * Problem 2
// window.whatIsThis('hello', 'world');
// * "this" is ...
	//the Window object
// * because ...
  //the output is the same here because this is still scoped to the window object. previously, it defaulted to the window obj because that was as global as it could get. this instanc of 'this' is



// * Problem 3
// inAnObject.test1('face', 'book');
// * "this" is ...
    //the object, inAnObject
// * because ...
    //scoped as the value of inAnObject's labels--it is only accessable through the object as test1's value. since the value of test1 is stored as a variable (function whatIsThis), this is scoped to the function whatIsThis(a,b)




// * Problem 4
// inAnObject.anotherObject.test1('twitter', 'book');
// * "this" is ...
  //error
// * because ...
  //inAnObject.anotherObject.test1 doesn't exist. 'test1' cannot be found because test1 is only in inAnObject. 'this'



// * Problem 5
// inAnObject.anotherObject.test2('twitter', 'book');
// * "this" is ...
    //anotherObject
// * because ...
    //this is anotherObject because the function whatIsThis is being called inside of the nested object.



// * Problem 6
// whatIsThis.call();
// * "this" is ...
    //the window object
// * because ...
  //since a different 'this' object can be assigned when calling an existing function, 'this' refers to the current object, which is the window object (what's being called). With call, you can write a method once and then inherit it in another object, without having to rewrite the method for the new object.



// * Problem 7
// whatIsThis.call(trickyTricky);
// * "this" is ...
  // the object trickeyTrickey{}
// * because ...
  //you're calling the 'this' on the object trickeyTrickey...so just like the nested object from problem 5, 'this' is scoped to the trickeyTrickey object, named trickeyTrickey...



// * Problem 8
// whatIsThis.call(trickyTricky, 'nice', 'job');
// * "this" is ...
  //still the trickeyTrickey object
// * because ...
  //you're still calling the 'this' on the trickeyTrickey object...this is still referring to the current object, the calling object, which is trickeyTrickey



// * Problem 9
// whatIsThis.call(confusing);
// * "this" is ...
    //it's just the 'confusing' object that is being called
// * because ...
    //rather than just calling the function, whatIsThis, you're using the call() method to put the 'this' on the confusing object



// * Problem 10
// whatIsThis.call(confusing, 'hello');
// * "this" is ...
    //the the confusing object still
// * because ...
    //just because you're passing in more arguments, doesn't change the first 'this' that you're setting as 'confusing'. .call() method is just taking the given this value (confusing object), and taking 'hello' as an argument. 'hello'



// * Problem 11
// whatIsThis.apply(trickyTricky);
// * "this" is ...
  //trickeyTrickey as an array-like object
// * because ...
  //when .apply() is used on a function, it turns whatever 'this' is set to be (in this case, trickey) into an array or an array-like object.



// * Problem 12
// whatIsThis.apply(confusing, ['nice', 'job']);
// * "this" is ...
		//confusing object
// * because ...
	//this is the confusing object because apply was used and called the confusing object. this takes the scope away from the 'this' in the whatIsThis function, and puts it on 'confusing'. 'nice' and 'job' both show up because they are the arguments of the whatIsThis function. this does NOT become scoped to the window, rather, it's that 'this'now gets scoped to 'confusing'



// * Problem 13
// whatIsThis.apply(confusing, 'nice', 'job');
// * "this" is ...
		// error
// * because ...
		//the syntax is wrong and the apply method can't change the scope of 'this' to the confusing object if the arguments aren't applied correctly to the whatIsThis function



// * Problem 14
// inAFunction('what will', 'happen?');
// * "this" is ...
			//window object
// * because ...
		//'this' is scoped to the window object because the function is on the window. so the 'this' refers to the function that is globally scoped



// * Problem 15
// inAFunction.test3('A', 'B');
// * "this" is ...
// * because ...
// ????????????????????????????????



// * Problem 16
// var newObject = new inAFunction('what will', 'happen?');
// * "this" is ...
		//the window object
// * because ...
		//since you're creating a new object, and that object is globally scoped? (aka it's not in any functions or methods or anything...)...it's just on the window.



// * Problem 17
// var newObject = new inAFunction('what will', 'happen?');
// newObject.test3('C', 'D');
// * "this" is ...
// * because ...
// ??????????????????????????????????????????????



// * Problem 18
inAnObject.test1.call(trickyTricky, 'face', 'book');
// * "this" is ...
		//trickeyTrickey object
// * because ...
		//with the call method, 'this' refers to the current object in its paramters. 



// * Problem 19
// inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
// * "this" is ...
			//confusing object
// * because ...
		//just the confusing object because the apply method scopes 'this' to whatever it's parameter is set to (in this case, the confusing object)
