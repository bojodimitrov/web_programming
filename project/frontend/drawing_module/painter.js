class Painter {
    constructor(canvasId, multiplier, defaultViewSize) {
        this.baseColor = [255, 255, 255];
        this.multiplier = multiplier;
        this.defaultViewSize = defaultViewSize;
        this.initCanvas(canvasId);
        this.mode = 'compact';

    }

    initCanvas(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (this.canvas.getContext) {
            this.context = this.canvas.getContext('2d');
        } else {
            //error handling
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.context.fillStyle = this.getRGB(this.baseColor);
        this.context.fillRect(0, 0, this.width, this.height)
    }

    draw() {
        var data = MockApi.getRandom();
        if(this.mode === 'large'){
            this.drawPixels(data, this.multiplier);
        }
        if(this.mode === 'compact'){
            this.drawPixels(data, 1);
        }
    }

    drawPixels(data, pixelSize){
        for (var i = 0; i < data.length; i++) {
            this.context.fillStyle = this.getRGB(data[i][2]);
            this.context.fillRect(data[i][0]*pixelSize, data[i][1]*pixelSize, pixelSize, pixelSize);
        }
    }

    getRGB(color_array) {
        return 'rgb(' + color_array[0] + ',' + color_array[1] + ',' + color_array[2] + ')'
    }

    getCanvasInstance() {
        return this.canvas;
    }

    changeMode(mode) {
        if (mode === 'large') {
            this.canvas.width = this.defaultViewSize * this.multiplier;
            this.canvas.height = this.defaultViewSize * this.multiplier;
            this.mode = mode;
        }
        if (mode === 'compact') {
            this.canvas.width = this.defaultViewSize;
            this.canvas.height = this.defaultViewSize;
            this.mode = mode;
        }
    }
}