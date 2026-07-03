export interface CartItem {
  id: string;
  /** Product name shown in the cart and WhatsApp message. */
  name: string;
  /** Unit price in BRL. */
  price: number;
  /** Optional image path for the cart line thumbnail. */
  image?: string;
}

export interface CartLine extends CartItem {
  /** Quantity of this item in the cart. */
  qty: number;
}
