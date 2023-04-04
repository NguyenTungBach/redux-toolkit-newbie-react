import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import {Fragment} from "react";
import {publicRouters} from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Routes>
          {
              publicRouters.map((itemRoute, index) => {
                  const Page = itemRoute.component;
                  let Layout = DefaultLayout;

                  if (itemRoute.changeLayout) {
                      Layout = itemRoute.changeLayout;
                  } else if (itemRoute.changeLayout === null) {
                      Layout = Fragment;
                  }
                  return (
                      <Route
                          key={index}
                          path={itemRoute.path}
                          element={
                              <Layout>
                                  <Page />
                              </Layout>
                          }
                      />
                  );
              })
          }

      </Routes>
    </div>
  );
}

export default App;
