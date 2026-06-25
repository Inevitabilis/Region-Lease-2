import { Popover, type PopoverProps } from "react-tiny-popover";
import React, { useState } from "react";

type StatefulPopoverProps = Omit<PopoverProps, "isOpen">;

export function StatefulPopover(props: StatefulPopoverProps) {
  const [open, setOpen] = useState(false);
  return (
    <Popover {...props} isOpen={open}>
      <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        {props.children}
      </div>
    </Popover>
  );
}
