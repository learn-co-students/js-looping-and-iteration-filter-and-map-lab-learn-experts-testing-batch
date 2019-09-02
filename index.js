// Code your solution here:

const driversWithRevenueOver = (drivers, revenue) =>{
    return drivers.filter((driver) => (driver.revenue  > revenue))
}

const driverNamesWithRevenueOver = (drivers, revenue) =>{
    return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}

const exactMatch = (drivers, att_obj) =>{
    const key = Object.keys(att_obj)[0]
    return drivers.filter(driver => driver[key] === att_obj[key])
}

const exactMatchToList = (drivers, att_obj) =>{
    return exactMatch(drivers, att_obj).map(driver => driver.name)
}



