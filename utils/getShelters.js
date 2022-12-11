export default async function getShelters(location) {
  // luam sheltere pt location
  const _res = await fetch("http://localhost:3000/api/location/" + location, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ action: "list" }),
  });

  // lista de sheltere
  const _shelters = await _res.json();

  // datele pe care le returnam
  let shelters = [];

  // iteram pe lista
  for (let iterator = 0; iterator < _shelters.length; iterator++) {
    // pt fiecare shelter, fetchuim datele
    const _res = await fetch(
      "http://localhost:3000/api/shelter/" + _shelters[iterator],
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "get" }),
      }
    );
    shelters.push(await _res.json());
  }

  return shelters;
}
