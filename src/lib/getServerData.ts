export const getData = async () => {
  const response = await fetch("https://dummyjson.com/users", {
    cache: "no-store",
  });
  return await response.json();
};
