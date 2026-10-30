const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

menuToggle.addEventListener("click", () => {
	const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
	menuToggle.setAttribute("aria-expanded", String(!isExpanded));
	siteNav.classList.toggle("is-open", !isExpanded);
});

siteNav.addEventListener("click", (event) => {
	if (event.target.closest("a")) {
		menuToggle.setAttribute("aria-expanded", "false");
		siteNav.classList.remove("is-open");
	}
});

const revealElements = document.querySelectorAll(
	".vision-grid, .challenge-strip, .plan-title-row, .creativity-gallery-wrap, .initiative, .reference-photo, .wellbeing-copy, .wellbeing-services, .change-heading, .change-row, .data-content, .data-chart",
);

revealElements.forEach((element) => element.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("is-visible");
				observer.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.12 },
);

revealElements.forEach((element) => revealObserver.observe(element));
