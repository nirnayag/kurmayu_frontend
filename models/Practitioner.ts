
export class Practitioner {
    _id?: string;
    name: string;
    specialty: string;
    location: string;

    constructor(name: string, specialty: string, location: string, _id?: string) {
        this.name = name;
        this.specialty = specialty;
        this.location = location;
        this._id = _id;
    }

    static fromJson(json: any): Practitioner {
        return new Practitioner(
            json.name,
            json.specialty,
            json.location,
            json._id
        );
    }

    toJson(): any {
        return {
            _id: this._id,
            name: this.name,
            specialty: this.specialty,
            location: this.location
        };
    }
}
