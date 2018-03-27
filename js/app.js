//variables
var keys = document.querySelectorAll('.key');
var notes = {
    cKey: document.querySelector('#cAudio'),
    dKey: document.querySelector('#dAudio'),
    eKey: document.querySelector('#eAudio'),
    fKey: document.querySelector('#fAudio'),
    gKey: document.querySelector('#gAudio'),
    aKey: document.querySelector('#aAudio'),
    bKey: document.querySelector('#bAudio')
}


//Function Definitions
function playNote(letter){
    notes[letter].currentTime = 0;
    notes[letter].play();
}


//Calling Functions / Add Event Listeners
keys.forEach(function(key){
    key.addEventListener('mousedown', function(){
        playNote(key.id)
    })
})

document.addEventListener('keydown', function(event){
    //console.log(event);
    if(event.key == 'a'){
        playNote("cKey")
    }
    else if(event.key == 's'){
        playNote("dKey")
    }
    else if(event.key == 'd'){
        playNote("eKey")
    }
    else if(event.key == 'f'){
        playNote("fKey")
    }
    else if(event.key == 'g'){
        playNote("gKey")
    }
    else if(event.key == 'h'){
        playNote("aKey")
    }
    else if(event.key == 'j'){
        playNote("bKey")
    }
    else{
        alert("The only letter that will work are a,s,d,f,g,h,j.")
    }
})