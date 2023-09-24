import { Action, State, StateContext, Selector } from "@ngxs/store";
import { AuthorSearch } from "../../models/AuthorSearch.model";

import { Injectable } from "@angular/core";
import { SearchAuthors } from "../action/author.action";
import { AuthorService } from "../../services/author-search.service";
import { tap } from "rxjs";


export interface AuthorStateModel {
    authorSearch: AuthorSearch; 
}
  
@State<AuthorStateModel>({
    name: 'authors',
    defaults: {
        authorSearch: new AuthorSearch(),
    },
})
@Injectable()
export class AuthorState{
    constructor(private authorService: AuthorService){}

    @Selector()
    static getAuthors(state: AuthorStateModel) {
        return state.authorSearch;
    }

    @Action(SearchAuthors)
    searchAuthors(ctx: StateContext<AuthorStateModel>, action: SearchAuthors) {
        return this.authorService.searchAuthors(action.query, action.limit, action.offset)
        .pipe(
            tap((result: AuthorSearch) => {
                const state = ctx.getState();
                ctx.setState({
                    ...state,
                    authorSearch: result, 
                });
            })
        );
    }
}