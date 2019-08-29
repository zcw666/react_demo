/**
 * 压缩方法
 * @param {*} base64 :被转成base64的图片
 * @param {*} w ：定义图片的宽度
 * @param {*} Q ：压缩系数
 */
const dealImage = function(base64, w, Q) {
    return new Promise((resolve, regect) => {
        let newImage = new Image();
        let quality = Q || 0.6; //压缩系数0-1之间;注意：压缩系数quality在0.995-1之间，压缩会出现异常，压缩后尺寸比原图还大，所以要避免取这些值。
        newImage.src = base64;
        newImage.setAttribute("crossOrigin", "Anonymous"); //url为外域时需要
        let imgWidth, imgHeight;
        newImage.onload = function() {
            // this指向该图片
            imgWidth = this.width;
            imgHeight = this.height;
            let canvas = document.createElement("canvas");
            let ctx = canvas.getContext("2d");
            if (Math.max(imgWidth, imgHeight) > w) {
                if (imgWidth > imgHeight) {
                    canvas.width = w;
                    canvas.height = (w * imgHeight) / imgWidth;
                } else {
                    canvas.height = w;
                    canvas.width = (w * imgWidth) / imgHeight;
                }
            } else {
                canvas.width = imgWidth;
                canvas.height = imgHeight;
                quality = 0.6;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
            let base64 = canvas.toDataURL("image/jpeg", quality); //压缩语句
            resolve({
                img: base64
            });
        };
    });
};
export default dealImage;
