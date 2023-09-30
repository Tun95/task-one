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

import { HttpFile } from '../http/http';

export class PersonalInformationTemplate {
    'internalUse': boolean;
    'show': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "internalUse",
            "baseName": "internalUse",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "show",
            "baseName": "show",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PersonalInformationTemplate.attributeTypeMap;
    }

    public constructor() {
    }
}

