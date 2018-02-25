pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        echo 'Building..'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
        echo 'Testing..'
      }
    }
  }
}