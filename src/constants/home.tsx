import Button from "@components/button/Button";
import type { Column } from "@components/table/table.types";
import type { User } from "@layouts/home/home.types";

export const UserColumns: Column<User>[] = [
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
  {
    key: "company",
    header: "Company",
    render: (value: User["company"], row: User) => (
      <span>{value.name}</span> // access nested property
    ),
  },
  {
    key: "status",
    header: "Status",
    align: "right" as const,
    render: (value: string) => (
      <span
        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
          value === "Active"
            ? "bg-[color:var(--primary)]/10 text-[color:var(--primary)]"
            : "bg-[color:var(--secondary)]/10 text-[color:var(--secondary)]"
        }`}
      >
        Active
      </span>
    ),
  },
  {
    key: "actions",
    header: "Actions",
    align: "right" as const,
    render: (_: any) => <Button label="Edit" variant="outline" />,
  },
];
