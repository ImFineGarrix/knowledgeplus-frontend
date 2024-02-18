import HttpRequest from './HttpRequest'

class SkillProvider extends HttpRequest {

  async getSkill(page, limit, search = '') {
    try {
      const data = await this.get(`/skills?page=${page}&limit=${limit}?search=${search}`)
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

  async getSkillById(id) {
    try {
      const data = await this.get(`/skills/${id}`)
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

  async getSkillByCareerId(id, page = 1, limit = 99999) {
    try {
      const data = await this.get(`/skills-by-career/${id}?page=${page}&limit=${limit}`)
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

  async getSkillByCourseId(id, page = 1, limit = 99999) {
    try {
      const data = await this.get(`/skills-by-course/${id}?page=${page}&limit=${limit}`)
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

export default SkillProvider
