import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	//const [variable,funcion(que modifica mi variable)] = useState(//estado inicial/defecto (si deseo/a))
	const [color, setColor] = useState("");

	return (
		<div className="container">
			<h1>El color seleccionado es: {color}</h1>
			<button
				className={color == "red" ? color : ""}
				onClick={() => setColor("red")}>
				Red
			</button>
			<button
				className={
					color == "yellow" ? color : color == "red" ? "texto" : ""
				}
				onClick={() => setColor("yellow")}>
				Yellow
			</button>
			<button
				className={color == "green" ? color : ""}
				onClick={() => setColor("green")}>
				Green
			</button>
		</div>
	);
}
