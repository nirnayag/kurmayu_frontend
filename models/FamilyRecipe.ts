
export class FamilyRecipe {
    _id?: string;
    name: string;
    origin: string;
    benefits: string[];
    image?: string;
    likes?: number;
    comments?: number;
    shares?: number;

    constructor(
        name: string,
        origin: string,
        benefits: string[],
        _id?: string,
        image?: string,
        likes?: number,
        comments?: number,
        shares?: number
    ) {
        this.name = name;
        this.origin = origin;
        this.benefits = benefits;
        this._id = _id;
        this.image = image;
        this.likes = likes;
        this.comments = comments;
        this.shares = shares;
    }

    static fromJson(json: any): FamilyRecipe {
        return new FamilyRecipe(
            json.name,
            json.origin,
            json.benefits || [],
            json._id,
            json.image,
            json.likes,
            json.comments,
            json.shares
        );
    }

    toJson(): any {
        return {
            _id: this._id,
            name: this.name,
            origin: this.origin,
            benefits: this.benefits,
            image: this.image,
            likes: this.likes,
            comments: this.comments,
            shares: this.shares
        };
    }
}
