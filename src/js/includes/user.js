import { removeFromTable } from "./utils";

export class User {
  constructor() {
    this.btnReturnList = document.querySelectorAll(".profile-ticket-list__btn-return");
    this.returnedTicketList = document.getElementById("returned-list");
    this.tableDataList = document.querySelectorAll(".profile-ticket-list__table-data");

    this.btnLoadImage = document.getElementById("upload-img");
    this.sampleImg = document.querySelector(".profile__avatar-img");
  }

  returnTicket() {
    for (const btnReturnItem of this.btnReturnList) {
      btnReturnItem.addEventListener("click", (e) => {
        removeFromTable(e);
      });
    }
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
