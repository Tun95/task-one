import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ApplicationFOrm } from '../models/ApplicationFOrm';
import { ApplicationFOrmData } from '../models/ApplicationFOrmData';
import { ApplicationFormAttributes } from '../models/ApplicationFormAttributes';
import { ApplicationFormAttributesPersonalInformation } from '../models/ApplicationFormAttributesPersonalInformation';
import { ApplicationFormAttributesProfile } from '../models/ApplicationFormAttributesProfile';
import { PersonalInformationTemplate } from '../models/PersonalInformationTemplate';
import { ProfileTemplate } from '../models/ProfileTemplate';
import { QuestionTemplate } from '../models/QuestionTemplate';
import { ObservableApplicationTemplateApi } from './ObservableAPI';

import { ApplicationTemplateApiRequestFactory, ApplicationTemplateApiResponseProcessor} from "../apis/ApplicationTemplateApi";
export class PromiseApplicationTemplateApi {
    private api: ObservableApplicationTemplateApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationTemplateApiRequestFactory,
        responseProcessor?: ApplicationTemplateApiResponseProcessor
    ) {
        this.api = new ObservableApplicationTemplateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get application-form.
     * Retrieve application form
     * @param programId 
     * @param version 
     */
    public getApplicationFormWithHttpInfo(programId: string, version: number, _options?: Configuration): Promise<HttpInfo<ApplicationFOrm>> {
        const result = this.api.getApplicationFormWithHttpInfo(programId, version, _options);
        return result.toPromise();
    }

    /**
     * Get application-form.
     * Retrieve application form
     * @param programId 
     * @param version 
     */
    public getApplicationForm(programId: string, version: number, _options?: Configuration): Promise<ApplicationFOrm> {
        const result = this.api.getApplicationForm(programId, version, _options);
        return result.toPromise();
    }

    /**
     * Update application-form.
     * Upsert application form
     * @param programId 
     * @param version 
     * @param applicationFOrm 
     */
    public updateApplicationFormWithHttpInfo(programId: string, version: number, applicationFOrm?: ApplicationFOrm, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateApplicationFormWithHttpInfo(programId, version, applicationFOrm, _options);
        return result.toPromise();
    }

    /**
     * Update application-form.
     * Upsert application form
     * @param programId 
     * @param version 
     * @param applicationFOrm 
     */
    public updateApplicationForm(programId: string, version: number, applicationFOrm?: ApplicationFOrm, _options?: Configuration): Promise<void> {
        const result = this.api.updateApplicationForm(programId, version, applicationFOrm, _options);
        return result.toPromise();
    }


}



