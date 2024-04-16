import {forwardRef, type ButtonHTMLAttributes, type ForwardedRef} from 'react';

import {usePopoverContext} from './usePopoverContext';
import styles from './Popover.module.css';

export type PopoverCloseProps = ButtonHTMLAttributes<HTMLButtonElement>;

function PopoverCloseComponent(
  props: PopoverCloseProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const {setOpen} = usePopoverContext();

  return (
    <button
      ref={ref}
      type="button"
      className={styles.PopoverClose}
      {...props}
      onClick={(event) => {
        props.onClick?.(event);
        setOpen(false);
      }}
    />
  );
}

export const PopoverClose = forwardRef(PopoverCloseComponent);
