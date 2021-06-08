import "./styles.scss";
import { useEffect, useState, useCallback } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { fetchData } from "./utils";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  const loadItems = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetchData("https://zapari.any.do/birds/20");
      setIsLoading(false);
      setData((data) => [...data, ...res.items]);
    } catch (e) {
      setIsLoading(false);
      setIsError(true);
    }
  }, []);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  return (
    <div className="App">
      <Sidebar
        isLoading={isLoading}
        isError={isError}
        data={data}
        onLoad={loadItems}
        onSelect={(index) => setSelected(index)}
      />
      <Main key={selected} {...data[selected]} />
    </div>
  );
}
