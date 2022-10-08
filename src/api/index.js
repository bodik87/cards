import { CATEGORIES } from "../data";

const API_URL = "https://jsonplaceholder.typicode.com";

export const api = {
  getPosts: async () => {
    const response = await fetch(`${API_URL}/posts`);
    const data = await response.json();
    return data;
  },
  getCategories: () => {
    return CATEGORIES;
  },
};