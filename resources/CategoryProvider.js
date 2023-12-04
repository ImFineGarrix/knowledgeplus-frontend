import HttpRequest from './HttpRequest'

class CategoryProvider extends HttpRequest {

  async getCategory() {
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

  async getCategoryById(id) {
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

export default CategoryProvider
