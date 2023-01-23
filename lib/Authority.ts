export abstract class Authority {
    borrowedBy: Authority[];

    constructor() {
        this.borrowedBy = [];
    }

    private _getBorrowedByFmt(): string {
        return this.borrowedBy.map(x => `'${x.getId()}'`).join(", ");
    }

    abstract getId(): string;

    getBorrowedBy() {
        return this.borrowedBy[0];
    }

    protected _assertAuthority(thisAuthority: Authority) {
        if (thisAuthority === this.borrowedBy[0])
            return;

        throw new Error(`Invalid authority '${thisAuthority.getId()}': borrowed by ${this._getBorrowedByFmt()}`);;
    }

    borrow(thisAuthority: Authority) {
        if (this.borrowedBy[0] === undefined || thisAuthority.getBorrowedBy() === this.getBorrowedBy()) {
            this.borrowedBy.unshift(thisAuthority);
            return;
        }
        throw new Error(`Invalid authority '${thisAuthority.getId()}': borrowed by ${this._getBorrowedByFmt()}`);
    }

    return(thisAuthority: Authority) {
        if (this.borrowedBy[0] === thisAuthority) {
            this.borrowedBy.shift();
            return;
        }

        if (this.borrowedBy.length > 0) {
            throw new Error(`Invalid authority '${thisAuthority.getId()}': not borrowed`)
        } else {
            throw new Error(`Invalid authority '${thisAuthority.getId()}': borrowed by ${this._getBorrowedByFmt()}`)
        }
    }
}
