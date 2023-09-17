import { Lesson } from "./lesson";
import { ResultCollection } from "./result-collection";

export interface ResultCollectionResponse {

    resultResponse: {content: ResultCollection[]};
    status: string;
    message: string;
    timestamp: string;
}
