 document.addEventListener("DOMContentLoaded", function () {
            const MINUTES = document.getElementById("minutos");
            const SECONDS = document.getElementById("segundos");
            const TENS = document.getElementById("dezenas");

            let tens = 0;
            let seconds = 0;
            let minutes = 0;
            let interval;

            function startTimer() {
                tens++;
                if (tens < 10) {
                    TENS.textContent = "0" + tens;
                } else {
                    TENS.textContent = tens;
                }

                if (tens >= 100) {
                    seconds++;
                    if (seconds < 10) {
                        SECONDS.textContent = "0" + seconds;
                    } else {
                        SECONDS.textContent = seconds;
                    }

                    tens = 0;
                    if (seconds >= 60) {
                        minutes++;
                        if (minutes < 10) {
                            MINUTES.textContent = "0" + minutes;
                        } else {
                            MINUTES.textContent = minutes;
                        }
                        seconds = 0;
                    }
                }
            }

            function start() {
                clearInterval(interval);
                interval = setInterval(startTimer, 10);
            }

            function stop() {
                clearInterval(interval);
            }

            function reset() {
                clearInterval(interval);
                tens = 0;
                seconds = 0;
                minutes = 0;
                TENS.textContent = "00";
                SECONDS.textContent = "00";
                MINUTES.textContent = "00";
            }

            document.getElementById("botao-comecar").addEventListener("click", start);
            document.getElementById("botao-parar").addEventListener("click", stop);
            document.getElementById("botao-recomecar").addEventListener("click", reset);
        });