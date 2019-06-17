import { S as SvelteComponentDev, i as init, s as safe_not_equal, k as create_slot, e as element, t as text, c as claim_element, b as children, d as claim_text, f as detach, g as add_location, h as insert, j as append, l as get_slot_changes, o as get_slot_context, a as space, A as svg_element, B as attr, C as listen, D as add_binding_callback, p as set_data, n as noop, E as run_all, F as createEventDispatcher, m as mount_component, z as onMount, G as prevent_default, y as group_outros, w as on_outro, x as check_outros } from './chunk.a7e37d11.js';
import { G as GradientBackground } from './chunk.02f34370.js';

/* src/Use cases/AuthenticateUser/components/LoginPanel.svelte generated by Svelte v3.4.4 */

const file = "src/Use cases/AuthenticateUser/components/LoginPanel.svelte";

function create_fragment(ctx) {
	var div, em, t, current;

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = create_slot(default_slot_1, ctx, null);

	return {
		c: function create() {
			div = element("div");

			if (!default_slot) {
				em = element("em");
				t = text("no content was provided");
			}

			if (default_slot) default_slot.c();
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			if (!default_slot) {
				em = claim_element(div_nodes, "EM", {}, false);
				var em_nodes = children(em);

				t = claim_text(em_nodes, "no content was provided");
				em_nodes.forEach(detach);
			}

			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			if (!default_slot) {
				add_location(em, file, 36, 2, 530);
			}

			div.className = "login-panel svelte-1o585o2";
			add_location(div, file, 34, 0, 494);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);

			if (!default_slot) {
				append(div, em);
				append(em, t);
			}

			else {
				default_slot.m(div, null);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
			}
		},

		i: function intro(local) {
			if (current) return;
			if (default_slot && default_slot.i) default_slot.i(local);
			current = true;
		},

		o: function outro(local) {
			if (default_slot && default_slot.o) default_slot.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
			}

			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	return { $$slots, $$scope };
}

class LoginPanel extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

var providers = [
	{
		label: "Inrupt",
		image: "inrupt.svg",
		value: "https://inrupt.net/auth",
		registerLink: "https://inrupt.net/register",
		description: "Lorem ipsum dolor sit amet non ipsom dolor"
	},
	{
		label: "Solid Community",
		image: "Solid.png",
		value: "https://solid.community",
		registerLink: "https://solid.community/register",
		description: "Lorem ipsum dolor sit non consectetur"
	}
];

/* src/Use cases/AuthenticateUser/components/ProviderSelector.svelte generated by Svelte v3.4.4 */

const file$1 = "src/Use cases/AuthenticateUser/components/ProviderSelector.svelte";

