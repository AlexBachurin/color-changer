
//generate rgb color from 0 to 255, put it into array and return it
function generateRgb() {
    let num = 0;
    let rgbArr = [];
    for (let i = 0; i < 3 ; i++) {
        num = Math.floor(Math.random() * 256);
        rgbArr.push(num);
    }
    return rgbArr;
}


//convert rgb array to hex arr and return string in format '#000000'
function convertToHex(arr) {
    let hexArr = arr.slice();

    hexArr = hexArr.map(item => {
        if (item >= 0 && item <=15 ) {
            return `0${item.toString(16)}`;
        } else {
            return item.toString(16);
        }
    });

    return `#${hexArr.join('')}`
}

const btn = document.querySelector('.main__btn'),
      main = document.querySelector('main'),
      hexText = document.querySelector('.main__hex');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    //get hexString
    let arr = generateRgb();
    let hexString = convertToHex(arr);
    //put hex as bg color and change textContent to show string
    main.style.backgroundColor = hexString;
    hexText.textContent = hexString;

})