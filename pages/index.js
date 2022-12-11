import Dashboard from "../components/dashboard";
import NavBarAdmin from "../components/navbar";

export default function Home() {
  return (
    <div className=" bg-[url('/bg-admin.png')] bg-cover bg-no-repeat relative">
      <div className="fixed w-screen z-9 ">
        <NavBarAdmin />
      </div>
      <Dashboard />
    </div>
  );
}
