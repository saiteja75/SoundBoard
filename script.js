let btns = document.getElementById('buttons')
let sounds = ['cat', 'lion', 'cow']

sounds.forEach(sound => {
    let ele = document.createElement('a');
    ele.classList.add('btn')

    ele.innerHTML = sound;

    ele.addEventListener('click', function() {
        stopSounds();
        let audio = document.getElementById(sound);
        audio.play()
    })


    btns.appendChild(ele);
})

function stopSounds() {
    sounds.forEach(sound => {
        let ele = document.getElementById(sound);
        ele.pause();
    })
}