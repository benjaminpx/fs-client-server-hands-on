import { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        fetch('http://localhost:5000/api')
            .then(res => res.json())
            .then(data => console.log(data));
    }, []);

    return <div>hello world</div>;
};

export default App;
