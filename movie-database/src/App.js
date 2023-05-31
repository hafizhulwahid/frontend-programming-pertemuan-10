// Import Halaman Home
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/Create";
import Popular from "./pages/movie/Popular";
import TopRated from "./pages/movie/TopRated";
import NowPlaying from "./pages/movie/NowPlaying";
import Layout from "./Layout";

import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";

function App() {
  /**
   * Menampilkan Halaman Home.
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */
  return (
    <>
      {/* <Home /> */}
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/about" element={<h2>About Pages</h2>}></Route> */}
            <Route path="/movie/create" element={<CreateMovie />}></Route>
            <Route path="/movie/popular" element={<Popular />}></Route>
            <Route path="/movie/now" element={<NowPlaying />}></Route>
            <Route path="/movie/top" element={<TopRated />}></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
