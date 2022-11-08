export class Board {
    id?: string;
    name: string;
    goals: string[];
    startDate: string;
    endDate: string;

    public constructor(init?: Partial<Board>) {
        Object.assign(this, init);
    }

}