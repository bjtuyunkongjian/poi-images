var fs = require('fs');
const kind2Img = require('./poi-map');
const OLDDIR = './images-chosen'; // 旧文件夹
const NEWDIR = './images-kind'; // 新文件夹


// 修改文件名称
function _rename(oldPath, newPath) {
  fs.rename(oldPath, newPath, function (err) {
    if (err) {
      throw err;
    }
  });
}

function _callback(fileName) {
  const _oldPath = OLDDIR + '/' + fileName;
  for (let key in kind2Img) {
    if (kind2Img[key] === fileName.substring(0, fileName.length - 4)) {
      const _newPath = NEWDIR + '/ic_map_' + key + '.png';
      console.log(_newPath);
      _rename(_oldPath, _newPath);
    }
  }
}

// 遍历目录得到文件信息
function main(_path) {
  var files = fs.readdirSync(_path);

  files.forEach(function (fileName) {
    if (fs.statSync(_path + '/' + fileName).isFile()) {
      _callback(fileName);
    }
  });
}

main(OLDDIR);