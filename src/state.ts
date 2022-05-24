import { createShortLinkStore } from '@hooks';
import { writable } from 'svelte/store';
import { useListener } from 'malachite-ui/hooks';
import { isEmpty, isString } from 'malachite-ui/predicate';

export const copiedLink = writable<string | null>(null, (set) => {
  navigator.clipboard.read().then(([item]) => {
    if (item?.types.includes('text/plain')) {
      item
        .getType('text/plain')
        .then((value) => value.text())
        .then(set);
    }
  });

  return useListener(document.body, 'copy', () => {
    const selection = document.getSelection()?.toString();
    if (isString(selection) && !isEmpty(selection)) set(selection);
  });
});

export const links = createShortLinkStore([], 'URL-  SHORTER-APP-OG-LINKS-KEY');
