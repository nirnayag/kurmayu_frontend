
export class Panchakarma {
    _id?: string;
    name: string;
    benefits: string[];
    duration: string;

    constructor(name: string, benefits: string[], duration: string, _id?: string) {
        this.name = name;
        this.benefits = benefits;
        this.duration = duration;
        this._id = _id;
    }

    static fromJson(json: any): Panchakarma {
        return new Panchakarma(
            json.name,
            json.benefits || [],
            json.duration,
            json._id
        );
    }

    toJson(): any {
        return {
            _id: this._id,
            name: this.name,
            benefits: this.benefits,
            duration: this.duration
        };
    }
}
