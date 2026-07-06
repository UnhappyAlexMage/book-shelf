type Props = {
    search: string,
    setSearch: (value: string) => void
};

export const InputSeacrhBooks = ({ search, setSearch }: Props) => {

    return (
        <input 
            type="text"
            placeholder="Временно не работает..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="justify-center border border-gray-400 px-3 py-2 ml-9 h-12 max-w-3/7 focus:outline-none focus:border-gray-600 text-black placeholder:text-black rounded-2xl"
        />
    )
};