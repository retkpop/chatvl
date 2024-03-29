/**
 * ApiGateway API
 * ApiGateway API documentation
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { ActionReq } from '../model/actionReq';
import { Actions } from '../model/actions';
import { OptionalOfStaticsActions } from '../model/optionalOfStaticsActions';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ActionsResourceService {

    protected basePath = 'http://localhost:9090';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * countAllActionsPostById
     * 
     * @param postId postId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public countAllActionsPostByIdUsingGET(postId: number, observe?: 'body', reportProgress?: boolean): Observable<OptionalOfStaticsActions>;
    public countAllActionsPostByIdUsingGET(postId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OptionalOfStaticsActions>>;
    public countAllActionsPostByIdUsingGET(postId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OptionalOfStaticsActions>>;
    public countAllActionsPostByIdUsingGET(postId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (postId === null || postId === undefined) {
            throw new Error('Required parameter postId was null or undefined when calling countAllActionsPostByIdUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<OptionalOfStaticsActions>(`${this.basePath}/api/actions/count-all-action-by-post-id/${encodeURIComponent(String(postId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * createActions
     * 
     * @param actionReq actionReq
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createActionsUsingPOST(actionReq: ActionReq, observe?: 'body', reportProgress?: boolean): Observable<OptionalOfStaticsActions>;
    public createActionsUsingPOST(actionReq: ActionReq, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OptionalOfStaticsActions>>;
    public createActionsUsingPOST(actionReq: ActionReq, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OptionalOfStaticsActions>>;
    public createActionsUsingPOST(actionReq: ActionReq, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (actionReq === null || actionReq === undefined) {
            throw new Error('Required parameter actionReq was null or undefined when calling createActionsUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<OptionalOfStaticsActions>(`${this.basePath}/api/actions`,
            actionReq,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteActions
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteActionsUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteActionsUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteActionsUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteActionsUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteActionsUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/api/actions/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getActionsByUserAndPost
     * 
     * @param postId postId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getActionsByUserAndPostUsingGET(postId: number, observe?: 'body', reportProgress?: boolean): Observable<OptionalOfStaticsActions>;
    public getActionsByUserAndPostUsingGET(postId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OptionalOfStaticsActions>>;
    public getActionsByUserAndPostUsingGET(postId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OptionalOfStaticsActions>>;
    public getActionsByUserAndPostUsingGET(postId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (postId === null || postId === undefined) {
            throw new Error('Required parameter postId was null or undefined when calling getActionsByUserAndPostUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<OptionalOfStaticsActions>(`${this.basePath}/api/actions/get-by-user-and-post/${encodeURIComponent(String(postId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getActions
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getActionsUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<Actions>;
    public getActionsUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Actions>>;
    public getActionsUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Actions>>;
    public getActionsUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getActionsUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Actions>(`${this.basePath}/api/actions/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAllActions
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllActionsUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<Actions>>;
    public getAllActionsUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Actions>>>;
    public getAllActionsUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Actions>>>;
    public getAllActionsUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Actions>>(`${this.basePath}/api/actions`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateActions
     * 
     * @param actions actions
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateActionsUsingPUT(actions: Actions, observe?: 'body', reportProgress?: boolean): Observable<Actions>;
    public updateActionsUsingPUT(actions: Actions, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Actions>>;
    public updateActionsUsingPUT(actions: Actions, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Actions>>;
    public updateActionsUsingPUT(actions: Actions, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (actions === null || actions === undefined) {
            throw new Error('Required parameter actions was null or undefined when calling updateActionsUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<Actions>(`${this.basePath}/api/actions`,
            actions,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
