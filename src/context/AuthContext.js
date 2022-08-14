import { useState , createContext} from "react";


export const AuthContext = createContext();

export const AuthProvayder = ({ children }) => {
  const localData = window.localStorage.getItem('token');
  const [token, setToken] = useState(localData);
  const [id, setId] = useState([])
  console.log(id);

  return (
    <AuthContext.Provider value={{ id,setId, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );


};
