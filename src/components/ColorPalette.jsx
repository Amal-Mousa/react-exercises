import {useState} from "react";

function ColorPalette() {
	const colors = ["#9253a1", "#f063a4", "#ec015a"];
	const [color, setColor] = useState("#071415");

	const handleColor = newColor => setColor(newColor);
	return <div style={{background: color}}>
			<div className="container">
				{colors.map(color =>
					<button
						style={{background: color, opacity:.7}}
						key={color}
						className="color btn"
						onClick={() => handleColor(color)}
					>
						{color}
					</button>
				)}
			</div>
		</div>;
}
export default ColorPalette;
