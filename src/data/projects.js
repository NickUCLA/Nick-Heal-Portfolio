const projects = [
  {
    title: "Tech Blog",
    year: 2023,
    thumbnail: "TechBlogDashboard.png",
    images: [
      {
        image: "TechBlogSection.png",
        alt: "Tech Blog Project",
        caption: "Tech Blog Section",
      },
      {
        image: "TechBlogDashboard2.png",
        alt: "Tech Blog Project",
        caption: "Dashboard",
      },
    ],
    info: [
      {
        infoTitle: "What is it?",
        infoText:
          "The Tech Blog project is a Model-View-Controller application that uses Handlebars.js as the templatinig language, Sequelize as the ORM, and express-session for authentication.",
      },
      {
        infoTitle: "Who is it for?",
        infoText:
          "This is a full-stack application designed for users to create and engage with tech-related content. It provides features like creating, editing, and deleting posts, as well as commenting on others' posts.",
      },
      {
        infoTitle: "What did I do?",
        infoText:
          "I developed this application from the ground up, following the specified acceptance criteria and utilizing mock-ups for design and functionality. This endeavor improved my proficiency with MySQL database operations and the integration of template engines.",
      },
      {
        infoTitle: "Review",
        infoText: `
        "Your application user experience is intuitive and easy to navigate. Your application also resembles the mock-up functionality provided in the challenge instructions quite closely. Well done on this!!!

        This is an amazing submission. Keep up the good work and this amazing flow you have been able to establish."
        
        - Grader NM
        Central Grader , Oct 29 at 4:15am`,
      },
    ],
    github: "https://github.com/NickUCLA/Nick-s-MVC-Tech-Blog",
    url: "https://lit-dusk-22956-b49298a97cc6.herokuapp.com/",
  },
  {
    title: "5 Day Forecast",
    year: 2023,
    thumbnail: "ForecastThumbnail.png",
    images: [
      {
        image: "ForecastCity.png",
        alt: "Forecast Project",
        caption: "Forecast City",
      },
      {
        image: "ForecastDashboard.png",
        alt: "Forecast Project",
        caption: "Dashboard",
      },
    ],
    info: [
      {
        infoTitle: "What is it?",
        infoText:
          "Using the 5 Day Weather Forecast API this weather application fetches data for a specified city's 5 day forecast.",
      },
      {
        infoTitle: "Who is it for?",
        infoText:
          "This is a simple Weather Dashboard application that allows users to search for the weather forecast of various cities in the United States. The application displays the current weather information along with a 5-day forecast for the selected city.",
      },
      {
        infoTitle: "What did I do?",
        infoText:
          "Combining the synergies of jQuery, JavaScript, and Bootstrap, I engineered a simple and efficient user interface for the application. I created functions to accurately fetch and display essential weather metrics such as wind speed, humidity, and temperature extremes.",
      },
      {
        infoTitle: "Review",
        infoText: `
        "Hello Nick,

        I hope this message finds you well. I wanted to provide you with feedback on your weather dashboard, and I must say it's an excellent job!
        
        Your dedication to learning and mastering APIs shines through in this project. You've demonstrated a strong understanding of API usage and have shown a willingness to embrace challenges and push your boundaries to grow as a developer.
        
        I'm genuinely impressed with your work, Nick. Keep up the excellent effort, and know that your commitment and hard work are truly paying off. I'm excited to see the remarkable achievements you'll unlock in your future projects."
        
        Best regards,
        Central Grader JC
        Central Grader , Jul 22 at 1:55pm`,
      },
    ],
    github: "https://github.com/NickUCLA/Nicks-5-day-forecast-app",
    url: "https://nickucla.github.io/Nicks-5-day-forecast-app/",
  },
  {
    title: "Note Taker",
    year: 2023,
    thumbnail: "NoteTakerDashboard.png",
    images: [
      {
        image: "NoteTakerNotes.png",
        alt: "Forecast Project",
        caption: "Forecast City",
      },
      {
        image: "NoteTakerDashboard.png",
        alt: "Forecast Project",
        caption: "Dashboard",
      },
    ],
    info: [
      {
        infoTitle: "What is it?",
        infoText:
          "This Note Taker application allows users to write, save, and manage notes. The application utilizes an Express.js back end to store and retrieve note data from a JSON file.",
      },
      {
        infoTitle: "Who is it for?",
        infoText:
          "Designed for the busy small business owner, this tool allows for the efficient recording and retrieval of notes and tasks, streamlining thought organization and task management.",
      },
      {
        infoTitle: "What did I do?",
        infoText:
          "Developed a Note Taker application employing Express.js for backend operations, facilitating note creation, storage, and retrieval. Integrated a JSON-based storage system and ensured a smooth user experience with a dynamic front-end.",
      },
      {
        infoTitle: "Review",
        infoText: `
        "Hello Nick,

        Thank you for your submission.

        I was impressed with the set up of your application. 
        There were no errors present in your app and everything seemed in order.
        Great job on completing the bonus and making notes deletable. You really went the extra mile here.

        Keep up the great work"

        JL - central grader
        Central Grader , Aug 26 at 4:37pm`,
      },
    ],
    github: "https://github.com/NickUCLA/Nicks-Express.js-Note-Taker",
    url: "https://hidden-ravine-45484-80c25349ac98.herokuapp.com/",
  },
  {
    title: "Work Day Scheduler",
    year: 2023,
    thumbnail: "WorkSchedulerDashboard.png",
    images: [
      {
        image: "WorkSchedulerExample.png",
        alt: "Scheduler Project",
        caption: "Forecast City",
      },
      {
        image: "WorkSchedulerDashboard.png",
        alt: "Scheduler Project",
        caption: "Dashboard",
      },
    ],
    info: [
      {
        infoTitle: "What is it?",
        infoText:
          "This application features a live display of the current day and color-coded time blocks aligned with standard business hours for quick reference. Users can easily create, edit, and persistently store their events using the browser's local storage, ensuring their schedule is always accessible.",
      },
      {
        infoTitle: "Who is it for?",
        infoText:
          "The Work Day Scheduler is a web-based application that allows users to plan and organize their work day. Users can create a schedule by entering events and saving them in the local storage of their browser.",
      },
      {
        infoTitle: "What did I do?",
        infoText:
          "Incorporated local storage to reliably preserve user tasks, utilized HTML and the Bootstrap framework for layout, along with JavaScript enhanced by jQuery and Day.js for dynamic interactivity and date handling.",
      },
      {
        infoTitle: "Review",
        infoText: `
        "Hello Nick,

        I wanted to take a moment to congratulate you on a job well done! Your daily work schedule is impressive, and you have successfully implemented most of the required features.
        
        Overall, Nick, your work on this assignment is exceptional. The style and professionalism of the page demonstrate your commitment to delivering a high-quality product. I encourage you to continue your hard work and dedication, as it is clearly paying off.

        Keep up the great work, and I look forward to seeing your future accomplishments!"

        Best regards,
        Central Grader JC
        Central Grader , Jul 13 at 2:45pm`,
      },
    ],
    github: "https://github.com/NickUCLA/Nicks-work-day-scheduler",
    url: "https://nickucla.github.io/Nicks-work-day-scheduler/",
  },
  {
    title: "Nick's Coding Quiz",
    year: 2023,
    thumbnail: "QuizDashboard.png",
    images: [
      {
        image: "QuizUI.png",
        alt: "Example Project",
        caption: "Quiz Interface",
      },
      {
        image: "QuizDashboard.png",
        alt: "Example Project",
        caption: "Dashboard",
      },
    ],
    info: [
      {
        infoTitle: "What is it?",
        infoText:
          "This project is a timed coding quiz built with JavaScript. It was designed to leverage local storage to record high scores. Additionally, it incorporates the use of `setTimeout` and `setInterval` methods to manage quiz timing.",
      },
      {
        infoTitle: "Who is it for?",
        infoText:
          "The quiz is designed for new students to test their knowlege and study core concepts of Javascript, HTML, and CSS.",
      },
      {
        infoTitle: "What did I do?",
        infoText:
          "Utilizing HTML and CSS, I crafted an engaging and user-friendly interface that enhances the study experience, complemented by JavaScript to introduce a dynamic challenge.",
      },
      {
        infoTitle: "Review",
        infoText: `"Hello Nick, great work submitting your assignment. Your work shows really shows how much you've been learning so far. Nice job deploying the site and meeting the criteria. You do an excellent job all around. Amazing creativity!"

        -CG KP
        Central Grader , Jul 10 at 3:44pm`,
      },
    ],
    github: "https://github.com/NickUCLA/Nicks-Bootcamp-Quiz",
    url: "https://nickucla.github.io/Nicks-Bootcamp-Quiz/",
  },
  {
    title: "Password Generator",
    year: 2023,
    thumbnail: "PasswordThumbnail.png",
    images: [
      {
        image: "PasswordImage.png",
        alt: "Password Generator Project",
        caption: "Password Generator Interface",
      },
      {
        image: "PasswordImage2.png",
        alt: "Password Generator Project",
        caption: "Generated Password",
      },
    ],
    info: [
      {
        infoTitle: "What is it?",
        infoText:
          "This is a simple password generator application that allows you to generate secure passwords based on selected criteria. You can specify the length of the password and choose from lowercase letters, uppercase letters, numeric characters, and special characters.",
      },
      {
        infoTitle: "Who is it for?",
        infoText:
          "The password generator provides a user-friendly solution for anyone looking to craft strong, personalized passwords with ease.",
      },
      {
        infoTitle: "What did I do?",
        infoText:
          "Developed a user-friendly password generator that delivers secure, customized passwords. Implemented a robust algorithm in JavaScript to ensure each password adheres to user-selected criteria, with a clean HTML and CSS interface for seamless user experience.",
      },
      {
        infoTitle: "Review",
        infoText: `"Amazing work! Your application is very impressive and its clear you're applying the knowledge taught in class to your assignments. Keep up the hard work and momentum on future projects!"  
        - Central Grader, GC
        Central Grader , Jun 30 at 5:48pm`,
      },
    ],
    github: "https://github.com/NickUCLA/Nicks-Password-Generator",
    url: "https://nickucla.github.io/Nicks-Password-Generator/",
  },
];

export default projects;
