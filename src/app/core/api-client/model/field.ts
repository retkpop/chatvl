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
import { AnnotatedType } from './annotatedType';
import { Annotation } from './annotation';
import { Type } from './type';


export interface Field { 
    accessible?: boolean;
    annotatedType?: AnnotatedType;
    annotations?: Array<Annotation>;
    declaredAnnotations?: Array<Annotation>;
    enumConstant?: boolean;
    genericType?: Type;
    modifiers?: number;
    name?: string;
    synthetic?: boolean;
}
