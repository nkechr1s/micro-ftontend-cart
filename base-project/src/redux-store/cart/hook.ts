import { useDispatch } from "react-redux";
import {
  triggerAddToCart,
  triggerRemoveFromCart,
  triggerClearCart,
} from "./actions";

export function useTriggerAddToCart() {
  const dispatch = useDispatch();
  return (...args: Parameters<typeof triggerAddToCart>) =>
    dispatch(triggerAddToCart(...args));
}

export function useTriggerRemoveFromCart() {
  const dispatch = useDispatch();
  return (...args: Parameters<typeof triggerRemoveFromCart>) =>
    dispatch(triggerRemoveFromCart(...args));
}

export function useTriigerClearCart() {
  const dispatch = useDispatch();
  return (...args: Parameters<typeof triggerClearCart>) =>
    dispatch(triggerClearCart(...args));
}
