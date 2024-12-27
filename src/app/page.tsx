import './globals.css'
import { Login } from "@/components/login"


export default function Home() {
  return (
    <div className="grid cols-1 gap-4 ">
      <Login/>
    </div>
  );
}
