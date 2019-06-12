<script>
    import {loggedIn} from '../Models/stores.js';
    import {onMount} from 'svelte';

    onMount(async () => {
        try {
            const auth = window.solid.auth;
            await auth.logout();
            localStorage.removeItem('solid-auth-client');
            loggedIn.update(n => false);
            window.location = '/login';
        }
        catch(err) {
            console.log('Error: ',err);
        }
    })

</script>

<style>
    h1 {
        text-align: center;
        margin-top: 100px;
    }

</style>

<div>
<h1>Logging out!</h1>

</div>