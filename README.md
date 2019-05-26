## Help!
Logikcull Engineer Greg is a self proclaimed hipster with a burgeoning record collection growing out of control.
His current pen and paper approach to managing the collection isn’t scaling well and
he needs a solution to help him manage his pride and joy.
# Original Assignment
## Your mission, if you choose to accept it, is to build a Javascript web app
* Greg wants to manage his records. Fortunately, Greg keeps track of his records in JSON format
    - [here](https://gist.github.com/seanders/df38a92ffc4e8c56962e51b6e96e188f).
* Use whatever technology you are comfortable with and feel free to make it as polished or minimalist as you’d like (according to your taste).
* If you aren’t familiar with records, he needs to track/store the following fields per-record (at a minimum):
    * Artist
    * Album Title
    * Year
    * Record Condition.

## The application must meet a few requirements:
* The application must be able to fetch and display Greg's albums in a paginated fashion.
    * These fields must be visible for each album: Artist Name, Album Title, Year, and Record Condition
* A user must be able to edit and update all the fields on an album, including the artists associated with the album. Don't worry about persisting edits on the server. 1) As a user, I should be able to update the Artist's name. Meaning if I update an Artist's name on one record, it should be updated across all records associated with that artist. 1) As a user, I want to filter my albums using a search query. The results should update as I type.
    * Add any bells and whistles you think would be helpful.

## Build a CRUD based album asset tracker that allows users to add albums, list, update and delete records
## if time allows, enable the user to mark them as sold or trashed, identify damage, list them and more.cd ..
##



//Research on getting album covers...
//Application: Clever Content Software's App
//Default application created on signup.
//API Key
//This is the API key, you need to send it with each API request.
//
//c841c24aacf1f4391c256a192682a215
//
//Properties
//State	live
//Edit
//Plan: Trial 250 requests (Review/Change)
//To extend your limits please contact us.
//
//API Alerts (Show)
//http://coverartarchive.org/release/76df3287-6cda-33eb-8e9a-044b5e15ffdd/front




//https://musicbrainz.org/doc/Cover_Art_Archive/API
//https://www.clevermap.co/demos/getalbumassets
//
//albumassettracker
// api key 6dc0e404e947ec1c1e3af5dc97af150a
// shared key   6a835be42e6b219553914bc38a16ca49
// account allenderl

//https://www.last.fm/api

//http://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=6dc0e404e947ec1c1e3af5dc97af150a&format=json
//{"name":"pop","url":"https://www.last.fm/tag/pop","reach":"224263","taggings":"1951535","streamable":"1","wiki":{}}

//["https://images.unsplash.com/photo-1544586594-32e086d1d428",
//"https://images.unsplash.com/photo-1466172979837-10ec170d62d4",
//"https://images.unsplash.com/photo-1545410146-7ee44f4e7519",
//"https://images.unsplash.com/photo-1546521446-af1ec6949e8f",
//"https://images.unsplash.com/photo-1469429614084-cff88c310329",
//"https://images.unsplash.com/photo-1434082033009-b81d41d32e1c",
//"https://images.unsplash.com/photo-1511030935071-3ff5efa66c28",
//"https://images.unsplash.com/photo-1484876632310-ddb3b48133cc",
//"https://images.unsplash.com/photo-1468226945964-8be928e9a572",
//"https://images.unsplash.com/photo-1547452662-fcf206585eb3",
//"https://images.unsplash.com/photo-1545239352-8cf6abca7cfd",
//"https://images.unsplash.com/photo-1542446655-53a7e25c8fe2",
//"https://images.unsplash.com/photo-1526829211892-bf063a6f94ab"]


//{
//  "results": [
//    { "album_title": "Cardigan Letterpress Scenester", "year": 1967, "condition": "poor", "artist": { "name": "Sex Pistols", "id": 0 } },
//    { "album_title": "Sriracha Vinegar Disrupt", "year": 1964, "condition": "poor", "artist": { "name": "Derek and the Dominos", "id": 1 } },
//    { "album_title": "Heirloom Twee Literally", "year": 1923, "condition": "very_good", "artist": { "name": "The Animals", "id": 2 } },
//    { "album_title": "Distillery Intelligentsia Plaid", "year": 1939, "condition": "fair", "artist": { "name": "Living Colour", "id": 3 } },
//    { "album_title": "Locavore Stumptown Flexitarian", "year": 1950, "condition": "fair", "artist": { "name": "The Jackson Five", "id": 4 } },
//    { "album_title": "Banjo Pitchfork Flannel", "year": 1984, "condition": "mint", "artist": { "name": "The Who", "id": 5 } },
//    { "album_title": "90's Hashtag Chartreuse", "year": 1921, "condition": "mint", "artist": { "name": "AC/DC", "id": 6 } },
//    { "album_title": "Authentic Knausgaard Godard", "year": 2014, "condition": "mint", "artist": { "name": "Frank Zappa and the Mothers of Invention", "id": 7 } },
//    { "album_title": "Helvetica Cliche Chicharrones", "year": 1936, "condition": "fair", "artist": { "name": "Aerosmith", "id": 8 } },
//    { "album_title": "Chicharrones Lomo Fixie", "year": 2007, "condition": "poor", "artist": { "name": "The Beatles", "id": 9 } },
//    { "album_title": "Master Keffiyeh Keytar", "year": 2006, "condition": "very_good", "artist": { "name": "The Band", "id": 10 } },
//    { "album_title": "Migas Brunch Tacos", "year": 1991, "condition": "good", "artist": { "name": "Earth Wind and Fire", "id": 11 } },
//    { "album_title": "Try Hard 90's Pickled", "year": 1973, "condition": "mint", "artist": { "name": "AC/DC", "id": 6 } },
//    { "album_title": "Austin Bespoke Tilde", "year": 1934, "condition": "mint", "artist": { "name": "James Brown and the JBs", "id": 13 } },
//    { "album_title": "Twee Waistcoat Tacos", "year": 1925, "condition": "poor", "artist": { "name": "Lynyrd Skynyrd", "id": 14 } },
//    { "album_title": "Mixtape Pinterest Bespoke", "year": 2005, "condition": "poor", "artist": { "name": "Living Colour", "id": 3 } },
//    { "album_title": "Brooklyn Chambray Crucifix", "year": 1946, "condition": "fair", "artist": { "name": "The Jimi Hendrix Experience", "id": 16 } },
//    { "album_title": "Gastropub Bespoke Hammock", "year": 1950, "condition": "mint", "artist": { "name": "The Animals", "id": 2 } },
//    { "album_title": "Retro Yolo Offal", "year": 1935, "condition": "mint", "artist": { "name": "Genesis", "id": 18 } },
//    { "album_title": "Yolo I Phone Master", "year": 2013, "condition": "mint", "artist": { "name": "The Carpenters", "id": 19 } },
//    { "album_title": "Actually Tilde Master", "year": 1967, "condition": "very_good", "artist": { "name": "The Clash", "id": 20 } },
//    { "album_title": "Pour Over Diy Celiac", "year": 1928, "condition": "good", "artist": { "name": "David Bowie and The Spiders From Mars", "id": 21 } },
//    { "album_title": "Vegan Cornhole Xoxo", "year": 1944, "condition": "very_good", "artist": { "name": "Kansas", "id": 22 } },
//    { "album_title": "Crucifix Pbr\u0026B Gluten Free", "year": 1979, "condition": "good", "artist": { "name": "James Brown and the JBs", "id": 13 } },
//    { "album_title": "Godard Fixie Skateboard", "year": 1921, "condition": "mint", "artist": { "name": "The Scorpions", "id": 24 } }
//  ],
//  "nextPage": "https://gist.githubusercontent.com/seanders/df38a92ffc4e8c56962e51b6e96e188f/raw/59a156285556274a6b699084fbba9275ff2229d0/response2.json"
//}