import styled from 'styled-components';
import Chip from './components/Chip';
import Box from './components/Box';
import CheckBox from './components/CheckBox';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

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

const PAGE_SIZE = 20;

function App() {
    const [page, setPage] = useState(0);
    const [data, setData] = useState();

    const getData = useCallback(() => {
        axios
            .get(`http://localhost:5000/api?page=${page}&pageSize=${PAGE_SIZE}`)
            .then(({ data }) => data && setData(data));
    }, [page, PAGE_SIZE]);

    useEffect(() => getData(), [getData]);

    const toggleChip = async id => {
        try {
            await axios.post(`http://localhost:5000/api/${id}`);
        } finally {
            await getData();
        }
    };

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <Wrapper>
            <h1>Select Items</h1>
            <Box>
                {/*<Actions>*/}
                {/*    <CheckBox label="All" />*/}
                {/*    <CheckBox label="Default" />*/}
                {/*</Actions>*/}
                <Container>
                    {data.data.map(({ label, id }) => (
                        <Chip
                            key={id}
                            checked={data.data.find(item => item.id === id).checked}
                            onClick={() => toggleChip(id)}
                        >
                            {label}
                        </Chip>
                    ))}
                </Container>
            </Box>

            <Pagination>
                <Button
                    disabled={page === 0}
                    onClick={() => {
                        setPage(p => (p -= 1));
                    }}
                >
                    Previous
                </Button>
                <span>{page + 1}</span>
                <Button
                    disabled={Math.ceil(data.total / PAGE_SIZE) - 1 === page}
                    onClick={() => {
                        setPage(p => (p += 1));
                    }}
                >
                    Next
                </Button>
            </Pagination>
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

const Pagination = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
`;
const Button = styled.button`
    width: 150px;
    border-radius: 4px;
    padding: 5px 10px;
    background-color: #21b5ea;
    border: 1px solid #21b5ea;
    transition: transform 55ms ease-in-out;
    &:hover {
        cursor: pointer;
    }
    &:active {
        transform: scale(0.98);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
        transform: none;
        filter: grayscale(1);
    }
`;

export default App;
