const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const PNGImages = 'static/images/*.png';
const JPEGImages = 'static/images/*.jpg';
const output = 'build/images';
const optimiseJPEGImages = () =>
  imagemin([JPEGImages], output, {
        use: [
            imageminMozjpeg({quality: '65-80'})
        ]
    });

const optimisePNGImages = () =>
  imagemin([PNGImages], output, {
    plugins: [
      imageminPngquant({ quality: '65-80' })
    ],
  });

optimiseJPEGImages()
  .then(() => optimisePNGImages())
  .catch(error => console.log(error));
  