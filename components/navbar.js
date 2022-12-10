function Navbar() {
  return (
    <div>
      <div className="navbar bg-accent ">
        <div className="flex-1">
          <label className="circle avatar pl-3 pr-3">
            <div className="w-16 rounded-full">
              <img src="/atrislogo.png" />
            </div>
          </label>
          <div className=" text-3xl font-mono text-base-100">ATRIS</div>
        </div>
        <div className=" text-3xl font-mono text-base-100">Location: </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered "
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
