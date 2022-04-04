import { useState, useMemo, useEffect } from "react";
import Nav from "../nav/nav";
import AppInfo from "../app-info/app-info";
import SeachPanel from "../search-panel/search-panel";
import Cards from "../cards/cards";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "../mobile-menu/mobile-menu.css";

const cardSeach = (items, term) => {
  if (term.length === 0) {
    return items;
  }
  return items.filter((item) => {
    return item.name.indexOf(term) > -1 || item.text.indexOf(term) > -1;
  });
};

const MainPage = () => {
  const [cardDB, setCarsDB] = useState([]);
  const profile = useSelector((state) => state.profile);
  const [term, setTerm] = useState("");

  const visibleData = useMemo(() => {
    return cardSeach(cardDB, term);
  }, [cardDB, term]);

  useEffect(() => {
    let cleanupFunction = false;
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:7000/cards");
        const result = await response.json();
        if (!cleanupFunction) setCarsDB(result);
      } catch (e) {
        console.error(e.message);
      }
    };

    fetchData();
    return () => (cleanupFunction = true);
  }, []);

  if (!profile.isLoggedIn) {
    return <Navigate replace to="/login" />;
  }
  return (
    <div>
      <Nav />
      <AppInfo />
      <section className="flex-container">
        <div className="container">
          <SeachPanel onUpdateSearch={setTerm} />
          <Cards data={visibleData} />
        </div>
      </section>
    </div>
  );
};

export default MainPage;
