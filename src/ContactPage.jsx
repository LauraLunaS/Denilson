import { useContext } from "react";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const ContactPage = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Header />
      <Contact />
    </div>
  );
};

export default ContactPage;
