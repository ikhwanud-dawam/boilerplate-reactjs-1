import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./layout/Layout";
import RequireAuth from "./components/RequireAuth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<p>Tidak ditemukan</p>}>
      
      {/* route di dalam `<Outlet />` komponen <Layout />: */}
      <Route path="login" element={<p>Login</p>} />
      <Route path="register" element={<p>Register</p>} />
      <Route element={<RequireAuth />}>
      {/* route di dalam <Outlet /> RequireAuth: */}

        {/* path "/" otomatis akan mengakses <Route index>*/}
        <Route index element={<p>Element homepage</p>}/>

        {/* Ganti path dan element yang dibutuhkan */}
        <Route path="page1" element={<p>Page 1</p>}/>
        <Route path="page2" element={<p>Page 2</p>}/>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
