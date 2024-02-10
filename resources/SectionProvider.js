import HttpRequest from './HttpRequest'

class SectionProvider extends HttpRequest {

  async getSection() {
    try {
      const data = await this.get(`/categories`)
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
      const data = await this.get(`/categories/${id}`)
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
