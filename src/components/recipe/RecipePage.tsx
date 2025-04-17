import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { recipes } from '~/components/vegan_kitchen/recipes';
import { getRecipe, recipeSelector } from '~/store/recipe-slice';

export const RecipePage = () => {
    const recipe = useSelector(recipeSelector);
    const dispatch = useDispatch();

    const params = useParams();
    console.log(params);

    useEffect(() => {
        if (params) {
            dispatch(getRecipe(recipes[Number(params.recipeId)]));
        }
    }, []);

    return <div>{recipe.description}</div>;
};
