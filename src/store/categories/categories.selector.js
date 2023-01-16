import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    //  console.log(categories, "categories in selector");
    return categories.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

export const selectCategoriesIsloading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    console.log(categoriesSlice);
    return categoriesSlice.isLoading;
  }
);
