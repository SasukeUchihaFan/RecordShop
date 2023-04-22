const fs = require('fs');



/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('test');

// Insert a few documents into the sales collection.
// db.getCollection('products').insertMany([
//   { 'Title': 'Blond', 'desc': "Standard", 'img': "", 'artist': "Frank Ocean", 'genre': "R&B", 'price': 40},
//   { 'Title': 'Igor', 'desc': "Deluxe", 'img': "", 'artist': "Tyler, the Creator", 'genre': "Hip Hop", 'price': 25},
//   { 'Title': 'In Rainbows', 'desc': "Standard", 'img': "", 'artist': "Radiohead", 'genre': "Alternative Rock", 'price': 35},
//   { 'Title': 'Whole Lotta Red', 'desc': "Standard", 'img': "", 'artist':  "Playboi Carti", 'genre': "Rap", 'price': 20},
  
// ]);


  // const records = [
  //   {
  //     id: 4,
  //     Title: 'Blond',
  //     desc: "Standard",
  //     image: {
  //       data: fs.readFileSync('./RecordShopAPI/images/blond.jpg'),
  //       contentType: 'image/jpeg'
  //     },
  //     artist: 'Frank Ocean',
  //     genre: "R&B",
  //     price: 40,
  //     quantity: 2020,
  //     inStock: true
  //   },
  //   {
  //     id: 3,
  //     Title: 'Igor',
  //     desc: "Deluxe",
  //     image: {
  //       data: fs.readFileSync('./RecordShopAPI/images/igor.jpg'),
  //       contentType: 'image/jpeg'
  //     },
  //     artist: 'Tyler, the Creator',
  //     genre: "Hip Hop",
  //     price: 40,
  //     quantity: 2020,
  //     inStock: true
  //   },
  //   {
  //     id: 2,
  //     Title: 'In Rainbows',
  //     desc: "Standard",
  //     image: {
  //       data: fs.readFileSync('./RecordShopAPI/images/inrainbows.png'),
  //       contentType: 'image/pngh'
  //     },
  //     artist: 'Radiohead',
  //     genre: "Alternative Rock",
  //     price: 30,
  //     quantity: 2020,
  //     inStock: true
  //   },
  //   {
  //     id: 1,
  //     Title: 'Whole Lotta Red',
  //     desc: "Standard",
  //     image: {
  //       data: fs.readFileSync('./RecordShopAPI/images/wlr.png'),
  //       contentType: 'image/png'
  //     },
  //     artist: 'Playboi Carti',
  //     genre: "Rap",
  //     price: 20,
  //     quantity: 2020,
  //     inStock: true
  //   },
  // ];

  // const records = [
  //   {
  //     id: "1",
  //     Title: "Thriller",
  //     desc: "Sixth studio album by Michael Jackson, released in 1982",
  //     img: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png",
  //     artist: "Michael Jackson",
  //     genre: ["Pop", "Rock"],
  //     price: 9.99,
  //     quantity: 50,
  //   },
  //   {
  //     id: "2",
  //     Title: "Nevermind",
  //     desc: "Second studio album by Nirvana, released in 1991",
  //     img: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
  //     artist: "Nirvana",
  //     genre: ["Rock"],
  //     price: 8.99,
  //     quantity: 40,
  //   },
  //   {
  //     id: "3",
  //     Title: "The Dark Side of the Moon",
  //     desc: "Eighth studio album by Pink Floyd, released in 1973",
  //     img: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
  //     artist: "Pink Floyd",
  //     genre: ["Rock"],
  //     price: 10.99,
  //     quantity: 30,
  //   },
  //   {
  //     id: "4",
  //     Title: "Abbey Road",
  //     desc: "Eleventh studio album by The Beatles, released in 1969",
  //     img: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
  //     artist: "The Beatles",
  //     genre: ["Rock"],
  //     price: 11.99,
  //     quantity: 20,
  //   },
  //   {
  //     id: "5",
  //     Title: "Back in Black",
  //     desc: "Seventh studio album by AC/DC, released in 1980",
  //     img: "https://upload.wikimedia.org/wikipedia/en/2/2f/ACDC_Back_in_Black_cover.png",
  //     artist: "AC/DC",
  //     genre: ["Rock"],
  //     price: 12.99,
  //     quantity: 10,
  //   },
  // ];
  

  // const products = [
  //   {
  //     id: "6",
  //     Title: "Good Kid, M.A.A.D City",
  //     desc: "Good Kid, M.A.A.D City is the second studio album by American rapper Kendrick Lamar. The album is Lamar's major label debut, released through Top Dawg, Aftermath, and Interscope.",
  //     img: "https://upload.wikimedia.org/wikipedia/en/2/26/Kendrick_Lamar_-_Good_Kid%2C_M.A.A.D_City.png",
  //     artist: "Kendrick Lamar",
  //     genre: ["Hip Hop"],
  //     price: 12.99,
  //     quantity: 50,
  //     inStock: true
  //   },
  //   {
  //     id: "7",
  //     Title: "My Beautiful Dark Twisted Fantasy",
  //     desc: "My Beautiful Dark Twisted Fantasy is the fifth studio album by American rapper and producer Kanye West. It was released on November 22, 2010, through Def Jam Recordings and Roc-A-Fella Records.",
  //     img: "https://upload.wikimedia.org/wikipedia/en/0/0c/My_Beautiful_Dark_Twisted_Fantasy.jpg",
  //     artist: "Kanye West",
  //     genre: ["Hip Hop"],
  //     price: 14.99,
  //     quantity: 75,
  //     inStock: true
  //   },
  //   {
  //     id: "8",
  //     Title: "The College Dropout",
  //     desc: "The College Dropout is the debut studio album by American rapper and producer Kanye West. It was released on February 10, 2004, by Def Jam Recordings and Roc-A-Fella Records.",
  //     img: "https://upload.wikimedia.org/wikipedia/en/4/49/The_College_Dropout_cover.png",
  //     artist: "Kanye West",
  //     genre: ["Hip Hop"],
  //     price: 11.99,
  //     quantity: 25,
  //     inStock: true
  //   },
  //   {
  //     id: "9",
  //     Title: "Igor",
  //     desc: "Igor is the fifth studio album by American rapper and producer Tyler, The Creator. It was released on May 17, 2019, through Columbia Records and was primarily produced by Tyler himself.",
  //     img: "https://upload.wikimedia.org/wikipedia/en/d/d1/Tyler%2C_The_Creator_-_Igor.png",
  //     artist: "Tyler, The Creator",
  //     genre: ["Hip Hop"],
  //     price: 10.99,
  //     quantity: 20,
  //     inStock: true
  //   },
  //   {
  //     id: "10",
  //     Title: "Whole Lotta Red",
  //     desc: "Whole Lotta Red is the second studio album by American rapper Playboi Carti. It was released on December 25, 2020, by AWGE Label and Interscope Records.",
  //     img: "https://upload.wikimedia.org/wikipedia/en/3/3b/Playboi_Carti_-_Whole_Lotta_Red.png",
  //     artist: "Playboi Carti",
  //     genre: ["Hip Hop"],
  //     price: 9.99,
  //     quantity: 15,
  //     inStock: true
  //   }
  // ];
  
  const records = [
    // {
    //   id: "11",
    //   title: "Kind of Blue",
    //   desc: "An all-time classic, considered by many to be the greatest jazz album of all time.",
    //   img: "https://images-na.ssl-images-amazon.com/images/I/81yF02%2B9RRL._SL1500_.jpg",
    //   artist: "Miles Davis",
    //   genre: ["Jazz", "Modal Jazz"],
    //   price: 9.99,
    //   quantity: 10,
    //   inStock: true
    // },
    // {
    //   id: "12",
    //   Title: "The Shape of Jazz to Come",
    //   desc: "An influential album that introduced Ornette Coleman's unique approach to jazz.",
    //   img: "https://images-na.ssl-images-amazon.com/images/I/51tSjh%2BK5eL._SL1500_.jpg",
    //   artist: "Ornette Coleman",
    //   genre: ["Jazz"],
    //   price: 8.99,
    //   quantity: 5,
    //   inStock: true
    // },
    {
      id: "1234",
      Title: "Beatopia",
      desc: "The debut album from Beabadoobee",
      img: "https://media.pitchfork.com/photos/623a9d636597466fa9d6e2ba/1:1/w_600/beabadoobee-Beatopia.jpg",
      artist: "Beabadoobee",
      genre: ["Pop"],
      price: 10.99,
      quantity: 100,
      inStock: true
    }
  ]
  db.getCollection('products').insertMany(records);





// Run a find command to view items sold on April 4th, 2014.
// const salesOnApril4th = db.getCollection('sales').find({
//   date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
// }).count();

// Print a message to the output window.
// console.log(`${salesOnApril4th} sales occurred in 2014.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
// db.getCollection('sales').aggregate([
//   // Find all of the sales that occurred in 2014.
//   { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
//   // Group the total sales for each product.
//   { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
// ]);
