<style>

	.register-panel {
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

    .panel-header {
        position: relative;
    }
    .panel-header h2 {
        position: relative;
        padding: 0;
        color: #5361fd;
        font-family: Raleway;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 0.75px;
        line-height: 24px;
        text-align: center;
        margin-bottom: 40px;
        animation: fadeIn 0.5s ease-in;
    }

    .progress-bar {
        position: absolute;
        height: 1px;
        width: 100%;
        background: #5361fd;
        top: 30px;
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

<div class="register-panel">
    <div class="panel-header"><h2>Select your Provider</h2><div class="progress-bar"></div></div>
	<slot>
		<em>no content was provided</em>
	</slot>
</div>