class ThePlaceManager {
    constructor(defaultWaitTime, palitraColors) {
        this.defaultWaitTime = defaultWaitTime;
        this.currentTimeLeft = this.defaultWaitTime;
        this.clickedColor = null;
        this.canDraw = false;
        this.canvas = document.getElementById("the_place");

        this.generatePalitra(palitraColors);
        this.registerEvents();
        this.initPainter();
    }

    generatePalitra(palitraColors) {
        var _this = this;
        var color_list = document.getElementById('color_list');
        for (var i = 0; i < palitraColors.length; i++) {
            var color = document.createElement('button');

            color.style.backgroundColor = palitraColors[i];
            color.addEventListener('click', function (event) {
                _this.clickedColor = event.target.style.backgroundColor;
            })
            color_list.appendChild(color)
        }

    }

    initPainter() {
        var largeViewMultiplier = 7;
        var defaultViewPixels = 1000;
        this.painter = new Painter(this.canvas, largeViewMultiplier, defaultViewPixels);
        this.painter.draw();
    }

    changeCanvasSize(view) {
        this.painter.changeMode(view);
        this.painter.draw();
    }

    parseTime(seconds) {
        var mins = Math.floor(seconds / 60);
        var secs = seconds % 60;
        var timerString = '';
        if (mins < 10) {
            timerString += '0';
        }
        timerString += mins + ':';
        if (secs < 10) {
            timerString += '0';
        }
        return timerString += secs;
    }

    registerEvents() {
        var _this = this;
        this.handleTimer(document.getElementById('timer'), document.getElementById('palitra'))

        this.canvas.addEventListener('click', function () {
            if (_this.canDraw) {
                _this.canDraw = false;
                var mouseX = event.offsetX;
                var mouseY = event.offsetY;
                _this.painter.updatePixel(mouseX, mouseY, _this.clickedColor);
                _this.resetTimer();
            }
        })
    }

    resetTimer() {
        this.currentTimeLeft = this.defaultWaitTime;
        this.timerWentOn(document.getElementById('timer'), document.getElementById('palitra'));
    }

    changeMode(mode) {
        this.painter.changeMode(mode);
        this.painter.draw();
    }

    handleTimer(timerElement, palitraElement) {
        var _this = this;
        timerElement.innerHTML = _this.parseTime(_this.currentTimeLeft);
        var handler = setInterval(function () {
            timerElement.innerHTML = _this.parseTime(--_this.currentTimeLeft);
            if (_this.currentTimeLeft == -1) {
                _this.canDraw = true;
                _this.timerWentOff(timerElement, palitraElement);
            }
        }, 1000);
    }

    timerWentOff(timerElement, palitraElement) {
        timerElement.style.display = 'none';
        palitraElement.style.display = 'inline-block';
    }

    timerWentOn(timerElement, palitraElement) {
        timerElement.innerHTML = this.parseTime(this.currentTimeLeft);
        timerElement.style.display = 'block';
        palitraElement.style.display = 'none';
    }
}