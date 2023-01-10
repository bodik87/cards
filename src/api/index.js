import { CATEGORIES } from "../data";

// const API_URL = "https://jsonplaceholder.typicode.com";
const API_URL = "https://6343dcad2dadea1175aebff4.mockapi.io";

export const api = {
  getCards: async () => {
    try {
      const response = await fetch(`${API_URL}/cards`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  getCategories: () => {
    return CATEGORIES;
  },
};
