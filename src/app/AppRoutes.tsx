import { Route, Routes } from 'react-router';

import { Content } from '~/components/content/Content';
import { JuiciestPage } from '~/components/juiciest/JuiciestPage';
import { VeganKitchen } from '~/components/vegan_kitchen/VeganKitchen';

export const AppRoutes = () => (
    <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/juiciest' element={<JuiciestPage />} />
        <Route path='/vegan-cuisine' element={<VeganKitchen />} />
    </Routes>
);
