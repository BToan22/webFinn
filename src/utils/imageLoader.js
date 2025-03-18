const importAll = async () => {
  const images = import.meta.glob(
    "../assets/images/event/*.{png,jpg,jpeg,svg}",
  );
  let imageMap = {};

  for (const path in images) {
    const key = path.replace("../assets/images/caLamTo/", ""); // Lấy tên file
    imageMap[key] = (await images[path]()).default;
  }

  return imageMap;
};

export default importAll;
