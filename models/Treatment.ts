
export class Treatment {
    _id?: string;
    category: string;
    name: string;
    description: string;
    duration?: string;
    keyBenefits?: string[];
    recommendedFor?: string;
    isActive?: boolean;
    image?: string;

    constructor(
        category: string,
        name: string,
        description: string,
        _id?: string,
        duration?: string,
        keyBenefits?: string[],
        recommendedFor?: string,
        isActive?: boolean,
        image?: string
    ) {
        this.category = category;
        this.name = name;
        this.description = description;
        this._id = _id;
        this.duration = duration;
        this.keyBenefits = keyBenefits;
        this.recommendedFor = recommendedFor;
        this.isActive = isActive;
        this.image = image;
    }

    static fromJson(json: any): Treatment {
        return new Treatment(
            json.category,
            json.name,
            json.description,
            json._id,
            json.duration,
            json.keyBenefits,
            json.recommendedFor,
            json.isActive,
            json.image
        );
    }

    toJson(): any {
        return {
            _id: this._id,
            category: this.category,
            name: this.name,
            description: this.description,
            duration: this.duration,
            keyBenefits: this.keyBenefits,
            recommendedFor: this.recommendedFor,
            isActive: this.isActive,
            image: this.image
        };
    }
}
