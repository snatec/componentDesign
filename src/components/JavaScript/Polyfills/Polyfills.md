Polyfill is JavaScript code that adds missing features to older browsers so that modern JavaScript works everywhere.

Not all browsers support the latest JS or Web APIs.

Example: Array.prototype.includes, Promise, fetch, Object.assign

Sparse Array (with holes)
const fruits = ['apple', , 'orange'];

Indexes:

0 → apple
1 → (empty slot)
2 → orange

Index 1 does not exist