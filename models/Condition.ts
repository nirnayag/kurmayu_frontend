
export class Condition {
    _id?: string;
    name: string;
    dosha: string;
    severity: string;
    description: string;
    symptoms: string[];
    duration: string;
    relatedArticlesCount: number;
    imageUrl: string;
    ctaText: string;
    isActive: boolean;

    constructor(
        name: string,
        dosha: string,
        severity: string,
        description: string,
        symptoms: string[],
        duration: string,
        relatedArticlesCount: number,
        imageUrl: string,
        ctaText: string,
        isActive: boolean,
        _id?: string
    ) {
        this.name = name;
        this.dosha = dosha;
        this.severity = severity;
        this.description = description;
        this.symptoms = symptoms;
        this.duration = duration;
        this.relatedArticlesCount = relatedArticlesCount;
        this.imageUrl = imageUrl;
        this.ctaText = ctaText;
        this.isActive = isActive;
        this._id = _id;
    }

    static fromJson(json: any): Condition {
        return new Condition(
            json.name,
            json.dosha || '',
            json.severity || '',
            json.description,
            json.symptoms || [],
            json.duration || '',
            json.relatedArticlesCount || 0,
            json.imageUrl || '',
            json.ctaText || 'Learn More',
            json.isActive ?? true,
            json._id
        );
    }

    toJson(): any {
        return {
            _id: this._id,
            name: this.name,
            dosha: this.dosha,
            severity: this.severity,
            description: this.description,
            symptoms: this.symptoms,
            duration: this.duration,
            relatedArticlesCount: this.relatedArticlesCount,
            imageUrl: this.imageUrl,
            ctaText: this.ctaText,
            isActive: this.isActive
        };
    }
}
