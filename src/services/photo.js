import { requester as http } from './http'

/**
* Upload a photo to SomosTodosJÃO API | Tekoá
*
* @param {file} photo
*
* @returns {Promise}
*/
const postPhoto = (photo) => {
    http.post('/upload/registrations', { photo })
}

export default postPhoto
