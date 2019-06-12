<style>

	.login-panel {
		display: flex;
		flex-direction: column;
		background: #ffffff;
		border-radius: 4px;
		box-sizing: border-box;
		box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
		min-width: 310px;
		min-height: 403px;
		max-width: 420px;
		position: relative;
		margin: auto;
		padding: 40px;
		text-align: center;
		filter: opacity(100%);
	}


/*
  & > h1,
  & > h2 {
    padding: 0;
    margin: 0;
  }

  @media screen and (max-width: 992px) {
    width: auto;
  }
 */

</style>

<div class="login-panel">
	<slot>
		<em>no content was provided</em>
	</slot>
</div>