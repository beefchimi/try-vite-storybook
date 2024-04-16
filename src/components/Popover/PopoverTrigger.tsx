import {
  cloneElement,
  forwardRef,
  isValidElement,
  type ForwardedRef,
  type HTMLProps,
  type ReactNode,
  type Ref,
} from 'react';
import {useMergeRefs} from '@floating-ui/react';

import {usePopoverContext} from './usePopoverContext';
import styles from './Popover.module.css';

type FloatingTriggerProps = HTMLProps<HTMLElement>;

export type PopoverTriggerProps = FloatingTriggerProps & {
  children: ReactNode;
  asChild?: boolean;
};

function PopoverTriggerComponent(
  {children, asChild = false, ...htmlProps}: PopoverTriggerProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const context = usePopoverContext();

  // Unsure how to avoid this casting.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childrenRef: Ref<unknown> | undefined = (children as any).ref;
  const mergedRef = useMergeRefs([context.refs.setReference, ref, childrenRef]);

  // `asChild` allows the user to pass any element as the anchor.
  if (asChild && isValidElement(children)) {
    return cloneElement(
      children,
      context.getReferenceProps({
        ref: mergedRef,
        ...htmlProps,
        ...children.props,
        'data-state': context.open ? 'open' : 'closed',
      }),
    );
  }

  return (
    <button
      ref={mergedRef}
      type="button"
      className={styles.PopoverTrigger}
      // The user can style the trigger based on the state
      data-state={context.open ? 'open' : 'closed'}
      {...context.getReferenceProps(htmlProps)}
    >
      {children}
    </button>
  );
}

export const PopoverTrigger = forwardRef(PopoverTriggerComponent);
