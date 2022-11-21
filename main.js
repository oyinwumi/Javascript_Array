   console.log('question one')

function findTheMedian(nums){
      const median =Math.floor(nums.length / 2);
      if (nums.length % 2 === 0) {
      return (nums[median-1] + nums[median])/2
   }
   return nums[median];
}
 console.log(findTheMedian([4,9,9,2,1,5]))
 
      console.log('question two')
 function matchUp(a, b) {
      let count = 0;
      for (let i = 0; i < a.length; i++) {
        if (Math.abs(a[i] - b[i]) <= 2 && Math.abs(a[i] - b[i]) !== 0) {
         count += 1
        }
      return count;
      }
}
   console.log(matchUp([1, 2, 3], [2, 3, 10]))
 
   console.log('question three')
   function xyzMiddle(str) {
     const midPoint = Math.floor((str.length - 3) / 2);
     const allowedIndices = [midPoint];
 
     if (str.length % 2 === 0) {
         allowedIndices.push(midPoint + 1);
      }
   
      const STRING_TO_FIND = "xyz";
   
      for (let i = 0; i < str.length; i++) {
         if (str.substr(i, STRING_TO_FIND.length) === STRING_TO_FIND && allowedIndices.includes(i)) {
            return true;
         }
     }
 
     return false;
   }
   console.log(xyzMiddle('AAxyzBB'));
 
   console.log('question four')
   function evenOdd(nums) {
     const odds = [];
     const evens = [];
 
     nums.forEach(num => {
       if (num % 2 === 0) {
         evens.push(num);
       } else {
         odds.push(num);
       }
     });
 
     return evens.concat(odds);
   }
  console.log(evenOdd([1, 0, 1, 0, 0, 1, 1]))

   
   console.log('question five')
   function sameStarChar(str){
      for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "*") {
          const prevChar = str.charAt(i-1);
          const nextChar = str.charAt(i+1);
          
          if (prevChar !== nextChar && ![nextChar, prevChar].includes("")) {
            return false;
          }
        }
      }
      
      return true;
    }
    console.log(sameStarChar('xy*yzz'))

   