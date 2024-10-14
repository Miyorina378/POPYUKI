window.onload = function(){
    var img = document.getElementById("popyuki_notpop");
    var count = document.getElementById("score");
    var score = 0;
    var bgm = document.getElementById("bgm");
    var toggleBgmButton = document.getElementById("toggleBgmButton");
    var isMusicPlaying = true;
    
    bgm.volume = 0.1;

    img.addEventListener('mousedown', function(){
        if (bgm.paused) {
            bgm.play();
        }
        scoreUp();
        img.src = "images/popyuki2.png";
        var audio = new Audio("audios/Nihaha.mp4");
        audio.volume = 0.2;
        audio.play();
    });

    img.addEventListener('mouseup', function(){
        img.src = 'images/popyuki1.webp';
    });
    
    toggleBgmButton.addEventListener('click', function() {
        if (isMusicPlaying) {
            bgm.pause(); 
            toggleBgmButton.innerHTML = 'Turn On Music'; 
        } else {
            bgm.play();
            toggleBgmButton.innerHTML = 'Turn Off Music'; 
        }
        isMusicPlaying = !isMusicPlaying;
    });

    function scoreUp(){
        score++;
        count.innerHTML = score;
    }
    
}