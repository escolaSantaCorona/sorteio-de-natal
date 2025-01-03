console.log("Thank you for visiting my first solo Web Page")
console.log("Well, by solo I mean not watching a tutorial,");
console.log("but I clearly tried to copy google's random number generator online");

var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var number = document.querySelector("#randomNumber");
let activeRolling = false;
let timer;
const arr=[]

function generateRandom() {
    setRightOrder(num1, num2);
    if (activeRolling === false) {
        var randomNumber = randomNum(num1, num2);
        rollNumber(number.textContent, randomNumber);
    } else {
        activeRolling = false;
        clearInterval(timer);
        var randomNumber = randomNum(num1, num2);
        rollNumber(number.textContent, randomNumber);
    }
}

  function randomNum(min, max) {
    var min = (parseInt(min.value));
    var max = (parseInt(max.value) + 1);
    var random = ((Math.floor(Math.random() * (max - min)) + min));
    arr.push(random)
    setTimeout(() => {
        // document.getElementById("number").value = arr; // Linha antiga, remova ou comente
        updateSortedList(arr); // Adicione esta linha
      }, "1000");
    
    return random;
}

// Adicione esta nova função ao seu script
function updateSortedList(numbersArray) {
    const list = document.getElementById("sortedNumbersList");
    list.innerHTML = ""; // Limpa a lista atual antes de adicionar novos números
  
    numbersArray.forEach(number => {
      const listItem = document.createElement("li");
      listItem.textContent = number;
      list.appendChild(listItem);
    });
  }

function setRightOrder(num1, num2) {
    const value1 = num1.value;
    const value2 = num2.value;
    if (value1 > value2) {
        num1.value = value2;
        num2.value = value1;
    }
}

function rollNumber(number1, number2) {
    start = parseInt(number1)
    end = parseInt(number2);
    var time = function (start, end) {
        dif = Math.abs(start - end);
        if (dif < 10) {
            return 50;
        } else if (dif < 20) {
            return 40;
        }
        else if (dif < 50) {
            return 30;
        }
        else if (dif < 100) {
            return 20;
        }
        else if (dif < 500) {
            return 5;
        } else if (dif < 1000) {
            return 1;
        }
    }
    if (activeRolling === false) {
        activeRolling = true;
        if (start < end) {
            timer = setInterval(function () {
                if (start == end) {
                    clearInterval(timer);
                    activeRolling = false;
                }
                var dif = (Math.abs(start - end))
                if (dif > 100000) {
                    start += (10000);
                    number.textContent = start;
                }
                else if (dif > 100000) {
                    start += (10000);
                    number.textContent = start;
                }
                else if (dif > 10000) {
                    start += (1000);
                    number.textContent = start;
                }
                else if (dif > 1000) {
                    start += (100);
                    number.textContent = start;
                }
                else if (dif > 100) {
                    start += (10);
                    number.textContent = start;
                } else {
                    number.textContent = start++;
                }
            }, time(start, end));
        }
        else if (start > end) {
            timer = setInterval(function () {
                if (start == end) {
                    clearInterval(timer);
                    activeRolling = false;
                }
                var dif = (Math.abs(start - end))
                if (dif > 100000) {
                    start -= (10000);
                    number.textContent = start;
                }
                else if (dif > 100000) {
                    start -= (10000);
                    number.textContent = start;
                }
                else if (dif > 10000) {
                    start -= (1000);
                    number.textContent = start;
                }
                else if (dif > 1000) {
                    start -= (100);
                    number.textContent = start;
                }
                else if (dif > 100) {
                    start -= (10);
                    number.textContent = start;
                } else {
                    number.textContent = start--;
                }
            }, time(start, end));
        } else {
            number.textContent = start;
            activeRolling = false;
        }
    }
}

function setMax() {
    if (parseInt(num1.value) > 2500) {
        num1.value = 2500;
    }
    if (parseInt(num2.value) > 2500) {
        num2.value = 2500;
    }
}
