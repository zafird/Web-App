let htmldata = "<ul><li>Ariana Grande</li><li>Travis Scott</li><li>Marshmello & Bastille</li><li>Halsey</li><liJuice WRLD</li><li>Panic! At The Disco</li><li>Maroon 5 (Feat. Cardi B)</li><li>Kodak Black (Feat. Travis Scott & Offset)</li><li>Lil Baby & Gunna</li><li>Post Malone</li></ul>";

let jsondata = ["Thank U, Next", "Sicko Mode", "Happier", "Without Me", "Lucid Dreams", "High Hopes", "Girls Like You", "Drip Too Hard", "ZEZE", "Better Now"]


module.exports = {
    getHTML: function () {
        console.log("called: getHTML");
        // Note: this could be from a DB, for now it's just hard-coded
        return htmldata;
    },
    getJSON: function () {
        console.log("called: getJSON");
        // Note: this could be from a DB, for now it's just hard-coded
        return jsondata;
    }

}

var someOtherFunction = function () {
    console.log("Can't touch this!");
}