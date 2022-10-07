const upward = document.querySelector(".upward");
const downward = document.querySelector(".downward");

downward.addEventListener("click", () => {
    downward.style.position = "relative";
    let x = 0;
    const y = setInterval(() => {
        downward.style.top = `${x}px`;
        x += 1
        if(x > 40){
            clearInterval(y)
        }
    },10);
});