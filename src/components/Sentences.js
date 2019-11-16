import React from 'react';
import styled from 'styled-components';

const Sentences = (props) => {

    const { sentences } = props;

    return (
        (sentences || {}).length > 0 ?
            <TableParent>
                <Table>
                    <Thead>
                        <TrInsideThead>
                            <Th><h3>#</h3></Th>
                            <Th><h3>Sentences</h3></Th>
                        </TrInsideThead>
                    </Thead>
                    <Tbody>
                        {sentences.map((feature, index) => (
                            <Tr key={index + 1} num={index}>
                                <Td>{index + 1}</Td>
                                <Td>{feature}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableParent> : null
    )
}

export default Sentences;

const Table = styled.table`
    width: 60%;
    margin: auto;
    font-size: 1.2rem;
`;

const Th = styled.th`
    background-color:  #b0c4ca;
    line-height: 3rem;
    position: sticky;
`;

const Thead = styled.thead`
    /* position: fixed; */
`;

const TrInsideThead = styled.tr`
    position: relative;
    top: 40px;

`;


const Tr = styled.tr`
  background-color: ${props => props.num % 2 !== 0 ? '#88a3e026' : ''};

  &:hover {
    box-shadow: 0px 0px 4px 1px black;
  }
`;

const Td = styled.td`
  line-height: 3rem;
`;

const Tbody = styled.tbody`
    margin: auto;
`;

const TableParent = styled.div`
    position: relative;
    overflow-y: scroll;
    /* height: 250px; */
`;