import { ThemeProvider } from "styled-components";
import { Flex, Screen, Typography } from "./Styles";
import { darkTheme, lightTheme } from "./Styles/theme";

export default function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<Screen>
				<Flex>
					<Typography className="text-3xl font-bold">Hello world!</Typography>
					<Typography className="text-3xl font-bold">Hello world!</Typography>
				</Flex>
			</Screen>
		</ThemeProvider>
	);
}
