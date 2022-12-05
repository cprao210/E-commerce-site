const getProducts = async () => {
  const url = "https://dummyjson.com/products?limit=100";

  const req = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return req.json();
};

export { getProducts };
