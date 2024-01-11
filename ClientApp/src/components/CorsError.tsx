import axios from "axios";
import { useEffect, useState } from "react";
import IItem from "../interfaces/IItems";

const CorsError = () => {
  const [items, setItems] = useState<IItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    setTimeout(() => {
      axios
        .get("http://localhost:3000/api/v1/items", {
          params: { component: "CorsError" },
        })
        .then((resp) => {
          console.log("Response in CorsError: ", resp);
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
          console.error("Error in CorsError: ", err.message);
        });
    }, 1500);
  }, []);
  return (
    <>
      <h1>Proxy not used in fetching data</h1>
      {isLoading && <span>Loading...</span>}
      {isError && <span>Something went wrong...</span>}
      {!isLoading &&
        !isError &&
        items.map((item) => (
          <div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
    </>
  );
};

export default CorsError;