function create_fragment$1(ctx) {
	var div8, div4, div1, div0, t0, t1, div3, span0, t2, div2, svg, path, t3, div7, div5, span1, img0, img0_src_value, t4, span2, t5_value = providers[0].label, t5, t6, div6, span3, img1, img1_src_value, t7, span4, t8_value = providers[1].label, t8, dispose;

	return {
		c: function create() {
			div8 = element("div");
			div4 = element("div");
			div1 = element("div");
			div0 = element("div");
			t0 = text(ctx.text);
			t1 = space();
			div3 = element("div");
			span0 = element("span");
			t2 = space();
			div2 = element("div");
			svg = svg_element("svg");
			path = svg_element("path");
			t3 = space();
			div7 = element("div");
			div5 = element("div");
			span1 = element("span");
			img0 = element("img");
			t4 = space();
			span2 = element("span");
			t5 = text(t5_value);
			t6 = space();
			div6 = element("div");
			span3 = element("span");
			img1 = element("img");
			t7 = space();
			span4 = element("span");
			t8 = text(t8_value);
			this.h();
		},

		l: function claim(nodes) {
			div8 = claim_element(nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div4 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div1 = claim_element(div4_nodes, "DIV", { id: true, class: true }, false);
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", { id: true, class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, ctx.text);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t1 = claim_text(div4_nodes, " \n        ");

			div3 = claim_element(div4_nodes, "DIV", { id: true, class: true }, false);
			var div3_nodes = children(div3);

			span0 = claim_element(div3_nodes, "SPAN", { id: true, class: true }, false);
			var span0_nodes = children(span0);

			span0_nodes.forEach(detach);
			t2 = claim_text(div3_nodes, "\n            ");

			div2 = claim_element(div3_nodes, "DIV", { class: true, "aria-hidden": true }, false);
			var div2_nodes = children(div2);

			svg = claim_element(div2_nodes, "svg", { height: true, width: true, viewBox: true, "aria-hidden": true, focusable: true }, true);
			var svg_nodes = children(svg);

			path = claim_element(svg_nodes, "path", { d: true }, true);
			var path_nodes = children(path);

			path_nodes.forEach(detach);
			svg_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t3 = claim_text(div8_nodes, "\n    ");

			div7 = claim_element(div8_nodes, "DIV", { class: true, id: true, tabindex: true }, false);
			var div7_nodes = children(div7);

			div5 = claim_element(div7_nodes, "DIV", { class: true, id: true }, false);
			var div5_nodes = children(div5);

			span1 = claim_element(div5_nodes, "SPAN", { class: true }, false);
			var span1_nodes = children(span1);

			span1_nodes.forEach(detach);

			img0 = claim_element(div5_nodes, "IMG", { class: true, src: true, alt: true }, false);
			var img0_nodes = children(img0);

			img0_nodes.forEach(detach);
			t4 = claim_text(div5_nodes, " ");

			span2 = claim_element(div5_nodes, "SPAN", { class: true }, false);
			var span2_nodes = children(span2);

			t5 = claim_text(span2_nodes, t5_value);
			span2_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t6 = claim_text(div7_nodes, "\n        ");

			div6 = claim_element(div7_nodes, "DIV", { class: true, id: true }, false);
			var div6_nodes = children(div6);

			span3 = claim_element(div6_nodes, "SPAN", { class: true }, false);
			var span3_nodes = children(span3);

			span3_nodes.forEach(detach);

			img1 = claim_element(div6_nodes, "IMG", { class: true, src: true, alt: true }, false);
			var img1_nodes = children(img1);

			img1_nodes.forEach(detach);
			t7 = claim_text(div6_nodes, " ");

			span4 = claim_element(div6_nodes, "SPAN", { class: true }, false);
			var span4_nodes = children(span4);

			t8 = claim_text(span4_nodes, t8_value);
			span4_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.id = "placeholder-text";
			div0.className = "svelte-1e6kb6v";
			add_location(div0, file$1, 232, 12, 5521);
			div1.id = "enter";
			div1.className = "svelte-1e6kb6v";
			add_location(div1, file$1, 231, 8, 5492);
			span0.id = "divider";
			span0.className = "svelte-1e6kb6v";
			add_location(span0, file$1, 235, 12, 5624);
			attr(path, "d", "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z");
			add_location(path, file$1, 238, 20, 5860);
			attr(svg, "height", "20");
			attr(svg, "width", "20");
			attr(svg, "viewBox", "0 0 20 20");
			attr(svg, "aria-hidden", "true");
			attr(svg, "focusable", "false");
			add_location(svg, file$1, 237, 16, 5753);
			div2.className = "arrow svelte-1e6kb6v";
			attr(div2, "aria-hidden", "true");
			add_location(div2, file$1, 236, 12, 5663);
			div3.id = "arrow-container";
			div3.className = "svelte-1e6kb6v";
			add_location(div3, file$1, 234, 8, 5585);
			div4.className = "select-box svelte-1e6kb6v";
			add_location(div4, file$1, 230, 4, 5459);
			span1.className = "helper svelte-1e6kb6v";
			add_location(span1, file$1, 245, 12, 6433);
			img0.className = "logo svelte-1e6kb6v";
			img0.src = img0_src_value = providers[0].image;
			img0.alt = "first provider";
			add_location(img0, file$1, 245, 40, 6461);
			span2.className = "providerName svelte-1e6kb6v";
			add_location(span2, file$1, 245, 107, 6528);
			div5.className = "option svelte-1e6kb6v";
			div5.id = "0";
			add_location(div5, file$1, 244, 8, 6361);
			span3.className = "helper svelte-1e6kb6v";
			add_location(span3, file$1, 248, 12, 6678);
			img1.className = "logo svelte-1e6kb6v";
			img1.src = img1_src_value = providers[1].image;
			img1.alt = "second provider";
			add_location(img1, file$1, 248, 40, 6706);
			span4.className = "providerName svelte-1e6kb6v";
			add_location(span4, file$1, 248, 108, 6774);
			div6.className = "option svelte-1e6kb6v";
			div6.id = "1";
			add_location(div6, file$1, 247, 8, 6606);
			div7.className = "provider-list svelte-1e6kb6v";
			div7.id = "dropdown";
			div7.tabIndex = "0";
			add_location(div7, file$1, 243, 4, 6228);
			div8.className = "solid-provider-select svelte-1e6kb6v";
			add_location(div8, file$1, 229, 0, 5419);

			dispose = [
				listen(div2, "click", toggleDisplayProviders),
				listen(div5, "click", ctx.handleSelectProvider),
				listen(div6, "click", ctx.handleSelectProvider),
				listen(div7, "blur", ctx.handleBlur),
				listen(div7, "focus", handleFocus)
			];
		},

		m: function mount(target, anchor) {
			insert(target, div8, anchor);
			append(div8, div4);
			append(div4, div1);
			append(div1, div0);
			append(div0, t0);
			append(div4, t1);
			append(div4, div3);
			append(div3, span0);
			append(div3, t2);
			append(div3, div2);
			append(div2, svg);
			append(svg, path);
			append(div8, t3);
			append(div8, div7);
			append(div7, div5);
			append(div5, span1);
			append(div5, img0);
			append(div5, t4);
			append(div5, span2);
			append(span2, t5);
			append(div7, t6);
			append(div7, div6);
			append(div6, span3);
			append(div6, img1);
			append(div6, t7);
			append(div6, span4);
			append(span4, t8);
			add_binding_callback(() => ctx.div7_binding(div7, null));
		},

		p: function update(changed, ctx) {
			if (changed.text) {
				set_data(t0, ctx.text);
			}

			if (changed.items) {
				ctx.div7_binding(null, div7);
				ctx.div7_binding(div7, null);
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(div8);
			}

			ctx.div7_binding(null, div7);
			run_all(dispose);
		}
	};
}

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

function handleFocus() {
    console.log("has focus");
}

function instance$1($$self, $$props, $$invalidate) {
	
    
    console.log("Providers", providers);
	const dispatch = createEventDispatcher();
    let displayProv;
    let text = 'Select ID Provider';

    function handleBlur() {
        console.log("has blur");
        displayProv.style.display = "none"; $$invalidate('displayProv', displayProv);
    }

    function handleSelectProvider(event) {
        // let selId =  event.target.attributes.id.value;
        let selId =  event.currentTarget.id;
        $$invalidate('text', text = providers[selId].label);
        dispatch('message',{
            provider: providers[selId]
        });
        displayProv.style.display = 'none'; $$invalidate('displayProv', displayProv);
    }

	function div7_binding($$node, check) {
		displayProv = $$node;
		$$invalidate('displayProv', displayProv);
	}

	return {
		displayProv,
		text,
		handleBlur,
		handleSelectProvider,
		div7_binding
	};
}

class ProviderSelector extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, []);
	}
}

