import { config } from "../configs/repositoryConfig";
import { convertValuesToArray } from "../utilities/objectUtils";
import { throwHttpError } from "../utilities/errorHandlingUtils";
import { getAccessToken } from "../services/authService";

export const DEFAULT_HEADERS = {
  contentType: {
    key: "Content-Type",
    value: "application/json",
  },
};

export default async ({
  resourceObject,
  queryString = "",
  body,
  isFormData = false,
  restHeaders,
  parseResponse = JSON.parse,
  ...rest
}) => {
  const { schema, hostname, basePath, headers } = config.backendApiSettings;
  const baseUrl = `${schema}://${hostname}${basePath.v1}`;
  const accessToken = resourceObject.isPublic ? null : await getAccessToken();

  const contentTypeHeader = !isFormData && {
    [DEFAULT_HEADERS.contentType.key]: DEFAULT_HEADERS.contentType.value,
  };
  const authenticationHeader = accessToken && {
    [headers.authentication.key]: `Bearer ${accessToken}`,
  };

  const request = {
    method: resourceObject.method,
    headers: {
      ...authenticationHeader,
      ...contentTypeHeader,
      ...restHeaders,
    },
    body: isFormData ? body : JSON.stringify(body),
    ...rest,
  };

  try {
    const response = await fetch(
      `${baseUrl}${resourceObject.endpoint}${queryString}`,
      request
    );

    if (response.ok) {
      const responseText = await response.text();
      if (responseText) {
        const responseData = parseResponse(responseText);
        return responseData;
      }

      return;
    }

    const errorData = await response.json();

    throw errorData;
  } catch (errorData) {
    throw throwHttpError({
      statusCode: errorData?.status ?? 500,
      beErrorCode: errorData?.errorCode ?? 1000,
      message: errorData?.title ?? "Something went wrong",
      errors: errorData?.errors ? convertValuesToArray(errorData.errors) : [],
    });
  }
};
