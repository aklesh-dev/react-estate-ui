import { useState } from "react";
import "./SearchBar.scss";

const types = ['buy', 'rent'];

export default function SearchBar() {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0,
    });

    const switchType = (value) => {
        setQuery({ ...query, type: value });
    };

    
    return (
        <section className="searchBar">
            <div className="type">
                {
                    types.map((type, index) => (
                        <button
                            key={index}
                            onClick={() => switchType(type)}
                            className={query.type === type ? "active" : ""}
                        >
                            {type}
                        </button>
                    ))
                }

            </div>
            
            <form action="">
                <input type="text" name="location" placeholder="Enter location" />
                <input type="number" name="minPrice" min={0} max={10000000} placeholder="Min price" />
                <input type="number" name="maxPrice" min={0} max={10000000} placeholder="Max price" />
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </form>
        </section>
    )
}
