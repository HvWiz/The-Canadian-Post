window.addEventListener("DOMContentLoaded", (event) => {
    img = document.querySelector('#img1')
    vid = document.querySelector('#vid1')
    observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true)
            element = entries[0].target
            element.classList.add('fade')
    }, { threshold: [0] });
    observer.observe(vid);
    observer.observe(img);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    img.style.width = `${window.innerWidth - 100}px`
    vid.style.width = `${window.innerWidth - 100}px`
    scrolls = document.querySelectorAll('.scroll')
    scrolls1 = document.querySelectorAll('.scroll1')
    scrollDomain = document.querySelector('#scrollDomain')
    navBar = document.querySelector('#nav')
    sticky = nav.offsetTop;
    document.addEventListener('scroll', function() {
        winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        scrollPercent = (winScroll / height) * 100;
        scroller.style.width = `${scrollPercent}%`
        scrolls[1].style.top = `${navBar.offsetHeight}px`
        scrolls[2].style.top = `${navBar.offsetHeight}px`
        scrolls1[1].style.top = `${navBar.offsetHeight}px`
        scrolls1[2].style.top = `${navBar.offsetHeight}px`
        if (window.pageYOffset > sticky) {
            for (s of scrolls) {
                s.classList.add("sticky");
            }
            for (s of scrolls1) {
                s.classList.add("sticky");
            }
          } else {
            for (s of scrolls) {
                s.classList.remove("sticky");
            }
            for (s of scrolls1) {
                s.classList.remove("sticky");
            }
        }
        if (window.innerWidth > 800) {
            scrollDomain.style.visibility = 'visible'
        }
        if (document.documentElement.scrollTop == 0) {
            scrollDomain.style.visibility = 'hidden'
        }
    })
    window.addEventListener('resize', () => {
        img.style.width = `${window.innerWidth - 100}px`
        vid.style.width = `${window.innerWidth - 100}px`
    })
})
