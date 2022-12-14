import { useEffect, useState } from "react";
import api from "../config/api"
export const useRequestedData = (endpoint, initialState) => {
    const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
       // eslint-disable-next-line

  }, [endpoint]);

  const getData = () => {
    setIsLoading(true);
    api
      .get(`${endpoint}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
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