import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Agradecimento from "./routes/agradecimento";
import Avaliacao from "./routes/avaliacao";
import { lightTheme, darkTheme } from "./theme";

// import "./styles.css";
import GlobalCSS from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

function App() {
  const [isDark, setIsDark] = useState(false);

  const mudarTema = (e) => {
    setIsDark(e.target.checked);
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalCSS />
      <input type="checkbox" value={isDark} onChange={mudarTema} />
      Dark
      <Routes>
        <Route path="/" element={<Avaliacao />} />
        <Route path="/agradecimento" element={<Agradecimento />} />
      </Routes>
    </ThemeProvider>
  );
}
