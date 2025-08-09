function searchMusic() {
    let query = document.getElementById("searchBox").value;
    if (!query) {
        alert("Please enter a search term");
        return;
    }

    fetch(`https://itunes.apple.com/search?term=${query}&limit=10`)
        .then(response => response.json())
        .then(data => {
            let resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = "";

            data.results.forEach(song => {
                let songDiv = document.createElement("div");
                songDiv.classList.add("song");

                songDiv.innerHTML = `
                    <img src="${song.artworkUrl100}" alt="Album Art">
                    <h3>${song.trackName}</h3>
                    <p>${song.artistName}</p>
                    <audio controls>
                        <source src="${song.previewUrl}" type="audio/mpeg">
                        Your browser does not support audio playback.
                    </audio>
                `;

                resultsDiv.appendChild(songDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching music:", error);
        });
}
