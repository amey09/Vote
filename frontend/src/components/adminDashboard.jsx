import React, { useState } from 'react';
import {
    Button,
    FormControl,
    FormLabel, Heading,
    HStack,
    IconButton,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import {useSetCandidateMutation, useDeleteCandidateMutation } from "../slices/candidatesApiSlice";

const AdminDashboard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const [candidateEmail, setCandidateEmail] = useState('');
    const [candidateName, setCandidateName] = useState('');

    const [setCandidate, { isLoading: isAdding }] = useSetCandidateMutation();
    const [deleteCandidate, { isLoading: isDeleting }] = useDeleteCandidateMutation();

    const [isDeleteMode, setIsDeleteMode] = useState(false);

    const openModal = (deleteMode) => {
        setIsDeleteMode(deleteMode);
        onOpen();
    }

    const handleAction = async () => {
        if (isDeleteMode) {
            if (!candidateEmail) {
                return;
            }
            const data = { email: candidateEmail };
            await deleteCandidate(data);
        } else {
            if (!candidateName || !candidateEmail) {
                return;
            }
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            const data = { name: candidateName, email: candidateEmail, user: userInfo };
            await setCandidate(data);
        }

        setCandidateName('');
        setCandidateEmail('');
        onClose();
    };

    return (
        <>
            <Heading size={'md'} marginTop={'10'}>Manage Candidates</Heading>
            <HStack>
                <IconButton
                    aria-label="Add candidate"
                    colorScheme="teal"
                    variant="outline"
                    icon={<AddIcon />}
                    onClick={() => openModal(false)}
                />
                <IconButton
                    aria-label="Delete candidate"
                    colorScheme="red"
                    variant="outline"
                    icon={<DeleteIcon />}
                    onClick={() => openModal(true)}
                />
            </HStack>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        {isDeleteMode ? 'Delete Candidate' : 'Enter Candidate Details'}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        {isDeleteMode ? null : (
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    ref={initialRef}
                                    placeholder={"Candidate's Email"}
                                    value={candidateName}
                                    onChange={(e) => setCandidateName(e.target.value)}
                                />
                            </FormControl>
                        )}
                        <FormControl>
                            <FormLabel pt={3}>Email</FormLabel>
                            <Input
                                ref={finalRef}
                                placeholder={"Candidate's Email"}
                                value={candidateEmail}
                                onChange={(e) => setCandidateEmail(e.target.value)}
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme={isDeleteMode ? 'red' : 'blue'}
                            mr={3}
                            onClick={handleAction}
                            isLoading={isAdding || isDeleting}
                        >
                            {isDeleteMode ? 'Delete' : 'Save'}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AdminDashboard;
