
export class FeaturedFood {
    _id?: string;
    name: string;
    sanskrit_name: string;
    benefits: string[];
    type: string;
    image?: string;
    taste?: string;
    potency?: string;
    dosha?: string;
    biochemistry?: string;
    prepTips?: string[];

    constructor(
        name: string,
        sanskrit_name: string,
        benefits: string[],
        type: string,
        _id?: string,
        image?: string,
        taste?: string,
        potency?: string,
        dosha?: string,
        biochemistry?: string,
        prepTips?: string[]
    ) {
        this.name = name;
        this.sanskrit_name = sanskrit_name;
        this.benefits = benefits;
        this.type = type;
        this._id = _id;
        this.image = image;
        this.taste = taste;
        this.potency = potency;
        this.dosha = dosha;
        this.biochemistry = biochemistry;
        this.prepTips = prepTips;
    }

    static fromJson(json: any): FeaturedFood {
        return new FeaturedFood(
            json.name,
            json.sanskrit_name || '',
            json.benefits || [],
            json.type,
            json._id,
            json.image,
            json.taste,
            json.potency,
            json.dosha,
            json.biochemistry,
            json.prepTips || []
        );
    }

    toJson(): any {
        return {
            _id: this._id,
            name: this.name,
            sanskrit_name: this.sanskrit_name,
            benefits: this.benefits,
            type: this.type,
            image: this.image,
            taste: this.taste,
            potency: this.potency,
            dosha: this.dosha,
            biochemistry: this.biochemistry,
            prepTips: this.prepTips
        };
    }
}
