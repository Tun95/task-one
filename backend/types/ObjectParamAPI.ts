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

import { ObservableApplicationTemplateApi } from "./ObservableAPI";
import { ApplicationTemplateApiRequestFactory, ApplicationTemplateApiResponseProcessor} from "../apis/ApplicationTemplateApi";

export interface ApplicationTemplateApiGetApplicationFormRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationTemplateApigetApplicationForm
     */
    programId: string
    /**
     * 
     * @type number
     * @memberof ApplicationTemplateApigetApplicationForm
     */
    version: number
}

export interface ApplicationTemplateApiUpdateApplicationFormRequest {
    /**
     * 
     * @type string
     * @memberof ApplicationTemplateApiupdateApplicationForm
     */
    programId: string
    /**
     * 
     * @type number
     * @memberof ApplicationTemplateApiupdateApplicationForm
     */
    version: number
    /**
     * 
     * @type ApplicationFOrm
     * @memberof ApplicationTemplateApiupdateApplicationForm
     */
    applicationFOrm?: ApplicationFOrm
}

export class ObjectApplicationTemplateApi {
    private api: ObservableApplicationTemplateApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationTemplateApiRequestFactory, responseProcessor?: ApplicationTemplateApiResponseProcessor) {
        this.api = new ObservableApplicationTemplateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get application-form.
     * Retrieve application form
     * @param param the request object
     */
    public getApplicationFormWithHttpInfo(param: ApplicationTemplateApiGetApplicationFormRequest, options?: Configuration): Promise<HttpInfo<ApplicationFOrm>> {
        return this.api.getApplicationFormWithHttpInfo(param.programId, param.version,  options).toPromise();
    }

    /**
     * Get application-form.
     * Retrieve application form
     * @param param the request object
     */
    public getApplicationForm(param: ApplicationTemplateApiGetApplicationFormRequest, options?: Configuration): Promise<ApplicationFOrm> {
        return this.api.getApplicationForm(param.programId, param.version,  options).toPromise();
    }

    /**
     * Update application-form.
     * Upsert application form
     * @param param the request object
     */
    public updateApplicationFormWithHttpInfo(param: ApplicationTemplateApiUpdateApplicationFormRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateApplicationFormWithHttpInfo(param.programId, param.version, param.applicationFOrm,  options).toPromise();
    }

    /**
     * Update application-form.
     * Upsert application form
     * @param param the request object
     */
    public updateApplicationForm(param: ApplicationTemplateApiUpdateApplicationFormRequest, options?: Configuration): Promise<void> {
        return this.api.updateApplicationForm(param.programId, param.version, param.applicationFOrm,  options).toPromise();
    }

}
