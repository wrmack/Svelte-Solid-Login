<script>
	import Card from '../../components/Card.svelte';
	import {onMount} from 'svelte';
	import {loggedIn} from '../../Models/stores.js';
	
	let userID;
	let userName = "";
	
	onMount(async () => {
		const auth = window.solid.auth;
		auth.trackSession(session => {
			if (!session) {
				console.log('The user is not logged in');
				loggedIn.update(n => false);
				window.location = "/login";
			}
			else {
				console.log(`The user is ${session.webId}`);
				loggedIn.update(n => true);
				userID = session.webId;
				userInfo(userID);
			}
		});
	})

	const userInfo = async (userID) => {
		const data = solid.data;
		const user = data[userID];
		const name = await user.name;
		userName = name.value;
		console.log("user name", userName);
	};

</script>


<style>

	h3 {
		font-family: "Roboto", sans-serif;
		font-weight: 300;
		font-size: 1.9rem; 
	}

	h3 span {
		font-family: "Raleway", sans-serif;
		font-weight: bold;
	} 

	/* 
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	} 
	*/

</style>

<svelte:head>
	<title>Solid on svelte</title>
</svelte:head>


<Card>
	<h3>Welcome <span>{userName}</span></h3>
</Card>

<Card>
	<h3>This is a card component</h3>
</Card>

<Card>
	<h3>This is a card component</h3>
</Card>