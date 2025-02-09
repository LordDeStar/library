
import { useEffect, useState } from "react";
import { Auth } from "./components/Auth"
import { Header } from "./components/Header";

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
              <h1>Home</h1>
            </>

          );
        case "catalog":
          return (
            <>
              <Header changeRoute={setRoute} />
              <h1>Catalog</h1>
            </>

          );
        case "my-books":
          return (
            <>
              <Header changeRoute={setRoute} />
              <h1>My books</h1>
            </>

          );
        case "liked":
          return (
            <>
              <Header changeRoute={setRoute} />
              <h1>Liked</h1>
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