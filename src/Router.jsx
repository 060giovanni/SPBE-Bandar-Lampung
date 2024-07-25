import { Route, Routes } from 'react-router-dom';
import Homepages from './page/home/Homepages';
import Register from './page/register/Register';
import Login from './page/login/Login';
import LayoutDasboard from './layouts/dashboard/LayoutDasboard';
<<<<<<< HEAD
import Galeri from './page/GaleriDashboard/master/Galeri';
import LayoutHome from './layouts/home/LayoutHome';
import Profile from './page/Profile/Profile';
=======
import Article from './page/article/master/Article';
import DetailArticle from './page/article/detail/DetailArticle';
import ArticleDetail from './component/article/ArticleDetail';
import LayoutHome from './layouts/home/LayoutHome';
import Dokter from './page/dokter/master/Dokter';
import DetailDokter from './page/dokter/detail/DetailDokter';
import DokterDetail from './component/dokter/DokterDetail';
import AboutUs from './page/About/AboutUs';
import Profile from './page/Profile/Profile';
import DetailLayanan from './page/detailLayanan/DetailLayanan';
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
import User from './page/user/master/User';
import DashboardHome from './page/dashboardHome/DashboardHome';
import RequireLogin from './component/auth/RequireLogin';
import GaleriPage from "./page/Galeri/GaleriPage";
import LayoutContent from "./layouts/home/LayoutContent";
<<<<<<< HEAD
import IndikatorPage from "./page/indikator/indikatorPage";
import RegulasiPage from "./page/regulasi/RegulasiPage";
import Indikator from "./page/IndikatorDashboardTest/master/Indikator";
import Regulasi from "./page/RegulasiDashboard/master/Regulasi";
=======
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutHome content={<Homepages />} />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<LayoutHome content={<Login />} />} />
<<<<<<< HEAD
      <Route path='/profile' element={<LayoutHome content={<Profile />} />} />
      <Route path='/kegiatan' element={<LayoutHome content={<LayoutContent title="Galeri"><GaleriPage /></LayoutContent>} />} />
      <Route path='/indikator' element={<LayoutHome content={<LayoutContent title="Indikator"><IndikatorPage /></LayoutContent>} />} />
      <Route path='/regulasi' element={<LayoutHome content={<LayoutContent title="Regulasi"><RegulasiPage /></LayoutContent>} />} />
      <Route
        path='/dashboard'
        element={
          <RequireLogin>
            <LayoutDasboard content={<DashboardHome />} />
          </RequireLogin>}
      />
      <Route
        path='/dashboard/galeri'
        element={
          <RequireLogin>
            <LayoutDasboard content={<Galeri />} />
          </RequireLogin>
        }
      />
      <Route
        path='/dashboard/indikator'
        element={
          <RequireLogin>
            <LayoutDasboard content={<Indikator />} />
          </RequireLogin>
        }
      />
      <Route
        path='/dashboard/regulasi'
        element={
          <RequireLogin>
            <LayoutDasboard content={<Regulasi />} />
          </RequireLogin>
=======
      <Route path='/about' element={<LayoutHome content={<AboutUs />} />} />
      <Route path='/profile' element={<LayoutHome content={<Profile />} />} />
      <Route path='/kegiatan' element={<LayoutHome content={<LayoutContent title="Galeri"><GaleriPage /></LayoutContent>} />} />
      <Route
        path='/dashboard'
        element={<LayoutDasboard content={<DashboardHome />} />}
      />
      <Route
        path='/dashboard/article'
        element={<LayoutDasboard content={<Article />} />}
      />
      <Route
        path='/dashboard/article/:article_id'
        element={<LayoutDasboard content={<DetailArticle />} />}
      />
      <Route
        path='/article/:article_id'
        element={<LayoutHome content={<ArticleDetail />} />}
      />
      <Route
        path='/detaillayanan'
        element={<LayoutHome content={<DetailLayanan />} />}
      />
      <Route
        path='/dashboard/dokter'
        element={<LayoutDasboard content={<Dokter />} />}
      />
      <Route
        path='/dashboard/dokter/:dokter_id'
        element={<LayoutDasboard content={<DetailDokter />} />}
      />
      <Route
        path='/dokter/:dokter_id'
        element={
          <LayoutHome
            content={
              <RequireLogin>
                <DokterDetail />
              </RequireLogin>
            }
          />
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
        }
      />
      <Route
        path='/dashboard/user'
<<<<<<< HEAD
        element={
          <RequireLogin>
            <LayoutDasboard content={<User />} />
          </RequireLogin>
        }
=======
        element={<LayoutDasboard content={<User />} />}
>>>>>>> 62162abaed31ed7818ca58c947c8073cd02b3018
      />
    </Routes>
  );
};

export default Router;
