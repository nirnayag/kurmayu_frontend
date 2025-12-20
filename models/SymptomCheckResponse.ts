
export class SymptomCheckResponse {
    potentialAilment: string;
    description: string;
    recommendations: string[];
    disclaimer: string;

    constructor(potentialAilment: string, description: string, recommendations: string[], disclaimer: string) {
        this.potentialAilment = potentialAilment;
        this.description = description;
        this.recommendations = recommendations;
        this.disclaimer = disclaimer;
    }

    static fromJson(json: any): SymptomCheckResponse {
        return new SymptomCheckResponse(
            json.potentialAilment,
            json.description,
            json.recommendations || [],
            json.disclaimer
        );
    }

    toJson(): any {
        return {
            potentialAilment: this.potentialAilment,
            description: this.description,
            recommendations: this.recommendations,
            disclaimer: this.disclaimer
        };
    }
}
