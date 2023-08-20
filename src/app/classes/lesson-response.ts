import { Lesson } from "./lesson";

export interface LessonResponse<data> {

    data:Lesson[];
    status: string;
	 message: string;
	 timestamp: string;
}
