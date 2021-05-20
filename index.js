// Code your solution here

function findMatching(drivers, passingDrivers) {
   
   const newDrivers = drivers.filter(newDriver => newDriver.toUpperCase() === passingDrivers.toUpperCase()) 
        return newDrivers; 
}

function fuzzyMatch(driversArray, passingDrivers) {

    return driversArray.filter(newDriver => newDriver.toUpperCase().indexOf(passingDrivers.toUpperCase()) === 0 )
}

function matchName(driverArray, string) {
    return driverArray.filter(driver => driver.name === string )

}

//whose name property matches the provided string argument.

