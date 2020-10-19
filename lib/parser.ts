import { platforms } from './platforms';
import { ContentType, PlatformObject } from './interfaces';

export function analyse(link: string): PlatformObject | undefined {
  for (const platform of Object.values(platforms)) {
    if (!link.match(platform.baseURLMatch)) continue;

    // loop over the keys in the platform's "contentTypeMatches" property
    for (const contentTypeMatch in platform.contentTypeMatches) {
      // each regex entry should be ordered so the most simple is LAST in the object
      // the key of the entry into this object should be the ContentType ("clip" | "stream" | "video" etc)
      const matched = link.match(platform.contentTypeMatches[contentTypeMatch as ContentType] || '');

      if (!matched) continue;

      // Return the full platform and the new data in a new object. Let's not write to the global spec, hey? ;)
      return {
        ...platform,
        extractedId: extract(matched),
        contentType: contentTypeMatch,
      };
    }

    // this shouldn't get hit, in theory
    return undefined;
  }
}

export function extract(matched: RegExpMatchArray) {
  if (!matched) return undefined;
  for (let i = 0; i < matched.length; i++) {
    if (i > 0 && matched[i] !== undefined) return matched[i];
  }
}
