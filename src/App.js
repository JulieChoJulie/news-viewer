import React, {useState, useCallback} from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';


const App = () => {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback(c => setCategory(c), []);

    return (
        <div>
            <Categories category={category} onSelect={onSelect}/>
            <NewsList category={category}/>
        </div>
    );
};

export default App;