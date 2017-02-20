import { requester as http } from './http'

/**
* Upload a photo to SomosTodosJÃO API | Tekoá
*
* @param {Object} registrations
* @param {string} registrations.
*
* @returns {Promise}
*/
export const postRegistrations = ({ firstName, lastName }) =>
    http.post('/content/registrations', { firstName, lastName })
