import {useState} from 'react';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverClose,
} from '../components';

export function Controlled() {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen((current) => !current);
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger onClick={handleToggle}>Toggle Popover</PopoverTrigger>

      <PopoverContent>
        <PopoverHeading>Controlled Heading</PopoverHeading>
        <PopoverDescription>
          A generic description that may run long. There is supposed to be a
          max-width set on the Popover, so this paragraph could wrap multiple
          lines.
        </PopoverDescription>
        <PopoverClose>Close</PopoverClose>
      </PopoverContent>
    </Popover>
  );
}
