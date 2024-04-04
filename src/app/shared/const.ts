import { environment } from "../../environments/environment"

const relativeUrl = {

  ACTORS: 'actors',
  SALES: 'sales'
}

const API_VERSION = environment.apiVersion
export const enum ActorTypes { CUSTOMER = 1 , VENDOR = 2  }
export const enum Themes { DARK='lara-dark-blue', LIGHT = 'lara-light-blue' }
export const API_URL = {

  GET_ACTORS:`${API_VERSION}/${relativeUrl.ACTORS}`,
  ADD_ACTOR : `${API_VERSION}/${relativeUrl.ACTORS}`

}
