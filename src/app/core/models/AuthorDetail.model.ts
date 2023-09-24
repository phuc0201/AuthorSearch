import { CreatedTime } from "./CreatedTime.model";

export class AuthorDetail {
    constructor(){}
    name!: string;
    personal_name!: string; 
    death_date!: string; 
    alternate_names!: String; 
    created!: CreatedTime; 
    Last_modified!: CreatedTime; 
    Latest_revision!: number; 
    key!: string; 
    birth_date!: string; 
    revision!: number; 
    type!: string; 
}