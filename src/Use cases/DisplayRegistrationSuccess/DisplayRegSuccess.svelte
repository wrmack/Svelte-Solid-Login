<script>
    import GradientBackground from '../../components/GradientBackground.svelte';
    import {onMount} from 'svelte';
    
    let interval;
    let timeLeft = 15;

	onMount(async () => {
        interval = setInterval(countDown, 1000);
    });
    

    const countDown = () => {
        timeLeft -= 1; 
        if (timeLeft === 0) 
            redirect();
    };

    const redirect = async () => {
        await clearInterval(interval);
        window.location = "/login";
    };


</script>
    
<style>

    h1 {
        font-size: 28px;
        font-weight: bold;
    }

    span {
        color: #ffffff;
        font-family: Raleway;
        font-size: 16px;
        font-weight: bold;
        line-height: 20px;
        text-align: center;
        display: block;
        padding: 1.5em 0;
    }

    .rocket {
        width: 250px;
        height: 250px;
        text-align: center;
        padding: 40px 0 40px 0;
    }


</style>



<GradientBackground class="gradient-background">

    <h1>Success! Welcome to the decentralized web.</h1>
    <img src="rocket.svg" alt="rocket" class="rocket" />
    <span>We have emailed you more information about your new Solid Identity</span>
    <span>We will redirect you to your POD in {timeLeft} seconds...</span>

</GradientBackground>