function start(){
    var defaultWaitTime = 1;
    var palitra_colors = [
        'rgb(0, 0, 255)',
        'rgb(0, 255, 0)',
        'rgb(255, 0, 0)',
        'rgb(0, 255, 255)',
        'rgb(255, 255, 0)',
        'rgb(255, 0, 255)',
        'rgb(255, 255, 255)',
        'rgb(0, 0, 0)',
    ];
    manager = new ThePlaceManager(defaultWaitTime, palitra_colors);
}


function changeView(event, view){
    event.preventDefault();
    manager.changeMode(view);
}