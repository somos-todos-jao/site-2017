import { requester as http } from './http'

/**
* Upload a photo to SomosTodosJÃO API | Tekoá
*
* @param {file} file
*
* @returns {Promise}
*/

export const postPhoto = file => {
    const headers = {
            'Content-Type': 'multipart/form-data'
        },
        data = new FormData()

    data.append('file', file)
    data.append('name', file.name)

    return http.post(
        '/upload/',
        data,
        { headers }
    )
}
