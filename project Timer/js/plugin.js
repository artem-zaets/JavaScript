const Timer = function () {
    let timer_container;
    let end_time_container;
    let timer_form;
    let countdown;
    /**
     * init - инициализировать наш модуль
     */
    function init(settings) {
        timer_container = document.querySelector(settings.timer_container);
        end_time_container = document.querySelector(settings.timer_end_date_container);
        timer_form = document.getElementById(settings.timer_form);
        return this;
    }

    /**
     * start - запускать таймер на указанное время в секундах
     */
    function start(seconds) {
        if (!seconds || typeof seconds !== "number") return console.log("Please provide seconds");

        clearInterval(countdown);

        const now = Date.now();
        const end = now + seconds * 1000;

        _display_time_left(seconds);
        _display_end_time(end);

        // вывести в разметку таймер и дату окончания работы таймера
        countdown = setInterval(() => {
            const second_left = Math.round((end - Date.now()) / 1000);
            
            if (second_left < 0) return clearInterval(countdown);
            
            _display_time_left(second_left);
        }, 1000);
    } 

    /**
     * stop - принудительно останавливать таймер
     */
    function stop() {
        clearInterval(countdown);
        timer_container.textContent = "";
        end_time_container.textContent = "";
    }

    function _display_time_left(seconds) {
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const reminder_seconds = seconds % 60;
        const reminder_minutes = minutes % 60;
        const reminder_hours = hours % 24;
        
        const display = `${days}${days ===0 ? "" : days === 1 ? "day" : "days"}:${reminder_hours < 10 ? "0" : ""}${reminder_hours}:${reminder_minutes < 10 ? "0" : ""}${reminder_minutes}:${reminder_seconds < 10 ? "0" : ""}${reminder_seconds}`;
        timer_container.textContent = display;
        document.title = display;
    }

    function _display_end_time(timestamp) {
        const end_date = new Date(timestamp);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        const data = end_date.toLocaleString('ru-RU', options);

        const display = `Be back at ${data}`;
        end_time_container.textContent = display;
    }

    return  {
        init,
        start, 
        stop
    }
}

const btns = document.querySelectorAll("[data-time]");
const reset_btn = document.querySelector(".stop__button");
const form = document.getElementById("custom");

const my_timer1 = Timer().init({
    timer_container: ".display__time-left",
    timer_end_date_container: ".display__end-time",
    timer_form: "custom"
});

function onClickHandler(e) {
    let seconds = Number(this.dataset.time);
    my_timer1.start(seconds);
}

form.addEventListener("submit", (e) => {
    let seconds = Number(document.querySelector("input").value) * 60;
    my_timer1.start(seconds);
    e.preventDefault();
});

btns.forEach(btn => btn.addEventListener("click", onClickHandler));
reset_btn.addEventListener("click", my_timer1.stop);
