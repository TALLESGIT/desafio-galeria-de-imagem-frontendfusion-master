import { Typography } from "../../Styles";
import { InfoProfile } from "../InfoProfile";

import * as C from "./style";

export function Publications() {
	return (
		<C.Container>
			<Typography>Publicações</Typography>

			<C.ContainerPublications>
				{Array.from(Array(20)).map((item, index) => (
					// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
					<C.Content>
						<C.PublicationImage
							src="https://avatars.githubusercontent.com/u/143969312?v=4"
							alt="image perfil"
						/>
						<InfoProfile />
					</C.Content>
				))}
			</C.ContainerPublications>
		</C.Container>
	);
}
