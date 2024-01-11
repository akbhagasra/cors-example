import axios from "axios";
import { useEffect, useState } from "react";
import IItem from "../interfaces/IItems";

const CorsHandled = () => {
  const [items, setItems] = useState<IItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    setTimeout(() => {
      axios
        .get("/api/v1/items", {
          params: { component: "CorsHandled" },
        })
        .then((resp) => {
          console.log("Response in CorsHandled: ", resp);
          const lst: IItem[] = [];
          resp.data.map((d: any) =>
            lst.push({
              title: d.title,
              content: d.content,
            })
          );
          setItems(lst);
          setIsLoading(false);
          setIsError(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
          console.error("Error in CorsHandled: ", err.message);
        });
    }, 1500);
  }, []);
  return (
    <>
      <h1>Proxy used</h1>
      {isLoading && <span>Loading...</span>}
      {isError && <span>Something went wrong...</span>}
      {!isLoading &&
        !isError &&
        items.map((item, ind) => (
          <div key={ind}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
    </>
  );
};

export default CorsHandled;
