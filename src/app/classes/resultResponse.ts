import { Lesson } from "./lesson";
import { Result } from "./result";
import { ResultCollection } from "./result-collection";

export interface ResultResponse {

    resultResponse: {content: Result[]};
    status: string;
    message: string;
    timestamp: string;
}
