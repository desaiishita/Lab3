//Question 1
let radius = 5.5;   

function areaPerimeterCirc () {
    let perimeter = 2 * radius * Math.PI;
    let area = radius * radius * Math.PI;

    console.log ("The perimter of the circle is", perimeter)
    console.log ("The area of the circle is", area)
}
areaPerimeterCirc();


//Question 2
let width = 4.5;
let height = 7.9;

function areaPerimeterRec () {
    let perimeter = (2*width) + (2*height) 
    let area = width * height

    console.log ("The perimter of the rectangle is " + perimeter)
    console.log ("The area of the rectangle is " + area)
}

areaPerimeterRec ();

//Question 3
let rad =5.5;
let length = 12;

function areaVolCil () {
    let area = rad * rad * Math.PI;
    let volume = area * length;

    console.log ("The area of the cylinder is" + area)
    console.log ("The volume of the cylinder is" + volume)
}

areaVolCil ();

//Question 4

let subtotal = 10;
let gratuityRate = 15;

function gratTotal () {
    let gratutity = subtotal * (gratuityRate/100);
    let total = subtotal + gratutity;

    console.log ("The gratutity is $" + gratutity + " and the total is $" + total)
}  

gratTotal ()