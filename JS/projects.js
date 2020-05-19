const randomNumber = getRandomNumber();

// console.log(randomNumber);

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

let count = 1;

function guess() {

    const num1 = document.getElementById("user").value;

    if (num1 == "") {        /*아무값도 입력 받지 못했을시*/

        alert('숫자를 입력하세요');

    } else if (num1 > 100) {
        alert('숫자는 1~100까지만 입력할 수 있습니다.')
    } else if (num1 <= 0) {
        alert('숫자는 1~100까지만 입력할 수 있습니다.')
    }

    else if (num1 == randomNumber)        /*random함수와 num1(입력)값과 같으면(정답) if문 실행 */

    {

        document.getElementById("answer").innerHTML = "정답입니다. 추측한 횟수" + (count++) + "번";
        document.getElementById("guesses").innerHTML = "-";
        document.getElementById("result").innerHTMl = "-";
        document.getElementById("submitButton").disabled = true;

    } else if (count == 10) {/*입력 시도 10회 제한*/

        document.getElementById("submitButton").disabled = true;

        document.getElementById("answer").style.color = "red";

        document.getElementById("answer").innerHTML = "정답은 " + randomNumber + "입니다. ";
        


    } else {

        if (randomNumber > num1) {

            document.getElementById("result").value = (num1 + "보다 큽니다.");
            document.getElementById("guesses").value = ((count++) + "번");

        } else {

            document.getElementById("result").value = (num1 + "보다 작습니다.");
            document.getElementById("guesses").value = ((count++) + "번");

        }

    }
    // document.getElementById("reset").innerHTML = "다시하기";




}