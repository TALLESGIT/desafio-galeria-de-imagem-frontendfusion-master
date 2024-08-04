import { AiOutlineHome } from "react-icons/ai";
import { BiExit, BiMoon } from "react-icons/bi";
import { BsGear, BsSun } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { MdMonitor } from "react-icons/md";
import { RiGlobalLine } from "react-icons/ri";
import { Flex, Spacer, Typography } from "../../Styles";
import LogoInstagram from "../../assets/Logo-instagram.svg";
import * as C from "./style";

const menuNav = [
	{
		icon: <AiOutlineHome />,
		menuName: "Inicio",
	},
	{
		icon: <RiGlobalLine />,
		menuName: "Explorar",
	},
	{
		icon: <FiSend />,
		menuName: "Direct",
	},
	{
		icon: <MdMonitor />,
		menuName: "IGTV",
	},
	{
		icon: <BsGear />,
		menuName: "Ajustes",
	},
];

export function NavBar({ themeToggler, theme }) {
	function GroupText({ title, subtitle }) {
		return (
			<Flex>
				<Typography>{title}</Typography>
				<Typography className="w-[300] h-[14px] text-[12px]">
					{subtitle}
				</Typography>
			</Flex>
		);
	}

	return (
		<C.Container className="w-[338px] h-[100vh] items-center flex flex-col p-5">
			<Flex>
				<C.BtnTheme
					onClick={themeToggler}
					className="bg-transparent border-none text-base absolute top-0 right-0 hover:opacity-[0.8]"
				>
					{theme === "light" ? <BiMoon /> : <BsSun />}
				</C.BtnTheme>
			</Flex>

			<img src={LogoInstagram} alt="Instagran" />

			<Flex>
				<C.Profile className="relative w-[88px] h-[88px] rounded-full flex items-center justify-center">
					<img
						className="w[82px] h-[82px] rounded-full"
						src="https://avatars.githubusercontent.com/u/143969312?v=4"
						alt="imagem Tales"
					/>
				</C.Profile>

				<GroupText title="Tales Coelho" subtitle="@talesCoelho" />
			</Flex>

			<Spacer className="m-2" />

			<Flex direction="row" justify="space-between">
				<GroupText title="148" subtitle="Publicações" />
				<GroupText title="15K" subtitle="Seguidores" />
				<GroupText title="1K" subtitle="Seguindo" />
			</Flex>

			<Spacer />

			<Flex align="start" gap="16px">
				{menuNav.map((menu) => (
					<C.ListIcon className="hover:opacity-80" key={menu.menuName}>
						{menu.icon}
						<Typography>{menu.menuName}</Typography>
					</C.ListIcon>
				))}
			</Flex>

			<Spacer />
			<C.Divider />
			<Spacer margin="8px" />

			<Flex align="start">
				<C.ListIcon className="hover:opacity-80">
					<BiExit />
					<Typography>Sair</Typography>
				</C.ListIcon>
			</Flex>
		</C.Container>
	);
}
