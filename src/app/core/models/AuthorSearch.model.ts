import { DocAboutAuthor } from "./DocAboutAuthor.model";
export class AuthorSearch {
    numFound!: number;
    start!: number;
    numFoundExact!: boolean;
    docs!: DocAboutAuthor[]
    constructor(){}
}
