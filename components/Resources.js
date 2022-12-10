function Food() {
  return (
    <div>
      <label htmlFor="my-modal" className="btn">
        SEE
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Food list:</h3>
          <ul>
            <li>xxxxxxx</li>
            <li>xxxxxxx</li>
            <li>xxxxxxx</li>
            <li>xxxxxxx</li>
            <li>xxxxxxx</li>
          </ul>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Back!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;
