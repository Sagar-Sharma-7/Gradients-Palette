import {colorList as c} from './colors.js'

const upward = document.querySelector(".upward");
const downward = document.querySelector(".downward");
const palettes = document.querySelectorAll(".palettes");
const boxes = document.querySelectorAll(".box");
const copy_msg = document.querySelector(".copy_msg");
const code = document.querySelector("#code")

let i = boxes.length;
let j=0;
for(j = 0; j < i; j++){
    if((j+1)%4 == 1){
        boxes[j].style.background = `linear-gradient(to right,${c[j]})`;
    }else if((j+1)%4 ==2){
        boxes[j].style.background =`linear-gradient(to left, ${c[j]})`;
    }else if((j+1)%4 == 3){
        boxes[j].style.background =`linear-gradient(to top, ${c[j]})`;
    }else if((j+1)%4 == 0){
        boxes[j].style.background =`linear-gradient(to bottom, ${c[j]})`;
    };
};


// $( ".box" ).click(function() {
//     let color = $( this ).css( "linear-gradient" );
//     console.log(color)
//   });

boxes.forEach(box => {
    box.addEventListener("click", () => {
        let rgb = box.style.background;
        navigator.clipboard.writeText(rgb);
        code.innerHTML = rgb;
        let bottom = -50;
        let copy_interval = setInterval(() => {
            copy_msg.style.bottom = `${bottom}vh`;
            bottom += 1;
            if(bottom>0){
                clearInterval(copy_interval);
            }
        },1)

    });
});















// right side navigator btns
downward.addEventListener("click", () => {
    downward.style.position = "relative";
    let x = 0;
    const y = setInterval(() => {
        downward.style.top = `${x}px`;
        x += 1
        if(x > 85){
            clearInterval(y)
        }
    },1);

    setTimeout(() => {
        let z = 85;
        const a = setInterval(() => {
        downward.style.top = `${x}px`;
        x -= 1
        if(x < 0){
            clearInterval(a)
        }
    },1);
    }, 1000);
});

upward.addEventListener("click", () => {
    upward.style.position = "relative";
    let x = 0;
    const y = setInterval(() => {
        upward.style.top = `-${x}px`;
        x += 1
        if(x > 85){
            clearInterval(y)
        }
    },1);

    setTimeout(() => {
        let z = 85;
        const a = setInterval(() => {
        upward.style.top = `-${x}px`;
        x -= 1
        if(x < 0){
            clearInterval(a)
        }
    },1);
    }, 1000);
    
});

