export class Gift{
    constructor(data){
        this.id = data.id
        this.tag = data.tag
        this.imgUrl = data.url
        // vvvv gift is not opened
        this.opened = false
        this.creatorId = data.creatorId
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
        this.title = data.title

    }


    get unopenedGift(){
        return /*html*/ `
        <div class="col-4" onclick="app.GiftController.openedGift('${this.id}')">
    <div class="card text-center p-5"> 
      <h4>${this.tag}</h4>
      <img  src="${this.imgUrl}">
      <button class="btn btn-danger" onclick="app.GiftController.deleteGift('${this.id}')"><i class="mdi mdi-delete"></i></button>
    </div>
  </div>`
    }

    
}