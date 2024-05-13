import { Input } from "../ui/input";


const SearchFilter = ({
    keywords,
    setKeywords
}: {
    keywords: string;
    setKeywords: (keywords: string) => void;
}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeywords(e.target.value)
    }

    return (
        <div className="m-2 shadow rounded-lg p-2 flex flex-col gap-2">
            <label htmlFor="search-input">Search</label>
            <Input
                id="search-input"
                type="text"
                name="search"
                onChange={handleChange}
                value={keywords}
                placeholder="Search title or topic..."
            />
        </div>
    )
}

export default SearchFilter;

