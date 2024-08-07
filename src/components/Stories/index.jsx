import { useState } from "react";

import { Button, Flex, Typography } from "../../Styles";

import * as C from "./style";

export function Stories() {
	const [showAll, setShowAll] = useState(false);
	const numberArray = showAll ? 20 : 8;

	function handleShowAll() {
		setShowAll(!showAll);
	}

	return (
		<Flex padding="8px 20px" align="start" gap="4px">
			<Typography weight="400" size="18px" height="21px">
				Stories
			</Typography>
			<Flex align="end">
				<Button onClick={() => handleShowAll()}>
					<Typography size="14px">
						{showAll ? "ver menos" : "Ver mais"}
					</Typography>
				</Button>

				<C.Container>
					{Array.from(Array(numberArray)).map((item, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<C.Profile key={index}>
							<img
								src="https://avatars.githubusercontent.com/u/143969312?v=4"
								alt="fotografia"
							/>
						</C.Profile>
					))}
				</C.Container>
			</Flex>
		</Flex>
	);
}
