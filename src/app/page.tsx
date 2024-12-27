import './globals.css'
import { Login } from "@/pages/login"
import { Dashboard } from "@/pages/dashboard"
import { Qrpage } from "@/pages/qrpage"
import { ConsultaPage } from "@/pages/consultapage"

export default function Home() {
  return (
    <div className="grid cols-1 gap-4 ">
      <Login/>
      <Dashboard/>
      <Qrpage/>
      <ConsultaPage/>
    </div>
  );
}
