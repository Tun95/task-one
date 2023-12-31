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

import { PersonalInformationTemplate } from '../models/PersonalInformationTemplate';
import { QuestionTemplate } from '../models/QuestionTemplate';
import { HttpFile } from '../http/http';

export class ApplicationFormAttributesPersonalInformation {
    'firstName': PersonalInformationTemplate;
    'lastName': PersonalInformationTemplate;
    'emailId': PersonalInformationTemplate;
    'phoneNumber': PersonalInformationTemplate;
    'nationality': PersonalInformationTemplate;
    'currentResidence': PersonalInformationTemplate;
    'idNumber': PersonalInformationTemplate;
    'dateOfBirth': PersonalInformationTemplate;
    'gender': PersonalInformationTemplate;
    'personalQuestions'?: Array<QuestionTemplate>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "PersonalInformationTemplate",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "PersonalInformationTemplate",
            "format": ""
        },
        {
            "name": "emailId",
            "baseName": "emailId",
            "type": "PersonalInformationTemplate",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "PersonalInformationTemplate",
            "format": ""
        },
        {
            "name": "nationality",
            "baseName": "nationality",
            "type": "PersonalInformationTemplate",
            "format": ""
        },
        {
            "name": "currentResidence",
            "baseName": "currentResidence",
            "type": "PersonalInformationTemplate",
            "format": ""
        },
        {
            "name": "idNumber",
            "baseName": "idNumber",
            "type": "PersonalInformationTemplate",
            "format": ""
        },
        {
            "name": "dateOfBirth",
            "baseName": "dateOfBirth",
            "type": "PersonalInformationTemplate",
            "format": ""
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "PersonalInformationTemplate",
            "format": ""
        },
        {
            "name": "personalQuestions",
            "baseName": "personalQuestions",
            "type": "Array<QuestionTemplate>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApplicationFormAttributesPersonalInformation.attributeTypeMap;
    }

    public constructor() {
    }
}

