import { DateRange } from "@angular/material/datepicker";

export class Board {
    name: string;
    goals: string[];
    dateRange: DateRange<Date>;

    public constructor(init?: Partial<Board>) {
        Object.assign(this, init);
    }
}