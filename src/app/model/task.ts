import {Todo} from "./todo";

export class Task implements Todo{
   constructor( public id:number, public title:string, public completed:boolean ) {
   }
}
