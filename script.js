// Portfolio data
const portfolioData = {
    projects: [
        {
            title: "Project One",
            description: "A description of your first project. Showcase your skills and accomplishments."
        },
        {
            title: "Project Two",
            description: "A description of your second project. Highlight the technologies used."
        },
        {
            title: "Project Three",
            description: "A description of your third project. Explain the impact and results."
        }
    ],
    skills: [
        "JavaScript",
        "HTML/CSS",
        "React",
        "Node.js",
        "Git",
        "Problem Solving",
        "Web Development",
        "Responsive Design"
    ]
};

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
    setupSmoothScrolling();
});

// Initialize portfolio content
function initializePortfolio() {
    loadProjects();
    loadSkills();
}

// Load and display projects
function loadProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    
    if (!projectsContainer) return;
    
    portfolioData.projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsContainer.appendChild(projectCard);
    });
}

// Create a project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const title = document.createElement('h3');
    title.textContent = project.title;
    
    const description = document.createElement('p');
    description.textContent = project.description;
    
    card.appendChild(title);
    card.appendChild(description);
    
    return card;
}

// Load and display skills
function loadSkills() {
    const skillsContainer = document.getElementById('skillsContainer');
    
    if (!skillsContainer) return;
    
    portfolioData.skills.forEach(skill => {
        const skillTag = createSkillTag(skill);
        skillsContainer.appendChild(skillTag);
    });
}

// Create a skill tag element
function createSkillTag(skill) {
    const tag = document.createElement('span');
    tag.className = 'skill-tag';
    tag.textContent = skill;
    
    return tag;
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 70;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add scroll animation for sections
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialize section animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Set hero section to visible immediately
const heroSection = document.querySelector('#hero');
if (heroSection) {
    heroSection.style.opacity = '1';
    heroSection.style.transform = 'translateY(0)';
}
