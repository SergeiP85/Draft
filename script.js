// Array of image URLs for each window
const images = [
    "images/img1.jpg", // Replace with actual paths
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg",
    "images/img7.jpg",
    "images/img8.jpg",
    "images/img9.jpg",
];

// Add images to windows
const windows = document.querySelectorAll(".window");

windows.forEach((window, index) => {
    // Add image element dynamically
    const img = document.createElement("img");
    img.src = images[index];
    window.appendChild(img);

    // Add click event to reveal the image
    window.addEventListener("click", () => {
        const imgElement = window.querySelector("img");
        imgElement.style.display = "block"; // Show the image
        window.style.backgroundColor = "transparent"; // Remove background color
        window.style.border = "none"; // Remove border
    });
});
