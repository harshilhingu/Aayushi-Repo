export interface Content {
    id: number;
    title: string;
    body?: string;
    imageLink?: string;
    type?: string;
    author: string;
    hashtags?:string[];
}
