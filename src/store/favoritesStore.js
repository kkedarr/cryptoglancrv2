import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (coin) => {
        const exists = get().favorites.find(
          (item) => item.id === coin.id
        );

        if (exists) {
          set({
            favorites: get().favorites.filter(
              (item) => item.id !== coin.id
            ),
          });
        } else {
          set({
            favorites: [...get().favorites, coin],
          });
        }
      },

      isFavorite: (id) => {
        return get().favorites.some((coin) => coin.id === id);
      },
    }),
    {
      name: "cryptoglancr-favorites",
    }
  )
);
