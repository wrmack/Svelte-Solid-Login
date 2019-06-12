<script>
	import GradientBackground from '../../components/GradientBackground.svelte';
	import RegisterPanel from './components/RegisterPanel.svelte';

	const handleClickNext = () => () => {
		let el = document.querySelectorAll('input[type="radio"]:checked');
		let reg = el[0].value;
		console.log('Value', reg);
		window.location = reg + 
        "?returnToUrl=" +
        window.location.protocol +
        "//" +
        window.location.host +
        "/register/success";
	}

</script>

<style>
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

	.register-body {
		height: 100% !important;
		animation: fadeIn 0.2s ease-in;
	}

  	.register-body a {
		display: block;
		color: #449df5;
		font-family: Raleway;
		font-size: 12px;
		font-weight: 500;
		letter-spacing: 0.75px;
		line-height: 14px;
		text-align: center;
		text-decoration: none;
	  }
	.register-body a:hover {
		font-weight: 700;
	}

	.a-with-spacing {
		margin: 24px 0;
	}

	ul {
		padding: 0;
		margin: 0;
	}

	label {
		cursor: pointer;
		display: flex;
		align-items: center;
		width: 100%;
		border: solid 1.2px rgba(115, 127, 137, 1);
		height: 40px;
		margin-bottom: 20.5px;
		box-sizing: border-box;
		padding-left: 20px;
		position: relative;
		overflow: hidden;
		box-sizing: border-box;
		transition: all 0.2s ease-in;
		display: flex;
		justify-content: space-between;
		padding: 0 8px;
		border-radius: 4px;
	}

	.checked {
		display: none;
	}

	label:hover {
		border-color: #5361fd;
		color: #5361fd;
	}

	label:last-child {
		margin-bottom: 0;
	}

	.img-group {
		display: flex;
		align-items: center;
	}

    .img-group img {
      width: 32px;
      padding-right: 1em;
    }


	li {
		list-style: none;
		padding: 10px 0;
		margin: 0;
	}

	li input[type="radio"] {
		display: none;
	}

    li input[type="radio"]:checked {
        border-color: #5361fd;
        color: #5361fd;
	}

	li input[type="radio"]:checked+.provider-item .checked {
		display: block;
		color: green;
		width: 1em;
	}

	.actions {
		height: 32px;
		box-sizing: border-box;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		margin-top: 40px;
	}

	.actions button {
		height: 32px;
		width: 150px;
		border-radius: 4px;
		font-family: Raleway;
		font-size: 10px;
		font-weight: bold;
		letter-spacing: 0.89px;
		line-height: 11px;
		text-align: center;
		text-transform: uppercase;
		border: solid 2px #449df5;
		box-sizing: border-box;
	}

	.btn-solid {
		background-color: #449df5;
		color: #ffffff;
	}

	.btn-outlined {
		background-color: #ffffff;
		color: #449df5;
		filter: opacity(40%);
	}


</style>




<GradientBackground>
	<div class='welcome'><h2>Hi! Welcome to Solid</h2></div>
	<RegisterPanel>
		<div class='register-body'>
			<a href="https://solid.inrupt.com/how-it-works" target="_blank" rel="noopener noreferrer">What is a provider, and how should I choose one?</a>
			<a class="a-with-spacing" href="/login">I already have a Solid identity</a>
			<ul>
				<li>
					<input type="radio" name="providerRadio" id="radio-0" value="https://inrupt.net/register">
					<label for="radio-0" class="provider-item">
						<div class="img-group">
							<img src="inrupt.svg" alt="Inrupt"><span class="label">Inrupt</span>
						</div>
						<svg aria-hidden="true" data-prefix="fas" data-icon="check" class="checked" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
						</svg>
					</label>
				</li>
				<li>
					<input type="radio" name="providerRadio" id="radio-1" value="https://solid.community/register">
					<label for="radio-1" class="provider-item">
						<div class="img-group">
							<img src="Solid.png" alt="Solid Community"><span class="label">Solid Community</span>
						</div>
						<svg aria-hidden="true" data-prefix="fas" data-icon="check" class="checked" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
						</svg>
					</label>
				</li>
			</ul>
		</div>
		<div class="actions">
			<button class="btn-solid" on:click={handleClickNext()}>Next</button>
		</div>
	</RegisterPanel>
</GradientBackground>