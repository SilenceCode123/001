import "./App.css";

function App() {
	const menuData = [
		{ label: "Home", link: "/" },
		{ label: "Product", link: "/" },
		{ label: "About", link: "/" },
		{ label: "Contact", link: "/" },
	];

	return (
		<div className="h-screen bg-slate-200 p-10">
			<div className="m-4 p-2 bg-white flex justify-between items-center">
				<h1 className="text-[14px] mx-3 text-slate-700 font-bold px-4">
					PROSEIDON
				</h1>

				<nav className="pr-10 flex items-center">
					<ul className="flex gap-10">
						{menuData?.map((x) => {
							return (
								<li className="text-[14px] py-4 font-bold" key={x.label}>
									{x.label}
								</li>
							);
						})}
					</ul>

					<div className="mx-6">
						<button className="text-[12px] border border-slate-600 px-8 py-1.5 leading-none rounded-full">
							Login
						</button>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default App;
