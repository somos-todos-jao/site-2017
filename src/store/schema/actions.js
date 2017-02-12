/**
 * Vuex actions
 */
import * as types from '../types'

// noinspection JSUnusedGlobalSymbols
/**
 * @param context
 * @param payload
 */
export const changeTitle = (context, payload) => {
  context.commit(types.setAppTitle, payload)
}

// noinspection JSUnusedGlobalSymbols
/**
 * @param context
 * @param payload
 */
export const changeMenu = (context, payload) => {
  context.commit(types.setAppMenu, payload)
}

// noinspection JSUnusedGlobalSymbols
/**
 * @param context
 * @param payload
 */
export const changeUser = (context, payload) => {
  context.commit(types.setAppUser, payload)
}
