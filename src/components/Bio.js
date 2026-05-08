// components/Bio.js

 const biotext  = 'A passionate and self-driven frontend developer, currently building skills through hands-on personal projects. I enjoy turning ideas into clean, responsive, and user-friendly interfaces while continuously learning modern web technologies. Eager to grow, collaborate, and take my first step into the professional world.';

const skills = ['Figma', 'Prototyping', 'Design Systems','React JS', 'JavaScript', 'Talwind CSS' , 'HTML', 'GIT'];

 

function Bio() {

    return (

        <div className='bio-section'>

            <p className="bio-text">{biotext}</p>

            <h3>Skills</h3>
            <div className="skills-container">

                {skills.map((skill, index)=> (
                   <span key={index} className='skill-tag'>{skill}</span>
            ))}

            </div>

          </div>

         

    )
    
}

export default Bio;