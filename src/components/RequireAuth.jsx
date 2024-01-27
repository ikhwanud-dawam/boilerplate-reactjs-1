import { Navigate, Outlet } from "react-router-dom"

export default function RequireAuth() {

  // ganti menggunakan sebuah fungsi untuk mendapatkan authUser
  const authUser = false

  // arahkan ke halaman login jika tidak ada authUser
  if(!authUser) return <Navigate to='/login'/>

  // jika ada `authUser`, perbolehkan mengakses route di dalam `outlet`
  return <Outlet />
}
