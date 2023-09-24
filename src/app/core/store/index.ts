import { AuthorDetailState } from "./state/author-detail.state";
import { AuthorState } from "./state/author.state";
import { AuthorWorksState } from "./state/author-works.state";

export const AuthorsState = [AuthorState, AuthorDetailState, AuthorWorksState]

export * from './state/author.state'
export * from './state/author-detail.state'
export * from './state/author-works.state'