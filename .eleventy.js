module.exports = function(eleventyConfig) {
  // Date filter
  eleventyConfig.addFilter("readableDate", function(date) {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  });

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/*.png");
  eleventyConfig.addPassthroughCopy("src/*.ico");
  eleventyConfig.addPassthroughCopy("src/*.jpg");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/images");

  // Collections by category
  eleventyConfig.addCollection("essays", function(col) {
    return col.getFilteredByGlob("src/essays/*.md").sort((a,b) => b.date - a.date);
  });
  eleventyConfig.addCollection("fiction", function(col) {
    return col.getFilteredByGlob("src/fiction/*.md").sort((a,b) => b.date - a.date);
  });
  eleventyConfig.addCollection("discourse", function(col) {
    return col.getFilteredByGlob("src/discourse/*.md").sort((a,b) => b.date - a.date);
  });
  eleventyConfig.addCollection("obsessions", function(col) {
    return col.getFilteredByGlob("src/obsessions/*.md").sort((a,b) => b.date - a.date);
  });
  eleventyConfig.addCollection("interviews", function(col) {
    return col.getFilteredByGlob("src/interviews/*.md").sort((a,b) => b.date - a.date);
  });
  eleventyConfig.addCollection("reviews", function(col) {
    return col.getFilteredByGlob("src/reviews/*.md").sort((a,b) => b.date - a.date);
  });
  eleventyConfig.addCollection("poetry", function(col) {
    return col.getFilteredByGlob("src/poetry/*.md").sort((a,b) => b.date - a.date);
  });

  // All articles combined, sorted by date
  eleventyConfig.addCollection("allArticles", function(col) {
    return col.getFilteredByGlob("src/**/*.md").sort((a,b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
