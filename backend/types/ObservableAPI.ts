import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ApplicationFOrm } from '../models/ApplicationFOrm';
import { ApplicationFOrmData } from '../models/ApplicationFOrmData';
import { ApplicationFormAttributes } from '../models/ApplicationFormAttributes';
import { ApplicationFormAttributesPersonalInformation } from '../models/ApplicationFormAttributesPersonalInformation';
import { ApplicationFormAttributesProfile } from '../models/ApplicationFormAttributesProfile';
import { PersonalInformationTemplate } from '../models/PersonalInformationTemplate';
import { ProfileTemplate } from '../models/ProfileTemplate';
import { QuestionTemplate } from '../models/QuestionTemplate';

import { ApplicationTemplateApiRequestFactory, ApplicationTemplateApiResponseProcessor} from "../apis/ApplicationTemplateApi";
export class ObservableApplicationTemplateApi {
    private requestFactory: ApplicationTemplateApiRequestFactory;
    private responseProcessor: ApplicationTemplateApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationTemplateApiRequestFactory,
        responseProcessor?: ApplicationTemplateApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApplicationTemplateApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApplicationTemplateApiResponseProcessor();
    }

    /**
     * Get application-form.
     * Retrieve application form
     * @param programId 
     * @param version 
     */
    public getApplicationFormWithHttpInfo(programId: string, version: number, _options?: Configuration): Observable<HttpInfo<ApplicationFOrm>> {
        const requestContextPromise = this.requestFactory.getApplicationForm(programId, version, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApplicationFormWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get application-form.
     * Retrieve application form
     * @param programId 
     * @param version 
     */
    public getApplicationForm(programId: string, version: number, _options?: Configuration): Observable<ApplicationFOrm> {
        return this.getApplicationFormWithHttpInfo(programId, version, _options).pipe(map((apiResponse: HttpInfo<ApplicationFOrm>) => apiResponse.data));
    }

    /**
     * Update application-form.
     * Upsert application form
     * @param programId 
     * @param version 
     * @param applicationFOrm 
     */
    public updateApplicationFormWithHttpInfo(programId: string, version: number, applicationFOrm?: ApplicationFOrm, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateApplicationForm(programId, version, applicationFOrm, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateApplicationFormWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update application-form.
     * Upsert application form
     * @param programId 
     * @param version 
     * @param applicationFOrm 
     */
    public updateApplicationForm(programId: string, version: number, applicationFOrm?: ApplicationFOrm, _options?: Configuration): Observable<void> {
        return this.updateApplicationFormWithHttpInfo(programId, version, applicationFOrm, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
