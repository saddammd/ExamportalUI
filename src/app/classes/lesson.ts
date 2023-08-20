import { Mcq } from "./mcq";
import { Reading } from "./reading";
import { Video } from "./video";
import { Vocabulary } from "./vocabulary";

export interface Lesson {

    id: number,
    name: string,
    video:Video[],
    mcq:Mcq[],
    reading: Reading[],
    vocabulary: Vocabulary[]
    createdDate: string,
    updatedDate: string


}
