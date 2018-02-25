node('node') {


    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){

          checkout scm
       }

       stage('Test'){

         env.NODE_ENV = "test"

         print "Environment will be : ${env.NODE_ENV}"

         sh 'npm install'
         sh 'npm test'

       }

    }
    catch (err) {

        currentBuild.result = "FAILURE"

        throw err
    }

}
