import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { giftService } from "../services/GiftServices.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";


function _drawGift(){
    let template = ''
    AppState.gifts.forEach(g => template += g.unopenedGift)
    setHTML ('giftList', template)
}


export class GiftController{
    constructor(){
        // console.log("gifts from controller");
        this.getGifts()
        // _drawGift()
        AppState.on('gifts', _drawGift)
    }

    async getGifts(){
        try {
            await giftService.getGifts()
        } catch (error) {
            
        }
    }

    async openedGift(id){
        try {
            await giftService.openedGift(id)
        } catch (error) {
            
        }
    }

    async createGift(){
        window.event?.preventDefault()
        const form = window.event?.target
        const formData = getFormData(form)
        console.log('waht is in the form data', formData);
        await giftService.createGift(formData)
        form.reset()
    }

    async deleteGift(id){
        try {
            await giftService.deleteGift(id)
        } catch (error) {
            
        }
    }
}