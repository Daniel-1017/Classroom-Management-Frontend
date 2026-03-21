import { BACKEND_BASE_URL } from "@/constants";
import { ListResponse } from "@/types";
import { CreateDataProviderOptions, createDataProvider } from "@refinedev/rest";
import { HttpError } from "node_modules/@refinedev/core/dist/contexts/data/types";

const buildHttpError = async (response: Response): Promise<HttpError> => {
  let message = "Request failed";

  try {
    const payload = (await response.json()) as { message?: string };

    if (payload?.message) message = payload.message;
  } catch {
    // Ignore errors
  }

  return {
    message,
    statusCode: response.status,
  };
};

const options: CreateDataProviderOptions = {
  getList: {
    getEndpoint: ({ resource }) => resource,
    buildQueryParams: ({ resource, pagination, filters }) => {
      const page = pagination?.currentPage ?? 1;
      const pageSize = pagination?.pageSize ?? 10;

      const params: Record<string, string | number> = {
        page,
        limit: pageSize,
      };

      filters?.forEach((filter) => {
        const field = "field" in filter ? filter.field : null;
        const value = String(filter.value);

        if (resource === "subjects") {
          if (field === "department") params.department = value;
          if (field === "name" || field === "code") params.search = value;
        }
      });

      return params;
    },
    mapResponse: async (response) => {
      if (!response.ok) throw await buildHttpError(response);

      const payload: ListResponse = await response.json();
      return payload.data ?? [];
    },
    getTotalCount: async (response) => {
      const payload: ListResponse = await response.json();
      return payload.pagination?.total ?? payload.data?.length ?? 0;
    },
  },
};

export const { dataProvider } = createDataProvider(BACKEND_BASE_URL, options);
