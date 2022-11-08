// 1) Используя регулярные выражения
// необходимо сделать поле для ввода формата
// ИНН - ппервыми цифрами должны быть либо 1 либо 0,
// а затем еще 13 цифр (в общем должно быть 14 цифр).

const registerInput = document.querySelector("#registerInput")
const registerCheck = document.querySelector(".registerCheck")
const registerResult = document.querySelector(".registerResult")
const  registerRegExp = /^[0,1]\d{13}$/

registerCheck.addEventListener("click", () => {

    if (registerRegExp.test(registerInput.value)) {
        registerResult.innerText = "ok"
        registerResult.style.color = "green"
    } else {
        registerResult.innerText = "not ok"
        registerResult.style.color = "red"
    }
})
// 2) используя рекурсию
// необходимо заставить блок
//двигаться по странице.
// Создайте один большой блок и один маленький внутри него.
// Задайте большому блоку position: relative,
// а малому absolute. Используя addEventListener
// изменяйте параметр позиции малого блока
// (.style.left=`${переменная}px`).
let pos = 0
const little = document.querySelector(".little__block")
function move (){
    pos++
    little.style.left = `${pos}px`

    if (pos <= 70){
        move()
    }
    else if (pos > 1200){
        pos = 0
    }
    else {
        pos += 70
    }
}
little.addEventListener('click', move)