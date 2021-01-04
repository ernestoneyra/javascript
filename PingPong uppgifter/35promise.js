//Promise 1
/*setTimeout(function(){
    console.log('TIMED OUT');

}, 300);*/

//Promise 2
/*var promise = new Promise((fulfill) => { 
    setTimeout(() => {
        fulfill('FULFILLED')
    }, 300);
    }
)
promise.then(console.log);*/

var promise = new Promise((fullfill, reject) => {
    //fullfill('Helllo ')
    reject(new Error('Error message'))
});

function onReject(error){
    console.log(error.message)
}

promise.then(null, onReject);

// Promise 3
/*var promise = new Promise((fullfill, reject) => {
    setTimeout(() => {
        reject(new Error('REJECTED!'))
    }, 300);
});

function onReject (error) {
   console.log(error.message)
}

promise.then(null, onReject);*/

//Promise 4
/*var promise = new Promise(function(fullfill, reject){ //First, create a promise using the Promise constructor as we have been doing.

    fullfill('I FIRED'); //In the promise’s executor, immediately attempt to fulfill the promise with a value of 'I FIRED'.

    reject(new Error('I DID NOT FIRE')); //Then, after the fulfill call, immediately try to reject the promise with an Error created with parameter 'I DID NOT FIRE'.

});

function onReject(error){ //After the promise creation, create a function onRejected with one parameter error that prints the Error’s message with console.log.
    console.log(error.message);
}

promise.then(console.log, onReject) //Lastly, pass console.log and the function you just created as the success and rejection handlers respectively.*/

//Promise 5
/*var promise = new Promise((fulfill, reject) => {
    fulfill('PROMISE VALUE')
} );
// At this point, the value of promise is already known.

// If promise is not always asynchronous, console.log would be called with
// 'PROMISE VALUE' here. This is not the case.

promise.then(console.log);
console.log('MAIN PROGRAM');*/ //Finally, print out “MAIN PROGRAM” with console.log.

//Promise 6

/*let message;
let promise;

message = `fatal error detected`


promise = Promise.reject(new Error(message));

promise.catch(function (err) {
    let i = 4;

    process.stderr.write(err.message)


    setTimeout(function boom() {
    process.stderr.write(`\nTerminated in ${--i} seconds`)
    if (!i){
        process.stderr.write(`\n............Boom............\n`);
    }else{
        setTimeout(boom, 1000);
    }


    }, 1000)
    
});*/



//Example
/*var message;
var promise;

function randomBytes(n) {
  return (Math.random() * Math.pow(256, n) | 0).toString(16);
}

message =
  'A fatal exception ' + randomBytes(1) + ' has occurred at ' +
  randomBytes(2) + ':' + randomBytes(4) + '. Your system\nwill be ' +
  'terminated in 3 seconds.';

promise = Promise.reject(new Error(message));

promise.catch(function (err) {
  var i = 3;

  process.stderr.write(err.message);

  setTimeout(function boom() {
    process.stderr.write('\rwill be terminated in ' + (--i) + ' seconds.');
    if (!i) {
      process.stderr.write('\n..... . . . boom . . . .....\n');
    } else {
      setTimeout(boom, 1000);
    }
  }, 1000);
});*/

//Promise 7
/*let firstPromise = first();

let secondPromise = firstPromise.then(function (val){
    return second(val); //onFullfilled callback???
});

secondPromise.then(console.log);*/

//Promise 8
/*function eachTitle(pre){
    return `DR. ${pre}`
}


var promise = Promise.resolve(`MANHATTAN`)
    .then(eachTitle)
    .then(console.log);*/

//Promise 9
/*function parsePromised(json){
    return new Promise((fulfill, reject) => {
        try{
            fulfill(JSON.parse(json))    //Build a function called parsePromised that creates a promise, performs JSON.parse in a try/catch block, and fulfills or rejects the promise depending on whether an error is thrown. Note: your function should synchronously return the promise!
        }catch (e){
            reject (e);
        }
    });
}

function onReject(error){
    console.log(error.message)
}
                                //Build a sequence of steps like the ones shown above that catches any thrown errors and logs them to the console.
parsePromised(process.argv[2])
.then(null, onReject);*/

//Promise 10
/*function alwaysThrows(){
    throw new Error (`OH NO`);
}
function iterate(arg){
    console.log(arg)
    return arg +1;
}

function onReject(error){
    console.log(error.message);
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(onReject);*/

//Promise 11
/*function all(a, b){
    return new Promise((fulfill, reject) => {
        var counter = 0;
        var out = [];


        a.then((val) =>{
            out[0] = val;
            counter++;

            if (counter >= 2){
                fulfill(out);
            }
        } );


        b.then((val) => {
            out[1] = val;
            counter++;

            if (counter >= 2){
                fulfill(out);
            }
        });
    });
}

all(getPromise1(), getPromise2())
.then(console.log)*/