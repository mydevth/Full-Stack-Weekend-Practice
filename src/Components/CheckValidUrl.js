const CheckValidUrl = ({ source }) => {
  let url;
  try {
    url = new URL(source);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
};
export default CheckValidUrl;
