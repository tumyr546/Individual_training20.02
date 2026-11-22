const gallery = document.querySelector(".gallery");

const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") gallery.scrollLeft += 320;
    if (event.key === "ArrowLeft") gallery.scrollLeft -= 320;
};

document.addEventListener("keydown", handleKeyDown);