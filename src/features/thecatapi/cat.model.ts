/**
 * Represents a cat from thecatapi.com.
 */
export interface Cat {
  /**
   * The unique image id.
   */
  id: string

  /**
   * The absolute url to the image.
   */
  url: string

  /**
   * The identifier for the user who uploaded the image.
   */
  sub_id: string

  /**
   * Timestamp that the image was uploaded.
   */
  created_at: string

  /**
   * If a favourite for the current user this contains the id for the favourite object.
   */
  favourite?: { id: string }

  /**
   * If voted for by the current user this contains the id for the vote object and the vote value.
   */
  vote?: {
    id: string
    value: 1 | 0
  }
}
