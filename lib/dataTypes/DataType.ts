import { Authority } from "../Authority";

export abstract class DataType extends Authority {
    take(thisAuthority: Authority) {
        this._assertAuthority(thisAuthority);

        return this;
    }

    takeOnce(thisAuthority: Authority) {
        this.borrow(thisAuthority);
        const val = this.take(thisAuthority);
        this.return(thisAuthority);
        return val;
    }
}
