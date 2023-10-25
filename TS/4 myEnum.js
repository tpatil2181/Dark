var myEnum;
(function (myEnum) {
    myEnum[myEnum["myFirstConst"] = 0] = "myFirstConst";
    myEnum[myEnum["mySecondConst"] = 1] = "mySecondConst";
    myEnum[myEnum["myThirdConst"] = 3] = "myThirdConst";
})(myEnum || (myEnum = {}));
var firstValue = myEnum.myFirstConst;
var secondValue = myEnum.mySecondConst;
var thirdValue = myEnum.myThirdConst;
console.log(firstValue);
console.log(secondValue);
console.log(thirdValue);
