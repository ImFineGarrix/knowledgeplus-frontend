import HttpRequest from './HttpRequest'

class CourseProvider extends HttpRequest {

  async getCourse(page, limit, search = '') {
    try {
      const data = await this.get(`/courses?page=${page}&limit=${limit}&search=${search}`)
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

  async getCourseById(id) {
    try {
      const data = await this.get(`/courses/${id}`)
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

  async getCourseByCareerId(id, page = 1, limit = 99999) {
    try {
      const data = await this.get(`/courses-by-career/${id}?page=${page}&limit=${limit}`)
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

  async getCourseBySkillId(id, page = 1, limit = 99999) {
    try {
      const data = await this.get(`/courses-by-skill/${id}?page=${page}&limit=${limit}`)
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

export default CourseProvider
