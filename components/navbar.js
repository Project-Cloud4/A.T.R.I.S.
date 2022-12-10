function NavBarAdmin() {
  return (
    <div className="navbar bg-base-100  w-max sm:w-screen flex flex-row">
      <div className="flex-1">
        <label className="circle avatar pl-3 pr-3">
          <div className="w-20 rounded-full">
            <img src="/logo_admin.png" />
          </div>
        </label>
        <div className=" text-xl sm:text-3xl font-mono text-accent">
          ATRIS-ADMIN
        </div>
      </div>
    </div>
  );
}

export default NavBarAdmin;
