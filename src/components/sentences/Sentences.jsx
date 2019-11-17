import React from 'react';
import { Table, TableParent, Thead, Th, Tbody, Tr, Td, TrInsideThead } from '../../styles/TableStyles';

const Sentences = (props) => {
    const { countStarts, currentSentences } = props;
    return (
        <TableParent>
            <Table>
                <Thead>
                    <TrInsideThead>
                        <Th><h3>#</h3></Th>
                        <Th><h3>Sentences</h3></Th>
                    </TrInsideThead>
                </Thead>
                <Tbody>
                    {currentSentences.map((feature, index) => (
                        <Tr key={index + 1} num={index}>
                            <Td>{index + 1 + ((countStarts - 1) * 30)}</Td>
                            <Td>{feature}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableParent>
    )
}

export default Sentences;