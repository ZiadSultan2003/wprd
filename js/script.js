let lblTimer;
let refreshbtn;
let inputWord;
let randomWordIndex;
let wordObject;
let shuffledStr;
let counter;
let alerteword;
let close_btnalart;
let source = 0;
//#region Catching Elements and Calling Methods
window.addEventListener("DOMContentLoaded", () => {
  lblWord = document.getElementById("scrambleWord");
  lblHint = document.getElementById("hint");
  lblTimer = document.getElementById("timer");
  refreshbtn = document.getElementById("refreshWord");
  checkbtn = document.getElementById("checkWord");
  inputWord = document.getElementById("inputWord");
  modelDom = document.getElementById("modelDom");
  counter = document.getElementById("counter");
  alerteword = document.getElementById("alerteword");
  alertewordtry = document.getElementById("alertewordtry");
  close_btnalart = document.getElementById("close_btnalart");
  close_btnalarttry = document.getElementById("close_btnalarttry");
  //#region initial word and initial timer
  const pageInit = () => {
    // 0 - 22
    randomWordIndex = Math.floor(Math.random() * 23);
    wordObject = words[randomWordIndex];
    // lblWord.innerHTML = wordObject.word;
    lblWord.innerHTML = shuffleString(wordObject.word);
    lblHint.innerHTML = wordObject.hint;
    startTimer();
  };
  //#endregion
  //#region Control the timer
  const changeTimer = () => {
    let timerValue = parseInt(lblTimer.innerHTML);
    if (timerValue <= 0) {
      clearInterval(myInterval);
      pageInit();
    } else lblTimer.innerHTML = timerValue - 1;
  };
  //#endregion
  //#region initial timer
  const startTimer = () => {
    lblTimer.innerHTML = 30;
    myInterval = setInterval(changeTimer, 1000);
  };
  //#endregion
  //#region refresh btn
  refreshbtn.addEventListener("click", () => {
    clearInterval(myInterval);
    pageInit();
  });
  //#endregion
  //#region counter
  const count = () => {
    source++;
    counter.innerHTML = source;
  };
  //#endregion
  //#region changeword btn
  // alerteword.style.cssText = "display: none;";
  checkbtn.addEventListener("click", () => {
    if (inputWord.value.toLowerCase() === wordObject.word.toLowerCase()) {
      alerteword.style.cssText = "display: block;";
      count();
      // alert("Congratulations" + " up to level ");
      clearInterval(myInterval);
      pageInit();
    } else {
      alertewordtry.style.cssText = "display: block;";

      clearInterval(myInterval);
    }
    inputWord.value = null;
  });
  close_btnalart.addEventListener("click", () => {
    alerteword.style.cssText = "display: none;";
  });
  close_btnalarttry.addEventListener("click", () => {
    alertewordtry.style.cssText = "display: none;";
  });
  //#endregion
  //#region function random
  function shuffleString(str) {
    // Convert the string into an array
    var arr = str.split("");
    // Perform Fisher-Yates shuffle
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    // Convert the array back to a string
    var shuffledStr = arr.join("");
    return shuffledStr;
  }
  //#endregion

  pageInit();
});

//#endregion
