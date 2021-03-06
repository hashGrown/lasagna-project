import './style.css';

// 변수 선언 및 초기화
const sessionInfo = {
    goal: "",
    pomodoroLength: 25,
    shortBreakLength: 5,
    longBreakLength: 15,
    sessionNumber: 4,
  };

// 첫 페이지 로딩
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

// 변수 업데이트
function updateSessionInfo() {
    sessionInfo.goal = document.querySelector(".pomodoro-length").value;
    sessionInfo.goal = document.querySelector(".session-number").value;
    sessionInfo.goal = document.querySelector(".shortBr-length").value;
    sessionInfo.goal = document.querySelector(".longBr-length").value;
}

// 타이머 실행
function runSession () {

}

// 타이머 로딩



document.body.appendChild(displaySessionForm());