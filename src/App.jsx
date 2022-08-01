import {
  Collections,
  TopNftPage,
  ResourcesPage,
  CreatePage,
  OpenCard,
  NotFound,
} from "./components";
import { MainPage, Hero } from "./components";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/themes";
import { useDispatch, useSelector } from "react-redux";
import { defaultThemeToggler } from "./store/allDataSlice";

function App() {
  const defaultTheme = useSelector((state) => state.allData.defaultTheme);

  const dispatch = useDispatch();
  const themeToggler = () => {
    dispatch(defaultThemeToggler());
  };

  return (
    <ThemeProvider theme={defaultTheme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <Routes>
          <Route path="/" element={<MainPage themeToggler={themeToggler} />}>
            <Route index element={<Hero />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/stats" element={<TopNftPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/opencard/:id" element={<OpenCard />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
