import AsyncStorage from '@react-native-async-storage/async-storage';
import { ReactNode, useEffect, useState } from "react";
import { api } from "../Services/api/api";

interface AuthContextData {
  isAuthenticated: boolean;
  signIn: (login: string, senhaLogin: string) => void;
  signOut: () => void;
  userId: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState("");
  const [pessoa, setPessoa] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('token');
      const pessoa = await AsyncStorage.getItem('pessoa');
      const isAuthenticated = await AsyncStorage.getItem('@authenticated') === 'true';
      const userId = await AsyncStorage.getItem('@id');
      
      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setToken(token);
        setPessoa(pessoa);
        setIsAuthenticated(isAuthenticated);
        setUserId(userId);
      }
    };
  
    fetchData();
  }, []);
  

  function signIn(login, senhaLogin) {
    api.post("/pessoa/login", { "login": login, "password": senhaLogin }).then(async (resp) => {
      var token = resp.data.token;
      var pessoa = resp.data.pessoa;
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setToken(token);
      setPessoa(pessoa);
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("pessoa", pessoa);
      await AsyncStorage.setItem("@authenticated", 'true');
      await AsyncStorage.setItem("@token", token)
      await AsyncStorage.setItem("@id", pessoa.id);
      setIsAuthenticated(true);
      navigate("/home")
      alert("sucesso")
    }, (error) => {
      alert("login ou senha invalidos")
    })
  }
  

  const signOut = () => {
    setIsAuthenticated(false);
    setUserId("");
    setPessoa(null);
    setToken(null);
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("pessoa");
    await AsyncStorage.removeItem("@authenticated");
    await AsyncStorage.removeItem("@token");
    await AsyncStorage.removeItem("@id");

    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signIn,
        signOut,
        userId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
