export function requestMovies() {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          { title: "Rebel without a Cause", date: "Monday" },
          { title: "Ghost in the Shell", date: "Tuesday" },
          { title: "High Noon", date: "Monday" },
        ]),
      1000
    )
  );
}
