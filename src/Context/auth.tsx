import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Toast } from "toastify-react-native";
import { api } from "../Service/api/api";

interface AuthContextData {
  signIn: (login: string, senhaLogin: string) => void;
  isAuthenticated: boolean;
  userId: string;
  signOut: () => void;
}

type Pessoa = {
  id: string;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [pessoa, setPessoa] = useState<Pessoa | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    async function loadStorageData() {
      const token = await AsyncStorage.getItem("@token");
      const pessoa = await AsyncStorage.getItem("pessoa");

      if (token && pessoa) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setToken(token);
        setPessoa(JSON.parse(pessoa));
        setIsAuthenticated(true);
        setUserId(JSON.parse(await AsyncStorage.getItem("@id")));
      }
    }

    loadStorageData();
  }, []);
  //Login
  async function signIn(login: string, senhaLogin: string) {
    try {
      const response = await api.post("/pessoa/login", {
        login,
        password: senhaLogin,
      });

      const token = response.data.token;
      const pessoa = response.data.pessoa;
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setToken(token);
      setPessoa(pessoa);
      await AsyncStorage.setItem("@token", token);
      await AsyncStorage.setItem("pessoa", JSON.stringify(pessoa));
      await AsyncStorage.setItem("@authenticated", "true");
      await AsyncStorage.setItem("@id", JSON.stringify(pessoa.id));
      setIsAuthenticated(true);
      Toast.success("Sucesso, Bem Vindo!");
    } catch (error) {
      Toast.error("Login ou Senha invalidos");
    }
  }
  //Sair
  async function signOut() {
    setIsAuthenticated(false);
    setUserId("");
    setPessoa(null);
    setToken(null);
    await AsyncStorage.removeItem("@token");
    await AsyncStorage.removeItem("pessoa");
    await AsyncStorage.removeItem("@authenticated");
    await AsyncStorage.removeItem("@id");
  }

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

export const useAuth = () => useContext(AuthContext);
