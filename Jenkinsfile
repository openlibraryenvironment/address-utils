#!groovy

podTemplate(
  containers:[
    containerTemplate(name: 'node',                 image:'node:14',                      ttyEnabled:true, command:'cat'),
    containerTemplate(name: 'docker',               image:'docker:18',                    ttyEnabled:true, command:'cat')
  ],
  volumes: [
    hostPathVolume(hostPath: '/var/run/docker.sock', mountPath: '/var/run/docker.sock'),
    hostPathVolume(hostPath: '/var/lib/jenkins/.npmcache', mountPath: '/root/.npm'),
    hostPathVolume(hostPath: '/var/lib/jenkins/.yarncache', mountPath: '/root/.cache'),
    hostPathVolume(hostPath: '/var/lib/jenkins/.yarncache', mountPath: '/usr/local/share/.cache'),
  ])
{
  node(POD_LABEL) {

    stage ('checkout') {
      checkout_details = checkout scm
      println("Checkout details ${checkout_details}");
    }

    stage ('build') {
      container('node') {
      sh "yarn config set registry https://nexus.libsdev.k-int.com/repository/libsdev-npm-group/"
      sh "NODE_OPTIONS=\"--max-old-space-size=4096\"; yarn build"
      sh "ls -l output/*"
    }
  }
}
