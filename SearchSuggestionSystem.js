class SearchSuggestionSystem {
  constructor(products) {
    // Sort the product names lexicographically
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    const result = [];
    let prefix = "";

    for (let char of searchWord) {
      prefix += char;
      const suggestions = [];

      for (let product of this.products) {
        if (product.startsWith(prefix)) {
          suggestions.push(product);
        }
        if (suggestions.length === 3) break;
      }

      result.push(suggestions);
    }

    return result;
  }
}

// Example usage:
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";

const sss = new SearchSuggestionSystem(products);
const suggestions = sss.getSuggestions(searchWord);

console.log(suggestions);
