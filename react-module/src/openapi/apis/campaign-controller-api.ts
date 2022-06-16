/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { CampaignDto } from '../models';
/**
 * CampaignControllerApi - axios parameter creator
 * @export
 */
export const CampaignControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        _delete: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling _delete.');
            }
            const localVarPath = `/api/v1/campaigns/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CampaignDto} body 
         * @param {number} sellerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create1: async (body: CampaignDto, sellerId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling create1.');
            }
            // verify required parameter 'sellerId' is not null or undefined
            if (sellerId === null || sellerId === undefined) {
                throw new RequiredError('sellerId','Required parameter sellerId was null or undefined when calling create1.');
            }
            const localVarPath = `/api/v1/sellers/{sellerId}/campaigns`
                .replace(`{${"sellerId"}}`, encodeURIComponent(String(sellerId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} sellerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAllBySellerId: async (sellerId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sellerId' is not null or undefined
            if (sellerId === null || sellerId === undefined) {
                throw new RequiredError('sellerId','Required parameter sellerId was null or undefined when calling findAllBySellerId.');
            }
            const localVarPath = `/api/v1/sellers/{sellerId}/campaigns`
                .replace(`{${"sellerId"}}`, encodeURIComponent(String(sellerId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} sellerId 
         * @param {number} campaignId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOne: async (sellerId: number, campaignId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sellerId' is not null or undefined
            if (sellerId === null || sellerId === undefined) {
                throw new RequiredError('sellerId','Required parameter sellerId was null or undefined when calling findOne.');
            }
            // verify required parameter 'campaignId' is not null or undefined
            if (campaignId === null || campaignId === undefined) {
                throw new RequiredError('campaignId','Required parameter campaignId was null or undefined when calling findOne.');
            }
            const localVarPath = `/api/v1/sellers/{sellerId}/campaigns/{campaignId}`
                .replace(`{${"sellerId"}}`, encodeURIComponent(String(sellerId)))
                .replace(`{${"campaignId"}}`, encodeURIComponent(String(campaignId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CampaignDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update: async (body: CampaignDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling update.');
            }
            const localVarPath = `/api/v1/campaigns`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CampaignControllerApi - functional programming interface
 * @export
 */
export const CampaignControllerApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async _delete(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<number>>> {
            const localVarAxiosArgs = await CampaignControllerApiAxiosParamCreator(configuration)._delete(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {CampaignDto} body 
         * @param {number} sellerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create1(body: CampaignDto, sellerId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CampaignDto>>> {
            const localVarAxiosArgs = await CampaignControllerApiAxiosParamCreator(configuration).create1(body, sellerId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {number} sellerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAllBySellerId(sellerId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<CampaignDto>>>> {
            const localVarAxiosArgs = await CampaignControllerApiAxiosParamCreator(configuration).findAllBySellerId(sellerId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {number} sellerId 
         * @param {number} campaignId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findOne(sellerId: number, campaignId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CampaignDto>>> {
            const localVarAxiosArgs = await CampaignControllerApiAxiosParamCreator(configuration).findOne(sellerId, campaignId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {CampaignDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async update(body: CampaignDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CampaignDto>>> {
            const localVarAxiosArgs = await CampaignControllerApiAxiosParamCreator(configuration).update(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CampaignControllerApi - factory interface
 * @export
 */
export const CampaignControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async _delete(id: number, options?: AxiosRequestConfig): Promise<AxiosResponse<number>> {
            return CampaignControllerApiFp(configuration)._delete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CampaignDto} body 
         * @param {number} sellerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create1(body: CampaignDto, sellerId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<CampaignDto>> {
            return CampaignControllerApiFp(configuration).create1(body, sellerId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} sellerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAllBySellerId(sellerId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<CampaignDto>>> {
            return CampaignControllerApiFp(configuration).findAllBySellerId(sellerId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} sellerId 
         * @param {number} campaignId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findOne(sellerId: number, campaignId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<CampaignDto>> {
            return CampaignControllerApiFp(configuration).findOne(sellerId, campaignId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CampaignDto} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async update(body: CampaignDto, options?: AxiosRequestConfig): Promise<AxiosResponse<CampaignDto>> {
            return CampaignControllerApiFp(configuration).update(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CampaignControllerApi - object-oriented interface
 * @export
 * @class CampaignControllerApi
 * @extends {BaseAPI}
 */
export class CampaignControllerApi extends BaseAPI {
    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CampaignControllerApi
     */
    public async _delete(id: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<number>> {
        return CampaignControllerApiFp(this.configuration)._delete(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {CampaignDto} body 
     * @param {number} sellerId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CampaignControllerApi
     */
    public async create1(body: CampaignDto, sellerId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<CampaignDto>> {
        return CampaignControllerApiFp(this.configuration).create1(body, sellerId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {number} sellerId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CampaignControllerApi
     */
    public async findAllBySellerId(sellerId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<CampaignDto>>> {
        return CampaignControllerApiFp(this.configuration).findAllBySellerId(sellerId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {number} sellerId 
     * @param {number} campaignId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CampaignControllerApi
     */
    public async findOne(sellerId: number, campaignId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<CampaignDto>> {
        return CampaignControllerApiFp(this.configuration).findOne(sellerId, campaignId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {CampaignDto} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CampaignControllerApi
     */
    public async update(body: CampaignDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<CampaignDto>> {
        return CampaignControllerApiFp(this.configuration).update(body, options).then((request) => request(this.axios, this.basePath));
    }
}