<style>
    .gradientbackground {
        background-image: linear-gradient(
            135deg,
            #7c4dff 0%,
            #18a9e6 50%,
            #01c9ea 100%
        );
        background-repeat: no-repeat;
        background-attachment: fixed;
        margin: 0;
        padding-top: 60px;
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        position: relative;
        text-align: center;
    }
/*
    .gradientbackground ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: opacity(30%);
    }
*/
</style>

<div class="gradientbackground">
	<slot>
		<em>no content was provided</em>
	</slot>
</div>