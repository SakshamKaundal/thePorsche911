var videos = document.querySelectorAll('.back-vid');
        var lastScrollTop = 0;

        window.addEventListener('scroll', function() {
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop){
                // downscroll code
                videos.forEach(function(video) {
                    video.playbackRate = 1; // normal forward playback rate
                });
            } else {
                // upscroll code
                videos.forEach(function(video) {
                    video.playbackRate = -1; // backward playback rate
                });
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        }, false);