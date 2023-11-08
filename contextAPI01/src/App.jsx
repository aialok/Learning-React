import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/userContextProvider";

export default function App() {
  return (
    <UserContextProvider>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}