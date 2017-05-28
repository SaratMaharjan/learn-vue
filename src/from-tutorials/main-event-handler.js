
window.Event = new Vue();

Vue.component('coupon', {

	template: `
		<input placeholder="Enter ur Coupon"
		@blur="onCouponApplied">
	`,

	methods: {
		onCouponApplied() {
			Event.$emit('applied');
			this.$emit('applied');
			// alert("applied in component.");
		}
	}

});

new Vue({

  el: '#root',

	methods: {
		onCouponApplied() {
			this.isApplied = true;
		}
	},

	data: {
		isApplied: false
	},

	created() {
		Event.$on('applied', () => alert("Handling it"));
	}

});
