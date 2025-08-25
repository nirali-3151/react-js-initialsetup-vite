import Button from "@components/button/Button";
import type { Column } from "@components/table/table.types";
import type { User } from "@layouts/home/home.types";

export const users = [
  {
    id: 1,
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    role: "Member",
    status: "Invited",
  },
  {
    id: 3,
    name: "Esther Howard",
    email: "esther.howard@example.com",
    role: "Owner",
    status: "Active",
  },
];

export const UserColumns: Column<User>[] = [
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
  { key: "role", header: "Role" },
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
        {value}
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
