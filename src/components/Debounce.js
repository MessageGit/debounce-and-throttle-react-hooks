import React, {useState} from "react";

import {useDebounce} from "src/hooks/useDebounce";

const Debounce = () => {
    const [searchValue, setSearchValue] = useState('');
    const [fetchCountDebounce, setFetchCountDebounce] = useState(0);
    const [fetchCountWithoutDebounce, setFetchCountWithoutDebounce] = useState(0);

    /* Function to fetch articles with a request */
    const fetchArticles = ({ useDebounce = false }) => {
        if (useDebounce) setFetchCountDebounce(fetchCountDebounce + 1);
        else setFetchCountWithoutDebounce(fetchCountWithoutDebounce + 1);
    }
    
    /* Use of debounce hook to fetch articles */
    useDebounce(async () => {
        if (searchValue) fetchArticles({ useDebounce: true });
        // else .. 
    }, 1000, [searchValue]); 

    /* Handle the value of search input */
    const handleSearchValue = (e) => {
        const newValue = e.target.value;
        setSearchValue(newValue);
        fetchArticles({ useDebounce: false });
    }

    return (
        <div className="Container">
            <h2>Debounce</h2>
            <div className="Content">
                <div className="Search_Input">
                    <input 
                        type="text" 
                        name="searchValue" 
                        value={searchValue}
                        onChange={handleSearchValue} 
                        placeholder="Votre recherche ici.."
                    />
                    <i>{searchValue.length}</i>
                </div>
                <br />
                {searchValue && (
                    <div>Articles correspondant à:<br/><b>« {searchValue} »</b></div>
                    /* ... Display articles below */
                )}
            </div>
            <div className="Content">
                <div className="Result_Item">
                    <i>Nb. de fetch (sans debounce)</i><br />
                    <span>{fetchCountWithoutDebounce}</span>
                </div>
                <div className="Result_Item">
                    <i>Nb. de fetch (avec debounce 1000ms)</i><br />
                    <span>{fetchCountDebounce}</span>
                </div>
            </div>
        </div>
    );
}

export default Debounce;
