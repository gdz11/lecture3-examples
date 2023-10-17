
//here we define announcement data type
export interface Announcement {
    id: number;
    title: string;
    locations: string [];//annuncement may be available in multiple cities, so we use array of strings (city names)
    status: AnnouncementStatus;
    /* This poreprty defines if this is a regular or a vip announcement. 
    We can use enum here but as there are only 2 cases we can use simple bool property
    */
    isVip: boolean;
}

//we use enum for status
export enum AnnouncementStatus {
    Active,
    Deactivated
}
