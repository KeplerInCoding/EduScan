import React from 'react'
import user from '../images/user.png'

const Team = () => {
    const teamMembers = [
        {
            name: 'Shreya Sharma',
            year: '3rd Year BTech CSE',
            college: 'KIET Groups of Institutions',
            image: user,
            socials: {
                linkedin: 'https://www.linkedin.com/in/john-doe/',
                twitter: 'https://twitter.com/johndoe',
                github: 'https://github.com/johndoe'
            },
            techStack: 'HTML, CSS, JavaScript, React'
        },
        {
            name: 'Samiksha Gupta',
            year: '3rd Year BTech CSE',
            college: 'KIET Groups of Institutions',
            image: user,
            socials: {
                linkedin: 'https://www.linkedin.com/in/jane-smith/',
                twitter: 'https://twitter.com/janesmith',
                github: 'https://github.com/janesmith'
            },
            techStack: 'Python, Django, PostgreSQL, React Native'
        },
        {
            name: 'Aksshat Govind',
            year: '3rd Year BTech CSE',
            college: 'KIET Groups of Institutions',
            image: user,
            socials: {
                linkedin: 'https://www.linkedin.com/in/jane-smith/',
                twitter: 'https://twitter.com/janesmith',
                github: 'https://github.com/janesmith'
            },
            techStack: 'Python, Django, PostgreSQL, React Native'
        },
        {
            name: 'Mohammed Faaiz',
            year: '3rd Year BTech CSE',
            college: 'KIET Groups of Institutions',
            image: user,
            socials: {
                linkedin: 'https://www.linkedin.com/in/jane-smith/',
                twitter: 'https://twitter.com/janesmith',
                github: 'https://github.com/janesmith'
            },
            techStack: 'Python, Django, PostgreSQL, React Native'
        },
        // Add more team members here
    ];

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6">
            <h2 className="text-2xl font-bold mb-4">OUR TEAM : AGLET</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-rose-50 rounded-lg p-4 flex flex-col items-center">
                        <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mb-4" />
                        <h3 className="text-lg font-semibold">{member.name}</h3>
                        <p className="text-sm text-gray-800 mb-2">{member.year}</p>
                        <p className="text-sm text-gray-800 mb-2">{member.college}</p>
                        <p className="text-sm text-gray-800 mb-2">Tech Stack: {member.techStack}</p>
                        <div className="flex gap-4">
                            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-linkedin"></i>
                            </a>
                            <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-twitter"></i>
                            </a>
                            <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Team