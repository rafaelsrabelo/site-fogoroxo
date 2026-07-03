export interface Testimonial {
  id: string;
  /** Customer name. */
  name: string;
  /** Short context, e.g. "Perdeu 6kg em 90 dias". */
  context: string;
  /** The testimonial quote. */
  quote: string;
  /** Star rating from 1 to 5. */
  rating: number;
}
