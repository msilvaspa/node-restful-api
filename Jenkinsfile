pipeline {
  agent {
    docker {
      image 'node:6-alpine'
    }
    
  }
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
