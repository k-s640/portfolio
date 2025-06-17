console.log("main.js!!");
document.addEventListener("DOMContentLoaded", function () {
    const buttonA = document.querySelector(".btn-primary"); // ボタンA
    const buttonB = document.querySelector(".btn-light"); // ボタンB
    const content = document.querySelector("#content"); // 変更対象の要素

    buttonA.addEventListener("click", function () {
        content.style.backgroundColor = "white";  // 背景を白色に
        content.style.color = "inherit";  // テキストを黒色に
    });

    buttonB.addEventListener("click", function () {
        content.style.backgroundColor = "#212529";  // 背景を黒色に
        content.style.color = "white";  // テキストを白色に
    });
});