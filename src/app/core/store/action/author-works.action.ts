export class GetAuthorWorks {
    static readonly type = '[Author] Get Author Works';
    constructor(public key: string, public limit: number, public offset: number, public link: string) {}
}
