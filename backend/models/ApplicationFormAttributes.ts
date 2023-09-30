/**
 * Application Form API
 * API Task
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApplicationFormAttributesPersonalInformation } from '../models/ApplicationFormAttributesPersonalInformation';
import { ApplicationFormAttributesProfile } from '../models/ApplicationFormAttributesProfile';
import { QuestionTemplate } from '../models/QuestionTemplate';
import { HttpFile } from '../http/http';

export class ApplicationFormAttributes {
    'coverImage'?: string;
    'personalInformation': ApplicationFormAttributesPersonalInformation;
    'profile'?: ApplicationFormAttributesProfile;
    'customisedQuestions'?: Array<QuestionTemplate>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "coverImage",
            "baseName": "coverImage",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "personalInformation",
            "baseName": "personalInformation",
            "type": "ApplicationFormAttributesPersonalInformation",
            "format": ""
        },
        {
            "name": "profile",
            "baseName": "profile",
            "type": "ApplicationFormAttributesProfile",
            "format": ""
        },
        {
            "name": "customisedQuestions",
            "baseName": "customisedQuestions",
            "type": "Array<QuestionTemplate>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApplicationFormAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}

