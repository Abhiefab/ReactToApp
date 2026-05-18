pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Abhiefab/ReactToApp.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t reacttodoapp .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker stop reactcontainer || true'
                sh 'docker rm reactcontainer || true'
                sh 'docker run -d -p 3000:80 --name reactcontainer reacttodoapp'
            }
        }
    }
}