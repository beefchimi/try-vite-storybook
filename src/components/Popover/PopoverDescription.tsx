import {useLayoutEffect, type ReactNode} from 'react';
import {useId} from '@floating-ui/react';

import {usePopoverContext} from './usePopoverContext';
import styles from './Popover.module.css';

export interface PopoverDescriptionProps {
  children: ReactNode;
}

export function PopoverDescription({children}: PopoverDescriptionProps) {
  const {setDescriptionId} = usePopoverContext();
  const id = useId();

  // Only sets `aria-describedby` on the Popover root element
  // if this component is mounted inside it.
  useLayoutEffect(() => {
    setDescriptionId(id);
    return () => setDescriptionId(undefined);
  }, [id, setDescriptionId]);

  return (
    <p id={id} className={styles.PopoverDescription}>
      {children}
    </p>
  );
}
