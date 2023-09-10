import { VocabularyetojComponent } from "../layout/vocabularyetoj/vocabularyetoj.component";
import { Mcq } from "./mcq";
import { Reading } from "./reading";
import { Video } from "./video";
import { Vocabulary } from "./vocabulary";
import { Vocabularyetoj } from "./vocabularyetoj";

export interface Lesson {

    id: number,
    name: string,
    video:Video[],
    mcq:Mcq[],
    reading: Reading[],
    vocabulary: Vocabulary[],
    vocabularyetoj: Vocabularyetoj[],
    createdDate: string,
    updatedDate: string



}
