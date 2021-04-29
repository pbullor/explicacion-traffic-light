import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState("");
	return (
		<div className="contaniner">
			<button
				className={color == "red" ? "red" : ""}
				onClick={() => setColor("red")}>
				Red
			</button>
			<button
				className={color == "yellow" ? "yellow" : ""}
				onClick={() => setColor("yellow")}>
				Yellow
			</button>
			<button
				className={color == "green" ? "green" : ""}
				onClick={() => setColor("green")}>
				Green
			</button>
		</div>
	);
}
