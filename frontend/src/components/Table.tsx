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
  data: T[];
};

export class Table<T extends Record<string, unknown>> extends Component<TableProps<T>> {
  render() {
    const { columns, data } = this.props;
    return (
      <>
        <table>
          <thead>
            <tr>
              {columns.map(({ header }, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                {columns.map(({ key, render }, index) => (
                  <td key={index}>{render ? render(entry) : (entry[key] as string | number)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

