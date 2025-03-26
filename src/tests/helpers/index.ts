import { Mock } from "vitest";

export const mockFetch = (data: any) => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(data),
    }),
  ) as Mock;
};

export const mockFetchError = () => {
  global.fetch = vi.fn(() =>
    Promise.reject(new Error("Deliberate test error!")),
  ) as Mock;
};
