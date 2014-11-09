var cheerio = require('cheerio');
var fs = require('fs');

// for (var chp=1; chp<=18 ; chp+=1) {
//     $ = cheerio.load(fs.readFileSync("bg/chapter" + chp + ".html"));

//     var verses = [];
//     $("strong").each(function() {
//         verses.push($(this).text());
//         // console.log($(this).text());
//     });

//     fs.writeFile("chapter" + chp + ".json", JSON.stringify(verses, null, 4), function(error){
//         console.log("chapter" + chp + ".json " + "output file created");
//     })
// }

for (var chp=1; chp<=18 ; chp+=1) {

    $ = cheerio.load(fs.readFileSync("bg/chapter" + chp + ".html"));

    var verses = [];
    $("strong").each(function() { //At the "verse" level

        var verse = [];
        $(this).contents()
            .each(function(){   // At the "line" level
                var cleanVerse = $(this).text().replace(/\r|\n/g,""); //Cleaning special chars in the verse
                console.log(cleanVerse);
                verse.push(cleanVerse);
                }
            );

        // Clean verse array of empty strings
        verse = verse.filter(function(element){
            return element != "" && element != "\r\n";
        });

        verses.push(verse);
    });


    fs.writeFile("chapter" + chp + ".json", JSON.stringify(verses, null, 4), function(error){
        console.log("chapter" + chp + ".json " + "output file created");
    });
}

