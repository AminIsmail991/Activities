//7. Write a function to convert age (in years) to the days. Assume that there are 365 days in 1 year.


function s1_calculateAge(yearsOfBirth) {
    const currentYear = new Date().getFullYear();
    const nowAge = currentYear - yearsOfBirth;
    console.log(`Current Age is ${nowAge} Years Old`);

    const ageInDays = nowAge * 365; //assume 1 years = 365 days
    console.log(`Age in days : ${ageInDays} Days`);
}
s1_calculateAge(1999)



//////

const ageInDays = calculateAge(1999);
function calculateAge(yearsOfBirth) {
    const currentYear = new Date().getFullYear();
    const nowAge = currentYear - yearsOfBirth;
    return Math.floor(nowAge * 365)
}
console.log(ageInDays + " Days");