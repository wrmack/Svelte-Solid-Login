<script>
	import GradientBackground from '../../components/GradientBackground.svelte';
	import LoginPanel from './components/LoginPanel.svelte';
	import ProviderSelector from './components/ProviderSelector.svelte';
	import {onMount} from 'svelte';
	
    let auth;
	let useSelectionProvider = false;
    let selectedProvider = {};
    let providerWebidText = "Log In with Provider";

	onMount(async () => {
		auth = window.solid.auth;
		console.log("auth2", auth);
	});

	function toggleSelectionProvider() {
        useSelectionProvider = useSelectionProvider ? false : true;
        providerWebidText = useSelectionProvider ? "Log In with WebID" : "Log In with Provider";
	}

	function handleProviderSelected(event) {
		console.log("Selected provider is:", event.detail.provider);
		selectedProvider = event.detail.provider;
	}

	async function handleFormSubmit() {
		let providerUrl;
		if (useSelectionProvider) {
			providerUrl = selectedProvider.value;
		}
		else {
			providerUrl = document.getElementById('idp').value;
		}
		await auth.trackSession(session => {
			if (!session) {
				console.log('The user is not logged in');
				const uri = window.location.origin + '/regsuccess';
				auth.login(providerUrl, {uri, storage: localStorage});
			}
			else {
                console.log(`The user is ${session.webId}`)
				window.location = "/";
			}
		})
	}
</script>


<style>
	input {
		width: 100%;
	}

	.welcome {
		width: 100%;
		text-align: center;
	}

	.welcome h2 {
		color: white;
		font-family: 'Raleway', sans-serif;
		font-size: 40px;
		font-weight: 500;
		margin: 0 0 40px 0;
	}


	.panel-body {
		display: grid;
  		flex-direction: column;
		filter:opacity(100%)
	}

	.panel-title {
		color: #656e75;
		font-family: 'Raleway', sans-serif;
		font-size: 16px;
		font-weight: 500;
		letter-spacing: 1.2px;
		line-height: 19px;
		text-align: center;
		position: relative;
		margin: 30px 0;
		display: inline-block;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
	}

	.panel-title::before {
		width: 32%;
		content: "";
		background: #656e75;
		height: 1px;
		box-sizing: border-box;
		top: 50%;
	}
	.panel-title::after {
		width: 32%;
		content: "";
		background: #656e75;
		height: 1px;
		box-sizing: border-box;
		top: 50%;
    }
  
	button.link {
		background: none;
		border: none;
		color: #449DF5;
		margin: 20px auto;
		padding: 0;
	}
	button.login {
		border: none;
		padding: 10px 30px;
		margin: 20px auto;
		display: block;
		background-color: #babbbb;
		-webkit-appearance: none; 
    }
  
	span {
		padding: 0 5px;
	}
	span::before {
		right: 0;
	}
	span::after {
		left: 0;
	}
</style>

<svelte:head>
	<title>Login</title>
</svelte:head>

<GradientBackground>
	<div class='welcome'><h2>Hi! Welcome to Solid</h2></div>
	<LoginPanel>
		<div class='panel-body'>
			<div>
				<a class="ids-link-filled ids-link-filled--primary" href="/register">Register for a solid identity</a>
				<a href="https://solid.inrupt.com/get-a-solid-pod" rel="noopener noreferrer" target="_blank" class="link">What is a Solid Identity?</a>
				<span class='panel-title'><span>Log in</span></span>
				<div class="solid-provider-login-component">
					<form on:submit|preventDefault="{handleFormSubmit}">
					{#if useSelectionProvider}
						<ProviderSelector on:message={handleProviderSelected}></ProviderSelector>
					{:else}
						<input id="idp" type="text" name="idp" placeholder="WebID">
					{/if}
						<button type="button" class="link" on:click={toggleSelectionProvider} >{providerWebidText}</button>
						<button type="submit" class="login" >Log In</button>
					</form>
				</div>
			</div>
		</div>
	</LoginPanel>
</GradientBackground>

<!--
See https://github.com/inrupt/solid-react-components/blob/master/src/lib/components/ProviderLogin/children/Form/form.presentational.js

-->