/* src/Use cases/AuthenticateUser/AuthenticateUser.svelte generated by Svelte v3.4.4 */

const file$2 = "src/Use cases/AuthenticateUser/AuthenticateUser.svelte";

// (153:5) {:else}
function create_else_block(ctx) {
	var input;

	return {
		c: function create() {
			input = element("input");
			this.h();
		},

		l: function claim(nodes) {
			input = claim_element(nodes, "INPUT", { id: true, type: true, name: true, placeholder: true, class: true }, false);
			var input_nodes = children(input);

			input_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			input.id = "idp";
			attr(input, "type", "text");
			input.name = "idp";
			input.placeholder = "WebID";
			input.className = "svelte-1b9fj8z";
			add_location(input, file$2, 153, 6, 3388);
		},

		m: function mount(target, anchor) {
			insert(target, input, anchor);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(input);
			}
		}
	};
}

// (151:5) {#if useSelectionProvider}
function create_if_block(ctx) {
	var current;

	var providerselector = new ProviderSelector({ $$inline: true });
	providerselector.$on("message", ctx.handleProviderSelected);

	return {
		c: function create() {
			providerselector.$$.fragment.c();
		},

		l: function claim(nodes) {
			providerselector.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(providerselector, target, anchor);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			providerselector.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			providerselector.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			providerselector.$destroy(detaching);
		}
	};
}

