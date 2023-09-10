import { Grammar } from "./grammar"

export interface Reading {

    id: number,
    subheading: string,
    heading: string,
    imageUrl: string,
    content: string,
    grammar: Grammar[]
    createdDate: string,
    updatedDate: string
}
