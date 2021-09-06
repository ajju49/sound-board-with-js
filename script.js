const sounds = ['song-1', 'song-2', 'song-3', 'song-4', 'song-5', 'song-6']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    //here we created  button for each sound through createElement function
    btn.classList.add('btn')
    btn.innerText = sound

   

    document.getElementById('buttons').appendChild(btn)

    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })
})

function stopSongs() {
    sounds.forEach(sound => {
        const abc = document.getElementById(sound)
        abc.pause()
        // abc.currentTime = 0;
    })
}