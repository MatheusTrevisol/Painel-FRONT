import { Routes, Route } from 'react-router-dom';

import { DefaultLayout } from '../layouts/DefaultLayout';

import { Home } from '../pages/Home';

import { Banners } from '../pages/Banners';
import { CreateBanners } from '../pages/Banners/CreateBanners';
import { EditBanner } from '../pages/Banners/EditBanner';

import { Systems } from '../pages/Systems';
import { CreateSystem } from '../pages/Systems/CreateSystem';
import { EditSystem } from '../pages/Systems/EditSystem';

import { Results } from '../pages/Results';
import { CreateResult } from '../pages/Results/CreateResult';
import { EditResult } from '../pages/Results/EditResult';

import { Depoiments } from '../pages/Depoiments';
import { CreateDepoiment } from '../pages/Depoiments/CreateDepoiment';
import { EditDepoiment } from '../pages/Depoiments/EditDepoiment';

/** USER PROFILE */
import { UserProfile } from '../pages/UserProfile';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/banners" element={<DefaultLayout />}>
        <Route path="/banners" element={<Banners />} />
        <Route path="/banners/create" element={<CreateBanners />} />
        <Route path="/banners/edit-banner/:id" element={<EditBanner />} />
      </Route>

      <Route path="/systems" element={<DefaultLayout />}>
        <Route path="/systems" element={<Systems />} />
        <Route path="/systems/create" element={<CreateSystem />} />
        <Route path="/systems/edit-system/:id" element={<EditSystem />} />
      </Route>

      <Route path="/results" element={<DefaultLayout />}>
        <Route path="/results" element={<Results />} />
        <Route path="/results/create" element={<CreateResult />} />
        <Route path="/results/edit-result/:id" element={<EditResult />} />
      </Route>

      <Route path="/depoiments" element={<DefaultLayout />}>
        <Route path="/depoiments" element={<Depoiments />} />
        <Route path="/depoiments/create" element={<CreateDepoiment />} />
        <Route path="/depoiments/edit-depoiment/:id" element={<EditDepoiment />} />
      </Route>

      {/** USER PROFILE */}
      <Route path="/user/profile" element={<UserProfile />} />
    </Routes>
  );
};