import styled from 'styled-components';
import Chip from './components/Chip';
import Box from './components/Box';
import CheckBox from './components/CheckBox';
import axios from 'axios';
import { useEffect } from 'react';

const DATA = Array.from({ length: 20 }).map((_, i) => ({
    label: `Item ${i}`,
    id: `id-${i}`,
    isDefault: i % 2 === 0,
}));

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
`;

const Actions = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
`;

function App() {
    return (
        <Wrapper>
            <h1>Select Items</h1>
            <Box>
                <Actions>
                    <CheckBox label="All" />
                    <CheckBox label="Default" />
                </Actions>
                <Container>
                    {DATA.map(({ label, id }) => (
                        <Chip key={id}>{label}</Chip>
                    ))}
                </Container>
            </Box>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-top: 50px;
    height: 100%;
`;

export default App;
