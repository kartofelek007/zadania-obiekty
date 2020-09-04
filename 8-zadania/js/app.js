class MySlider {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.starttime = 0;
    }

    createTimer() {
        this.canvas  = document.createElement("canvas");
        this.canvas.classList.add("slider-timer");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = 30;
        this.canvas.height = 30;
        this.slider.appendChild(this.canvas);
    }

    drawTimer(timestamp) {
        const angleToRadian = function(angle) {
            return Math.PI/180 * angle;
        }

        timestamp = timestamp || new Date().getTime()
        let runtime = timestamp - this.starttime
        let progress = runtime / this.options.pauseTime;
        progress = Math.min(progress, 1)

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.ctx.arc(this.canvas.width / 2,this.canvas.height / 2,this.canvas.width / 2 - 3,0,angleToRadian(360 * progress));

        this.ctx.strokeStyle = "#fff"; //`hsl(${i}, 80%, 60%)`;
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
        progress += progress;

        requestAnimationFrame((timestamp) => {
            this.drawTimer(timestamp);
        });
    }

    startTimer() {
        this.starttime = null;

        requestAnimationFrame((timestamp) => {
            this.starttime = timestamp || new Date().getTime()
            this.drawTimer(timestamp);
        });
    }
}



const slide1 = new Slider('#slider1', {
    pauseTime : 4000,
    prevText : "Poprzedni",
    nextText : "Następny"
});
