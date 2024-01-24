import { useState } from "react";
import { useEffect } from "react";
// import { useState } from "react";

const App = () => {
	const [posts, setPosts] = useState([]);
	console.log(posts);
	// const [userId, setUserId] = useState(1);
	// console.log(posts);
	const getTodos = async () => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts`
			);
			const responseData = await response.json();
			setPosts(responseData);
		} catch (error) {
			console.error("Backend упал ", error);
		}
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<div>
			{posts.map((item) => (
				<div key={item.id}>
					<h1>{item.title}</h1>
					<p>{item.body}</p>
				</div>
			))}
		</div>
	);
};

export default App;
