window.onload = function() {
    var img = document.getElementById("popyuki_notpop");
    var count = document.getElementById("score");
    var score = 0;
    var savedScore = getCookie("popyuki_score");
    var bgm = document.getElementById("bgm");
    var toggleBgmButton = document.getElementById("toggleBgmButton");
    var isMusicPlaying = true;

    bgm.volume = 0.1;

    if (savedScore) {
        score = parseInt(savedScore);
        count.innerHTML = score;
    }

    img.addEventListener('mousedown', function() {
        if (bgm.paused) {
            bgm.play();
        }
        scoreUp();
        img.src = "images/popyuki2.png";
        var audio = new Audio("audios/Nihaha.mp4");
        audio.volume = 0.2;
        audio.play();
    });

    img.addEventListener('mouseup', function() {
        img.src = 'images/popyuki1.webp';
    });

    toggleBgmButton.addEventListener('click', function() {
        var icon = toggleBgmButton.querySelector('i'); 
    
        if (isMusicPlaying) {
            bgm.pause();
            icon.classList.remove('fa-volume-up'); 
            icon.classList.add('fa-volume-mute');  
        } else {
            bgm.play();
            icon.classList.remove('fa-volume-mute'); 
            icon.classList.add('fa-volume-up');      
        }
    
        isMusicPlaying = !isMusicPlaying; 
    });


    function scoreUp() {
        score++;
        count.innerHTML = score;
        setCookie("popyuki_score", score, 365); 
    }

    
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
}
