// resume.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  getResumeData() {
    // Return resume data as an object
    return {
      name: 'Apeksha',
      address: 'Mathrushree Nilaya Chappanna Guri Belvai-574213',
      city: 'Mangalore',
      state: 'Karnataka',
      zip: '574213',
      email: 'apekshaacharya88@gmail.com',
      phone: '+91 8722891770',
      linkedIn: 'https://www.linkedin.com/in/apeksha-acharya-994047165/',
      objective: 'Results-driven Angular developer with 3 years of experience in designing and implementing dynamic web applications. Proficient in Angular framework, JavaScript, HTML, and CSS. Skilled in optimizing application performance and user experience. Seeking to leverage expertise in a collaborative team environment to contribute to innovative projects and advance career growth.',
      experience: [
        {
          title: 'Software Engineer',
          company: 'Zycus Infotech',
          location: 'Bangalore',
          date: '12, 2022 - Present',
          responsibilities: [
            'Developing Dynamic User Interfaces: Crafting interactive and responsive user interfaces using Angular framework, ensuring seamless user experiences.',

            'Implementing Features and Functionality: Integrating diverse features and functionalities into Angular applications, such as form validation, routing, authentication, and data manipulation.',

            'Optimizing Application Performance: Improving the performance of Angular applications through techniques like lazy loading, code splitting, and efficient data fetching to enhance speed and responsiveness.',

            'Testing and Debugging: Writing comprehensive unit tests and conducting rigorous debugging processes to ensure the reliability and stability of Angular applications across different browsers and devices.',

            'Collaboration and Teamwork: Collaborating effectively with designers, backend developers, and other stakeholders to translate requirements into scalable and maintainable Angular solutions, fostering a positive and productive team environment.'
            // Add other responsibilities as needed
          ]
        },
        {
          title: 'Angular Developer',
          company: 'Infosys Limited',
          location: 'Mangalore',
          date: '4, 2021 - 12, 2022',
          responsibilities: [
            'Developed responsive web applications using Angular framework, HTML5, CSS3, and JavaScript.',
            'Implemented user interfaces and interactions using Angular components, directives, services, and modules.',
            // Add other responsibilities as needed
          ]
        }
        // Add other experience items as needed
      ],
      education: {
        degree: 'Bachelor Of Science',
        university: 'Mangalore University',
        location: 'Mangalore',
        graduationYear: '2020'
      },
      skills: [
        'JavaScript',
        'TypeScript',
        'HTML5',
        'CSS3',
        'Angular (2+)',
        'RxJS',
        'Git',
        'Visual Studio Code',
        'Angular CLI'
        // Add other skills as needed
      ],
      certifications: ['Angular - The Complete Guide (2024 Edition)', 'Bootstrap 5 Course - The Complete Guide Step by Step (2024)'
      ],
      Projects:[
        'Portfolio Website'
      ]
    };
  }
}
