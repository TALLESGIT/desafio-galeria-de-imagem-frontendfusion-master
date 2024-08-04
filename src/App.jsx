import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Screen } from "./Styles";
import { darkTheme, lightTheme } from "./Styles/theme";
import { NavBar } from "./components/navBar";

export default function App() {
	const [theme, setTheme] = useState("dark");

	const themeToggler = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<Screen>
				<NavBar themeToggler={themeToggler} theme={theme} />
			</Screen>
		</ThemeProvider>
	);
}
