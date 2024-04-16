import {
  forwardRef,
  type CSSProperties,
  type ForwardedRef,
  type HTMLProps,
  type ReactNode,
} from 'react';
import {
  useMergeRefs,
  FloatingPortal,
  FloatingFocusManager,
} from '@floating-ui/react';

import {usePopoverContext} from './usePopoverContext';
import styles from './Popover.module.css';

type FloatingContentProps = HTMLProps<HTMLDivElement>;

export type PopoverContentProps = FloatingContentProps & {
  children: ReactNode;
  style?: CSSProperties;
};

function PopoverContentComponent(
  {children, style, ...htmlProps}: PopoverContentProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const {context: floatingContext, ...context} = usePopoverContext();
  const mergedRef = useMergeRefs([context.refs.setFloating, ref]);

  if (!floatingContext.open) return null;

  return (
    <FloatingPortal>
      <FloatingFocusManager context={floatingContext} modal={context.modal}>
        <div
          ref={mergedRef}
          className={styles.PopoverContent}
          style={{...context.floatingStyles, ...style}}
          aria-labelledby={context.labelId}
          aria-describedby={context.descriptionId}
          {...context.getFloatingProps(htmlProps)}
        >
          {children}
        </div>
      </FloatingFocusManager>
    </FloatingPortal>
  );
}

export const PopoverContent = forwardRef(PopoverContentComponent);
