export class MemoryStore {
  #items = new Map();

  save(item) {
    this.#items.set(item.id, structuredClone(item));
    return this.get(item.id);
  }

  get(id) {
    const item = this.#items.get(id);
    return item ? structuredClone(item) : null;
  }

  list() {
    return [...this.#items.values()].map((item) => structuredClone(item));
  }
}
