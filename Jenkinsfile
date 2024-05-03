pipeline {
    agent any

stages {
     stage('Remove') {
            steps {
                script {
                    sh '''
                        docker rm -f nuxt-container-${ENV} || true
                        docker image prune -af
                    '''
                }
            }
        }
    stage('Build') {
    steps {
        script {
            def envContent = """
                BASE_PATH=${ENV == 'dev' ? '/sj2/dev' : '/sj2'}
                API_BASE_URL=https://capstone23.sit.kmutt.ac.th/sj2${ENV == 'dev' ? '/dev/api' : '/api'}
                FIREBASE_BASE_URL=https://firebasestorage.googleapis.com/v0/b/knowledge-project-${ENV == 'dev' ? 'devmode' : '7e224'}.appspot.com/o
            """
            writeFile file: '.env', text: envContent

            sh '''
                docker build \
                --build-arg ENV=${ENV} \
                -t sj2vue-nuxt-${ENV}:latest .                       
            '''
        }
    }
}

        stage('Deploy') {
            steps {
                script {
                    sh '''                     
                        docker run -d --name nuxt-container-${ENV} -p :3000 --network ${ENV} sj2vue-nuxt-${ENV}:latest
                    '''
                }
            }
        }
    }
}