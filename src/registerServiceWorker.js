/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })

  // 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
  // 'https://fonts.googleapis.com/css?family=PT+Sans+Caption',
  // 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
  // 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js',

  // const CACHE_NAME = 'static-cache';

  // const FILES_TO_CACHE = [


  //   './img/*.jpg',
  //   'https://www.sherlock.co.uk/static/css/sherlock.css', 
  //   'https://www.birchfarm.com', 
  //   'https://www.birchfarm.com/camping',
  // ];
}
