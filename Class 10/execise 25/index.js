const num = ' 1010101';
const isNum = char => {
   const legend = '0';
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