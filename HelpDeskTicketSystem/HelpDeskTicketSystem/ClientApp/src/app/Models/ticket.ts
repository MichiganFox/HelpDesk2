

export interface Ticket {
    id:number;
    userId:string;
    email:string;
    priority:number;
    dateSubmitted:Date;
    dateCompleted:Date;
    subjectBrief:string;
    fullIssue:string;
    open:boolean;
    }