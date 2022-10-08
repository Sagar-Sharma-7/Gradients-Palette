const upward = document.querySelector(".upward");
const downward = document.querySelector(".downward");

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
});