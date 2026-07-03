"use client";

// React
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

// Types
import type { PropsWithChildren } from "react";
import type { CartItem, CartLine } from "./cart-provider.types";

const STORAGE_KEY = "fogo-roxo-cart";

type CartAction =
  | { type: "add"; item: CartItem; qty: number }
  | { type: "remove"; id: string }
  | { type: "setQty"; id: string; qty: number }
  | { type: "clear" }
  | { type: "hydrate"; lines: CartLine[] };

function cartReducer(state: CartLine[], action: CartAction): CartLine[] {
  switch (action.type) {
    case "hydrate":
      return action.lines;
    case "add": {
      const existing = state.find((line) => line.id === action.item.id);
      if (existing) {
        return state.map((line) =>
          line.id === action.item.id
            ? { ...line, qty: line.qty + action.qty }
            : line,
        );
      }
      return [...state, { ...action.item, qty: action.qty }];
    }
    case "remove":
      return state.filter((line) => line.id !== action.id);
    case "setQty":
      return state
        .map((line) =>
          line.id === action.id ? { ...line, qty: action.qty } : line,
        )
        .filter((line) => line.qty > 0);
    case "clear":
      return [];
    default:
      return state;
  }
}

interface CartContextValue {
  lines: CartLine[];
  count: number;
  total: number;
  isOpen: boolean;
  addItem: (item: CartItem, qty?: number) => void;
  removeItem: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: PropsWithChildren) {
  const [lines, dispatch] = useReducer(cartReducer, []);
  const [isOpen, setIsOpen] = useState(false);

  // Hydrate from localStorage once on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "hydrate", lines: JSON.parse(raw) as CartLine[] });
    } catch {
      // Ignore malformed storage — start with an empty cart.
    }
  }, []);

  // Persist on every change.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines]);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((sum, line) => sum + line.qty, 0);
    const total = lines.reduce((sum, line) => sum + line.price * line.qty, 0);

    return {
      lines,
      count,
      total,
      isOpen,
      addItem: (item, qty = 1) => {
        dispatch({ type: "add", item, qty });
        setIsOpen(true);
      },
      removeItem: (id) => dispatch({ type: "remove", id }),
      setQty: (id, qty) => dispatch({ type: "setQty", id, qty }),
      clear: () => dispatch({ type: "clear" }),
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    };
  }, [lines, isOpen]);

  return <CartContext value={value}>{children}</CartContext>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
