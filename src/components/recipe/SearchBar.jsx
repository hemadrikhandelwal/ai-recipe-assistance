function SearchBar({value, onChange, onSearch}){
    return(
        <div className=" flex gap-3 mb-8">
            <input type="text" 
            placeholder="Search recipes..." 
            value={value}
            onChange={(e)=> onChange(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400">
            </input>


            <button onClick={onSearch}  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
                Search
            </button>

        </div>
    )

}

export default SearchBar