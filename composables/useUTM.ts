/**
 * Composable for generating URLs with UTM tracking parameters
 *
 * @param {string} baseUrl - The base URL to add UTM parameters to
 * @param {string} content - The UTM content parameter for tracking
 * @returns {Function} A function that returns the URL with UTM parameters
 */
export const useUTM = (baseUrl: string, content: string) => {
  /**
   * Generates a URL with UTM tracking parameters
   *
   * @returns {string} The URL with UTM parameters
   */
  const getUrl = (): string => {
    let url: URL;

    try {
      url = new URL(baseUrl);
    } catch (error) {
      return baseUrl;
    }

    /* Default UTM parameters */
    url.searchParams.set('utm_source', 'hawk-tracker.ru');
    url.searchParams.set('utm_content', content);

    /* If current page has utm_* params, override defaults with those */
    if (process.client && typeof window !== 'undefined') {
      const currentSearchParams = new URLSearchParams(window.location.search || '');

      /**
       * If utm_content is overridden, we will add original button content to utm_place
       */
      let isUtmContentOverridden = false;

      currentSearchParams.forEach((value, key) => {
        if (key.toLowerCase().startsWith('utm_')) {
          if (key.toLowerCase() === 'utm_content') {
            isUtmContentOverridden = true;
          }

          url.searchParams.set(key, value);
        }
      });

      if (isUtmContentOverridden && !url.searchParams.has('utm_place')) {
        url.searchParams.set('utm_place', content);
      }
    }

    return url.toString();
  };

  return getUrl;
};
