# .ApplicationTemplateApi

All URIs are relative to *http://127.0.0.1:3100*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApplicationForm**](ApplicationTemplateApi.md#getApplicationForm) | **GET** /api/{version}/programs/{programId}/application-form | Retrieve application form
[**updateApplicationForm**](ApplicationTemplateApi.md#updateApplicationForm) | **PUT** /api/{version}/programs/{programId}/application-form | Upsert application form


# **getApplicationForm**
> ApplicationFOrm getApplicationForm()

Get application-form.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationTemplateApi(configuration);

let body:.ApplicationTemplateApiGetApplicationFormRequest = {
  // string
  programId: "programId_example",
  // number
  version: 3.14,
};

apiInstance.getApplicationForm(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **programId** | [**string**] |  | defaults to undefined
 **version** | [**number**] |  | defaults to undefined


### Return type

**ApplicationFOrm**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateApplicationForm**
> void updateApplicationForm()

Update application-form.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationTemplateApi(configuration);

let body:.ApplicationTemplateApiUpdateApplicationFormRequest = {
  // string
  programId: "programId_example",
  // number
  version: 3.14,
  // ApplicationFOrm (optional)
  applicationFOrm: {
    data: {
      id: "id_example",
      type: "applicationForm",
      attributes: {
        coverImage: "coverImage_example",
        personalInformation: {
          firstName: {
            internalUse: false,
            show: true,
          },
          lastName: {
            internalUse: false,
            show: true,
          },
          emailId: {
            internalUse: false,
            show: true,
          },
          phoneNumber: {
            internalUse: false,
            show: true,
          },
          nationality: {
            internalUse: false,
            show: true,
          },
          currentResidence: {
            internalUse: false,
            show: true,
          },
          idNumber: {
            internalUse: false,
            show: true,
          },
          dateOfBirth: {
            internalUse: false,
            show: true,
          },
          gender: {
            internalUse: false,
            show: true,
          },
          personalQuestions: [
            {
              id: "id_example",
              type: "Paragraph",
              question: "question_example",
              choices: [
                "choices_example",
              ],
              maxChoice: 1,
              disqualify: false,
              other: false,
            },
          ],
        },
        profile: {
          education: {
            mandatory: true,
            show: true,
          },
          experience: {
            mandatory: true,
            show: true,
          },
          resume: {
            mandatory: true,
            show: true,
          },
          profileQuestions: [
            {
              id: "id_example",
              type: "Paragraph",
              question: "question_example",
              choices: [
                "choices_example",
              ],
              maxChoice: 1,
              disqualify: false,
              other: false,
            },
          ],
        },
        customisedQuestions: [
          {
            id: "id_example",
            type: "Paragraph",
            question: "question_example",
            choices: [
              "choices_example",
            ],
            maxChoice: 1,
            disqualify: false,
            other: false,
          },
        ],
      },
    },
  },
};

apiInstance.updateApplicationForm(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **applicationFOrm** | **ApplicationFOrm**|  |
 **programId** | [**string**] |  | defaults to undefined
 **version** | [**number**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


