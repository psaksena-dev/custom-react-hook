import './App.css';
import Post from './components/posts/post.component';
import User from './components/user/user.component';

function App() {
	return (
		<div className="App">
			<User userId="10" />
			<Post postId="2" />
		</div>
	);
}

export default App;
