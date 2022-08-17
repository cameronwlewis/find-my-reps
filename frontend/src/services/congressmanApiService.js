export const getReps = (state) => {
  return fetch(`/representatives/${state}`)
    .then((response) => response.json())
    .then((json) => json.results);
};

export const getSenators = (state) => {
  return fetch(`/senators/${state}`)
    .then((response) => response.json())
    .then((json) => json.results);
};
