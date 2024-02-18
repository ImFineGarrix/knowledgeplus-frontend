import HttpRequest from './HttpRequest'

class GroupProvider extends HttpRequest {

  async getGroup() {
    try {
      const data = await this.get(`/groups`)
      return {
        message: 'success',
        status: 200,
        data
      }
    } catch (e) {
      return {
        message: 'error',
        status: e,
      }
    }
  }

  async getGroupById(id) {
    try {
      const data = await this.get(`/groups/${id}`)
      return {
        message: 'success',
        status: 200,
        data
      }
    } catch (e) {
      return {
        message: 'error',
        status: e,
      }
    }
  }

}

export default GroupProvider
