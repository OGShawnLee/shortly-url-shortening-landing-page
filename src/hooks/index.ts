import type { Expand } from 'malachite-ui/types';
import { type Writable, writable } from 'svelte/store';
import { isArray, isObject, isString } from 'malachite-ui/predicate';

export function createShortLinkStore(initialValue: ShortLink[], localStorageKey: string) {
  const Store: Writable<ShortLink[]> = writable(initialValue, (set) => {
    const raw = localStorage.getItem(localStorageKey);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (isArray(parsed, isShortLink)) set(parsed);
    }
    return Store.subscribe((links) => {
      localStorage.setItem(localStorageKey, JSON.stringify(links));
    });
  });
  const { subscribe, set, update } = Store;
  return {
    subscribe,
    add(shortLink: Expand<Pick<ShortLink, 'inputLink' | 'shortLink'>>) {
      update((links) => [{ id: Date.now(), ...shortLink }, ...links]);
    },
    remove(id: number) {
      update((links) => links.filter((link) => link.id !== id));
    },
    clear() {
      set([]);
    },
  };
}

function isShortLink(val: unknown): val is ShortLink {
  return (
    isObject(val, ['inputLink', 'shortLink']) && isString(val.inputLink) && isString(val.shortLink)
  );
}
