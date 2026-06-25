import type { PropsWithChildren } from "react";
import "./RegionPopover.css";

export interface RegionPopoverProps {
  popoverID?: string;
}

export function RegionPopover(props: PropsWithChildren<RegionPopoverProps>) {
  return (
    <div className="region-popover" id={props.popoverID} popover="auto">
      <p>Popover ID: {props.popoverID}</p>
    </div>
  );
}
