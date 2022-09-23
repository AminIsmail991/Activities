//4. Write a function to calculate area of the circle where radius is input and formula is A=pi x square of radius

function calculateAreaCircle(radius) {
    const area = Math.PI * (radius * radius); //area = π * r2
    console.log(`Area of the circle : ${area}`);
}
calculateAreaCircle(20);



const area = calculateAreaCircle2(20);
function calculateAreaCircle2(radius) {
    return Math.PI * (radius * radius)
}
console.log(area);

