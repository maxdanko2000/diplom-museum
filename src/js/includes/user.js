export class User {
  constructor() {
    this.btnLoadImage = document.getElementById("upload-img");
    this.sampleImg = document.querySelector(".profile__avatar-img");
  }
  imagePreview() {
    this.btnLoadImage?.addEventListener("change", (event) => {
      if (event.target.files.length > 0) {
        const src = URL.createObjectURL(event.target.files[0]);
        this.sampleImg.src = src;
      }
    });
  }
}
