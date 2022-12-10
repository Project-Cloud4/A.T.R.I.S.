function Resources() {
  return (
    <div>
      <label htmlFor="my-modal" className="btn bg-secondary">
        <h1 className="text-base-200">Resources</h1>
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="grid grid-rows-4 grid-flow-col gap-4 w-96">
            <button className="btn btn-active btn-primary">
              <h1 className="text-base-200">NUMBERS OF MEALS</h1>
            </button>
            <button className="btn btn-active btn-primary ">
              <h1 className="text-base-200">WATER</h1>
            </button>
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-active btn-primary w-96">
                <h1 className="text-base-200">MEDICATIONS</h1>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-primary rounded-box w-52"
              >
                <li>
                  <h1 className="text-base-200">x</h1>
                </li>
                <li>
                  <h1 className="text-base-200">x</h1>
                </li>
                <li>
                  <h1 className="text-base-200">x</h1>
                </li>
              </ul>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn btn-primary">
              Back!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
