import React from 'react';
import { Center, VStack } from '@chakra-ui/react';
import ViewVotes from '../components/ViewVotes';
import AdminDashboard from "../components/adminDashboard";
import Vote from "../components/Vote";

const MainAppScreen = () => {

    return (
        <Center marginTop={'10'}>
            <VStack>
                <Vote/>
                <ViewVotes/>
                <AdminDashboard />
            </VStack>
        </Center>
    );
};

export default MainAppScreen;
