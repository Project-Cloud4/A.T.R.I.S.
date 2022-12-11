

function Navbar({ type }) {
  return (
    <div className="navbar bg-accent  w-screen sm:w-screen flex flex-row">
      <div className="flex-1">
        <label className="circle avatar pl-3 pr-3">
          <div className="w-20 rounded-full">
            <img src="/logo_admin.png" />
          </div>
        </label>
        <div className=" text-xl sm:text-3xl font-mono text-base-100">
          ATRIS
        </div>
        <br />
      </div>
      {type === 1 ? (
        <div>
          <div className="invisible sm:visible text-xl sm:text-3xl font-mono text-base-100">
            Location:
          </div>
          <div>
            <input
              type="text"
              placeholder="Location:"
              className=" visible sm:hidden input input-bordered "
            />

            <input
              type="text"
              placeholder="Search"
              className=" hidden sm:block input input-bordered "
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default NavBarAdmin;
