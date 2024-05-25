import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import Products from "./pages/products/Products";
import Clients from "./pages/clients/Clients";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />}></Route>
            <Route
              path="new"
              element={
                <New inputs={userInputs} title="Dodawanie nowego użytkownika" />
              }
            ></Route>
          </Route>
          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":productId" element={<Single />}></Route>
            <Route
              path="new"
              element={
                <New
                  inputs={productInputs}
                  title="Dodawanie nowego samochodu"
                />
              }
            ></Route>
          </Route>
          <Route path="clients">
            <Route index element={<Clients />} />
            <Route path=":clientId" element={<Single />}></Route>
            <Route
              path="new"
              element={
                <New
                  inputs={productInputs}
                  title="Dodawanie nowego samochodu"
                />
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
