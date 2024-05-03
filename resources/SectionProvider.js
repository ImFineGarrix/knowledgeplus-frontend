import HttpRequest from './HttpRequest'

class SectionProvider extends HttpRequest {

  async getSection() {
    try {
      const data = await this.get(`/sections`)
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

  async getSectionById(id) {
    try {
      const data = await this.get(`/sections/${id}`)
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

export default SectionProvider
