import { useEffect, useState } from "react";
import api from "../config/api"
export const useRequestData = (endpoint, initialState) => {
    const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();

  }, [endpoint]);

  const getData = () => {
    setIsLoading(true);
    api
      .get(`${endpoint}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  };

  return { data, isLoading };
};