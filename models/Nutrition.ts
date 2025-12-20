
export class Nutrition {
    _id?: string;
    name: string;
    months: string;
    balance: string;
    desc: string;
    recs: string[];
    reduce: string[];
    image: string;

    constructor(name: string, months: string, balance: string, desc: string, recs: string[], reduce: string[], image: string, _id?: string) {
        this.name = name;
        this.months = months;
        this.balance = balance;
        this.desc = desc;
        this.recs = recs;
        this.reduce = reduce;
        this.image = image;
        this._id = _id;
    }

    static fromJson(json: any): Nutrition {
        return new Nutrition(
            json.name || '',
            json.months || '',
            json.balance || '',
            json.desc || '',
            json.recs || [],
            json.reduce || [],
            json.image || '',
            json._id
        );
    }

    toJson(): any {
        return {
            _id: this._id,
            name: this.name,
            months: this.months,
            balance: this.balance,
            desc: this.desc,
            recs: this.recs,
            reduce: this.reduce,
            image: this.image
        };
    }
}
