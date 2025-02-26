
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
  const [lastRoute, setLastRoute] = useState("");
  const checkUser = () => {
    if (!user) {
      setLastRoute(route);
      setRoute('auth');
    }
  }


  const render = () => {
    switch (route) {
      case "auth":
        return (
          <>
            <Header changeRoute={setRoute} />
            <Auth changeUser={setUser} changeRoute={setRoute} lastRoute={lastRoute} />
          </>
        );
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
            <Catalog user={user} checkUser={checkUser} />
          </>

        );
      case "my-books":
        return (
          <>
            <Header changeRoute={setRoute} />
            <MyBooks user={user} checkUser={checkUser} />
          </>

        );
      case "liked":
        return (
          <>
            <Header changeRoute={setRoute} />
            <Favorite user={user} checkUser={checkUser} />
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
        setLastRoute("");
        return <Auth changeUser={setUser} />;
      default:
        return <h1>Страница не найдена</h1>;
    }
  }

  return (
    <>
      {render()}
    </>
  );
};