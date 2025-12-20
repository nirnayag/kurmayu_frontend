
export class Herb {
    _id?: string;
    name: string;
    scientificName: string;
    type: string;
    description: string;
    image: string;
    gallery: string[];
    balancesDoshas: string[];
    keyBenefits: string[];
    dosage: string;
    precautions: string[];
    isActive: boolean;

    constructor(
        name: string,
        scientificName: string,
        type: string,
        description: string,
        image: string,
        gallery: string[],
        balancesDoshas: string[],
        keyBenefits: string[],
        dosage: string,
        precautions: string[],
        isActive: boolean,
        _id?: string
    ) {
        this.name = name;
        this.scientificName = scientificName;
        this.type = type;
        this.description = description;
        this.image = image;
        this.gallery = gallery;
        this.balancesDoshas = balancesDoshas;
        this.keyBenefits = keyBenefits;
        this.dosage = dosage;
        this.precautions = precautions;
        this.isActive = isActive;
        this._id = _id;
    }

    static fromJson(json: any): Herb {
        return new Herb(
            json.name,
            json.scientificName,
            json.type,
            json.description,
            json.image,
            json.gallery || [],
            json.balancesDoshas || [],
            json.keyBenefits || [],
            json.dosage,
            json.precautions || [],
            json.isActive,
            json._id
        );
    }

    toJson(): any {
        return {
            _id: this._id,
            name: this.name,
            scientificName: this.scientificName,
            type: this.type,
            description: this.description,
            image: this.image,
            gallery: this.gallery,
            balancesDoshas: this.balancesDoshas,
            keyBenefits: this.keyBenefits,
            dosage: this.dosage,
            precautions: this.precautions,
            isActive: this.isActive
        };
    }
}
