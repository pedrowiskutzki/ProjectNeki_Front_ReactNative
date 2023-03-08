import { AuthProvider } from "./src/Context/auth";
import { Routes } from "./src/Routes/routeTabStack";

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
