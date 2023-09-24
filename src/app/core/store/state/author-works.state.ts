import { Action, State, StateContext, Selector } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { AuthorService } from "../../services/author-search.service";
import { tap } from "rxjs";
import { AuthorWorks } from "../../models/AuthorWorks.model";
import { GetAuthorWorks } from "../action/author-works.action";


export interface AuthorWorksStateModel {
    authorWorks: AuthorWorks; 
}

@State<AuthorWorksStateModel>({
    name: 'authorWorks',
    defaults: {
        authorWorks: new AuthorWorks(),
    },
})

@Injectable()
export class AuthorWorksState{
    constructor(private authorService: AuthorService){}

    @Selector()
    static getAuthorWorks(state: AuthorWorksStateModel) {
        return state.authorWorks;
    }

    @Action(GetAuthorWorks)
    searchAuthorWorks(ctx: StateContext<AuthorWorksStateModel>, action: GetAuthorWorks) {
        return this.authorService.searchAuthorWorks(action.key, action.limit, action.offset, action.link)
        .pipe(
            tap((result: AuthorWorks) => {
                const state = ctx.getState();
                ctx.setState({
                    ...state,
                    authorWorks: result, 
                });
            })
        );
    }

}