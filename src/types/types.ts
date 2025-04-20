export type NutritionValue = {
    calories: number;
    proteins: number;
    fats: number;
    carbohydrates: number;
};
export type Ingredient = {
    title: string;
    count: string;
    measureUnit: string;
};
export type RecipeStep = {
    stepNumber: number;
    description: string;
    image: string;
};

export type Recipe = {
    id: string;
    title: string;
    description: string;
    category: string[];
    subcategory: string[];
    image: string;
    likes: number;
    bookmarks: number;
    time: Nullable<string>;
    date: string;
    portions?: Nullable<number>;
    nutritionValue: NutritionValue;
    ingredients: Ingredient[];
    steps: RecipeStep[];
    meat?: Nullable<string>;
    side?: Nullable<string>;
};

export type Nullable<T> = T | null;
