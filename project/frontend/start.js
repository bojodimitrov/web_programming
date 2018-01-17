function start(){
    var largeViewMultiplier = 5;
    var defaultViewPixels = 1000;
    painter = new Painter("the_place", largeViewMultiplier, defaultViewPixels);
    painter.draw();
}


function activateCompactView(){
    event.preventDefault();
    painter.changeMode('compact');
    painter.draw();
}

function activateLargeView(event){
    event.preventDefault();
    painter.changeMode('large');
    painter.draw();
}