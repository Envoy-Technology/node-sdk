import { SDKConfiguration } from "./apis/EnvoyClientApi";

export type Json = any;
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
export type HTTPHeaders = { [key: string]: string };
export type HTTPQuery = { [key: string]: string | number | null | boolean | Array<string | number | null | boolean> | Set<string | number | null | boolean> | HTTPQuery };
export type HTTPBody = Json | FormData | URLSearchParams;

export interface RequestOpts {
  path: string;
  method: HTTPMethod;
  headers?: HTTPHeaders;
  query?: HTTPQuery;
  body?: HTTPBody;
}

export class BaseAPI {
  private configuration: SDKConfiguration;

  constructor(config: SDKConfiguration) {
    this.configuration = config;
  }

  async request(context: RequestOpts) {
    const {url, params} = this.#createFetchParams(context);

    return await fetch(url, params)
      .then(response => {
        if (response.ok) return response.json();

        return response.text().then(text => {
          throw new ResponseError(text, `Response returned an error code ${response?.status}`)
        })
      })
  }

  #createFetchParams(context: RequestOpts) {
    let url = this.configuration.basePath + context.path;

    const headers = Object.assign({}, context.headers);
    Object.keys(headers).forEach(key => headers[key] === undefined ? delete headers[key] : {});
    headers['x-api-key'] = this.configuration.apiKey;
    headers['Content-Type'] = 'application/json';

    const params = {
      method: context.method,
      headers,
      body: JSON.stringify(context.body)
    }

    return { url, params };
  }
}

export class RequiredError extends Error {
  constructor(public field: string, msg: string = `${field} is a required field`) {
    super(msg);
  }
}

export class ResponseError extends Error {
  constructor(public response: string, msg?: string) {
    super(msg);
  }
}
