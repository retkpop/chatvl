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

import { SubscribeRes } from '../model/subscribeRes';
import { User } from '../model/user';
import { UserDTO } from '../model/userDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class UserResourceService {

    protected basePath = 'https://192.168.1.12:9090';
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
     * createUser
     * 
     * @param userDTO userDTO
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUserUsingPOST(userDTO: UserDTO, observe?: 'body', reportProgress?: boolean): Observable<User>;
    public createUserUsingPOST(userDTO: UserDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<User>>;
    public createUserUsingPOST(userDTO: UserDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<User>>;
    public createUserUsingPOST(userDTO: UserDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (userDTO === null || userDTO === undefined) {
            throw new Error('Required parameter userDTO was null or undefined when calling createUserUsingPOST.');
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

        return this.httpClient.post<User>(`${this.basePath}/api/users`,
            userDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteUser
     * 
     * @param login login
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUserUsingDELETE(login: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteUserUsingDELETE(login: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteUserUsingDELETE(login: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteUserUsingDELETE(login: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (login === null || login === undefined) {
            throw new Error('Required parameter login was null or undefined when calling deleteUserUsingDELETE.');
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

        return this.httpClient.delete<any>(`${this.basePath}/api/users/${encodeURIComponent(String(login))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAuthorities
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAuthoritiesUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<string>>;
    public getAuthoritiesUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<string>>>;
    public getAuthoritiesUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<string>>>;
    public getAuthoritiesUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<string>>(`${this.basePath}/api/users/authorities`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getSubscribeUserPost
     * 
     * @param userId userId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSubscribeUserPostUsingGET(userId: number, observe?: 'body', reportProgress?: boolean): Observable<SubscribeRes>;
    public getSubscribeUserPostUsingGET(userId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SubscribeRes>>;
    public getSubscribeUserPostUsingGET(userId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SubscribeRes>>;
    public getSubscribeUserPostUsingGET(userId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getSubscribeUserPostUsingGET.');
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

        return this.httpClient.get<SubscribeRes>(`${this.basePath}/api/users/get-subscribe-user-post/${encodeURIComponent(String(userId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getUser
     * 
     * @param login login
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserUsingGET(login: string, observe?: 'body', reportProgress?: boolean): Observable<UserDTO>;
    public getUserUsingGET(login: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserDTO>>;
    public getUserUsingGET(login: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserDTO>>;
    public getUserUsingGET(login: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (login === null || login === undefined) {
            throw new Error('Required parameter login was null or undefined when calling getUserUsingGET.');
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

        return this.httpClient.get<UserDTO>(`${this.basePath}/api/users/${encodeURIComponent(String(login))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * subscribeUser
     * 
     * @param userId userId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public subscribeUserUsingPOST(userId: number, observe?: 'body', reportProgress?: boolean): Observable<SubscribeRes>;
    public subscribeUserUsingPOST(userId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SubscribeRes>>;
    public subscribeUserUsingPOST(userId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SubscribeRes>>;
    public subscribeUserUsingPOST(userId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling subscribeUserUsingPOST.');
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

        return this.httpClient.post<SubscribeRes>(`${this.basePath}/api/users/subscribe`,
            userId,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateUser
     * 
     * @param userDTO userDTO
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUserUsingPUT(userDTO: UserDTO, observe?: 'body', reportProgress?: boolean): Observable<UserDTO>;
    public updateUserUsingPUT(userDTO: UserDTO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserDTO>>;
    public updateUserUsingPUT(userDTO: UserDTO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserDTO>>;
    public updateUserUsingPUT(userDTO: UserDTO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (userDTO === null || userDTO === undefined) {
            throw new Error('Required parameter userDTO was null or undefined when calling updateUserUsingPUT.');
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

        return this.httpClient.put<UserDTO>(`${this.basePath}/api/users`,
            userDTO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
