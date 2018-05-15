// Code your solution in this file!
function logDriverNames(drivers){
  function printName (el, i, arr) {console.log(el.name)}
  return drivers.forEach(printName)
}
