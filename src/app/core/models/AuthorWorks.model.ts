import { Links } from "./Links.model";
import { WorksEntry } from "./WorksEntry.model";

export class AuthorWorks{
    links!: Links;
    size!: number;
    entries!: WorksEntry[];
}