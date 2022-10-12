const upward = document.querySelector(".upward");
const downward = document.querySelector(".downward");
const palettes = document.querySelectorAll(".palettes");
const boxes = document.querySelectorAll(".box");

let i = boxes.length;
let j=0;
for(j = 0; j < i; j++){
    if((j+1)%4 == 1){
        boxes[j].style.background = `linear-gradient(to right,${boxes[j].innerHTML})`;
    }else if((j+1)%4 ==2){
        boxes[j].style.background =`linear-gradient(to left, ${boxes[j].innerHTML})`;
    }else if((j+1)%4 == 3){
        boxes[j].style.background =`linear-gradient(to top, ${boxes[j].innerHTML})`;
    }else if((j+1)%4 == 0){
        boxes[j].style.background =`linear-gradient(to bottom, ${boxes[j].innerHTML})`;
    };
};





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

