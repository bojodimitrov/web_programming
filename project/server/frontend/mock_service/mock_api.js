class MockApi {
    static getRandom() {
        // var data = [];
        // for(var i = 0; i < 1000; i++){
        //     for(var j = 0; j < 1000; j++){
        //         data.push([i, j, [Math.round(this.random(0, 255)), Math.round(this.random(0, 255)), Math.round(this.random(0, 255))]])
        //     }
        // }

        return document.getElementById('img_place_src');
    }

    static random(a, b) {
        return a + (b - a) * Math.random();
    }
}