let songindex = 0
let playlistindex = 0
let coverimageindex = 0
let progress
let mysong
likedsongs = [

]
const songs = [
    [
        {
            'songname': 'Ae Dil Hai Mushkil Title Track',
            'singer': 'Arijit Singh',
            'musicdirector': 'Pritam',
            'duration': '04:28',
            'filepath': '../assets/songs/Ae Dil Hai Mushkil Title Track Pritam 128 Kbps.mp3',
            'coverpath': '../assets/coverimages/coverimg1.jpg'

        },
        {
            'songname': 'Channa Mereya',
            'singer': 'Arijit Singh',
            'musicdirector': 'Pritam',
            'duration': '04:49',
            'filepath': '../assets/songs/Channa Mereya Ae Dil Hai Mushkil 128 Kbps.mp3',
            'coverpath': '../assets/coverimages/coverimg1.jpg'
        },
        {
            'songname': 'The Breakup Song',
            'singer': 'Arijit Singh, Badshah, Jonita Gandhi, Nakash Aziz',
            'musicdirector': 'Pritam',
            'duration': '04:12',
            'filepath': '../assets/songs/The Breakup Song Ae Dil Hai Mushkil 128 Kbps.mp3',
            'coverpath': '../assets/coverimages/coverimg1.jpg'
        },
        {
            'songname': 'Bulleya',
            'singer': 'Amit Mishra, Shilpa Rao',
            'musicdirector': 'Pritam',
            'duration': '05:48',
            'filepath': '../assets/songs/Bulleya Ae Dil Hai Mushkil 128 Kbps.mp3',
            'coverpath': '../assets/coverimages/coverimg1.jpg'
        },
        {
            'songname': 'Cutiepie',
            'singer': 'Pardeep Singh Sran, Nakash Aziz',
            'musicdirector': 'Pritam',
            'duration': '03:50',
            'filepath': '../assets/songs/Cutiepie Ae Dil Hai Mushkil 128 Kbps.mp3',
            'coverpath': '../assets/coverimages/coverimg1.jpg'
        },
    ],
    [
        {
            'songname': 'Tum Hi Ho',
            'singer': 'Arijit Singh',
            'musicdirector': 'Mithoon',
            'duration': '04:21',
            'filepath': '../assets/songs/Tum Hi Ho Aashiqui 2 128 Kbps.mp3',
            'coverpath': '../assets/coverimages/coverimg2.jpg'
        },
        {
            'songname': 'Chahun Main Ya Naa',
            'singer': 'Palak Muchhal, Arijit Singh',
            'musicdirector': 'Mithoon',
            'duration': '05:04',
            'filepath': '../assets/songs/Chahun Main Ya Naa Aashiqui 2 128 Kbps.mp3',
            'coverpath': '../assets/coverimages/coverimg2.jpg'
        },
        {
            'songname': 'Sunn Raha Hai',
            'singer': 'Ankit Tiwari',
            'musicdirector': 'Mithoon',
            'duration': '06:30',
            'filepath': '../assets/songs/Sunn Raha Hai Male Aashiqui 2 128 Kbps.mp3',
            'coverpath': '../assets/coverimages/coverimg2.jpg'
        },
        {
            'songname': 'Bhula Dena',
            'singer': 'Mustafa Zahid',
            'musicdirector': 'Mithoon',
            'duration': '04:00',
            'filepath': '../assets/songs/Bhula Dena Aashiqui 2 128 Kbps.mp3',
            'coverpath': '../assets/coverimages/coverimg2.jpg'
        },
        {
            'songname': 'Sunn Raha Hai',
            'singer': 'Shreya Ghoshal',
            'musicdirector': 'Mithoon',
            'duration': '05:14',
            'filepath': '../assets/songs/Sunn Raha Hai Female Aashiqui 2 128 Kbps.mp3',
            'coverpath': '../assets/coverimages/coverimg2.jpg'
        },
        {
            'songname': 'Milne Hai Mujhse Aayi',
            'singer': 'Arijit Singh',
            'musicdirector': 'Mithoon',
            'duration': '04:55',
            'filepath': '../assets/songs/Milne Hai Mujhse Aayi Aashiqui 2 128 Kbps.mp3',
            'coverpath': '../assets/coverimages/coverimg2.jpg'
        },
        {
            'songname': 'Hum Mar Jayenge',
            'singer': 'Tulsi Kumar, Arijit Singh',
            'musicdirector': 'Mithoon',
            'duration': '05:06',
            'filepath': '../assets/songs/Hum Mar Jayenge Aashiqui 2 128 Kbps.mp3',
            'coverpath': '../assets/coverimages/coverimg2.jpg'
        },
    ],
    [
        {
            'songname': 'Zara Sa',
            'singer': 'K.K',
            'musicdirector': 'Pritam',
            'duration': '05:02',
            'filepath': '../assets/songs/Zara Sa Jannat Original Motion Picturetrack 128 Kbps.mp3',
            'coverpath': '../assets/coverimages/coverimg3.jpg'
        },
        {
            'songname': 'Haan Tu Hain',
            'singer': 'K.K',
            'musicdirector': 'Pritam',
            'duration': '05:24',
            'filepath': '../assets/songs/Haan Tu Hain Jannat Original Motion Picturetrack 128 Kbps.mp3',
            'coverpath': '../assets/coverimages/coverimg3.jpg'
        },
        {
            'songname': 'Judai',
            'singer': 'Kamran Ahmed',
            'musicdirector': 'Pritam',
            'duration': '05:02',
            'filepath': '../assets/songs/Judai Jannat Original Motion Picturetrack 128 Kbps.mp3',
            'coverpath': '../assets/coverimages/coverimg3.jpg'
        },
        {
            'songname': 'Lambi Judai',
            'singer': 'Richa Sharma',
            'musicdirector': 'Pritam',
            'duration': '04:48',
            'filepath': '../assets/songs/Lambi Judai Jannat Original Motion Picturetrack 128 Kbps.mp3',
            'coverpath': '../assets/coverimages/coverimg3.jpg'
        },
    ]
]
const coverimages = ['../assets/coverimages/coverimg1.jpg', '../assets/coverimages/coverimg2.jpg', '../assets/coverimages/coverimg3.jpg']
let currentSongdetails = songs[playlistindex][`${songindex}`]
let song = new Audio(songs[playlistindex][`${songindex}`].filepath)
let progressbar = document.getElementById('progressbar')
let parent = document.getElementById('parent')
let songparent = document.getElementById('song-data-id')
let songdetailsstr
let str = ``
let songplayingimg = document.getElementById('song-play-img')
let songDuration = document.getElementById('song-duration-tag')
let favsongcontainer = document.getElementById('liked-songs-container')
let favsongstr
let coverimg = document.getElementById('songcoverid')
let playingsongcover = document.getElementById('currentsongcover')
function appendsongdetails(currentsongdata) {
    playingsongcover.src = currentsongdata.coverpath
    songdetailsstr = `
    <p>${currentsongdata.songname}</p>
    <small>${currentsongdata.musicdirector},${currentsongdata.singer}</small>
    `
    songparent.innerHTML = songdetailsstr
}
window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('volumeprogressbar').value = parseInt(song.volume * 100)
    appendsongdetails(currentSongdetails)
    coverimg.src = coverimages[coverimageindex]
    playingsongcover.src = songs[playlistindex][`${songindex}`].coverpath
    if (localStorage.getItem("likedsongs") == null) {
        mysong = likedsongs
    } else {
        mysong = JSON.parse(localStorage.getItem("likedsongs"))

    }
    mysong.forEach((favsong, id) => {
        favsongstr += `  <tr>
                            <td>
                                <p class='text-center'>${id + 1}</p>
                            </td>
                            <td >
                                <div>
                                    <div>
                                        <p>${favsong.songname}</p>
                                    </div>
                                    <small>${favsong.musicdirector},${favsong.singer}</small>
                                </div>
                            </td>
                        </tr>    
                    `
    })
    favsongcontainer.innerHTML = favsongstr
    songs[playlistindex].forEach((songdetails, index) => {
        str += `
        <tr>
            <td class="songindex">
                <p>${index + 1}</p>
            </td>
            <td >
                <div class="song-details-container" onclick='songplay(${index})'>
                    <div>
                        <p>${songdetails.songname}</p>
                    </div>
                    <small>${songdetails.musicdirector},${songdetails.singer}</small>
                </div>
            </td>
            <td class="song-duration">
                <p>${songdetails.duration}</p>
            </td>
        </tr>
        `
    })
    parent.innerHTML += str
});

