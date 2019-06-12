<script>
	export let segment;
	import {loggedIn} from '../Models/stores.js';
	
	let loggedInState;

	const unsubscribe = loggedIn.subscribe(value => {
	loggedInState = value;
	});

</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		background-color: rgba(255,255,255,1);
		height: 80px;
	}

	ul {
		margin: 0;
		padding: 20px 0px 0px 20px;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	.hide {
		display: none;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>home</a></li>
		<li><a class='{(segment === "login") || (segment === "register") ? "selected" : ""} {loggedInState ? "hide" : ""}' href='login'>login</a></li>
		<li><a class='{segment === "logout" ? "selected" : ""} {loggedInState ? "" : "hide"}' href='logout'>logout</a></li>
	</ul>
</nav>