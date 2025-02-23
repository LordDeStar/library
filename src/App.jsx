
import { useEffect, useState } from "react";
import { Auth } from "./components/Auth"
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Catalog } from "./components/Catalog";
import { MyBooks } from "./components/MyBooks";
import Favorite from "./components/Favorite";

export const App = () => {
  const [user, setUser] = useState(null);
  const [route, setRoute] = useState("home");
  const render = () => {
    if (!user) {
      return <Auth changeUser={setUser} />;
    } else {
      switch (route) {
        case "home":
          return (
            <>
              <Header changeRoute={setRoute} />
              <Home />
            </>

          );
        case "catalog":
          return (
            <>
              <Header changeRoute={setRoute} />
              <Catalog user={user} />
            </>

          );
        case "my-books":
          return (
            <>
              <Header changeRoute={setRoute} />
              <MyBooks user={user} />
            </>

          );
        case "liked":
          return (
            <>
              <Header changeRoute={setRoute} />
              <Favorite user={user} />
            </>

          );
        case "history":
          return (
            <>
              <Header changeRoute={setRoute} />
              <h1>History</h1>
            </>

          );
        case "profile":
          return (
            <>
              <Header changeRoute={setRoute} />
              <h1>Profile</h1>
            </>

          );
        case "exit":
          setUser(null);
          setRoute("home")
          return <Auth changeUser={setUser} />;
        default:
          return <h1>Страница не найдена</h1>;
      }
    }
  };

  return (
    <>
      {render()}
    </>
  );
};