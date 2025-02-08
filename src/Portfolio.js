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
      'Passionate Frontend Engineer crafting sleek, responsive, and dynamic web experiences. Skilled in React, JavaScript, HTML, and CSS, I bring ideas to life with pixel-perfect precision. Building intuitive UIs, optimizing performance, and pushing the web forward!',

    social: {
      linkedin: 'https://www.linkedin.com/in/risnanrv',
      github: 'https://github.com/risnanrv',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Maczo Apple Store',
      description:
        'Maczo Apple Store is a sleek and modern e-commerce platform for selling iphones,macbooks,ipad and  other Apple gadgets ',
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
    
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'risnanofficial@gmail.com',
    linkedin: 'https://www.linkedin.com/in/risnanrv',
    instagram: 'https://www.instagram.com/risnan_rv'
  }
  
  export { header, about, projects, skills, contact }