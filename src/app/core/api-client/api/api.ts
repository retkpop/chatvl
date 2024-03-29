export * from './accountResource.service';
import { AccountResourceService } from './accountResource.service';
export * from './actionsResource.service';
import { ActionsResourceService } from './actionsResource.service';
export * from './categoriesResource.service';
import { CategoriesResourceService } from './categoriesResource.service';
export * from './gatewayResource.service';
import { GatewayResourceService } from './gatewayResource.service';
export * from './hashtagResource.service';
import { HashtagResourceService } from './hashtagResource.service';
export * from './postsResource.service';
import { PostsResourceService } from './postsResource.service';
export * from './suggestionsResource.service';
import { SuggestionsResourceService } from './suggestionsResource.service';
export * from './userJwtController.service';
import { UserJwtControllerService } from './userJwtController.service';
export * from './userResource.service';
import { UserResourceService } from './userResource.service';
export const APIS = [AccountResourceService, ActionsResourceService, CategoriesResourceService, GatewayResourceService, HashtagResourceService, PostsResourceService, SuggestionsResourceService, UserJwtControllerService, UserResourceService];
