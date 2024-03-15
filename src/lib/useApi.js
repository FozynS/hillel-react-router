import { useEffect } from "react";

let cache = {};

const useApi = (api, dataSetter) => {
  const { url } = api();

  useEffect(() => {
    let isActive = true;

    if(cache[url]) {
      return dataSetter(cache[url]);
    }

    api().then(({ url, data }) => {
      cache[url] = data;
      if (isActive) {
        dataSetter(data);
      }
    });

    return () => {
      isActive = false;
    };
  }, []);
};

export default useApi;
