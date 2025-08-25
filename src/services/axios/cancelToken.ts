import axios from "axios";

// Store cancel token sources by endpoint
const cancelTokens: Record<string, any> = {};

// Get a cancel token for an endpoint
export const getCancelToken = (endpoint: string) => {
  if (cancelTokens[endpoint]) {
    cancelTokens[endpoint].cancel(
      `Operation canceled due to a new request for ${endpoint}.`
    );
  }

  cancelTokens[endpoint] = axios.CancelToken.source();
  return cancelTokens[endpoint].token;
};

// Cancel an ongoing request for an endpoint
export const cancelOngoingRequest = (endpoint: string): void => {
  if (cancelTokens[endpoint]) {
    cancelTokens[endpoint].cancel(
      `Component unmounted or URL changed for ${endpoint}.`
    );
    delete cancelTokens[endpoint];
  }
};
