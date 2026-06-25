import { PropsWithChildren } from "react"
import "./RegionPopover.css";

export interface RegionPopoverProps {
  PopoverID?: string
}

export function RegionPopover(props: PropsWithChildren<RegionPopoverProps>) {
    return <div class="region-popover" id={props.PopoverID} popover="auto">
        <p>Popover ID: {props.PopoverID}</p>
    </div>
}