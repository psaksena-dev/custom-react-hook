import React from 'react';
import Card from './../card/card.component';
import useFetch from './../../effects/use-fetch.effect';

const User = ({ userId }) => {
	const user = useFetch(
		`https://jsonplaceholder.typicode.com/users?id=${userId}`
	);

	// const [user, setUser] = useState(null);

	// useEffect(() => {
	// 	const fetchUser = async () => {
	// 		const res = await fetch(
	// 			`https://jsonplaceholder.typicode.com/users?id=${userId}`
	// 		);
	// 		const userJson = await res.json();
	// 		setUser(userJson[0]);
	// 	};
	// 	fetchUser();
	// });

	return (
		<Card>
			{user ? (
				<div>
					<h3>{user.username}</h3>
					<p>{user.name}</p>
				</div>
			) : (
				<p>No user found!</p>
			)}
		</Card>
	);
};

export default User;
