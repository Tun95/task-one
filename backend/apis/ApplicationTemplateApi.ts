// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApplicationFOrm } from '../models/ApplicationFOrm';

/**
 * no description
 */
export class ApplicationTemplateApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get application-form.
     * Retrieve application form
     * @param programId 
     * @param version 
     */
    public async getApplicationForm(programId: string, version: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'programId' is not null or undefined
        if (programId === null || programId === undefined) {
            throw new RequiredError("ApplicationTemplateApi", "getApplicationForm", "programId");
        }


        // verify required parameter 'version' is not null or undefined
        if (version === null || version === undefined) {
            throw new RequiredError("ApplicationTemplateApi", "getApplicationForm", "version");
        }


        // Path Params
        const localVarPath = '/api/{version}/programs/{programId}/application-form'
            .replace('{' + 'programId' + '}', encodeURIComponent(String(programId)))
            .replace('{' + 'version' + '}', encodeURIComponent(String(version)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update application-form.
     * Upsert application form
     * @param programId 
     * @param version 
     * @param applicationFOrm 
     */
    public async updateApplicationForm(programId: string, version: number, applicationFOrm?: ApplicationFOrm, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'programId' is not null or undefined
        if (programId === null || programId === undefined) {
            throw new RequiredError("ApplicationTemplateApi", "updateApplicationForm", "programId");
        }


        // verify required parameter 'version' is not null or undefined
        if (version === null || version === undefined) {
            throw new RequiredError("ApplicationTemplateApi", "updateApplicationForm", "version");
        }



        // Path Params
        const localVarPath = '/api/{version}/programs/{programId}/application-form'
            .replace('{' + 'programId' + '}', encodeURIComponent(String(programId)))
            .replace('{' + 'version' + '}', encodeURIComponent(String(version)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(applicationFOrm, "ApplicationFOrm", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ApplicationTemplateApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApplicationForm
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApplicationFormWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ApplicationFOrm >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApplicationFOrm = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApplicationFOrm", ""
            ) as ApplicationFOrm;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApplicationFOrm = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApplicationFOrm", ""
            ) as ApplicationFOrm;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateApplicationForm
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateApplicationFormWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
