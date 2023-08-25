import { Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import React from "react";

const ViewVotes = ({candidates}) => {

    return (
        <>
            <Heading>Live Votes</Heading>
            <TableContainer width='fit-content'>
                <Table>
                    <Thead>
                        <Tr textAlign="center" >
                            <Th>Candidate</Th>
                            <Th>Email</Th>
                            <Th isNumeric>Votes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {candidates.map((candidate) => (
                            <Tr key={candidate._id}>
                                <Td>{candidate.name}</Td>
                                <Td>{candidate.email}</Td>
                                <Td textAlign="center">{candidate.votes}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ViewVotes
