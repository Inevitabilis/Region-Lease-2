import { Component, ReactNode } from "react";
import "./Table.css";

type RenderFn<T> = (value: T) => ReactNode;

type MapFields<T> = {
  [Key in keyof T]: T[Key] extends string | number
    ? { key: Key; header: ReactNode; render?: RenderFn<T> }
    : { key: Key; header: ReactNode; render: RenderFn<T> };
}[keyof T];

type TableProps<T extends Record<string, unknown>> = {
  columns: MapFields<T>[];
  keyField: KeyFields<T>;
  data: T[];
  itemsPerPage?: number;
  currentPageFirstItemIndex?: number;
};

type KeyFields<T> = {
  [K in keyof T]: T[K] extends string | number ? K : never;
}[keyof T];

export class Table<T extends Record<string, unknown>> extends Component<TableProps<T>> {
  render() {
    const { columns, data, currentPageFirstItemIndex, itemsPerPage, keyField } = this.props;
    const defaultFirstItemIndex = 0;
    const defaultItemsPerPage = 5;
    return (
      <table>
        <thead>
          <tr>
            {columns.map(({ header }, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data
            .slice(
              currentPageFirstItemIndex ?? defaultFirstItemIndex,
              (currentPageFirstItemIndex ?? defaultFirstItemIndex) + (itemsPerPage ?? defaultItemsPerPage),
            )
            .map((entry) => (
              <tr key={entry[keyField] as string | number}>
                {columns.map(({ key, render }, index) => (
                  <td key={index}>{render ? render(entry) : (entry[key] as string | number)}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

