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
                    echo ${ENV}
                }
            }
        }
    stage('Build') {
    steps {
        script {
            def envContent = """
                BASE_URL=${ENV == 'dev' ? '/sj2/dev' : '/sj2'}
                API_BASE_URL=https://cp23sj2.sit.kmutt.ac.th/api
                FIREBASE_BASE_URL=https://firebasestorage.googleapis.com/v0/b/knowledge-project-${ENV == 'dev' ? 7e224 : devmode}.appspot.com/o
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
                        docker run -d --name nuxt-container-${ENV} -p 3000:3000 --network ${ENV} sj2vue-nuxt-${ENV}:latest
                    '''
                }
            }
        }
    }
}