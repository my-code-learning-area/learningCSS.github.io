"use strict"
window.onload = function () {
    let btns = document.getElementsByClassName("btnOutline");
    for (let i = 0; i < btns.length; i++) {
        btns[i].onmouseover = ripple;
        btns[i].onclick = ripple;
    }

    function ripple(event) {
        let ripple = document.createElement('span')
        ripple.style.top = (event.clientY - this.offsetTop) + "px";
        ripple.style.left = (event.clientX - this.offsetLeft) + "px";
        ripple.classList.add("ripple");

        this.append(ripple)

        setTimeout(() => ripple.remove(), 5000)
    }
}()