import * as React from "react";
import Spacer from "../components/Spacer";
import Text from "../components/Text";
import styled from "styled-components";
import theme from "../config/theme";

// styles
const Border = styled.div`
	height: 10px;
	width: 115%;
	background-color: ${theme.colors.primary100};
	bottom: 12.5px;
	position: absolute;
`;

const WelcomeTextContainer = styled.div`
	position: absolute;
	white-space: nowrap;
	overflow: hidden;
`;

const SubText = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	margin: 0 auto;
	@media (${theme.breakpoints.mediumAndUp}) {
	}
`;

const AuthorContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	@media (${theme.breakpoints.mediumAndUp}) {
		justify-content: center;
	} ;
`;

const MobileWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-self: center;
	@media (${theme.breakpoints.mediumAndUp}) {
		justify-content: center;
		align-self: center;
	} ;
`;

const StyledText = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	@media (${theme.breakpoints.mediumAndUp}) {
		align-items: center;
		justify-content: center;
	}
`;

const Welcome = () => {
	return (
		<>
			<MobileWrapper>
				<WelcomeTextContainer>
					<Border width="400px" />
					<Text
						tag="h1"
						size="x8"
						weight="semibold"
						lineHeight={1.5}
						style={{ position: "relative" }}
					>
						{" "}
						WELCOME TO{" "}
					</Text>
				</WelcomeTextContainer>
			</MobileWrapper>
			<Spacer height="x8" />
			<Spacer height="x8" />
			<Spacer height="x4" />
			<MobileWrapper>
				<WelcomeTextContainer>
					<Border width="250px" />
					<Text
						tag="h1"
						size="x8"
						align="center"
						weight="semibold"
						lineHeight={1.5}
						style={{ position: "relative" }}
					>
						FISH FAT
					</Text>
				</WelcomeTextContainer>
			</MobileWrapper>
			<Spacer height="x8" />
			<Spacer height="x8" />
			<Spacer height="x8" />
			<Spacer height="x8" />
			<SubText>
				<StyledText>
					<Text
						tag="h3"
						size="x5"
						weight="light"
						align="center"
					>
						An assorted collection of some of my projects and musings. Writing about wherever my brain takes me.
					</Text>
				</StyledText>
			</SubText>
			<Spacer height="x4" />
			<AuthorContainer style={{ display: "flex", width: "100%" }}>
				<Text tag="h4" size="x4" weight="light">
					by
				</Text>
				<Spacer width="x2" />
				<Text
					tag="a"
					href="https://www.linkedin.com/in/harry-c-038681103/"
					size="x4"
					weight="light"
					style={{ textDecoration: "none" }}
					color={theme.colors.primary100}
					cursor="pointer"
				>
					Harry Condron
				</Text>
			</AuthorContainer>
		</>
	);
};

export default Welcome;
