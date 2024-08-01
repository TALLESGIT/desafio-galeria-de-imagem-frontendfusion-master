import { BsSun } from "react-icons/bs";
import { Flex } from "../../Styles";
import * as C from "./style";

export function NavBar() {
	return (
		<C.Container className="w-[338px] h-[100vh] items-center flex flex-col p-20">
			<Flex>
				<C.BtnTheme className="bg-transparent border-none text-base absolute top-0 right-0 hover:opacity-[0.8]">
					<BsSun />
				</C.BtnTheme>
			</Flex>
		</C.Container>
	);
}
