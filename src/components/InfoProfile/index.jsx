/* eslint-disable react/prop-types */
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { Flex, Typography } from "../../Styles";

import * as C from "./style";

export function InfoProfile() {
	return (
		<Flex direction="row" align="center" justify="space-between">
			<C.Container>
				<C.Link>
					<C.ProfileImage src="https://avatars.githubusercontent.com/u/143969312?v=4" alt="perfil" />
					<Typography weight="300" size="13px" height="15px">
						Tales
					</Typography>
				</C.Link>
			</C.Container>

			<C.Container>
				<AiFillHeart color="red" />
				<Typography weight="300" size="13px" height="15px">
					12345
				</Typography>

				<FaRegComment />
				<Typography weight="300" size="13px" height="15px">
					52
				</Typography>
			</C.Container>
		</Flex>
	);
}
