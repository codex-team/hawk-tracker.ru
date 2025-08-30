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
   * @returns The URL with UTM parameters
   */
  const getUrl = (): string => {
    const url = new URL(baseUrl);

    /* Add UTM parameters */
    url.searchParams.set('utm_source', 'hawk-tracker.ru');
    url.searchParams.set('utm_content', content);

    return url.toString();
  };

  return getUrl;
};
