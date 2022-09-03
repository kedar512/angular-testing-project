import { rest } from 'msw';

const courses = [
    {
      "id": 1,
      "titles": {
        "description": "Serverless Angular with Firebase Course",
        "longDescription": "Serveless Angular with Firestore, Firebase Storage & Hosting, Firebase Cloud Functions & AngularFire"
      },
      "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/serverless-angular-small.png",
      "lessonsCount": 10,
      "category": "BEGINNER",
      "seqNo": 4,
      "url": "serverless-angular"
    },
    {
      "id": 2,
      "titles": {
        "description": "Angular Core Deep Dive",
        "longDescription": "A detailed walk-through of the most important part of Angular - the Core and Common modules"
      },
      "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png",
      "lessonsCount": 10,
      "category": "BEGINNER",
      "seqNo": 1,
      "url": "angular-core-course"
    },
    {
      "id": 3,
      "titles": {
        "description": "RxJs In Practice Course",
        "longDescription": "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples"
      },
      "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png",
      "courseListIcon": "https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png",
      "category": "BEGINNER",
      "lessonsCount": 10,
      "seqNo": 2,
      "url": "rxjs-course"
    },
    {
      "id": 4,
      "titles": {
        "description": "NgRx In Depth",
        "longDescription": "Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics."
      },
      "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png",
      "courseListIcon": "https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png",
      "category": "BEGINNER",
      "lessonsCount": 10,
      "seqNo": 3,
      "url": "ngrx-course"
    },
    {
      "id": 5,
      "titles": {
        "description": "Angular for Beginners",
        "longDescription": "Establish a solid layer of fundamentals, learn what's under the hood of Angular"
      },
      "iconUrl": "https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png",
      "courseListIcon": "https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png",
      "category": "BEGINNER",
      "lessonsCount": 10,
      "seqNo": 5,
      "url": "angular-for-beginners"
    },
    {
      "id": 6,
      "titles": {
        "description": "Angular Security Course - Web Security Fundamentals",
        "longDescription": "Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks."
      },
      "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png",
      "courseListIcon": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/lock-v2.png",
      "category": "ADVANCED",
      "lessonsCount": 11,
      "seqNo": 6,
      "url": "angular-security-course"
    },
    {
      "id": 7,
      "titles": {
        "description": "Angular PWA - Progressive Web Apps Course",
        "longDescription": "Learn Angular Progressive Web Applications, build the future of the Web Today."
      },
      "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png",
      "courseListIcon": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/alien.png",
      "category": "ADVANCED",
      "lessonsCount": 8,
      "seqNo": 7,
      "url": "angular-pwa-course"
    },
    {
      "id": 8,
      "titles": {
        "description": "Angular Advanced Library Laboratory: Build Your Own Library",
        "longDescription": "Learn Advanced Angular functionality typically used in Library Development. Advanced Components, Directives, Testing, Npm"
      },
      "iconUrl": "https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png",
      "courseListIcon": "https://angular-academy.s3.amazonaws.com/thumbnails/angular-advanced-lesson-icon.png",
      "category": "ADVANCED",
      "seqNo": 8,
      "url": "angular-advanced-course"
    },
    {
      "id": 9,
      "titles": {
        "description": "The Complete Typescript Course",
        "longDescription": "Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API."
      },
      "iconUrl": "https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png",
      "courseListIcon": "https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-lesson.png",
      "category": "BEGINNER",
      "seqNo": 9,
      "url": "typescript-course"
    },
    {
      "id": 10,
      "titles": {
        "description": "Rxjs and Reactive Patterns Angular Architecture Course",
        "longDescription": "Learn the core RxJs Observable Pattern as well and many other Design Patterns for building Reactive Angular Applications."
      },
      "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png",
      "courseListIcon": "https://angular-academy.s3.amazonaws.com/course-logos/observables_rxjs.png",
      "category": "BEGINNER",
      "seqNo": 10,
      "url": "rxjs-patterns-course"
    },
    {
      "id": 11,
      "titles": {
        "description": "Angular Material Course",
        "longDescription": "Build Applications with the official Angular Widget Library"
      },
      "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png",
      "category": "BEGINNER",
      "seqNo": 11,
      "url": "angular-material-course"
    },
    {
      "id": 12,
      "titles": {
        "description": "Angular Testing Course",
        "longDescription": "In-depth guide to Unit Testing and E2E Testing of Angular Applications"
      },
      "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-testing-small.png",
      "category": "BEGINNER",
      "seqNo": 0,
      "url": "angular-testing-course",
      "lessonsCount": 10
    }
  ];

export const handlers = [
    rest.get('http://localhost:4200/api/courses', (req, res, ctx) => {
        //const { user } = req.params
    
        return res(
          ctx.status(200),
          ctx.json({
            payload: courses
          }),
        )
    }),
];