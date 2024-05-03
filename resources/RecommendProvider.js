import HttpRequest from './HttpRequest'

class RecommendProvider extends HttpRequest {
  async createRecommendSkill(body) {
    try {
      const data = await this.post('/recommended-skills', body)
      return {
        message: 'success',
        status: 201,
        data
      }
    } catch (e) {
      return {
        e
      }
    }
  }
}

export default RecommendProvider
