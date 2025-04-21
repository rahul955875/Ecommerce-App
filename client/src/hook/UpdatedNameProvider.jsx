import { createContext, useContext, useState } from "react";
const NameContext = createContext();

const UpdatedNameProvider = ({ children }) => {
  const [updatedName, setUpdatedName] = useState("raji;");
  return (
    <NameContext.Provider value={[updatedName, setUpdatedName]}>
      {children}
    </NameContext.Provider>
  );
};
export const useName = ()=> useContext(NameContext);
export default UpdatedNameProvider;
