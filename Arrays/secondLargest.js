/*
Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.
  - Note: The second largest element should not be equal to the largest element.

Examples:

Input: arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34.

*/

class Solution {
    // Function returns the second largest element
    getSecondLargest(arr) {
        // Code Here
        let largest = -1;
        let secondLargest = -1;
        
        for (let num of arr) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num < largest) {
                secondLargest = num;
            }
        }
        return secondLargest;
    }
}
