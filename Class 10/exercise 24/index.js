const num = 'I am 10. My address is 1112 Some Str.';
const isNum = char => {
   const legend = '1234567890';
   return legend.includes(char);
};
const countNumbers = (num = '') => {
   let count = 0;
   for(let i = 0; i < num.length; i++){
      if(!isNum(num[i])){
         continue;
      };
      count++;
   };
   return count;
};
console.log(countNumbers(num));