import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Wrapper } from './components/Wrapper';
import { EmptyCategories } from './components/EmptyCategories';
import { HomePage } from './pages/HomePage';
import { PracticePage } from './pages/PracticePage';
import { updateActiveCategoryAC, updateCategoriesAC } from './store/reducers/actions';
import { api } from './api';
import { path } from './path';
import { Notfoundpage } from './pages/Notfoundpage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const localCategoryList = JSON.parse(localStorage.getItem("localCategoryList"));
    const localActiveIndex = JSON.parse(localStorage.getItem("localActiveIndex"));
    const data = api.getCategories();
    const actualCategoryList = localCategoryList || data;
    const actualActiveIndex = localActiveIndex || 0;
    if (Array.isArray(actualCategoryList) && actualCategoryList.length > 0) {
      dispatch(updateCategoriesAC(actualCategoryList));
      dispatch(updateActiveCategoryAC(actualActiveIndex));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   const data = api.getCards()
  //   console.log(data);
  //   const localActiveIndex = JSON.parse(localStorage.getItem("localActiveIndex"));
  //   const actualActiveIndex = localActiveIndex || 0;
  //   if (Array.isArray(data) && data.length > 0) {
  //     dispatch(updateCategoriesAC(data));
  //     dispatch(updateActiveCategoryAC(actualActiveIndex));
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const { categories } = useSelector(store => store.categoryList);
  const emptyCategories = categories.length > 0

  return (
    <BrowserRouter>
      <Wrapper>
        {emptyCategories ?
          <Routes>
            <Route path={path.home} element={<HomePage />} />
            <Route path={path.practice} element={<PracticePage />} />
            <Route path="*" element={<Notfoundpage />} />
          </Routes> :
          <EmptyCategories />}
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;