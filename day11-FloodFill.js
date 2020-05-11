// An image is represented by a 2-D array of integers, each integer representing the 
// pixel value of the image (from 0 to 65535).

// Given a coordinate (sr, sc) representing the starting pixel (row and column) of 
// the flood fill, and a pixel value newColor, "flood fill" the image.

// To perform a "flood fill", consider the starting pixel, plus any pixels 
// connected 4-directionally to the starting pixel of the same color as the starting pixel, 
// plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), 
// and so on. Replace the color of all of the aforementioned pixels with the newColor.

// At the end, return the modified image.

// The length of image and image[0] will be in the range [1, 50].
// The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
// The value of each color in image[i][j] and newColor will be an integer in [0, 65535].

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
// solution 1 recursion
const floodFill = (image, sr, sc, newColor, firstColor = null) => {
    firstColor = firstColor == null ? image[sr][sc] : firstColor;
    if (firstColor != newColor) {
        if (image[sr] === undefined || !image[sr][sc] === undefined || image[sr][sc] !== firstColor) {
            return image;
        } else {
            image[sr][sc] = newColor;
            //fill right
            floodFill(image, sr, sc + 1, newColor, firstColor);
            //fill left
            floodFill(image, sr, sc - 1, newColor, firstColor);
            //fill top
            floodFill(image, sr - 1, sc, newColor, firstColor);
            //fill bot
            floodFill(image, sr + 1, sc, newColor, firstColor);
            return image;
        }
    } return image;

};

//Solution 2 iterating
const floodFill = (image, sr, sc, newColor) => {
    let firstColor = image[sr][sc];
    if (newColor == firstColor) return image;
    let rute = [[sr, sc]];
    let currentPixel = [sr, sc];
    while (rute.length > 0) {
        image[currentPixel[0]][currentPixel[1]] = newColor;
        //can move up
        if (canMove(currentPixel[0] - 1, currentPixel[1])) {
            continue;
        }
        //can move right
        else if (canMove(currentPixel[0], currentPixel[1] + 1)) {
            continue;
        }//can move down
        else if (canMove(currentPixel[0] + 1, currentPixel[1])) {
            continue;
            //can move left
        } else if (canMove(currentPixel[0], currentPixel[1] - 1)) {
            continue;
        } else {
            rute.pop();
            currentPixel = rute[rute.length - 1];
        }
    }
    return image;

    function canMove(sr, sc) {
        if (image[sr] !== undefined && image[sr][sc] == firstColor) {
            currentPixel = [sr, sc];
            rute.push(currentPixel);
            return true;
        } else
            return false;
    }

};


exports.solution = floodFill;