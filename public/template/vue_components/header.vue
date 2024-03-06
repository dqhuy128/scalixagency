<template>
	<header class="header"></header>
</template>

<script>
	module.exports = {
		data() {
			return {};
		},
		created() {
			$(window).bind('load', function () {
				// headerSearchDropdown();
				// mobileMenu();
				// headerScrollSticky();
				// mobileMenuToggle();
			});
		}
	};
</script>
