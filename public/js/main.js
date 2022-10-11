const upward = document.querySelector(".upward");
const downward = document.querySelector(".downward");
const boxes = document.querySelectorAll(".box");


boxes[0].style.background = `linear-gradient(${boxes[0].innerHTML})`;


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

