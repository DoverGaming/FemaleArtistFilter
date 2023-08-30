chrome.storage.sync.get('artists', function(data) {
    if (data.artists) {
        console.log(data.artists)
    } else {
        chrome.storage.sync.set({'artists': [
            "Taylor Swift",
            "Ariana Grande",
            "Beyoncé",
            "Katy Perry",
            "Rihanna",
            "Lady Gaga",
            "Selena Gomez",
            "Demi Lovato",
            "Miley Cyrus",
            "Dua Lipa",
            "Billie Eilish",
            "Adele",
            "Camila Cabello",
            "Lizzo",
            "Halsey",
            "Cardi B",
            "Lana Del Rey",
            "Sia",
            "Kesha",
            "Pink",
        ]}, function() {
            console.log('Artists are set.');
        })
    }
})
setInterval(function() {
    const artist = document.querySelector("#layout > ytmusic-player-bar > div.middle-controls.style-scope.ytmusic-player-bar > div.content-info-wrapper.style-scope.ytmusic-player-bar > span > span.subtitle.style-scope.ytmusic-player-bar > yt-formatted-string > a:nth-child(1)")?.innerText;
    chrome.storage.sync.get('artists', function(data) {
        console.log(artist)
        if (data.artists.includes(artist)) {
            console.log('This artist is on the list.');
            const btn = document.querySelector('.left-controls-buttons').querySelector('tp-yt-paper-icon-button:last-child')
            console.log(btn)
            btn.click()
        }
    })
}, 1000)

// const items = document.querySelector("#contents > ytmusic-carousel-shelf-renderer:nth-child(1) > div:last-child").querySelector('#items')
// console.log(items)
// items.children[0].remove()