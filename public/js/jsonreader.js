// function to fetch and read json file
import data from './colors.json' assert { type: 'json' };
console.log(data);

const palettes_wrap = document.getElementsByClassName("palettes_wrap");
const createPalettes = () => {
    let i = 1
    for(; i < data.length; i++){
        const palette = document.createElement("div");
        palette.classList.add('palette');
        palettes_wrap[0].appendChild(palette);
    }
}

createPalettes();