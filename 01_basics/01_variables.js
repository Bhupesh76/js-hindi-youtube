const accountID = 12345
var accountEmail = "bhupesh.chavan26@google.com"
let accountPassword = "12345"
accountCity = "Pune"
let accountState;

/*
please prefer not to use var keyword in your code to avoid block scope and functional scope
*/


// accountID = 4545 const cannot be changed 

accountEmail = "chavan.bhupesh55@google.com" // accountEmail can be changed (var)
accountPassword = "7878" // accountPassword can be changed (let)
accountCity = "Yavatmal" // accountCity can be changed 

console.log(accountID)
console.table([accountEmail,accountPassword,accountCity,accountState])

