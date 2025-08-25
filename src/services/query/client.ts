import { QueryCache, QueryClient } from "@tanstack/react-query";
import { displayErrorToast } from "@utils/displayToasts";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => displayErrorToast(error?.message),
  }),
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60,
    },
  },
});
