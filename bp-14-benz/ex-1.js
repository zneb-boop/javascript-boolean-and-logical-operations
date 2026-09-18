let isOver18 = true
let hasCriminalBlacklist = false
let isAllow = isOver18 && !hasCriminalBlacklist
console.log(isAllow)

let james = {age : 18, criminalBlacklist : hasCriminalBlacklist}
console.log(james)

let isAllowJames = james.age >= 18 && !james.criminalBlacklist
console.log(isAllowJames)