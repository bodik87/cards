import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmptyCategories } from "./components/EmptyCategories";
import { HomePage } from "./pages/HomePage";
import { Notfoundpage } from "./pages/Notfoundpage";
import {
  updateActiveCategoryAC,
  updateCategoriesAC,
} from "./store/reducers/actions";
import { api } from "./api";
import { path } from "./path";

function App() {
  const dispatch = useDispatch();
  const { categories, activeCategoryId } = useSelector(
    (store) => store.categoryList
  );

  useEffect(() => {
    const localCategoryList = JSON.parse(
      localStorage.getItem("localCategoryList")
    );
    const localActiveId = JSON.parse(localStorage.getItem("localActiveId"));
    const data = api.getCategories();
    const actualCategoryList = localCategoryList || data;
    const actualActiveId = localActiveId || data[0].id;
    if (Array.isArray(actualCategoryList) && actualCategoryList.length > 0) {
      dispatch(updateCategoriesAC(actualCategoryList));
      dispatch(updateActiveCategoryAC(actualActiveId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const emptyCategories = categories.length === 0 && activeCategoryId === null;

  return (
    <BrowserRouter>
      {emptyCategories ? (
        <EmptyCategories />
      ) : (
        <Routes>
          <Route path={path.home} element={<HomePage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
