import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { setCategories } from "../../store/categories/categories.action";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";
import { selectCategoriesIsloading } from "../../store/categories/categories.selector";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { fetchCategoriesAsync } from "../../store/categories/categories.action";

const Shop = () => {
  // const isLoading = useSelector(selectCategoriesIsloading);
  const dispatch = useDispatch();

  useEffect(() => {
    // const getCategoriesMap = async () => {
    //   const categories = await getCategoriesAndDocuments("categories");
    //   // console.log(categories, "categories");
    //   dispatch(setCategories(categories));
    // };
    // getCategoriesMap();

    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
