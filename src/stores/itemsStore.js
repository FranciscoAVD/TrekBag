//npm i zustand@4.4.4
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItems } from "../lib/constants";

//In zustand, the returned object is merged with the previous.
//It's not necessary to name the other properties in the return object like in useState.

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      addItem: (newItemText) => {
        const newItem = {
          id: new Date().getTime(),
          name: newItemText,
          packed: false,
        };
        set((state) => ({ items: [...state.items, newItem] }));
      },
      removeItem: (id) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== id);
          return { items: newItems };
        });
      },
      toggleItem: (id) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }
            return item;
          });
          return { items: newItems };
        });
      },
      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      resetToInitial: () => {
        set(() => ({ items: initialItems }));
      },
      markAllAsComplete: () => {
        set((state) => {
          const newItems = state.items.map((i) => {
            return { ...i, packed: true };
          });
          return { items: newItems };
        });
      },
      markAllAsIncomplete: () => {
        set((state) => {
          const newItems = state.items.map((i) => {
            return { ...i, packed: false };
          });
          return { items: newItems };
        });
      },
    }),
    {
      name: "items",
    }
  )
);
