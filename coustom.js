const mnue = document.querySelector(".mnue");
const mog = document.querySelector(".coffee");
const text_moug = document.querySelector(".text_cup");
const btn = document.querySelector(".btn");
const input_text = document.querySelector(".input_name input");


let dark = true;

mnue.addEventListener("mouseup", function () {

    if (dark == true) {
        mog.style.top = "-100%";
        dark = false;
    } else {
        mog.style.top = "0";
        dark = true;
        let text = input_text.value;
        text_moug.innerHTML = text;
    }
});


let test_save = btn.addEventListener("click", function () {
    let text = input_text.value;
    text_moug.innerHTML = text;
});
