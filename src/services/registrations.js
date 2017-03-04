import { requester as http } from './http'

/**
* Upload registration to SomosTodosJÃO API | Tekoá
*
* @param {Object} registrations
* @param {string} photo
* @param {string} name
* @param {string} type
* @param {string} gender
* @param {integer} members
* @param {string} majorName
* @param {string} doc
* @param {string} facebook
* @param {string} webpage
* @param {string} instagram
* @param {string} email
* @param {string} telephone
* @param {string} address
* @param {string} city
* @param {string} state
* @param {string} resume
* @param {string} video
* @param {bool} contract
*
* @returns {Promise}
*/

export const postRegistrations = registrations => {
    const headers = {
            'Content-Type': 'multipart/form-data'
        },
        data = new FormData()

    data.append('foto', registrations.photo)
    data.append('nome', registrations.name)
    data.append('tipo', registrations.type)
    data.append('genero', registrations.gender)
    data.append('integrantes', registrations.members)
    data.append('responsavel', registrations.majorName)
    data.append('documento', registrations.doc)
    data.append('facebook', registrations.facebook)
    data.append('site', registrations.webpage)
    data.append('instagram', registrations.instagram)
    data.append('email', registrations.email)
    data.append('telefone', registrations.telephone)
    data.append('endereco', registrations.address)
    data.append('cidade', registrations.city)
    data.append('estado', registrations.state)
    data.append('descricao', registrations.resume)
    data.append('youtube', registrations.video)
    data.append('contrato', registrations.contract)

    return http.post(
        '/content/registrations',
        data,
        { headers }
    )
}
