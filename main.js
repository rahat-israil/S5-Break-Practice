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
