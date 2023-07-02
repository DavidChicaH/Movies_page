/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const pageContext = createContext();

const PageProvider = ({ children }) => {
  const [page, setPage] = useState(1);

  const handlePage = (stringAction) => {
    if (stringAction === "next") {
      setPage(page + 1);
    }
    if (stringAction === "previous" && page > 1) {
      setPage(page - 1);
    }
  };

  const data = { page, handlePage };

  return <pageContext.Provider value={data}>{children}</pageContext.Provider>;
};

export { PageProvider };
export default pageContext;
