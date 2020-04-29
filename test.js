let str = '//img30.360buyimg.com/popWaterMark/jfs/t1/108870/4/9667/55684/5e788487Ef88f4c54/b3adc450f074e6b3.jpg!q70.dpg.webp'
let intros = str.match(/\/\/img30\.360buyimg\.com\/[0-9a-zA-Z\/]*\.jpg/gi);
console.log(intros)