window.onload = function () {
    const content = "안녕하세요:) \n 프론트엔드 개발자 강동휘 입니다.";
    const text = document.querySelector(".text");
    let i = 0;

    function typing() {
        let txt = content[i++];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 200)
};