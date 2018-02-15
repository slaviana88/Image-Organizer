export const checkImageIsBigEnough = (file, min_width, min_height) => {
  return new Promise((resolve, reject) => {
    let loadImage = file =>
      new Promise((resolve, reject) => {
        var i = new Image();
        i.onload = () => {
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = resolve(i);
        };
        i.src = file.preview;
      });

    let checkSize = (i, successCallback, failCallback) => {
      if (i.width > min_width && i.height > min_height) {
        successCallback(file);
      } else {
        failCallback(file);
      }
      // Delete the image from the memory
      i.src = '';
      i = null;
    };

    loadImage(file).then(i => checkSize(i, resolve, reject));
  });
};
