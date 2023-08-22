import { Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import React from "react";

const ViewVotes = () => {

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
                            <Tr>
                                <Td></Td>
                                <Td></Td>
                                <Td></Td>
                            </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ViewVotes