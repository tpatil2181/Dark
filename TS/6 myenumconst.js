//6. Create an enum called myEnum, with 2 constants (myFirstConst,
//mySecondConst) with the string values "first" and "second":
var myEnum;
(function (myEnum) {
    myEnum["myFirstConst"] = "first";
    myEnum["mySecondConst"] = "second";
})(myEnum || (myEnum = {}));
var firstValue = myEnum.myFirstConst;
var secondValue = myEnum.mySecondConst;
console.log(firstValue);
console.log(secondValue);
