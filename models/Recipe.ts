
export class Recipe {
    _id?: string;
    name: string;
    constitution: string;
    ingredients: string[];
    instructions: string[];
    description: string;
    time?: string;
    servings?: string;
    rating?: number;
    reviews?: number;
    author?: string;
    image?: string;

    constructor(
        name: string,
        constitution: string,
        ingredients: string[],
        instructions: string[],
        description: string,
        _id?: string,
        time?: string,
        servings?: string,
        rating?: number,
        reviews?: number,
        author?: string,
        image?: string
    ) {
        this.name = name;
        this.constitution = constitution;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.description = description;
        this._id = _id;
        this.time = time;
        this.servings = servings;
        this.rating = rating;
        this.reviews = reviews;
        this.author = author;
        this.image = image;
    }

    static fromJson(json: any): Recipe {
        return new Recipe(
            json.name,
            json.constitution,
            json.ingredients || [],
            json.instructions || [],
            json.description || '',
            json._id,
            json.time,
            json.servings,
            json.rating,
            json.reviews,
            json.author,
            json.image
        );
    }

    toJson(): any {
        return {
            _id: this._id,
            name: this.name,
            constitution: this.constitution,
            ingredients: this.ingredients,
            instructions: this.instructions,
            description: this.description,
            time: this.time,
            servings: this.servings,
            rating: this.rating,
            reviews: this.reviews,
            author: this.author,
            image: this.image
        };
    }
}
