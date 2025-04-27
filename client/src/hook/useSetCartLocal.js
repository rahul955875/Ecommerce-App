export const useSetCartLocal = (items) => {
   localStorage.setItem("cartData", JSON.stringify(items));
};
