import { Compte } from "./compte";

export class Client {
    id?:number;
    name?:string;
    photo?:string;
    age!:number;
    compte?:Compte;

}
