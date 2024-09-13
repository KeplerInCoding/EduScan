const camera = function () {
    let width = 0;
    let height = 0;
  
    return {
      video: null,
      context: null,
      canvas: null,
      stream: null,
  
      createObjects: function (videoElement, canvasElement) {
        this.video = videoElement;
        this.canvas = canvasElement;
        this.context = this.canvas.getContext('2d');
      },
  
      startCamera: function (w = 680, h = 480, videoElement, canvasElement) {
        width = w;
        height = h;
  
        this.createObjects(videoElement, canvasElement);
  
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
              this.stream = stream;
              this.video.srcObject = stream;
              this.video.play();
            })
            .catch((error) => {
              console.error("Error accessing camera: ", error);
              alert("Unable to access the camera.");
            });
        }
      },
  
      stopCamera: function () {
        if (this.stream) {
          this.stream.getTracks().forEach((track) => track.stop());
        }
      },
  
      takeSnapshot: function () {
        this.context.drawImage(this.video, 0, 0, width, height);
        return this.canvas.toDataURL('image/png'); // Return image data
      },
    };
  }();
  
  export default camera;
  