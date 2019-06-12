<style>

/* From @inrupt/solid-style-guide */
.card {
	display: flex;
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	-o-border-radius: 4px;
	border-radius: 4px;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
	-webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
	-moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
	-o-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
	align-items: center;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	padding: 1em 0;
	border: 1px solid rgba(124, 77, 255, 0);
	transition: all .25s ease-in-out;
	width: 100%; 
}



/* Additions / overrides to style guide */
.card {
	background-color: #fff;
	margin: 30px auto;
	/* Overriding the style guide card flexbox settings */
	max-width: 80% !important;
	flex-direction: row !important;
	padding: 30px 10px !important; 
	align-items: center;
}

@media only screen and (min-width: 1000px) {
  .card {
    max-width: 800px!important;
  }
}

</style>

<div class="card">
	<slot>
		<em>no content was provided</em>
	</slot>
</div>