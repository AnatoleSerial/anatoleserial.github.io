---js
{
  title: "anatoleserial.com",
  layout: "base.njk",
  navigationOptions: {
    listElement: "ul",            // Change the top level tag
    listItemElement: "li",        // Change the item tag
    listClass: "navTop",                // Add a class to the top level
    listItemClass: "navItem",            // Add a class to every item
    listItemHasChildrenClass: "navTop", // Add a class if the item has children
    showExcerpt: false
  }
}
---

{{ collections.all | eleventyNavigation | eleventyNavigationToHtml: navigationOptions }}
