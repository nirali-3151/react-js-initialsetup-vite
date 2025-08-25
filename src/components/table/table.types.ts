export type Column<T> = {
  key: keyof T;
  header: string;
  align?: "left" | "right";
  render?: (value: any, row: T) => React.ReactNode;
};

export type TableProps<T extends { id: string | number }> = {
  columns: Column<T>[];
  data: T[];
};