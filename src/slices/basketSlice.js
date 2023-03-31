import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

// Creating a slice
// In order to change a variable in the global store, you have to do something called 'dispatching' an action, so if you want to add an item to the basket, you cannot just push an item to the basket, you'll have to create an action, which in this case is 'addToBasket' and that will all contain as an argument, it will have an object inside of it representing the item

// So basically, you'll addToBakset with the item and dispatch the action and then the global store, for example that basket slice will pick up the action and then we can do something with it

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // Actions         'action' contains payload which contains the item to pushed
    addToBasket: (state, action) => {
      // 'state' is used for manipulating the current state of the items
      state.items = [...state.items, action.payload];
    },

    removeFromBasket: (state, action) => {
      // Cannot use filter here as there can be multiple instances of a single item present, filter will filter out all the instances of that item
      const foundIndex = state.items.findIndex(
        (item) => item.id == action.payload.id
      );

      let newBasket = [...state.items];

      // Item is present in the array, remove it
      newBasket.splice(foundIndex, 1);
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from this particular Global store slice
export const selectItems = (state) => state.basket.items;

export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
