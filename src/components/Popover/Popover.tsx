import {type ReactNode} from 'react';

import {usePopover, type PopoverHookOptions} from './usePopover';
import {PopoverContext} from './usePopoverContext';

export interface PopoverProps extends PopoverHookOptions {
  children: ReactNode;
}

export function Popover({
  children,
  modal = false,
  ...hookOptions
}: PopoverProps) {
  const popover = usePopover({modal, ...hookOptions});

  return (
    <PopoverContext.Provider value={popover}>
      {children}
    </PopoverContext.Provider>
  );
}
