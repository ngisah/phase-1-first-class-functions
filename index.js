function receivesAFunction(callback){

    callback()
}


function returnsANamedFunction(){
    return function namedFunction(){
        console.log("learning js functions");
    };
}

function returnsAnAnonymousFunction(){

    return function(){alert('bad day')};
}


  