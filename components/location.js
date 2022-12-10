function Location() {
  return (
    <div class="relative h-screen w-screen ">
      <div class="absolute bottom-6 right-6  ">
        <div className="flex flex-nowrap">
          <img src="/location.svg"></img>
          <h1 className="text-2xl font-mono">Location:</h1>
          <h1 className="text-2xl font-mono">Cluj-Napoca</h1>
        </div>
      </div>
    </div>
  );
}

export default Location;
