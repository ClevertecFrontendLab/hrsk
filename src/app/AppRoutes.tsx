import { Route, Routes } from 'react-router';

import { Content } from '~/components/content/Content';
import { Juiciest } from '~/components/juiciest/Juiciest';
import { VeganKitchen } from '~/components/vegan_kitchen/VeganKitchen';

export const AppRoutes = () => (
    <div>
        <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/juiciest' element={<Juiciest />} />
            <Route path='/vegan-cuisine' element={<VeganKitchen />} />
        </Routes>
    </div>
);
