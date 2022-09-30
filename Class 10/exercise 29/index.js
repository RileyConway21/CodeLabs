const arr = [1,2,3,4,5,6,7,8,9,10];

const max = Math.max(...arr);

const index = arr.indexOf(max);
document.write(index); // 👉️ 3