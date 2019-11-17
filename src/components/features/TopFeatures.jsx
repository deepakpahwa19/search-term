import React from 'react';
import { useSelector } from 'react-redux';

import withSpinner from '../../hoc/withSpinner';
import { Table, TableParent, Tbody, Td, Thead, Tr, TrInsideThead, Th } from '../../styles/TableStyles';
import Instruction from '../../UI/Instruction';



const TopFeatures = (props) => {

    const features = useSelector(state => state.topFeatures);
    if (!features.length) {
        return <Instruction />
    }
    return (
        <TableParent>
            <Table>
                <Thead>
                    <TrInsideThead>
                        <Th><h3>#</h3></Th>
                        <Th><h3>Feature</h3></Th>
                        <Th><h3>Count</h3></Th>
                    </TrInsideThead>
                </Thead>
                <Tbody>
                    {features.map((feature, index) => (
                        <Tr key={index + 1} number={index}>
                            <Td>{index + 1}</Td>
                            <Td>{feature[0]}</Td>
                            <Td>{feature[1]}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableParent>
    )
}

export default withSpinner(TopFeatures);

