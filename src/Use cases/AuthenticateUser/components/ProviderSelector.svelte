
<script>
    import { createEventDispatcher } from 'svelte';
    import providers from '../../../Models/providers.json';
    
    console.log("Providers", providers);
	const dispatch = createEventDispatcher();
    let displayProv;
    let text = 'Select ID Provider';

    function toggleDisplayProviders() {
        const el = document.getElementById('dropdown');
        // if (displayProv.style.display == 'none') {
        //     displayProv.style.display = "block";
        //     displayProv.focus();
        // }
        // else {
        //     displayProv.style.display = 'none';
        //     displayProv.blur();
        // }
        if (el.style.display !== 'block') {
            el.style.display = 'block';
        }
        else {
            el.style.display = 'none';
        }
    }

    function handleBlur() {
        console.log("has blur");
        displayProv.style.display = "none";
    }
    
    function handleFocus() {
        console.log("has focus");
    }

    function handleSelectProvider(event) {
        // let selId =  event.target.attributes.id.value;
        let selId =  event.currentTarget.id;
        text = providers[selId].label;
        dispatch('message',{
            provider: providers[selId]
        });
        displayProv.style.display = 'none';
    }

</script>

<style>
    .solid-provider-select {
        position: relative;
        box-sizing: border-box;
        display: block;
    }

    .logo {
        width: 40px;
        margin-left: 10px;
        vertical-align: middle;
    }

    .helper {
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }

    .providerName {
        margin-left: 20px;
    }

    .select-box {
        -webkit-box-align: center;
        align-items: center;
        background-color: rgb(255, 255, 255);
        border-radius: 4px;
        border-color: rgb(204, 204, 204);
        border-style: solid;
        border-width: 1px;
        box-sizing: border-box;
        cursor: default;
        display: flex;
        display: -webkit-flex;
        display: -ms-flexbox;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        justify-content: space-between;
        margin: auto;
        min-height: 38px;
        min-width: 310px;
        padding: 0;
        position: relative;
        text-align: center;
        transition-duration: 100ms;
        transition-timing-function: initial;
        transition-delay: initial;
        transition-property: all;
        box-sizing: border-box;
        outline-color: initial;
        outline-style: initial;
        outline-width: 0px;
        display: -webkit-box;
    }

    .select-box:focus {
        line-height: 18px;
        outline-color: rgb(0, 103, 244);
        outline-style: auto;
        outline-width: 5px;
    }

    .select-box:hover {
        border-color: rgb(179, 179, 179);
    }

    #enter {
        -webkit-box-align: center;
        align-items: center;
        display: flex;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0%;
        flex-wrap: wrap;
        padding: 2px 8px;
        position: relative;
        overflow-x: hidden;
        overflow-y: hidden;
        box-sizing: border-box;
    }

    #placeholder-text {
        color: rgb(127, 127, 127);
        margin-left: 2px;
        margin-right: 2px;
        /* position: absolute;
        top: 50%;
        transform: translateY(-50%); */
        box-sizing: border-box;
    }

    #arrow-container {
        -webkit-box-align: center;
        align-items: center;
        align-self: stretch;
        display: flex;
        flex-shrink: 0;
        box-sizing: border-box;
    }

    #divider {
        align-self: stretch;
        background-color: rgb(204, 204, 204);
        margin-bottom: 8px;
        margin-top: 8px;
        width: 1px;
        box-sizing: border-box;
    }

    .arrow {
        color: rgb(204, 204, 204);
        display: flex;
        padding: 8px;
        transition-duration: 150ms;
        transition-timing-function: initial;
        transition-delay: initial;
        transition-property: color;
        box-sizing: border-box;
        stroke: currentColor;
        stroke-width: 0;
        fill: currentColor;
        line-height: 1px;
    }

    .arrow:hover {
        color: rgb(158, 158, 158);
        fill: currentColor;
    }

    /* .input-field {
        box-sizing: content-box; 
        width: 2px; 
        background: 0px center; 
        border: 0px; 
        font-size: inherit; 
        opacity: 1; 
        outline: 0px; 
        padding: 0px; 
        color: inherit;
    } */

    .provider-list {
        box-sizing: border-box;
        background-color: white;
        display: none;
        position: absolute;
        top: 45px;
        left: 10px;
        width: 85%;
        border-width: 1px;
        border-color: rgb(204, 204, 204);
        border-style: solid;
        border-radius: 4px;
        box-shadow: 0px 0px 10px 1px #bbb5;
        z-index: 10;
    }

    .provider-list:focus {
        outline-style: none;
    }

    .option {
        text-align: left;
        height: 50px;
    }

    .option:last-child {
        border-top: 1px solid rgb(204, 204, 204);
    }

    .option:hover {
        background-color: rgb(232, 232, 255);
    }

</style>

<div class="solid-provider-select">
    <div class="select-box">
        <div id="enter">
            <div id="placeholder-text">{text}</div>
        </div> 
        <div id="arrow-container">
            <span id="divider"></span>
            <div class="arrow" on:click={toggleDisplayProviders} aria-hidden="true" >
                <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" >
                    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                </svg>
            </div>
        </div>
    </div>
    <div class="provider-list" id='dropdown' bind:this={displayProv} on:blur={handleBlur} on:focus={handleFocus} tabindex="0"  >
        <div class="option" id="0" on:click={handleSelectProvider}>
            <span class="helper"></span><img class='logo' src={providers[0].image} alt='first provider' /> <span class='providerName'>{providers[0].label}</span>
        </div>
        <div class="option" id="1" on:click={handleSelectProvider}>
            <span class="helper"></span><img class='logo' src={providers[1].image} alt='second provider' /> <span class='providerName'>{providers[1].label}</span>
        </div>
    </div>
</div>

<!--
Vertically aligning images:
https://stackoverflow.com/questions/7273338/how-to-vertically-align-an-image-inside-a-div
-->
