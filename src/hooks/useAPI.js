import { setup } from "axios-cache-adapter";

import { useAuth } from "./useAuth";
import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

let apis = {};

function useAPI(version = 1) {
  const { authToken } = useAuth();
  const [email, setEmail] = useLocalStorage("email", null);
  let baseURL = process.env.REACT_APP_API_BASE_URL + `v${version}/`;
  useEffect(() => {
    if (!authToken) {
      apis = {};
    }
  }, [authToken]);
  const http = setup({
    baseURL: baseURL,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Token token=${authToken}, email=${email}`,
    },
    cache: {
      readHeaders: true,
      exclude: { query: false },
    },
  });

  if (authToken) {
    if (!apis[version]) {
      apis[version] = http;
      return http;
    } else {
      return apis[version];
    }
  }
  return http;
}

export default useAPI;
