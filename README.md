# Harmful Content Detection with Perceptual Hashing
## Introduction
To coninue our conversation on harmful content detection, we're going to be implementing a simple system that mimics the 
way products scan files for known harmful content like CSAM. In this exercise, we'll use perceptual hashes to identify known harmful 
content in a directory. 

## Narrative
We're Stanford sysadmins observing a server for harmful content—
in this case, we're looking to catch Cal logos on the server.

First, we'll implement tools that help us find exact matches of known 
Cal logos. 

Then, we'll try to catch users skirting this system by modifying 
their Cal logos. 

## File structure
### `hashing.js` 
`hashing.js` contains the starter code for this exercise. You'll find several functions already implemented:
- `getHash(filePath)` takes in a file path and returns that file's hexadecimal perceptual hash. This will look like a string of numbers and letters. If the path isn't valid (if it doesn't point to a file in the "server" directory), this function returns 0.
- `getHashBinary(filePath)` takes in a file path and returns the file's binary perceptual hash.  If the path isn't valid (if it doesn't point to a file in the "server" directory), this function returns 0.
- `getFilenames()` returns the images contained in the server directory. Note that this function "cheats"—instead of scanning that directory, it just returns the keys of our hashes map. That means that if you add something to the directory, getFilenames() won't reflect that change. 

_Why don't we use a perceptual hashing library in this assignment?_
It turns out there don't seem to be great client-side Javascript perceptual hashing libraries. Instead, we've used `imghash`, a node.js 
library, to take the perceptual hashes of each image in advance. 

### `data.js`
`data.js` contains the hash data for our images; it builds Javascript maps for the hashes in two formats—hexadecimal and binary.

## Exercise
### 1. Implement `isHarmful(path)`
`isHarmful()` takes in a filepath, `path` to an image and determines whether that image's perceptual hash 
  matches that of any known harmful content. Returns true if the image is harmful; returns false otherwise. 
  
Implementation notes:
- The `HARMFUL_HASHES` array contains all of the known harmful hashes strings
- Use `a.includes(b)` to check whether `b` is in array `a`.

### 2. Implement `scanImages(dir)`
`isHarmful()` takes in a directory name, `dir`, and returns an array of files in the images list that we know to be harmful. Returns an empty array if none are detected. 

Implementation notes:
- Get the full path of a file by appending the directory (`dir`) to the filename. 
- Be careful about slashes: the directory "./images" can't be appended to the filename "cheese.jpeg"; 
    you'll get a nonsense path called "./imagescheese.jpeg". Instead, add a slash between the two terms.
- You can append strings in JS the same way you can in python:`string1 + string2`.
- To loop through an array called items, use the syntax `for (let item of items) {}`.
- Add something to a JS array, use `array.push(item)`. 

### 3. Implement `hammmingDistance(img1, img2)`
For two images with filepaths img1 and img2, returns the Hamming distance between the two. The Hamming distance of 
two perceptual hashes is equal to the number of different bits they have. For instance, if we're looking at the perceptual 
hashes `10011` and `11011`, their Hamming distance would be 1. 
  
  Implementation notes:
  - There are multiple ways of looping through something in JS. We already saw the `for (let item in items)` method. 
    There's a second way: loop through something 10 units long by writing: `for (let i=0; i < 10; i++) {}`.

### 4. Implement `findSimilar(original)`
We're worried that users are modifying Cal logos slightly to evade detection by our system. 
findSimilar() is a proof-of-concept system to combat this practice—-it returns an array containg the 
file most similar (but not identical) to a reference file, `original`, and the distance between those two files. 
That means the return value should be of the form `["img.jpeg", 4]`.
  
In this case, we're specifically looking at findSimilar("./server/14a.jpeg").

Implementation notes: 
- `hammingDistance()` uses a binary representation of hashes, so be sure not to use `getHash()`, which returns a hexadecimal number. 
  There's another function you can use instead!
- Be careful you don't detect the original file——which should have a Hamming distance
  of 0 with itself——as the evasive file. 
- To return an array, simply return `[element1, element2]`;
- In case it's helpful, no two files are going to have a Hamming distance of more than, 
  say, 100000.