let masterpaly = document.getElementById('masterplay')
masterpaly.addEventListener('click', songcontrol)
function songcontrol(e) {
    try {
        if (song.paused || song.duration <= 0) {
            song.play()
            e.target.classList.remove('fa-play-circle')
            e.target.classList.add('fa-pause-circle')
            songplayingimg.style.opacity = 1
        } else {
            song.pause()
            e.target.classList.remove("fa-pause-circle")
            e.target.classList.add('fa-play-circle')
            songplayingimg.style.opacity = 0
        }
    } catch (error) {
        console.log('song played')
    }

}
function songplay(songsrc) {
    songindex = songsrc
    song.src = songs[playlistindex][songsrc].filepath
    masterpaly.classList.remove('fa-play-circle')
    masterpaly.classList.add('fa-pause-circle')
    appendsongdetails(songs[playlistindex][`${songindex}`])
    songplayingimg.style.opacity = 1
    songcontrol()
}
song.addEventListener('timeupdate', (e) => {
    progress = parseInt((song.currentTime / song.duration) * 100)
    progressbar.value = progress
    if (song.currentTime == song.duration) {
        e.target.classList.remove("fa-pause-circle")
        e.target.classList.add('fa-play-circle')
        song.pause()
        songplayingimg.style.opacity = 0
    }
})
progressbar.addEventListener('change', () => {
    song.currentTime = parseInt((progressbar.value * song.duration) / 100)
})
document.getElementById('likesong').addEventListener('click', (e) => {
    e.target.classList.remove('far')
    e.target.classList.add('fas')
    //likedsongs.push(songs[`${songindex}`])
    if (localStorage.getItem("likedsongs") == null) {
        mysong = likedsongs
    } else {
        mysong = JSON.parse(localStorage.getItem("likedsongs"))
    }
    mysong.push(songs[playlistindex][`${songindex}`])
    localStorage.setItem("likedsongs", JSON.stringify(mysong))
    favsongstr = ``
    mysong.forEach((favsong, id) => {
        favsongstr += `  <tr>
                            <td>
                                <p class='text-center'>${id + 1}</p>
                            </td>
                            <td >
                                <div>
                                    <div>
                                        <p>${favsong.songname}</p>
                                    </div>
                                    <small>${favsong.musicdirector},${favsong.singer}</small>
                                </div>
                            </td>
                        </tr>    
                    `
    })
    favsongcontainer.innerHTML = favsongstr
})
document.getElementById('forwardbtn').addEventListener('click', () => {
    if (songindex != songs[playlistindex].length - 1) {
        songindex = songindex + 1
        songplay(songindex)
    } else {
        songindex = 0
    }
})
document.getElementById('backwardbtn').addEventListener('click', () => {
    if (songindex != 0) {
        songindex = songindex - 1
        songplay(songindex)
    } else {
        songindex = 0
    }
})
document.getElementById('forwardplaylist').addEventListener('click', () => {
    if (playlistindex != songs.length - 1) {
        playlistindex = playlistindex + 1
        coverimageindex = coverimageindex + 1
        coverimg.src = coverimages[coverimageindex]
        //playingsongcover.src = songs[playlistindex][`${songindex}`].coverpath
        str = ``
        songs[playlistindex].forEach((songdetails, index) => {
            str += `
            <tr>
            <td class="songindex">
                <p>${index + 1}</p>
            </td>
            <td >
                <div class="song-details-container" onclick='songplay(${index})'>
                    <div>
                        <p>${songdetails.songname}</p>
                    </div>
                    <small>${songdetails.musicdirector},${songdetails.singer}</small>
                </div>
            </td>
            <td class="song-duration">
                <p>${songdetails.duration}</p>
            </td>
        </tr>
            `
        })
        //songplay(songindex)
        //appendsongdetails(songs[playlistindex][`${songindex}`])
        parent.innerHTML = str
    } else {
        playlistindex = 0
    }
})
document.getElementById('backwardplaylist').addEventListener('click', () => {
    if (playlistindex != 0) {
        playlistindex = playlistindex - 1
        coverimageindex = coverimageindex - 1
        coverimg.src = coverimages[coverimageindex]

        str = ``
        songs[playlistindex].forEach((songdetails, index) => {
            str += `
            <tr>
            <td class="songindex">
                <p>${index + 1}</p>
            </td>
            <td >
                <div class="song-details-container" onclick='songplay(${index})'>
                    <div>
                        <p>${songdetails.songname}</p>
                    </div>
                    <small>${songdetails.musicdirector},${songdetails.singer}</small>
                </div>
            </td>
            <td class="song-duration">
                <p>${songdetails.duration}</p>
            </td>
        </tr>
            `
        })
        //appendsongdetails(songs[playlistindex][`${songindex}`])
        parent.innerHTML = str
        //songplay(songindex)
    } else {
        playlistindex = 0
    }
})
document.getElementById('volumeprogressbar').addEventListener('change', () => {
    song.volume = document.getElementById('volumeprogressbar').value / 100
})