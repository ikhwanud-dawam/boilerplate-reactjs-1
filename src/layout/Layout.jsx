import { Outlet, ScrollRestoration } from "react-router-dom"

export default function Layout() {
  return (
    <div>
      <h1>Testing Judul</h1>
      <p>Ini buat komponen header</p>

      {/* route seperti `login`, `index` akan berada di dalam `Outlet` */}
      <Outlet />

      {/* // mengembalikan posisi scrollbar ke atas setelah pindah halaman */}
      <ScrollRestoration />
    </div>
  )
}
