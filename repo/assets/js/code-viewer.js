let key = 'file';
let defaultBlobpath = '/_404_.md';
let queryParams = new URLSearchParams(window.location.search);
let blobpath = queryParams.get(key);
if (typeof blobpath === 'string') {
} else {
  blobpath = defaultBlobpath;
}

let regexpsImage = (
  [
    '.apng',
    '.png',
    '.jpg',
    '.jpeg',
    '.svg',
    'webp',
    '.tif',
    '.tiff',
    '.gif',
    '.ico',
    '.bmp',
    '.avif',
  ]
    .map(ext => new RegExp(`${ext}$`))
);

/**
 * @param {string} blobpath 
 */
function renderCodeBlock(blobpath) {
  let elemArticle = document.querySelector('article.markdown-body');
  if (elemArticle) {
    let ext = (arr => arr.length > 1 ? arr[1] : null)(blobpath.split('.'));
    fetchCode(blobpath)
      .then(code => {
        let elemTitle = document.createElement('div');
        elemTitle.style = 'font-size: 30px;';
        elemTitle.appendChild((elem => {
          elem.innerHTML = 'File: ';
          return elem;
        })(document.createElement('span')));
        elemTitle.appendChild((elem => {
          elem.appendChild((elem => {
            elem.href = blobpath;
            elem.innerHTML = blobpath;
            return elem;
          })(document.createElement('a')))
          return elem;
        })(document.createElement('span')));

        
        /**
         * @type {HTMLElement}
         */
        let elemContent;
        if (regexpsImage.some(regexp => blobpath.match(regexp))) {
          let elemImage = document.createElement('img');
          elemImage.src = blobpath;
          
          elemContent = elemImage;
        } else {
          let elemPre = document.createElement('pre');
          let elemCode = document.createElement('code');
          elemCode.innerHTML = code;
          elemPre.appendChild(elemCode);

          elemContent = elemPre;
        }

        elemArticle.appendChild(elemTitle);
        elemArticle.appendChild(elemContent);
      })
  }
}

/**
 * @param {string} blobpath 
 * @return {Promise<string>}
 */
function fetchCode(blobpath) {
  if (blobpath === '')
    blobpath = defaultBlobpath;
  return 0 ||
  fetch(blobpath)
    .then(resp => {
      if (resp.status == 404)
        throw new Error(resp.statusText);
      return resp;
    })
    .then(_ => _.text())
    .catch(err => (
      blobpath !== defaultBlobpath ?
      fetchCode(defaultBlobpath) :
      Promise.reject(err)
    ));
}

function main() {
  window.onload = (onload => (ev) => {
    if (onload)
      onload(ev);
    renderCodeBlock(blobpath);
  })(window.onload);
}

main();