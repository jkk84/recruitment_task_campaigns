/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface CampaignDto
 */
export interface CampaignDto {
    /**
     * 
     * @type {number}
     * @memberof CampaignDto
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof CampaignDto
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CampaignDto
     */
    keywords?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof CampaignDto
     */
    bidAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof CampaignDto
     */
    fund?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CampaignDto
     */
    status?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CampaignDto
     */
    town?: string;
    /**
     * 
     * @type {number}
     * @memberof CampaignDto
     */
    radius?: number;
    /**
     * 
     * @type {number}
     * @memberof CampaignDto
     */
    sellerId?: number;
}