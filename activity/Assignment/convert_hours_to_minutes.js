//8. Write a function to convert hours into minute

function hoursConverter(hours) {
    const minutes = Math.floor(hours * 60);
    console.log(`${hours} hours equal to ${minutes} minutes`);
}
hoursConverter(10)

////////
const minutes = convertHoursMinute (1)
function convertHoursMinute(hours) {
    return Math.floor(hours * 60);
}
console.log(minutes + " minutes");



// function to convert hours into seconds
function hoursToSeconds(hours){
    const seconds = Math.floor(hours *60 *60)
    console.log(`${hours} hours equal to ${seconds} seconds`);
}
hoursToSeconds(1)


