// Function to change title when tab is switched
const handleVisibilityChange = () => {
    if(document.hidden){
        document.title = "Come back!";
    }else{
        document.title ="Gradient Palette";
    }
}


document.addEventListener("visibilitychange", handleVisibilityChange);