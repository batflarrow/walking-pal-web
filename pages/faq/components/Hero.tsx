import { Box, Typography } from "@mui/material";
import { Accent } from "components/Accent";
import { FC } from "react";

interface IHero {}

export const Hero: FC<IHero> = ({}) => {
	return (
		<Box display="grid" justifyContent="center" textAlign="center">
			<Typography variant="h3" pt={7} pb={4} mx={1} maxWidth={800}>
				Questions? Look here.
			</Typography>
			<Typography variant="body1" mx={3} maxWidth={600}>
				If you’re trying to get to know us better, you’ve come to the right
				place. This is<Accent>WalkingPal</Accent>at a glance.
			</Typography>
		</Box>
	);
};
