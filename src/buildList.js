const { version } = require("../package.json");
const polygon = require("./tokens/polygon.json");
const tags = require("./tags");

module.exports = function buildList() {
  const parsed = version.split(".");
  const list = {
    name: "Stableswap Token List",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: tags,
    logoURI: "ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir",
    keywords: ["stableswap", "token", "stablecoin", "list"],
    tokens: [...polygon]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
  return list;
};
