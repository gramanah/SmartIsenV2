import { BaseEntity, User } from './../../shared';

export class Room implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public user?: User,
        public guests?: User[],
    ) {
    }
}
