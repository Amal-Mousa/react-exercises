import React from "react";

function Counter() {
	const [count, setCount] = React.useState(0);

	const handleIncrement = () => setCount(count + 1);
	const handleDecrement = () => setCount(count - 1);
	const resetCounter = () => setCount(0);

	return (
		<div>
			<p>
				Counter {count}
			</p>
			<button className="btn" onClick={handleIncrement}>
				Increament
			</button>
			<hr />
			<button className="btn" onClick={handleDecrement}>
				Decreament
			</button>
			<hr />
			<button className="btn" onClick={resetCounter}>
				Reseat
			</button>
			<hr />
		</div>
	);
}

export default Counter;
