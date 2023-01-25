interface BottomProps {
	page: number;
	changePage: (page: number) => void;
	disabled: boolean;
	lastPage: boolean;
}
export default function Bottom({
	page,
	changePage,
	disabled,
	lastPage,
}: BottomProps) {
	return (
		<nav
			aria-label="navbar fixed-bottom bg-body-tertiary"
			style={{ marginTop: "10px" }}
		>
			<ul className="pagination">
				<li className={`page-item ${page === 1 ? "disabled" : ""}`}>
					<a
						className="page-link"
						onClick={() => {
							if (page > 1) changePage(page - 1);
						}}
					>
						&laquo;
					</a>
				</li>
				{page > 1 ? (
					<li className={`page-item ${disabled ? "disabled" : ""}`}>
						<a
							className="page-link"
							onClick={() => {
								changePage(page - 1);
							}}
						>
							{page - 1}
						</a>
					</li>
				) : (
					""
				)}
				<li className={"page-item disabled"}>
					<a className="page-link disabled">{page}</a>
				</li>
				<li className={`page-item ${disabled || lastPage ? "disabled" : ""}`}>
					<a
						className="page-link"
						onClick={() => {
							changePage(page + 1);
						}}
					>
						{page + 1}
					</a>
				</li>
				<li className={`page-item ${disabled || lastPage ? "disabled" : ""}`}>
					<a
						className="page-link"
						onClick={() => {
							changePage(page + 1);
						}}
					>
						&raquo;
					</a>
				</li>
			</ul>
		</nav>
	);
}
