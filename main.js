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
