import styled from 'styled-components';

export const Table = styled.table`
    width: 60%;
    margin: auto;
    font-size: 1.2rem;
`;

export const Th = styled.th`
    background-color:  #b0c4ca;
    line-height: 3rem;
    position: sticky;
`;

export const Thead = styled.thead`
    /* position: fixed; */
`;

export const TrInsideThead = styled.tr`
    position: relative;
    top: 40px;

`;

export const Tr = styled.tr`
  background-color: ${props => props.number % 2 !== 0 ? '#88a3e026' : ''};

  &:hover {
    box-shadow: 0px 0px 4px 1px black;
  }
`;

export const Td = styled.td`
  min-width: 4rem;
  line-height: 3rem;
`;

export const Tbody = styled.tbody`
    margin: auto;
`;

export const TableParent = styled.div`
    position: relative;
    overflow-y: scroll;
`;