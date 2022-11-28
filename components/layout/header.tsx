import { Button, Navbar, Text, useTheme, Link } from "@nextui-org/react";
import { useEffect } from "react";
import { getMainMenu } from "../../lib/api";


const Header = () => {
	const { isDark } = useTheme();
	
	const menuItems = async () => {
		const post = await getMainMenu()
		console.log('post', post)
		return post;
	} 

	console.log('getMenu', menuItems)

	

	return (
		<Navbar isBordered={isDark} variant="sticky">
			<Navbar.Brand>
				{/* <AcmeLogo /> */}
				<Text b color="inherit" hideIn="xs">
					ACME
				</Text>
			</Navbar.Brand>
			<Navbar.Content>
				<Navbar.Link href="#">Features</Navbar.Link>
				<Navbar.Link isActive href="#">
					Customers
				</Navbar.Link>
				<Navbar.Link href="#">Pricing</Navbar.Link>
				<Navbar.Link href="#">Company</Navbar.Link>
			</Navbar.Content>
			<Navbar.Content>
				<Navbar.Link color="inherit" href="#">
					Login
				</Navbar.Link>
				<Navbar.Item>
					<Button auto flat as={Link} href="#">
						Sign Up
					</Button>
				</Navbar.Item>
			</Navbar.Content>
		</Navbar>
	);
};
export default Header;