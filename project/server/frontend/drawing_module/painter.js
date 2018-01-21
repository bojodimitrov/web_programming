class Painter {
    constructor(canvas, multiplier, defaultViewSize) {
        this.baseColor = [255, 255, 255];
        this.multiplier = multiplier;
        this.defaultViewSize = defaultViewSize;
        this.image_place = new Image();
        this.mode = 'compact';
        this.canvas = canvas;
        this.initCanvas();
        this.registerEvents();
    }

    registerEvents(){
        
    }

    initCanvas(canvas) {
        if (this.canvas.getContext) {
            this.context = this.canvas.getContext('2d');
        } else {
            //error handling
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.context.imageSmoothingEnabled = false;

        this.context.fillStyle = this.getRGB(this.baseColor);
        this.context.fillRect(0, 0, this.width, this.height)
    }

    draw() {
        var data = MockApi.getRandom();
        if (this.mode === 'large') {
            this.drawPlace(data, this.multiplier);
        }
        if (this.mode === 'compact') {
            this.drawPlace(data, 1);
        }
    }

    drawPlace(img, pixelSize) {
        // for (var i = 0; i < data.length; i++) {
        //     this.context.fillStyle = this.getRGB(data[i][2]);
        //     this.context.fillRect(data[i][0]*pixelSize, data[i][1]*pixelSize, pixelSize, pixelSize);
        // }
        this.context.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
    }

    updatePixel(x, y, color){
        var currentMultiplier = 0;
        if (this.mode === 'large') {
            currentMultiplier = this.multiplier;
        }        
        if (this.mode === 'compact') {
            currentMultiplier = 1;
        }
        var pixelStartX = Math.floor(x / currentMultiplier) * currentMultiplier;
        var pixelStartY = Math.floor(y / currentMultiplier) * currentMultiplier;
        this.context.fillStyle = color;
        this.context.fillRect(pixelStartX, pixelStartY, currentMultiplier, currentMultiplier)
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
            this.context.imageSmoothingEnabled = false;
            this.mode = mode;
        }
        if (mode === 'compact') {
            this.canvas.width = this.defaultViewSize;
            this.canvas.height = this.defaultViewSize;
            this.context.imageSmoothingEnabled = false;
            this.mode = mode;
        }
    }
}