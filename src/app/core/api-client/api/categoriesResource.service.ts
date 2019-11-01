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

import { Categories } from '../model/categories';
import { CategoriesCustomDTO } from '../model/categoriesCustomDTO';
import { Posts } from '../model/posts';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CategoriesResourceService {

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
     * createCategories
     * 
     * @param categories categories
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createCategoriesUsingPOST(categories: Categories, observe?: 'body', reportProgress?: boolean): Observable<Categories>;
    public createCategoriesUsingPOST(categories: Categories, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Categories>>;
    public createCategoriesUsingPOST(categories: Categories, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Categories>>;
    public createCategoriesUsingPOST(categories: Categories, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (categories === null || categories === undefined) {
            throw new Error('Required parameter categories was null or undefined when calling createCategoriesUsingPOST.');
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

        return this.httpClient.post<Categories>(`${this.basePath}/api/categories`,
            categories,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteCategories
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteCategoriesUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteCategoriesUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteCategoriesUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteCategoriesUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteCategoriesUsingDELETE.');
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

        return this.httpClient.delete<any>(`${this.basePath}/api/categories/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAllCategoriesCustom
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllCategoriesCustomUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<CategoriesCustomDTO>>;
    public getAllCategoriesCustomUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CategoriesCustomDTO>>>;
    public getAllCategoriesCustomUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CategoriesCustomDTO>>>;
    public getAllCategoriesCustomUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<CategoriesCustomDTO>>(`${this.basePath}/api/categories/custom-get-all`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAllCategories
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllCategoriesUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<Categories>>;
    public getAllCategoriesUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Categories>>>;
    public getAllCategoriesUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Categories>>>;
    public getAllCategoriesUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<Categories>>(`${this.basePath}/api/categories`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCategories
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCategoriesUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<Categories>;
    public getCategoriesUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Categories>>;
    public getCategoriesUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Categories>>;
    public getCategoriesUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getCategoriesUsingGET.');
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

        return this.httpClient.get<Categories>(`${this.basePath}/api/categories/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getPostByIdCat
     * 
     * @param id id
     * @param limit limit
     * @param page page
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPostByIdCatUsingGET(id: number, limit: number, page: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Posts>>;
    public getPostByIdCatUsingGET(id: number, limit: number, page: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Posts>>>;
    public getPostByIdCatUsingGET(id: number, limit: number, page: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Posts>>>;
    public getPostByIdCatUsingGET(id: number, limit: number, page: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getPostByIdCatUsingGET.');
        }

        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling getPostByIdCatUsingGET.');
        }

        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getPostByIdCatUsingGET.');
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

        return this.httpClient.get<Array<Posts>>(`${this.basePath}/api/categories/cat-id/${encodeURIComponent(String(id))}/${encodeURIComponent(String(page))}/${encodeURIComponent(String(limit))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateCategories
     * 
     * @param categories categories
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateCategoriesUsingPUT(categories: Categories, observe?: 'body', reportProgress?: boolean): Observable<Categories>;
    public updateCategoriesUsingPUT(categories: Categories, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Categories>>;
    public updateCategoriesUsingPUT(categories: Categories, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Categories>>;
    public updateCategoriesUsingPUT(categories: Categories, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (categories === null || categories === undefined) {
            throw new Error('Required parameter categories was null or undefined when calling updateCategoriesUsingPUT.');
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

        return this.httpClient.put<Categories>(`${this.basePath}/api/categories`,
            categories,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
