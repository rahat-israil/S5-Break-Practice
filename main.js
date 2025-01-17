function DynamicImage() {
    const imageUrl = "https://via.placeholder.com/150"; // Dynamic Image URL
    const imageAlt = "Placeholder Image"; // Dynamic alt text

    return (
        <div>
            <img src={imageUrl} alt={imageAlt} />
            <p>{imageAlt}</p>
        </div>
    );
}

export default DynamicImage;





let age = 16;
let hasPermission = true;

if (age >= 18 || hasPermission) {
    console.log("You are allowed.");
} else {
    console.log("You are not allowed.");
}




function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

const output = multiply(35, 78);
console.log(output);




const numbers = [89, 35, 98, 12];
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};

const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;

console.log(about)




const age = 18;

// Using Ternary Operator
const eligibility = age >= 18 ? "Eligible to vote" : "Not eligible to vote";

console.log(eligibility); // Output: Eligible to vote





const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}



