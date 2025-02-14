let knopExtern = document.getElementById("wisselknop-extern");

knopExtern.addEventListener("click", () => {
    if (knopExtern.innerHTML == "Hallo!")
    {
        knopExtern.innerHTML = "Tot ziens!";
    }
    else
    {
        knopExtern.innerHTML = "Hallo!";
    }
}, false);