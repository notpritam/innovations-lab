import { create } from "zustand";
import { persist } from "zustand/middleware";

const user = (set) => ({
  name: null,
  email: null,
  accessLevel: "user",
  id: null,
  imageUrl: null,
  isLoggedIn: false,
  cart: [],

  login: (name, email, id, imageUrl, accessLevel) => {
    set((state) => {
      return {
        name,
        batchNumber,
        id,
        imageUrl,
        isLoggedIn: true,
        isBatchManager: false,
      };
    });
  },

  logout: () => {
    set((state) => {
      return {
        name: null,
        email: null,
        cart: [],
        imageUrl: null,
        isLoggedIn: false,
        accessLevel: "user",
      };
    });
  },
});

export const useUser = create(persist(user, { name: "_auth" }));
