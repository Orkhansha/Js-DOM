let sumBtn = document.querySelector(".toplama");

let subBtn = document.querySelector(".cixma");

let multBtn = document.querySelector(".vurma");

let divBtn = document.querySelector(".bolme");

let text1 = document.querySelector(".input-one");

let text2 = document.querySelector(".input-two");

let resultNum = document.querySelector(".resulte h3");

function sum() {
  if (text1.value == "" | text2.value == "") {
    alert("***Boshluq buraxmaq olmaz***")
    return;
  } else {
    resultNum.innerText = parseFloat(text1.value) + parseFloat(text2.value);
    alert("***Ededler toplanir***");
    text1.value = "";
    text2.value = "";
  }
}

function sub() {
    if (text1.value == "" | text2.value == "") {
        alert("***Boshluq buraxmaq olmaz***")
        return;
      } else {
        resultNum.innerText = parseFloat(text1.value) - parseFloat(text2.value);
        alert("***Ededler chixilir***");
        text1.value = "";
        text2.value = "";
      }
  
}

function mult() {
    if (text1.value == "" | text2.value == "") {
        alert("***Boshluq buraxmaq olmaz***")
        return;
      } else {
        resultNum.innerText = parseFloat(text1.value) * parseFloat(text2.value);
        alert("***Ededler vurulur***");
        text1.value = "";
        text2.value = "";
      }
  
 
}

function div() {
    if (text1.value == "" | text2.value == "") {
        alert("***Boshluq buraxmaq olmaz***")
        return;
      } else {
        if (text2.value != 0) {
            resultNum.innerText = parseFloat(text1.value) / parseFloat(text2.value);
            alert("***Ededler bolunur***");
            text1.value = "";
            text2.value = "";
          } else {
            alert("Duzgun reqem daxil edin");
            resultNum.innerText = "";
          }
      }
  

  
}

sumBtn.addEventListener("click", sum);

subBtn.addEventListener("click", sub);

multBtn.addEventListener("click", mult);

divBtn.addEventListener("click", div);
