const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://github.com/risnanrv',
    title: 'Risnan Rv',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Risnan Rv',
    role: 'FrontEnd Developer',
    description:
      'Aspiring Frontend Developer turning ideas into interactive, user-friendly websites. Skilled in React, JavaScript, HTML, and CSS, I focus on clean design, performance, and real-world functionality. Learning fast, building smarter, and leveling up with every project.',

    social: {
      linkedin: 'https://www.linkedin.com/in/risnanrv',
      github: 'https://github.com/risnanrv',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Webzin',
      description:
        'WebZin is a freelance web development service turning client visions into powerful websites. From e-commerce to static sites, we craft responsive, modern designs tailored to user needs with a focus on quality, speed, and support. ',
      stack: [ 'React' , 'CSS' ,'Tailwind CSS'],
      livePreview:'https://webzin-dev.vercel.app/',
    },
    {
      name: 'Zyvo',
      description:
        'Zyvo is a modern eCommerce website built with React. It features responsive design, product listing, cart functionality, and a sleek UI—crafted to deliver a smooth and user-friendly shopping experience. ',
      stack: [ 'React' , 'CSS' ,'Bootstrap'],
      sourceCode: 'https://github.com/risnanrv/zyvo-ecommerce.git',
      livePreview: 'https://zyvo-azure.vercel.app/',
    },
    {
      name: 'Maczo Apple Store',
      description:
        'Maczo is a modern product showcase website built with React. It features sleek UI, responsive design, smooth navigation, and a scrollable card section to display iPhones and product details beautifully. ',
      stack: [ 'React' , 'CSS'],
      sourceCode: 'https://github.com/risnanrv/maczo.git',
      livePreview: 'https://maczo.vercel.app/',
    },
    {
      name: 'BookMyHealth',
      description:
        'BookMyHealth is a user-friendly platform to book healthcare services easily, built with React and modern tech',
      stack: ['React', 'CSS'],
      sourceCode: 'https://github.com/risnanrv/bookmyhealth.com.git',
      livePreview: 'https://risnanrv.github.io/bookmyhealth.com/',
    },
    {
      name: 'CueTune',
      description:
        'CueTune is a modern music streaming platform , offering seamless playback and smart features.',
      stack: ['HTML', 'CSS' , 'Javascript'],
      sourceCode: 'https://github.com/risnanrv/Cue-Tone.git',
      livePreview: 'https://risnanrv.github.io/Cue-Tone/',
    },
    {
      name: 'Flipkart Clone',
      description:
        'A mini Flipkart clone built with React, offering a seamless e-commerce experience. .',
      stack: ['React', 'CSS'],
      sourceCode: 'https://github.com/risnanrv/flipkart.git',
      livePreview: 'https://risnanrv.github.io/flipkart/',
    },
    {
      name: 'FlyStay',
      description:
      'FlyStay is a sleek travel booking website designed with HTML and CSS for seamless flight and stay reservations.',
      stack: ['HTML', 'CSS' ],
      sourceCode: 'https://github.com/risnanrv/FlyStay.git',
      livePreview: 'https://risnanrv.github.io/FlyStay/',
    },
    {
      name: 'LearnToCode',
      description:
        'LearnToCode is a beginner-friendly platform to learn coding from basics to advanced with top tutorials.',
      stack: ['React', 'CSS'],
      sourceCode: 'https://github.com/risnanrv/LearnToCode.git',
      livePreview: 'https://risnanrv.github.io/LearnToCode/',
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Git',
    'Bootstrap',
    'Tailwind CSS',
    'Figma'
    
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'risnanofficial@gmail.com',
    linkedin: 'https://www.linkedin.com/in/risnanrv',
    instagram: 'https://www.instagram.com/risnan_rv'
  }
  
  export { header, about, projects, skills, contact }