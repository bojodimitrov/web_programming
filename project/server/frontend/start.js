function start(){
    var defaultWaitTime = 120;
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

function login(event){
    event.preventDefault();
    var user = document.getElementById('user_input').value;
    var pass = document.getElementById('pass_input').value;
    $.ajax({
        type: 'POST',
        url: 'login.php',
        data: {
            username: user,
            password: pass
        },
        success: function(response){
            if(response == 'not found'){
                handleLoginError();
            }
            else{
                window.location.href = response;
            }
        },
        error: function(response){
            
        }
    });
}

function handleLoginError(){
    var errorSpan = document.getElementById('warning');
    errorSpan.style.display = 'block';
}