const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("roco");
	eleventyConfig.addPassthroughCopy("src/CNAME");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};