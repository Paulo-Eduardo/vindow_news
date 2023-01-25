import SearchBar, { SearchForm } from "./searchBar";

interface HeaderProps {
	query: string;
	searchNews: (query: string, page: number) => void;
}

export default function Header({ query, searchNews }: HeaderProps) {
	return (
		<div className="container">
			<h1>Vindow News!</h1>
			<div className="row g-3 align-items-center">
				<div className="col-auto">
					<SearchBar
						query={query}
						onSubmit={(value: SearchForm) => searchNews(value.searchText, 1)}
					/>
				</div>
			</div>
		</div>
	);
}
