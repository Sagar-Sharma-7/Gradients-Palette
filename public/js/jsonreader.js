// function to fetch and read json file
import data from './colors.json' assert { type: 'json' };
console.log(data);

const palettes_wrap = document.getElementsByClassName("palettes_wrap");
// function to create palette divs
const createPalettes = () => {
    let i = 1
    for(; i < data.length; i++){
        const palette = document.createElement("div");
        palette.classList.add('palette');
        palettes_wrap[0].appendChild(palette);
    }
}
createPalettes();

// function to apply linear gradient to palette divs
const palettes = document.querySelectorAll(".palette");
const total_palettes = palettes.length;
console.log(total_palettes)
const applyGradient = () => {
    let i = 0;
    for(; i < total_palettes; i++){
        palettes[i].style.background=`linear-gradient(to bottom right, ${data[i+1].colors[0]}, ${data[i+1].colors[1]})`;
    }
}

applyGradient();



