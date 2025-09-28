import { Item } from "./item.model";

export interface User{
    id?:string;
    firstName:string;
    lastName:string;
    email:string;
    phoneNumber:string;
    itemList:Item[]
}