import {
    Condition,
    Treatment,
    Panchakarma,
    Herb,
    Practitioner,
    Nutrition,
    Recipe,
    FamilyRecipe,
    FeaturedFood,
    Comparison,
    SymptomCheckResponse,
    MediaRecognition,
    HeroTheme
} from '../models';

const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:5000/api';

async function handleResponse<T>(response: Response, factory: (json: any) => T): Promise<T> {
    const result = await response.json();
    if (!response.ok || result.status === 'error') {
        throw new Error(result.message || 'API request failed');
    }
    return factory(result.data);
}

async function handleListResponse<T>(response: Response, factory: (json: any) => T): Promise<T[]> {
    const result = await response.json();
    if (!response.ok || result.status === 'error') {
        throw new Error(result.message || 'API request failed');
    }
    return (result.data as any[]).map(factory);
}

export const apiService = {
    // Health
    checkHealth: () => fetch(`${API_BASE_URL.replace('/api', '')}/health`).then(res => res.json()),

    // Symptoms
    checkSymptoms: (query: string) => fetch(`${API_BASE_URL}/check-symptoms`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
    }).then(res => handleResponse(res, SymptomCheckResponse.fromJson)),

    // Conditions
    getConditions: () => fetch(`${API_BASE_URL}/conditions`).then(res => handleListResponse(res, Condition.fromJson)),
    getConditionById: (id: string) => fetch(`${API_BASE_URL}/conditions/${id}`).then(res => handleResponse(res, Condition.fromJson)),

    // Treatments
    getTreatments: () => fetch(`${API_BASE_URL}/treatments`).then(res => handleListResponse(res, Treatment.fromJson)),
    getTreatmentById: (id: string) => fetch(`${API_BASE_URL}/treatments/${id}`).then(res => handleResponse(res, Treatment.fromJson)),

    // Panchakarma
    getPanchakarma: () => fetch(`${API_BASE_URL}/panchakarma`).then(res => handleListResponse(res, Panchakarma.fromJson)),

    // Herbs
    getHerbs: () => fetch(`${API_BASE_URL}/herbs`).then(res => handleListResponse(res, Herb.fromJson)),

    // Practitioners
    getPractitioners: () => fetch(`${API_BASE_URL}/practitioners`).then(res => handleListResponse(res, Practitioner.fromJson)),

    // Seasonal Guidance (Nutrition)
    getSeasonalGuidance: (season?: string) => {
        const url = season ? `${API_BASE_URL}/seasonal?season=${season}` : `${API_BASE_URL}/seasonal`;
        return fetch(url).then(res => handleListResponse(res, Nutrition.fromJson));
    },

    // Recipes
    getRecipes: () => fetch(`${API_BASE_URL}/recipes`).then(res => handleListResponse(res, Recipe.fromJson)),

    // Family Recipes
    getFamilyRecipes: () => fetch(`${API_BASE_URL}/family_recipes`).then(res => handleListResponse(res, FamilyRecipe.fromJson)),

    // Featured Foods
    getFeaturedFoods: () => fetch(`${API_BASE_URL}/featured_foods`).then(res => handleListResponse(res, FeaturedFood.fromJson)),

    // Comparisons
    getComparisons: () => fetch(`${API_BASE_URL}/compare`).then(res => handleListResponse(res, Comparison.fromJson)),

    // Media Recognitions
    getMediaRecognitions: () => fetch(`${API_BASE_URL}/media-recognitions`).then(res => handleListResponse(res, MediaRecognition.fromJson)),

    // Hero Themes
    getHeroThemes: (active: boolean = true) => fetch(`${API_BASE_URL}/hero-themes?active=${active}`).then(res => handleListResponse(res, HeroTheme.fromJson)),
};
