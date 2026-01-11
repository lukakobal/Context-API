import "./styles.css";
import { ThemeProvider } from "./ThemeContext";
import DisplayTheme from "./DisplayTheme";

export default function App() {
  return (
    <ThemeProvider>
      <DisplayTheme />
    </ThemeProvider>
  );
}
