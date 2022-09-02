const conventionalRecommendedBump = require(`conventional-recommended-bump`);

conventionalRecommendedBump(
  {
    preset: `conventionalcommits`,
    tagPrefix: "",
  },
  (error, recommendation) => {
    console.log(recommendation);
    console.log(recommendation.releaseType); // 'major'
  }
);
