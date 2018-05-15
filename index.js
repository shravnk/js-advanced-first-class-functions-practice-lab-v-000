// Code your solution in this file!
function logDriverNames(drivers){
  function printName (el, i, arr) {console.log(el.name)}
  return drivers.forEach(printName)
}

function logDriversByHometown(drivers, location) {
  function printName (el, i, arr) {if (el.hometown === location) {console.log(el.name)}}
  return drivers.forEach(printName)
}

function driversByRevenue(drivers) {
  return drivers.sort(function(a,b) {return a.revenue - b.revenue})
}
