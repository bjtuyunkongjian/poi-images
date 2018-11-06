const fs = require('fs');
const kind2Img = require('./poi-map');
const NEWDIR = './images-kind'; // 新文件夹

const files = fs.readdirSync(NEWDIR);
const newFiles = files.map(item => item.substring(7, item.length - 4));

const kind2ImgArr = Object.keys(kind2Img);
for (let item of kind2ImgArr) {
  if (newFiles.indexOf(item) === -1) {
    console.log(item)
  }
}

for (let item of newFiles) {
  if (kind2ImgArr.indexOf(item) === -1) {
    console.log(item);
  }
}