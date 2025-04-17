import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Recipe } from '~/types';

import { ApplicationState } from './configure-store';

export type RecipeState = typeof initialState;

const initialState = {
    recipe: {} as Recipe,
};

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        getRecipe(state, { payload: recipe }: PayloadAction<Recipe>) {
            state.recipe = recipe;
        },
    },
});
export const recipeSelector = (state: ApplicationState) => state.recipe.recipe;

export const { getRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
