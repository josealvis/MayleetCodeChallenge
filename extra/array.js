/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

    let arr = nums1.concat(nums2).sort((a,b)=> a-b);

    if (arr.length % 2 === 0) {
        let p2 = (arr.length) / 2;
        let p1 = p2 - 1;
        return (arr[p1] + arr[p2]) / 2;

    } else {
        return arr[(arr.length-1) / 2]
    }

};

console.log(findMedianSortedArrays([3],[-2,-1]));
