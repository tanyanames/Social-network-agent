import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

export class JsonFileStore {
  constructor(path) {
    this.path = path;
    mkdirSync(dirname(path), { recursive: true });
    this.items = new Map();
    try {
      const records = JSON.parse(readFileSync(path, "utf8"));
      for (const item of records) this.items.set(item.id, item);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }

  save(item) {
    this.items.set(item.id, structuredClone(item));
    const temporary = `${this.path}.tmp`;
    writeFileSync(temporary, JSON.stringify([...this.items.values()], null, 2), "utf8");
    renameSync(temporary, this.path);
    return this.get(item.id);
  }

  get(id) {
    const item = this.items.get(id);
    return item ? structuredClone(item) : null;
  }

  list() {
    return [...this.items.values()].map((item) => structuredClone(item));
  }
}
