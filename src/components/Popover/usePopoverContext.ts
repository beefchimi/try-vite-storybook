import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from 'react';

import type {PopoverHookReturn} from './usePopover';

interface RequiredAria {
  setLabelId: Dispatch<SetStateAction<string | undefined>>;
  setDescriptionId: Dispatch<SetStateAction<string | undefined>>;
}

type ContextType = PopoverHookReturn & RequiredAria;

export const PopoverContext = createContext<ContextType | null>(null);

export function usePopoverContext() {
  const context = useContext(PopoverContext);

  if (context === null) {
    throw new Error('Popover components must be wrapped in <Popover />');
  }

  return context;
}
