import Loader from "@components/loader/Loader";
import type { TableProps } from "./table.types";
import { isEmpty } from "lodash";
const Table = <T extends { id: string | number }>({
  columns,
  data,
  isLoading,
}: TableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-[color:var(--secondary)]/20">
        <thead className="bg-[var(--bg)]">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                scope="col"
                className={`px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[color:var(--secondary)] ${
                  col.align === "right" ? "text-right" : "text-left"
                }`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-[color:var(--secondary)]/20">
          {isLoading ? (
            <Loader />
          ) : (
            data.map((row: any) => (
              <tr
                key={row.id}
                className="hover:bg-[color:var(--primary)]/5 transition-colors"
              >
                {isEmpty(data) ? (
                  <div className="heading-text text-center">Data not found</div>
                ) : (
                  columns.map((col, idx) => (
                    <td
                      key={String(col.key)}
                      className={`px-4 py-3 ${
                        col.align === "right" ? "text-right" : "text-left"
                      } ${
                        idx === 0
                          ? "sticky left-0 z-10 bg-[var(--bg)] whitespace-nowrap"
                          : ""
                      }`}
                    >
                      {col.render
                        ? col.render(row[col.key], row)
                        : String(row[col.key])}
                    </td>
                  ))
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
