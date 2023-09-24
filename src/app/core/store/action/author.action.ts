export class SearchAuthors {
    static readonly type = '[Author] Search';
    constructor(public query: string, public limit: number, public offset: number) {}
  }