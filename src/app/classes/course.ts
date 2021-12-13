import { CourseTypes } from "./courseTypes";

export class Course {
    image: any;
    name: string = '';
    duration: number = 0;
    note: string = '';
    url?: string;
    building?: string;
    classroom?: string;

    type: CourseTypes = CourseTypes.default;
    public get typeStr(): string {
        switch (this.type) {
            case CourseTypes.default: return '??';
            case CourseTypes.online: return 'онлайн';
            case CourseTypes.offline: return 'оффлайн';
        }
    }
}