// (143:1) <LoginPanel>
function create_default_slot_1(ctx) {
	var div2, div1, a0, t0, t1, a1, t2, t3, span1, span0, t4, t5, div0, form, current_block_type_index, if_block, t6, button0, t7, t8, button1, t9, current, dispose;

	var if_block_creators = [
		create_if_block,
		create_else_block
	];

	var if_blocks = [];

	function select_block_type(ctx) {
		if (ctx.useSelectionProvider) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c: function create() {
			div2 = element("div");
			div1 = element("div");
			a0 = element("a");
			t0 = text("Register for a solid identity");
			t1 = space();
			a1 = element("a");
			t2 = text("What is a Solid Identity?");
			t3 = space();
			span1 = element("span");
			span0 = element("span");
			t4 = text("Log in");
			t5 = space();
			div0 = element("div");
			form = element("form");
			if_block.c();
			t6 = space();
			button0 = element("button");
			t7 = text(ctx.providerWebidText);
			t8 = space();
			button1 = element("button");
			t9 = text("Log In");
			this.h();
		},

		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div1 = claim_element(div2_nodes, "DIV", {}, false);
			var div1_nodes = children(div1);

			a0 = claim_element(div1_nodes, "A", { class: true, href: true }, false);
			var a0_nodes = children(a0);

			t0 = claim_text(a0_nodes, "Register for a solid identity");
			a0_nodes.forEach(detach);
			t1 = claim_text(div1_nodes, "\n\t\t\t\t");

			a1 = claim_element(div1_nodes, "A", { href: true, rel: true, target: true, class: true }, false);
			var a1_nodes = children(a1);

			t2 = claim_text(a1_nodes, "What is a Solid Identity?");
			a1_nodes.forEach(detach);
			t3 = claim_text(div1_nodes, "\n\t\t\t\t");

			span1 = claim_element(div1_nodes, "SPAN", { class: true }, false);
			var span1_nodes = children(span1);

			span0 = claim_element(span1_nodes, "SPAN", { class: true }, false);
			var span0_nodes = children(span0);

			t4 = claim_text(span0_nodes, "Log in");
			span0_nodes.forEach(detach);
			span1_nodes.forEach(detach);
			t5 = claim_text(div1_nodes, "\n\t\t\t\t");

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			form = claim_element(div0_nodes, "FORM", {}, false);
			var form_nodes = children(form);

			if_block.l(form_nodes);
			t6 = claim_text(form_nodes, "\n\t\t\t\t\t\t");

			button0 = claim_element(form_nodes, "BUTTON", { type: true, class: true }, false);
			var button0_nodes = children(button0);

			t7 = claim_text(button0_nodes, ctx.providerWebidText);
			button0_nodes.forEach(detach);
			t8 = claim_text(form_nodes, "\n\t\t\t\t\t\t");

			button1 = claim_element(form_nodes, "BUTTON", { type: true, class: true }, false);
			var button1_nodes = children(button1);

			t9 = claim_text(button1_nodes, "Log In");
			button1_nodes.forEach(detach);
			form_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			a0.className = "ids-link-filled ids-link-filled--primary";
			a0.href = "/register";
			add_location(a0, file$2, 145, 4, 2850);
			a1.href = "https://solid.inrupt.com/get-a-solid-pod";
			a1.rel = "noopener noreferrer";
			a1.target = "_blank";
			a1.className = "link";
			add_location(a1, file$2, 146, 4, 2957);
			span0.className = "svelte-1b9fj8z";
			add_location(span0, file$2, 147, 30, 3123);
			span1.className = "panel-title svelte-1b9fj8z";
			add_location(span1, file$2, 147, 4, 3097);
			button0.type = "button";
			button0.className = "link svelte-1b9fj8z";
			add_location(button0, file$2, 155, 6, 3465);
			button1.type = "submit";
			button1.className = "login svelte-1b9fj8z";
			add_location(button1, file$2, 156, 6, 3571);
			add_location(form, file$2, 149, 5, 3204);
			div0.className = "solid-provider-login-component";
			add_location(div0, file$2, 148, 4, 3154);
			add_location(div1, file$2, 144, 3, 2840);
			div2.className = "panel-body svelte-1b9fj8z";
			add_location(div2, file$2, 143, 2, 2812);

			dispose = [
				listen(button0, "click", ctx.toggleSelectionProvider),
				listen(form, "submit", prevent_default(ctx.handleFormSubmit))
			];
		},

		m: function mount(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div1);
			append(div1, a0);
			append(a0, t0);
			append(div1, t1);
			append(div1, a1);
			append(a1, t2);
			append(div1, t3);
			append(div1, span1);
			append(span1, span0);
			append(span0, t4);
			append(div1, t5);
			append(div1, div0);
			append(div0, form);
			if_blocks[current_block_type_index].m(form, null);
			append(form, t6);
			append(form, button0);
			append(button0, t7);
			append(form, t8);
			append(form, button1);
			append(button1, t9);
			current = true;
		},

		p: function update(changed, ctx) {
			var previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);
			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(changed, ctx);
			} else {
				group_outros();
				on_outro(() => {
					if_blocks[previous_block_index].d(1);
					if_blocks[previous_block_index] = null;
				});
				if_block.o(1);
				check_outros();

				if_block = if_blocks[current_block_type_index];
				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}
				if_block.i(1);
				if_block.m(form, t6);
			}

			if (!current || changed.providerWebidText) {
				set_data(t7, ctx.providerWebidText);
			}
		},

		i: function intro(local) {
			if (current) return;
			if (if_block) if_block.i();
			current = true;
		},

		o: function outro(local) {
			if (if_block) if_block.o();
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div2);
			}

			if_blocks[current_block_type_index].d();
			run_all(dispose);
		}
	};
}

