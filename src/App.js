import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import predefinedQueries from "./predefinedQueries";

const App = () => {
	const [query, setQuery] = useState("");
	const [result, setResult] = useState([]);
	const resultSectionRef = useRef(null);

	const handleRunQuery = () => {
		const queryResult =
			predefinedQueries.find(
				(item) => item.query.toLowerCase() === query.toLowerCase()
			)?.data || [];
		setResult(queryResult);
	};

	const handleQueryClick = (selectedQuery) => {
		setQuery(selectedQuery);
	};

	useEffect(() => {
		if (resultSectionRef.current) {
			resultSectionRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [result]);

	return (
		<div className="appContainer">
			<div className="header">
				<h1 className="heading">Sql-Query-Runner</h1>
			</div>
			<div className="queriesSection">
				<h2>Query List</h2>
				<ul className="queryList">
					{predefinedQueries.map((item) => (
						<li
							key={item.name}
							className="queryItem"
							onClick={() => handleQueryClick(item.query)}>
							{item.query}
						</li>
					))}
				</ul>
			</div>
			<div className="querySection">
				<h2>Enter any query from the above to see the results</h2>
				<textarea
					className="textArea"
					rows="5"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Enter your SQL query here and click run"
				/>
				<button className="runButton" onClick={handleRunQuery}>
					Run Query
				</button>
			</div>
			<div className="resultSection" ref={resultSectionRef}>
				<h2>Result</h2>
				<table className="table">
					<thead>
						<tr>
							{result.length > 0 &&
								Object.keys(result[0]).map((key) => (
									<th key={key} className="tableHeader">
										{key}
									</th>
								))}
						</tr>
					</thead>
					<tbody>
						{result.map((row, index) => (
							<tr key={index}>
								{Object.values(row).map((value, index) => (
									<td key={index} className="tableData">
										{value}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default App;
