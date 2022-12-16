const incrementby = (string, counter) => {
  let parts = string.split("/");

  let nr = parseInt(parts[0]);
  return (nr + counter).toString() + "/" + parts[1];
};

export default incrementby;
