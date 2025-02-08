import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { about } from '../../Portfolio'
import './About.css'

const About = () => {
  const { name, role, description,  social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>
      <div className="social-button-container">
  {social.linkedin && (
    <a href={social.linkedin}>
      <span type='button' aria-label='linkedin' className='btn btn--outline'>
        <LinkedInIcon /> LinkedIn
      </span>
    </a>
  )}
  {social.github && (
    <a href={social.github}>
      <span type='button' aria-label='github' className='btn btn--outline'>
        <GitHubIcon /> GitHub
      </span>
    </a>
  )}
</div>

   </div>
  )
}

export default About