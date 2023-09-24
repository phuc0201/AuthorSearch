import { Author } from "./Author.model";
import { CreatedTime } from "./CreatedTime.model";

export class WorksEntry{
    type!: string;
    title!: string;
    subjects!: string[];
    subject_people!: string[];
    authors!: Author[];
    key!: string;
    latest_revision!: number;
    revision!: number;
    created!: CreatedTime;
    last_modified!: CreatedTime;
}