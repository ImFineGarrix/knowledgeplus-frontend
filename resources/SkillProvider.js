import HttpRequest from './HttpRequest'

class SkillProvider extends HttpRequest {

  async getSkill(page, limit) {
    try {
      const data = await this.get(`/skills?page=${page}&limit=${limit}`)
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
}

export default SkillProvider
