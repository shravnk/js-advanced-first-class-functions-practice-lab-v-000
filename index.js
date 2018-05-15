// Code your solution in this file!
function logDriverNames(drivers){
  function printName (el, i, arr) {return console.log(el.name)}
  return drivers.foreach(printName)
}
