// function to fetch and read json file
import data from './colors.json' assert { type: 'json' };

const copy_wrap = document.querySelector(".copy_wrap")
const color = document.querySelectorAll(".color");
const color_hex = document.querySelectorAll(".code");
const toggle_down = document.querySelector(".toggle_down");
const copy_btn = document.querySelector(".copy_btn");
const insta_btn =document.querySelector(".insta_btn");
const github_btn = document.querySelector(".github_btn");
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

const applyGradient = () => {
    let i = 0;
    for(; i < total_palettes; i++){
        palettes[i].style.background=`linear-gradient(to bottom right, ${data[total_palettes - i].colors[0]}, ${data[total_palettes - i].colors[1]})`;
        palettes[i].setAttribute("data-color_one", data[total_palettes - i].colors[0]);
        palettes[i].setAttribute("data-color_two", data[total_palettes - i].colors[1]);
    };
}

applyGradient();

// show hexcode when hover on palette;
palettes.forEach(item =>{
    item.addEventListener("mouseover", () => {
        let color_one = item.getAttribute("data-color_one");
        let color_two = item.getAttribute("data-color_two");
        item.innerHTML = `${color_one.toUpperCase()} | ${color_two.toUpperCase()}`;
    });
});
palettes.forEach(item => {
    item.addEventListener("mouseout", () => {
        item.innerHTML = "";
    });
});

// function to show copy wrap div when user click on palette
palettes.forEach(item =>{
    item.addEventListener("click", ()=> {
        let color_one = item.getAttribute("data-color_one");
        let color_two = item.getAttribute("data-color_two");
        color_hex[0].innerHTML = color_one.toUpperCase();
        color_hex[1].innerHTML = color_two.toUpperCase();
        color[0].style.backgroundColor = color_one;
        color[1].style.backgroundColor = color_two;
        copy_wrap.style.bottom = "0px";
    });
});
toggle_down.addEventListener("click", () => {
    copy_wrap.style.bottom = "-100px";
});



// function to copy gradient hexcode
copy_btn.addEventListener("click", async () => {
    try {
        let copied_text = `linear-gradient(to bottom right, ${color_hex[0].innerHTML}, ${color_hex[1].innerHTML})`;
        await navigator.clipboard.writeText(copied_text);
        copy_btn.innerHTML = "Copied!";
        setTimeout(() => {
            copy_btn.innerHTML = "Copy CSS"
        }, 1000);
    } catch (error) {
        console.log("failed to copy due to: ",error);
    };
});

// scripting of social media buttons 
insta_btn.addEventListener("click", () => {
    let url = "https://www.instagram.com/sagar.designs_/";
    window.open(url, '_blank');
});
github_btn.addEventListener("click", () => {
    let url = "https://github.com/Sagar-Sharma-7";
    window.open(url, '_blank');
});

// Function to change title when tab is switched
const handleVisibilityChange = () => {
    if(document.hidden){
        document.title = "Come back!";
    }else{
        document.title ="Gradient Palette";
    }
}

document.addEventListener("visibilitychange", handleVisibilityChange);



