import {useLayoutEffect, type ReactNode} from 'react';
import {useId} from '@floating-ui/react';

import {usePopoverContext} from './usePopoverContext';
import styles from './Popover.module.css';

export interface PopoverHeadingProps {
  children: ReactNode;
}

export function PopoverHeading({children}: PopoverHeadingProps) {
  const {setLabelId} = usePopoverContext();
  const id = useId();

  // Only sets `aria-labelledby` on the Popover root element
  // if this component is mounted inside it.
  useLayoutEffect(() => {
    setLabelId(id);
    return () => setLabelId(undefined);
  }, [id, setLabelId]);

  return (
    <h2 id={id} className={styles.PopoverHeading}>
      {children}
    </h2>
  );
}
