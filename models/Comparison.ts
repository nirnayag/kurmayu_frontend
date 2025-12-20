
export class Comparison {
    _id?: string;
    treatment_a: string;
    treatment_b: string;
    comparison: string;

    constructor(treatment_a: string, treatment_b: string, comparison: string, _id?: string) {
        this.treatment_a = treatment_a;
        this.treatment_b = treatment_b;
        this.comparison = comparison;
        this._id = _id;
    }

    static fromJson(json: any): Comparison {
        return new Comparison(
            json.treatment_a,
            json.treatment_b,
            json.comparison,
            json._id
        );
    }

    toJson(): any {
        return {
            _id: this._id,
            treatment_a: this.treatment_a,
            treatment_b: this.treatment_b,
            comparison: this.comparison
        };
    }
}
