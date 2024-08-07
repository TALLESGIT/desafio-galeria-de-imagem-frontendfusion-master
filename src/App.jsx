import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Flex, Screen } from "./Styles";
import { darkTheme, lightTheme } from "./Styles/theme";
import { Stories } from "./components/Stories";
import { Header } from "./components/header";
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

				<Flex gap="2px">
					<Header />
					<Stories />
				</Flex>
			</Screen>
		</ThemeProvider>
	);
}
