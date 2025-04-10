import { Route, Routes } from 'react-router';

import { Content } from '~/components/content/Content';
import { JuiciestPage } from '~/components/juiciest/JuiciestPage';
import { VeganPage } from '~/components/vegan_kitchen/VeganPage';

export const AppRoutes = () => (
    <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/juiciest' element={<JuiciestPage />} />
        <Route path='/vegan-cuisine' element={<VeganPage />} />
        <Route path='/vegan-cuisine/main-course' element={<VeganPage />} />
    </Routes>
);
