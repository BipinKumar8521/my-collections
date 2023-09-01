const RandomString = (length = 10) => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = length; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};

const UniqueId = () => {
  return (new Date().getTime() + Math.random() * 100).toString(16);
};
export { UniqueId, RandomString };
