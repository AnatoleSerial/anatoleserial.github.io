---
layout: base_nav.njk
title: LANCER Garage
eleventyNavigation:
  title: LANCER Garage
  key: LANCER-Garage
  excerpt: Breaking down Lancer's meta paradigms and existing systems.
  parent: LANCER
  order: 1
navOptions:
  showExcerpt: true
---

# What is "LANCER Garage"?

A repository of my ideas, essays, and experiments on running **[LANCER](https://massifpress.com/)**, the mech RPG. 

# List of Articles

{{ collections.all | eleventyNavigation: "LANCER-Garage" | eleventyNavigationToMarkdown: navOptions }}