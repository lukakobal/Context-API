import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function DisplayTheme() {
  const theme = useContext(ThemeContext);

  return <h2>Theme: {theme}</h2>;
}
