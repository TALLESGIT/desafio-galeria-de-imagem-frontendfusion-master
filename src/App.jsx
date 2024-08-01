import { ThemeProvider } from "styled-components";
import { Screen } from "./Styles";
import { darkTheme, lightTheme } from "./Styles/theme";
import { NavBar } from "./components/navBar";

export default function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<Screen>
				<NavBar />
			</Screen>
		</ThemeProvider>
	);
}
