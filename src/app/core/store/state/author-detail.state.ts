import { Action, State, StateContext, Selector } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { AuthorService } from "../../services/author-search.service";
import { tap } from "rxjs";
import { AuthorDetail } from "../../models/AuthorDetail.model";
import { GetAuthorDetail } from "../action/author-detail.action";


export interface AuthorDetailStateModel {
    authorDetail: AuthorDetail; 
}

@State<AuthorDetailStateModel>({
    name: 'authorDetail',
    defaults: {
        authorDetail: new AuthorDetail(),
    },
})

@Injectable()
export class AuthorDetailState{
    constructor(private authorService: AuthorService){}

    @Selector()
    static getAuthorDetail(state: AuthorDetailStateModel) {
        return state.authorDetail;
    }

    @Action(GetAuthorDetail)
    searchAuthorDetail(ctx: StateContext<AuthorDetailStateModel>, action: GetAuthorDetail) {
        return this.authorService.searchAuthorDetail(action.key)
        .pipe(
            tap((result: AuthorDetail) => {
                const state = ctx.getState();
                ctx.setState({
                    ...state,
                    authorDetail: result, 
                });
            })
        );
    }

}