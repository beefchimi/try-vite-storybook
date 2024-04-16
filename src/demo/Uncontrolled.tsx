import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverClose,
} from '../components';

export function Uncontrolled() {
  return (
    <Popover>
      <PopoverTrigger>Toggle Popover</PopoverTrigger>

      <PopoverContent>
        <PopoverHeading>Uncontrolled Heading</PopoverHeading>
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
