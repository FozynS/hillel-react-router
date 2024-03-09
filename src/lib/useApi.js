import { useEffect } from "react";

const useApi = (apiCall, dataSetter) => {
  useEffect(() => {
    let isActive = true;

    apiCall().then((users) => {
      if (isActive) {
        dataSetter(users);
      }
    });

    return () => {
      isActive = false;
    };
  },[]);
};

export default useApi;