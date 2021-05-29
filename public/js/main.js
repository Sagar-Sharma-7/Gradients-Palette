AOS.init();

const palette = document.querySelectorAll(".palette");
const h1 = document.querySelector("H1");
const h2 = document.querySelectorAll("H2")

h1.innerHTML = "Click To Copy";
h2.innerHTML = "Gradient Palette";

palette.forEach((linear_gradients) => {
    linear_gradients.style.background = `linear-gradient(to right, ${linear_gradients.innerHTML})`;
});

palette.forEach((paletteBox) => {
    paletteBox.addEventListener("click", () => {
        const hexcode = paletteBox.innerHTML.toUpperCase();
        navigator.clipboard.writeText(hexcode);
        console.log(hexcode);

        paletteBox.style.background = "linear-gradient(#1c1c1c, #1c1c1c)";
        paletteBox.style.color = "lightgreen";
        paletteBox.classList.add("palette-animation");
        paletteBox.innerHTML = "&#10003; Copied";

        setTimeout(() => {
            paletteBox.classList.remove("palette-animation");
            paletteBox.style.color = "#fff";
            paletteBox.style.background = `linear-gradient(to right, ${hexcode})`;
            paletteBox.innerHTML = hexcode;
        }, 2000);
    });
});