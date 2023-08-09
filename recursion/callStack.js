function funcThree(){
    console.log("log third function")
}

function funcTwo(){
    funcThree()
    console.log("log second function")
}

function funcOne(){
    funcTwo()
    console.log("log first function")
}

funcOne();
