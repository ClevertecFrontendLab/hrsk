import { Navigate, Route, Routes, useParams } from 'react-router';

import { Content } from '~/components/content/Content';
import { JuiciestPage } from '~/components/juiciest/JuiciestPage';
import { RecipePage } from '~/components/recipe/RecipePage';
import { VeganPage } from '~/components/vegan_kitchen/VeganPage';

type Props = {
    isActive: string | undefined;
    setActive: (isActive: string | undefined) => void;
};

export const AppRoutes = ({ isActive, setActive }: Props) => {
    const { category, tab, recipeId } = useParams();
    console.log(category, tab, recipeId);

    return (
        <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/the-juiciest' element={<JuiciestPage />} />

            <Route>
                <Route path={`:${category}`} element={<Navigate to='snacks' replace />} />
                <Route
                    path={`:${category}/:tab`}
                    element={<VeganPage isActive={isActive} setActive={setActive} />}
                />
                <Route path={`:${category}/:tab/:recipeId`} element={<RecipePage />} />
            </Route>
            {/*<Route*/}
            {/*    path={`:${category}/:tab`}*/}
            {/*    element={<VeganPage isActive={isActive} setActive={setActive} />}*/}
            {/*/>*/}
        </Routes>
    );
};
