import HttpRequest from './HttpRequest'

class CareerProvider extends HttpRequest {

  async getCareer(page, limit) {
    try {
      const data = await this.get(`/careers_have_categories?page=${page}&limit=${limit}`)
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

  async getCareerById(id) {
    try {
      const data = await this.get(`/careers/${id}`)
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

export default CareerProvider
