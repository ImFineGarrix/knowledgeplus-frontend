import HttpRequest from './HttpRequest'

class CareerProvider extends HttpRequest {

  async getCareer(page, limit, search = '', group = 0) {
    try {
      const data = await this.get(`/careers?page=${page}&limit=${limit}&search=${search}&group=${group}`)
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

  async getCareerBySkillId(id, page = 1, limit = 99999) {
    try {
      const data = await this.get(`/careers-by-skill/${id}?page=${page}&limit=${limit}`)
      return {
        message: 'success',
        status: 200,
        data
      }
    } catch (e) {
      return {
        message: 'error',
        status: e
      }
    }
  }

  async getCareerByCourseId(id, page = 1, limit = 99999) {
    try {
      const data = await this.get(`/careers-by-course/${id}?page=${page}&limit=${limit}`)
      return {
        message: 'success',
        status: 200,
        data
      }
    } catch (e) {
      return {
        message: 'error',
        status: e
      }
    }
  }
}

export default CareerProvider
