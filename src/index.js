import './style.css';

// 세션 정보 변수 선언 및 초기화
const sessionInfo = {
    goal: "",
    pomodoroLength: 25,
    shortBreakLength: 5,
    longBreakLength: 15,
    sessionNumber: 4,
  };

// 첫 페이지 렌더링 (완료)
function displaySessionForm() {
    const element = document.createElement('main');
    element.classListName = 'main container';

    const sessionForm = document.createRange().createContextualFragment(`
    <section class="timer">
        <form class="form col">
          <div class="form__item col">
            <label class="form__label">Goal</label>
            <input class="form__input-num" type="number" />
          </div>
          <div class="form__item row">
            <div class="col">
              <label class="form__label">Pomodoro (min)</label>
              <input class="form__input-num pomodoro-length" type="number" />
            </div>
            <div class="col">
              <label class="form__label">Number of Cycle</label>
              <input class="form__input-num session-number" type="number" />
            </div>
          </div>
          <div class="form__item row">
            <div class="col">
              <label class="form__label">Short Break (min)</label>
              <input class="form__input-num shortBr-length" type="number" />
            </div>
            <div class="col">
              <label class="form__label">Long Break (min)</label>
              <input class="form__input-num longBr-length" type="number" />
            </div>
          </div>
          <input type="submit" class="form__submit-btn" value="quick start" />
        </form>
      </section>
    `);
    element.appendChild(sessionForm);

    return element;
}

// (start 버튼 클릭 시) 변수 업데이트 (완료)
function updateSessionInfo() {
    sessionInfo.pomodoroLength = document.querySelector(".pomodoro-length").value;
    sessionInfo.sessionNumber = document.querySelector(".session-number").value;
    sessionInfo.shortBreakLength = document.querySelector(".shortBr-length").value;
    sessionInfo.longBreakLength = document.querySelector(".longBr-length").value;
}

// 타이머 상태 - 남은시간, 현재 모드, 다음 모드 등
const sessionState = {
    cycle: 0,
    mode: 0,
    order: 0,
    isPaused: false,
    nextMode: 1,
    currentModeTimeLeft: sessionInfo.pomodoroLength,
}

// 타이머 실행
function runSession () {
    runPomodoro()
    runShortBreak()
    runLongBreak();
}

// 타이머 렌더링
function renderSession()  {
    const element = document.createElement('main');
    element.classListName = 'main';

    const timerModule = document.createRange().createContextualFragment(`
    <section class="timer">
        <header class="timer__header">Session 1 of 4</header>
        <main class="timer__time">25:00</main>
        <ul class="timer__progress-list">
          <li class="timer__progress-bar"></li>
          <li class="timer__progress-bar"></li>
          <li class="timer__progress-bar"></li>
          <li class="timer__progress-bar"></li>
        </ul>
        <aside class="timer__pause">
          <!-- <i class="far fa-pause-circle"></i> -->
          <!-- <img src="img/pause.svg" alt="pause" /> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 0 24 24"
            width="48"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              class="pause"
              d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"
            />
          </svg>
        </aside>
      </section>
      <button class="close-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 0 24 24"
        width="48"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          class="close"
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
        />
      </svg>
    </button>`);

    element.appendChild(timerModule);

    return element;
}

function runCycle() {
    document.querySelector('main').replaceWith(renderSession());
}

function startSession() {
    console.log("click");
    runCycle();

}

// sessionInfo form 렌더링
function render() {
    document.body.appendChild(displaySessionForm());

    // quick-start 버튼에 이벤트리스너 추가
    document.querySelector('.form__submit-btn').addEventListener("click", startSession, false);
}

render();