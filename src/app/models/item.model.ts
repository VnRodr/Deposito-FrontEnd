import { ItemType } from "../enums/itemType";
import { User } from "./user.model";

export interface Item{
    id:string;
    itemName:string;
    itemType:ItemType;
    price:number;
    quantity:number;
    itemOwner:User
}