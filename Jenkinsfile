pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('Backend') {
            steps {
                sh 'npm --version'
                sh 'node --version'
            }
        }
    }
}