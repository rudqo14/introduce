const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end_game_container');
// const settingsBtn = document.getElementById('settings_btn');
// const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings_form');
const difficultySelect = document.getElementById('difficulty');


const words = [
    'giraffe',
    'row',
    'price',
    'route',
    'robber',
    'culture',
    'symbol',
    'liberty',
    'tradition',
    'revolution',
    'respect',
    'pollution',
    'system',
    'effort',
    'section',
    'rein',
    'solution',
    'robber',
    'holiday',
    'general',
    'advice',
    'cough',
    'shell',
    'poet',
    'feather'
]

let randomWord;

let score = 0;

let time = 10;

// 난이도 조정하기(기본값은 중)
// 로컬스토리지에서 'difficulty' 난이도 값을 가져와 태그 및 속성 변수에 저장
let difficulty =
    localStorage.getItem('difficulty') !== null
        ? localStorage.getItem('difficulty')
        : 'medium';

difficultySelect.value =
    localStorage.getItem('difficulty') !== null
        ? localStorage.getItem('difficulty')
        : 'medium';


text.focus();

//카운팅 시간 간격
const timeInterval = setInterval(updateTime, 1000);

//words의 배열에서 값 랜덤으로 꺼내와 function에 저장
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

//(Dom) .innerHTML
function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

//스코어 카운트하여  .innerHTML
function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

// 줄어드는 시간을 화면상에서 표시해주고, 시간이 0일때 어떻게 동작할것인지
function updateTime() {
    time--;
    timeEl.innerHTML = time + 's';

    if (time === 0) {
        clearInterval(timeInterval);//반복되고 있는 timeInterval을 멈추는 메소드
        document.getElementById("text").disabled = true;//text 입력칸 비활성화

        gameOver();//게임 종료
    }
}

function gameOver() {
    endgameEl.innerHTML = `
    <br><br><h1>시간이 끝났습니다.</h1>
    <p>당신의 스코어는 ${score} 점 입니다.</p>
    <button onclick="location.reload()">다시하기</button>
  `;

}

addWordToDOM();


// 타이핑 치기 시작한 순간 부터의 이벤트
text.addEventListener('input', event => {
    const insertedText = event.target.value;//input 태그에 들어가있는 value값을 바꿔준다.

    if (insertedText === randomWord) {
        addWordToDOM();
        updateScore();

        // 정답이라면 Clear 시켜주기
        event.target.value = '';

        if (difficulty === 'hard') {
            time += 2;
        } else if (difficulty === 'medium') {
            time += 3;
        } else {//easy
            time += 4;
        }

        updateTime();
    }
});

// Setting값 클릭시 이벤트(속성값 변경 및 로컬스토리지에 저장)
settingsForm.addEventListener('change', event => {
    difficulty = event.target.value;
    localStorage.setItem('difficulty', difficulty);
});