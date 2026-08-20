import axios from 'axios'
type NewPerson = {
    name: string
    number: string

}
const baseUrl= 'http://localhost:3001/persons'
const getAll = () => {

    return axios.get(baseUrl)
}

const create = (newObject: NewPerson ) => {
    return  axios.post(baseUrl, newObject)
}

const remove = (id: string) => {
    return axios.delete(`${baseUrl}/${id}`)
}
export default {
    getAll,
    create,
    remove
}