import { Lesson } from "./lesson";

export interface Data {

    data: {content: Lesson[]};
    status: string;
    message: string;
    timestamp: string;
}
