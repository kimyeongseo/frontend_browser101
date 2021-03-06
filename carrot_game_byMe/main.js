/* 
재생버튼을 누르면 게임이 시작
(당근 10개와 벌레 10마리를 랜덤 배치)
게임이 시작되면 10초 타이머 시작 
당근을 클릭하면 클릭한 당근은 사라지고 카운트 숫자가 줄어듦

<실패화면이 등장하는 상황>
벌레를 클릭하면 실패화면이 뜬다.
10초가 지나면 실패화면이 뜬다.

<성공화면이 등장하는 상황>
당근 10개를 10초 안에 모두 클릭한다

리플레이 버튼을 누르면 처음 화면으로 돌아감

정지버튼을 누르면 플레이 버튼이 사라지고 타이머가 멈추고 리플레이 회면이 뜬다.
.game__screen--info가 뜨면 game__info--playBnt가 사라져야 함
 */
const playBnt = document.querySelector('.game__info--playBnt');
const count = document.querySelector('.game__info--carrotCount');
const carrot = document.querySelector('.game__screen--carrot');
const bug = document.querySelector('.game__screen--bug');

playBnt.addEventListener('click', () => {
    let timeLeft = 10;
    let elem = document.querySelector('.game__info--timer');
    let timerId = setInterval(countdown, 1000);

    document.querySelector('.game__screen').innerHTML = `
    <img class="game__screen--bug" src="img/bug.png" alt="bug" />
    <img class="game__screen--carrot" src="img/carrot.png" alt="carrot" />
    <img class="game__screen--bug" src="img/bug.png" alt="bug" />
    <img class="game__screen--carrot" src="img/carrot.png" alt="carrot" />
    <img class="game__screen--bug" src="img/bug.png" alt="bug" />
    <img class="game__screen--carrot" src="img/carrot.png" alt="carrot" />
    <img class="game__screen--bug" src="img/bug.png" alt="bug" />
    <img class="game__screen--carrot" src="img/carrot.png" alt="carrot" />
    <img class="game__screen--bug" src="img/bug.png" alt="bug" />
    <img class="game__screen--carrot" src="img/carrot.png" alt="carrot" />
    <img class="game__screen--bug" src="img/bug.png" alt="bug" />
    <img class="game__screen--carrot" src="img/carrot.png" alt="carrot" />
    <img class="game__screen--bug" src="img/bug.png" alt="bug" />
    <img class="game__screen--carrot" src="img/carrot.png" alt="carrot" />
    <img class="game__screen--bug" src="img/bug.png" alt="bug" />
    <img class="game__screen--carrot" src="img/carrot.png" alt="carrot" />
    <img class="game__screen--bug" src="img/bug.png" alt="bug" />
    <img class="game__screen--carrot" src="img/carrot.png" alt="carrot" />
    <img class="game__screen--bug" src="img/bug.png" alt="bug" />
    <img class="game__screen--carrot" src="img/carrot.png" alt="carrot" />
    `;

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
             replay(); //<- 시간이 끝나면 실행할 함수
        } else {
            elem.innerHTML = `0:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`;
            timeLeft--;
        } 
    }

    function replay() { //<- 실핼할 함수 코드
        document.querySelector('.game__screen').innerHTML = `
        <div class="game__screen--info">
          <div class="game__screen--replayBnt">
            <i class="fas fa-reply"></i>
          </div>
          <span class="game__screen--gameResult">You Lost</span>
        </div>
        `
        const replayBnt = document.querySelector('.game__screen--replayBnt');
        replayBnt.addEventListener('click', event => {
            let timeLeft = 10;
    let elem = document.querySelector('.game__info--timer');
    let timerId = setInterval(countdown, 1000);

    document.querySelector('.game__screen').innerHTML = `
    <img class="game__screen--bug" src="img/bug.png" alt="bug" />
    <img class="game__screen--carrot" src="img/carrot.png" alt="carrot" />
    <img class="game__screen--bug" src="img/bug.png" alt="bug" />
    <img class="game__screen--carrot" src="img/carrot.png" alt="carrot" />
    <img class="game__screen--bug" src="img/bug.png" alt="bug" />
    <img class="game__screen--carrot" src="img/carrot.png" alt="carrot" />
    <img class="game__screen--bug" src="img/bug.png" alt="bug" />
    <img class="game__screen--carrot" src="img/carrot.png" alt="carrot" />
    <img class="game__screen--bug" src="img/bug.png" alt="bug" />
    <img class="game__screen--carrot" src="img/carrot.png" alt="carrot" />
    <img class="game__screen--bug" src="img/bug.png" alt="bug" />
    <img class="game__screen--carrot" src="img/carrot.png" alt="carrot" />
    <img class="game__screen--bug" src="img/bug.png" alt="bug" />
    <img class="game__screen--carrot" src="img/carrot.png" alt="carrot" />
    <img class="game__screen--bug" src="img/bug.png" alt="bug" />
    <img class="game__screen--carrot" src="img/carrot.png" alt="carrot" />
    <img class="game__screen--bug" src="img/bug.png" alt="bug" />
    <img class="game__screen--carrot" src="img/carrot.png" alt="carrot" />
    <img class="game__screen--bug" src="img/bug.png" alt="bug" />
    <img class="game__screen--carrot" src="img/carrot.png" alt="carrot" />
    `;
    
    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
             replay(); //<- 시간이 끝나면 실행할 함수
        } else {
            elem.innerHTML = `0:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`;
            timeLeft--;
        } 
    }       
        });
    } 
});

