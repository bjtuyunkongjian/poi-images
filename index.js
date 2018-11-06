const fs = require('fs');
const kind2Img = require('./poi-map');
const OLDDIR = './images-chosen'; // 旧文件夹
const NEWDIR = './images-kind'; // 新文件夹

function _callback(fileName) {
  const _oldPath = OLDDIR + '/' + fileName;
  let flag = false;
  for (let key in kind2Img) {
    if (kind2Img[key] === fileName.substring(0, fileName.length - 4)) {
      const _newPath = NEWDIR + '/ic_map_' + key + '.png';
      fs.writeFileSync(_newPath, fs.readFileSync(_oldPath));
      flag = true;
    }
  }
  if (!flag) { // 判断未使用的文件
    console.log(fileName);
  }
}

// 遍历目录得到文件信息
function main(_path) {
  const files = fs.readdirSync(_path);

  files.forEach(function (fileName) {
    if (fs.statSync(_path + '/' + fileName).isFile()) {
      _callback(fileName);
    }
  });
}

main(OLDDIR);