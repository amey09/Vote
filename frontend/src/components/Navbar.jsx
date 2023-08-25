import React from 'react';
import {
    Box,
    Flex,
    Spacer,
    Button,
    Link,
    useColorMode,
} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import {useLogoutMutation} from "../slices/usersApiSlice";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../slices/authSlice";

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const { userInfo } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const handleLogout = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/login');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Box boxShadow="md">
            <Flex
                alignItems="center"
                justifyContent="space-between"
                py={4}
                px={6}
                bg={colorMode === 'light' ? 'gray.200' : 'gray.700'}
            >
                <Link to="/" fontSize="xl" fontWeight="bold">
                    Vote
                </Link>
                <Spacer />
                <Button onClick={toggleColorMode}>
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </Button>
                {userInfo && (
                    <Button marginLeft="10px" onClick={handleLogout}>Logout</Button>
                )}
            </Flex>
        </Box>
    );
};

export default Navbar;
