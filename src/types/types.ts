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
    id: Nullable<string>;
    title: Nullable<string>;
    description: Nullable<string>;
    category: string[];
    subcategory: string[];
    image: Nullable<string>;
    likes: Nullable<number>;
    bookmarks: Nullable<number>;
    time: Nullable<string>;
    date: Nullable<string>;
    portions?: Nullable<number>;
    nutritionValue: NutritionValue;
    ingredients: Ingredient[];
    steps: RecipeStep[];
    meat?: Nullable<string>;
    side?: Nullable<string>;
};

export type Nullable<T> = T | null;
