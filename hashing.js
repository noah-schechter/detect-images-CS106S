/***********************************************
CS 106S Week 4: Safety-first Product Development

ABOUT:
hashing.js contains the starter code for several tools that
detect known harmful files on a server.

TODOs:
1. Implement the function isHarmful, which takes in a 
filepath and determines whether that file's hash is in 
the harmful hashes array.

2. Implement the function scanImages, which scans a directory of
images and returns a list of all those known to be harmful.

3. Implement hammingDistance, which returns the Hamming distance between 
two binary numbers.

4. Implement findSimilar, which helps us find a slightly-modified 
file. 

******************************************************/

// A list of perceptual hashes of known Cal logos 
HARMFUL_HASHES = [
    "187e366c3c3c7e18",
    "00ffb923a18fff00",
    "e68682f6269efe20",
    "e7848db1a3a381b7",
    "c783b99193c3c0fc",
    "a993918f81bda9a9",
    "033ffcc01a3e3e03",
    "3c3c3c3c3c3c3c3c",
    "001a363c3c3c7e00",
    "ff003729a3b100ff",
    "1c3c3c3c3c38307e",
    "c783999983c78bc3",
    "3f053f05053f283f",
    "c6c3b99181e781bd",
    "ff80a5a5a9b181ff",
    "e38383cbd3c1c1c7",
    "ff00c3c3c1c700ff",
    "387c3c3c3c5c7f02",
    "607e5e4a7f8000ff",
    "f4b099993c3c1967",
    "187e10feff007e18",
    "9f0a17657171119f",
    "e781b1a3e781d193",
    "187e3c3c3c3c7e18",
    "000000fffe000000"
  ];
  
  
  /* getHash() takes in the path to an image and returns the image's 
  perceptual hash in hexadecimal format. No need to edit this one :) */
  function getHash(path) {
    if (hashesMap.has(path)) {
      return hashesMap.get(path);
    }
    console.log("No image detected at path", path);
    return 0;
  }
  
  
  /* getBinaryHash() takes in the path to an image ("./server/image.jpeg") and returns 
  the image's perceptual hash in binary format, to be used in calculating Hamming distances.  
  No need to edit this one :)*/
  function getBinaryHash(path) {
    if (hashesMapBinary.has(path)) {
      return hashesMapBinary.get(path);
    }
    console.log("No image detected at path", path);
    return 0;
  }
  
  
  /* getFilenames() returns the list of all filenames on our server. No need to edit this one :) */
  function getFilenames() {
    let filenames = [];
    for (let filePath of hashesMap) {
      filenames.push(filePath[0].slice(9,));
    }
    return filenames;
  }
  
  
  /* isHarmful() takes in a filepath to an image and determines whether that image's perceptual hash 
  matches that of any known harmful content. Returns true if the image is harmful; returns false otherwise. 
  
  Implementation notes:
  - The HARMFUL_HASHES array contains all of the known harmful hashes strings
  - Use a.includes(b) to check whether b is in array a. */
  function isHarmful(path) {
    /****** TODO ******/
    return false;  // Delete this line and implement
    /****** END TODO ******/
  }
  
  
  /* scanImages() takes in a directory name and returns an array of files in the images list that we know to be harmful. Returns an empty array if none are detected. 
  
  Implementation notes:
  - get the full path of a file by appending the directory (dir) to the filename. 
  - Be careful about slashes: the directory "./images" can't be appended to the filename "cheese.jpeg"; 
    you'll get a nonsense path called "./imagescheese.jpeg". Instead, add a slash between the two terms.
  - You can append strings in JS the same way you can in python: string1 + string2.
  - To loop through an array called items, use the syntax "for (let item of items) {}"
  - Add something to a JS array, use array.push(item) */
  function scanImages(dir) {
    let filenames = getFilenames(); // An array of image filnames to scan

    /****** TODO ******/
    return ["Not yet implemented.jpeg"]  // Delete this line and implement
    /****** END TODO ******/
  }
  
  
  /* For two images with filepaths img1 and img2, returns the hammingDistance between the two.
  The Hamming distance of two perceptual hashes is equal to the number of different bits they have. For instance, if we're looking
  at the perceptual hashes "10011" and "11011", their Hamming distance would be 1. 
  
  Implementation notes:
  - There are multiple ways of looping through something in JS. We already saw the "for (let item in items)" method. 
    There's a second way: loop through something 10 units long by writing: "for (let i=0; i < 10; i++) {}" */
  function hammingDistance(img1, img2) {
    // Get the binary, not hexadecimal, hashes of each image
    let hash1 = getBinaryHash(img1);
    let hash2 = getBinaryHash(img2);

    /****** TODO ******/
    return 0; // Delete this line and implement
    /****** END TODO ******/
  }
  
  
  /* We're worried that users are modifying Cal logos slightly to evade 
  detection by our system. findSimilar() is a proof-of-concept system to
  combat this practice—-it returns an array containg the file most similar 
  (but not identical) to a reference file, and the distance between those two files. 
  
  In this case, we're specifically looking at findSimilar("./server/14a.jpeg").

  Implementation notes: 
  - hammingDistance uses a binary representation of hashes and calculates those 
  within the function, so there's no need to call getHash, which uses a hexadecimal format, here.
  - Be careful you don't detect the original file——which should have a Hamming distance
  of 0 with itself——as the evasive file. 
  - To return an array, simply return [element1, element2];
  - In case it's helpful, no two files are going to have a Hamming Distance of more than, 
  say, 100000. */
  function findSimilar(original) {
    let dir = "./server"
    let filenames = getFilenames(); // An array of image filnames to scan

    /****** TODO ******/
    return ["Not yet implemented", 0]; // Delete this line and implement
    /****** END TODO ******/
  }
  
    
  function main() {
    /* Runs isHarmful on two images. 
    Awaits the result, then prints to the console. */
    // Should return false.
    console.log("isHarmful(1.jpeg) returned", isHarmful("./server/1.jpeg"), "Expected:", false);
  
    // Should return true
    console.log("isHarmful(1a.jpeg) returned", isHarmful("./server/1a.jpeg"), "Expected:", true);
  
    /* Scans the images directory for harmful content. 
    Awaits the result, then prints to the console. */
    console.log("Harmful images: %s", scanImages("./server"));
  
    /* Runs hammingDistanace on two sets of images. The first Hamming distance should be 
    lower than the second, though raw Hamming distances aren't a great way of telling how 
    different two already-distinct images are. */
    console.log("Similar images hammingDistance was:", hammingDistance("./server/4.jpeg", "./server/17.jpeg"));
    console.log("Starkly different images hammingDistance was:", hammingDistance("./server/20.jpeg", "./server/20a.jpeg"));
  
    // Open the file this function returns! See if you can figure out how our malicious user modified the file.
    console.log("System-evading file: ", findSimilar("./server/14a.jpeg"));
  
  }
  
  
  main();