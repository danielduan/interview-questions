// SQSP



function outputValues(values) {

    for (var i = 0; i < values.length; i++) {
        (function(x, v) {
            setTimeout(function() {
                console.log("item " + x + " is " + v[x]);
            }, i * 200);
        })(i, values);
    }

}

function applyFn(fn) {
    var prev = null;

    var curryFunction = function(z) {
        if (prev === null) {
            prev = z;
            return curryFunction;
        } else if (typeof(z) != 'undefined') {
            prev = fn(prev, z);
            return curryFunction;
        } else {
            return prev;
        }
    };
    return curryFunction;
}

/*
is the answer in the system wrong perhaps?

var sign = 1;
function addSub(a,b) {
    sign = sign * -1;
    return a + (b * sign);
}

var f = applyFn(addSub);
console.log(f(5)(8)(0)(2)(6)());   <-- returns 1 for me locally, assuming (((5-8)+0)-2)+6
*/


// Define the constructor 'User'

// wow this doesn't support ES6..?
function User(email) {
    this.email = email;

    var _password;

    function setPassword(password) {
        _password = password;
        return this;
    }

    function validatePassword(password) {
        return password === _password;
    }

    this.setPassword = setPassword;
    this.validatePassword = validatePassword;
}

User.prototype.getEmail = function() {
    return this.email;
}

User.prototype.authenticate = function(password) {
    return this.validatePassword(password);
}
