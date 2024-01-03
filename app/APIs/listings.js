import client from "./client";

const endpoint = "/listings";
const getListings = () => client.get(endpoint);

const addListing = (listing) => {
    console.log(listing);
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", 1);
  data.append("description", listing.description);
  listing.images.forEach((image, index) => {
    data.append("image", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    });
  });
  if (listing.location !== undefined)
    data.append("location", JSON.stringify(listing.location));

  return client.post(endpoint, data);
};

export default {
  getListings,
  addListing,
};
