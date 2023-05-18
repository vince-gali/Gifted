import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js";
import { api, giftApi } from "./AxiosService.js"

 class GiftService{
    async deleteGift(id) {
        const res = await api.delete(`api/gifts/${id}`)
        // console.log('removing gift', res.data);
        AppState.gifts = AppState.gifts.filter(g => g.id !=id)
        AppState.emit("gifts")

    }
    async openedGift(id) {
        const gift = AppState.gifts.find(g => g.id == id)
        gift.opened = !gift.opened
        // console.log('', gift.opened);
        const res = await api.put('api/gifts/' + id, gift)
        console.log(res.data);
        let index = AppState.gifts.findIndex(g => g.id == id)
        console.log('', index);
        AppState.gifts.splice(index, 1, new Gift(res.data))
        AppState.emit('gifts')
    }
    async getGifts(){
        const res = await giftApi.get('api/gifts')
        // console.log('getting gifts', res.data);
        AppState.gifts = res.data.map(g => new Gift(g))

        console.log('gift list', AppState.gifts);
    
    }

    async createGift(formData){
        const res = await api.post('api/gifts', formData)
        const newGift = new Gift(res.data)
        AppState.gifts.unshift(newGift)
        AppState.emit('gifts')
    }





    
}

export const giftService = new GiftService()