// (141:0) <GradientBackground>
function create_default_slot(ctx) {
	var div, h2, t0, t1, current;

	var loginpanel = new LoginPanel({
		props: {
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			div = element("div");
			h2 = element("h2");
			t0 = text("Hi! Welcome to Solid");
			t1 = space();
			loginpanel.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			h2 = claim_element(div_nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t0 = claim_text(h2_nodes, "Hi! Welcome to Solid");
			h2_nodes.forEach(detach);
			div_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n\t");
			loginpanel.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			h2.className = "svelte-1b9fj8z";
			add_location(h2, file$2, 141, 22, 2760);
			div.className = "welcome svelte-1b9fj8z";
			add_location(div, file$2, 141, 1, 2739);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			append(div, h2);
			append(h2, t0);
			insert(target, t1, anchor);
			mount_component(loginpanel, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var loginpanel_changes = {};
			if (changed.$$scope || changed.providerWebidText || changed.useSelectionProvider) loginpanel_changes.$$scope = { changed, ctx };
			loginpanel.$set(loginpanel_changes);
		},

		i: function intro(local) {
			if (current) return;
			loginpanel.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			loginpanel.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
				detach(t1);
			}

			loginpanel.$destroy(detaching);
		}
	};
}

function create_fragment$2(ctx) {
	var t, current;

	var gradientbackground = new GradientBackground({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			t = space();
			gradientbackground.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "\n\n");
			gradientbackground.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			document.title = "Login";
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
			mount_component(gradientbackground, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var gradientbackground_changes = {};
			if (changed.$$scope || changed.providerWebidText || changed.useSelectionProvider) gradientbackground_changes.$$scope = { changed, ctx };
			gradientbackground.$set(gradientbackground_changes);
		},

		i: function intro(local) {
			if (current) return;
			gradientbackground.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			gradientbackground.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}

			gradientbackground.$destroy(detaching);
		}
	};
}

function instance$2($$self, $$props, $$invalidate) {
	
	
    let auth;
	let useSelectionProvider = false;
    let selectedProvider = {};
    let providerWebidText = "Log In with Provider";

	onMount(async () => {
		auth = window.solid.auth;
		console.log("auth2", auth);
	});

	function toggleSelectionProvider() {
        $$invalidate('useSelectionProvider', useSelectionProvider = useSelectionProvider ? false : true);
        $$invalidate('providerWebidText', providerWebidText = useSelectionProvider ? "Log In with WebID" : "Log In with Provider");
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
                console.log(`The user is ${session.webId}`);
				window.location = "/";
			}
		});
	}

	return {
		useSelectionProvider,
		providerWebidText,
		toggleSelectionProvider,
		handleProviderSelected,
		handleFormSubmit
	};
}

class AuthenticateUser extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, []);
	}
}

/* src/routes/login.svelte generated by Svelte v3.4.4 */

function create_fragment$3(ctx) {
	var t, current;

	var authenticateuser = new AuthenticateUser({ $$inline: true });

	return {
		c: function create() {
			t = space();
			authenticateuser.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "\n\n");
			authenticateuser.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			document.title = "Login";
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
			mount_component(authenticateuser, target, anchor);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			authenticateuser.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			authenticateuser.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}

			authenticateuser.$destroy(detaching);
		}
	};
}

class Login extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment$3, safe_not_equal, []);
	}
}

export default Login;
