export interface Announcement {
    id: number;
    title: string;
    locations: string [];
    status: AnnouncementStatus;
    isVip: boolean;
}

export enum AnnouncementStatus {
    Active,
    Deactivated
}
