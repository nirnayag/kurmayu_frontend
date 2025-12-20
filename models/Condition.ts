
export class Condition {
    _id?: string;
    name: string;
    description: string;
    symptoms: string[];

    constructor(name: string, description: string, symptoms: string[], _id?: string) {
        this.name = name;
        this.description = description;
        this.symptoms = symptoms;
        this._id = _id;
    }

    static fromJson(json: any): Condition {
        return new Condition(
            json.name,
            json.description,
            json.symptoms || [],
            json._id
        );
    }

    toJson(): any {
        return {
            _id: this._id,
            name: this.name,
            description: this.description,
            symptoms: this.symptoms
        };
    }
}
