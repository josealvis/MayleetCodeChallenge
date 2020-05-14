const { solution } = require('./day14-Trie');

test('Should work', () => {
    let trie = new solution();

    trie.insert("apple");
    expect(trie.search("apple")).toBe(true);
    expect(trie.search("app")).toBe(false);
    expect(trie.startsWith("app")).toBe(true);
    trie.insert("app")
    expect(trie.search("app")).toBe(true);

});