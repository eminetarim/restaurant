import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:"Bearer 5FQ-Ljy9t63ZOq6ouG_HQCmXKpFB-iZkZYPdBcztAq0LI0EE9IIEUQzF2b_D2vy6OvndcMQeiIClAEFcgJ6N8GKUgnWKDGDJDCYgBRwQkGNpZI72Ob5E8NpAqojJZ3Yx"
  },
});
