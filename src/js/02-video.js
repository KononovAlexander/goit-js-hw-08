import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

        const iframe = document.querySelector('iframe');
        const player = new Player(iframe);
        let playerTime;

        player.on('timeupdate', throttle(function(event) {
            playerTime =    JSON.stringify(event.seconds);
            localStorage.setItem('videoplayer-current-time', playerTime); 
        },1000));

        const playerTimeStart = JSON.parse(localStorage.getItem('videoplayer-current-time'));
                
        player.setCurrentTime(playerTimeStart).then(function(seconds) {
        }).catch(function(error) {
            switch (error.name) {
                case 'RangeError':
                    // the time was less than 0 or greater than the video’s duration
                    break;
            
                default:
                    // some other error occurred
                    break;
            }
        });