pipeline {
    agent { label 'dockerserver' }
    stages {
        stage('Backend') {
            agent {
                docker {
                    label 'dockerserver'
                    image 'node:7-alpine'
                }
            } 
            steps {
                sh 'cd backend'
                sh 'npm install'
            }
        }
    }
}