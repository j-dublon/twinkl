import { Fetch } from "@/types";
import { Mock } from "vitest";

export const mockFetch = (data?: any, method?: Fetch) => {
  global.fetch = vi.fn(() => {
    if (method === "DELETE") {
      return Promise.resolve({
        json: () => Promise.resolve({}),
        status: 200,
      });
    }
    return Promise.resolve({
      json: () => Promise.resolve(data),
      status: 200,
    });
  }) as Mock;
};

export const mockFetchError = () => {
  global.fetch = vi.fn(() =>
    Promise.reject(new Error("Deliberate test error!"))
  ) as Mock;
};
