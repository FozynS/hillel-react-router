import { useEffect } from "react";

let cache = {};

const useApi = (api, dataSetter) => {
  const { url } = api();
  if(cache[url]) {
    return dataSetter(cache[url]);
  }

  useEffect(() => {
    let isActive = true;

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
