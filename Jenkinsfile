pipeline {
    agent any

stages {
     stage('Remove') {
            steps {
                script {
                    def containerExistsExitCode = sh(script: "docker ps -a --filter name=nuxt-container-${ENV} --format '{{.Names}}' || true", returnStatus: true)

                    if (containerExistsExitCode == 0) {
                        echo "Container nuxt-container-${ENV} not found. Skipping removal..."
                    } else {
                        echo "Container nuxt-container-${ENV} found. Removing..."
                        sh "docker rm -f nuxt-container-${ENV}"
                    }

                    // Optionally, prune unused images
                    sh "docker image prune -af"

                    // Use either of the following to print the value of ENV
                    echo "${ENV}"
                    // or
                    // echo ${ENV}
                }
            }
        }
    stage('Build') {
    steps {
        script {
            def envContent = """
                BASE_URL=${ENV == 'dev' ? '/dev' : ''}
                API_BASE_URL=https://capstone23.sit.kmutt.ac.th/sj2${ENV == 'dev' ? /dev/api : /api}
                FIREBASE_BASE_URL=https://firebasestorage.googleapis.com/v0/b/knowledge-project-${ENV == 'dev' ? devmode : 7e224}.appspot.com/o
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