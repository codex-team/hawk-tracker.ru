/**
 * Structure of a single feature
 */
export interface Feature {
  /**
   * Feature name
   */
  title: string;

  /**
   * Short caption
   */
  description: string;

  /**
   * Image path
   */
  picture?: string;

  /**
   * Custom component name that should be used instead of picture
   */
  pictureComponent?: string;

  /**
   * Additional style overrides
   */
  style?: string | undefined;
}
