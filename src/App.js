import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Wrapper } from './components/Wrapper';
import { EmptyCategories } from './components/EmptyCategories';
import { HomePage } from './pages/HomePage';
import { PracticePage } from './pages/PracticePage';
import { TestingPage } from './pages/TestingPage';
import { updateActiveCategoryAC, updateCategoriesAC } from './store/reducers/actions';
import { api } from './api';
import { path } from './path';
import { Notfoundpage } from './pages/Notfoundpage';

function App() {
  const dispatch = useDispatch();
  const { categories, activeCategoryId } = useSelector(store => store.categoryList);

  useEffect(() => {
    const localCategoryList = JSON.parse(localStorage.getItem("localCategoryList"));
    const localActiveId = JSON.parse(localStorage.getItem("localActiveId"));
    const data = api.getCategories();
    const actualCategoryList = localCategoryList || data;
    const actualActiveId = localActiveId || data[0]?.id;
    if (Array.isArray(actualCategoryList) && actualCategoryList.length > 0) {
      dispatch(updateCategoriesAC(actualCategoryList));
      dispatch(updateActiveCategoryAC(actualActiveId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const emptyCategories = categories.length === 0 && activeCategoryId === null

  return (
    <BrowserRouter>
      <Wrapper>
        {emptyCategories ?
          <EmptyCategories /> :
          <Routes>
            <Route path={path.home} element={<HomePage />} />
            <Route path={path.practice} element={<PracticePage />} />
            {/* <Route path={path.testing} element={<TestingPage />} /> */}
            <Route path="*" element={<Notfoundpage />} />
          </Routes>
        }
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;