
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

function returnFirstTwoDrivers(drivers) {
    return (drivers.slice(0,2)) 
}
function returnLastTwoDrivers(drivers) {
    return (drivers.slice(2,5)) 
}
const selectingDrivers = [
returnFirstTwoDrivers, 
returnLastTwoDrivers
]

function createFareMultiplier(a) {
    return function fareMultiplier(fare) {
        return fare * a
    }
}
const doubleFare = createFareMultiplier(2)

function fareDoubler(doubleFare) {
    return doubleFare*2
}
const tripleFare = createFareMultiplier(3)

function fareTripler(tripleFare) {
    return tripleFare*3
}
const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers);
}