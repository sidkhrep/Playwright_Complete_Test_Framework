pipeline {

agent any

environment {
    // Application configuration
    BASE_URL = 'https://www.saucedemo.com'
    USERNAME = 'standard_user'
    PASSWORD = 'secret_sauce'

    // Tell Playwright that tests are running in CI
    CI = 'true'
}

stages {

    stage('Checkout') {
        steps {
            checkout scm
        }
    }

    stage('Install Dependencies') {
        steps {
            bat 'npm ci'
        }
    }

    stage('Install Playwright Browsers') {
        steps {
            bat 'npx playwright install'
        }
    }

    stage('Run Playwright Tests') {
        steps {
            bat 'npx playwright test'
        }
    }
}

post {

    always {
        // Archive Playwright test results
        archiveArtifacts artifacts: 'test-results/**/*', allowEmptyArchive: true

        // Publish HTML report
        publishHTML([
            allowMissing: true,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'reports/html-report',
            reportFiles: 'index.html',
            reportName: 'Playwright HTML Report'
        ])
    }

    success {
        echo 'Playwright tests completed successfully.'
    }

    failure {
        echo 'Playwright tests failed. Check the Playwright report and test artifacts.'
    }
}

}

