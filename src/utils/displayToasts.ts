import toast from "react-hot-toast";

export const displayErrorToast = (data: string) => {
  return toast.error(data, {
    style: { background: "#333", color: "#fff" },
  });
};

export const displaySuccessToast = (data: string) => {
  return toast.success(data, {
    style: { background: "#333", color: "#fff" },
  });
};
