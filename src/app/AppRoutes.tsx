import { Route, Routes, useParams } from 'react-router';

import { Content } from '~/components/content/Content';
import { JuiciestPage } from '~/components/juiciest/JuiciestPage';
import { VeganPage } from '~/components/vegan_kitchen/VeganPage';

type Props = {
    isActive: string | undefined;
    setActive: (isActive: string | undefined) => void;
};

export const AppRoutes = ({ isActive, setActive }: Props) => {
    const { category } = useParams();

    return (
        <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/juiciest' element={<JuiciestPage />} />
            <Route
                path={`:${category}`}
                element={<VeganPage isActive={isActive} setActive={setActive} />}
            />
        </Routes>
    );
};
