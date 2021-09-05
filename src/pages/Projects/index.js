import React from 'react';
import linkIcon from '../../assets/icons/link-white.jpg';
import githubIcon from '../../assets/icons/GitHub-Mark-Light-64px.png';
import techBlogImg from '../../assets/images/tech-blog.png';
import weatherDashImg from '../../assets/images/weather-dashboard.png';
import clonelloImg from '../../assets/images/Clonello.png';
import quizImg from '../../assets/images/code-quiz.png';
// import happyMealsImg from '../../assets/images/happy-meals.png';
import budgetImg from '../../assets/images/budget-tracker.png';
import bikeSleuthImg from '../../assets/images/BikeSleuth-search.png';
import bikeIcon from '../../assets/icons/bike-icon.png';
import blogIcon from '../../assets/icons/blog-icon.jpeg';
import budgetIcon from '../../assets/icons/budget-icon.jpeg';
import codeIcon from '../../assets/icons/code-icon.png';
import weatherIcon from '../../assets/icons/weather-icon.png';
import taskIcon from '../../assets/icons/task-icon.png';

import '../../assets/styles/projects.css';

function Projects() {
    const work = [
        {
            key: 'bike',
            title: 'Bike Sleuth',
            appLink: 'https://bikesleuth.herokuapp.com/#/',
            repoLink: 'https://github.com/Chrisdocs/FindMyBike',
            languages: 'MERN, JavaScript, Tailwind',
            snapshot: bikeSleuthImg,
            description: 'Full stack app for storing bike information to aid in searching for lost bikes'
        },
        {
            key: 'blog',
            title: 'Tech Blog',
            appLink: 'https://protected-oasis-13537.herokuapp.com/',
            repoLink: 'https://github.com/akman47/tech-blog',
            languages: 'JavaScript, mySQL, Handlebars, Node',
            snapshot: techBlogImg,
            description: 'Full stack app for sharing thoughts and articles'
        },
        {
            key: 'weather',
            title: 'Weather Dashboard',
            appLink: 'https://akman47.github.io/weather-dashboard/',
            repoLink: 'https://github.com/akman47/weather-dashboard',
            languages: 'HTML, CSS, JavaScript, Moment',
            snapshot: weatherDashImg,
            description: 'Frontend JS app for checking the weather'
        },
        {
            key: 'clonello',
            title: 'Clonello',
            appLink: 'https://powerful-falls-76508.herokuapp.com/',
            repoLink: 'https://github.com/akman47/Clonello',
            languages: 'JavaScript, mySQL, Handlebars',
            snapshot: clonelloImg,
            description: 'Full stack app using Handlebars and mySql for creating and tracking tasks for projects'
        },
        {
            key: 'quiz',
            title: 'Coding Quiz',
            appLink: 'https://akman47.github.io/code-quiz/',
            repoLink: 'https://github.com/akman47/code-quiz',
            languages: 'HTML, CSS, JavaScript',
            snapshot: quizImg,
            description: 'Frontend JS Code Quiz to test your knowledge'
        },
        // {
        //     title: 'Happy Meals',
        //     appLink: 'https://jmol721.github.io/get-you-a-happy-meal-toy-not-included/',
        //     repoLink: 'https://github.com/jmol721/get-you-a-happy-meal-toy-not-included',
        //     languages: 'HTML, CSS, JavaScript, Foundation, APIs',
        //     snapshot: happyMealsImg,
        //     description: 'A frontend app for finding and storing new recipes'
        // },
        {
            key: 'budget',
            title: 'Budget Tracker',
            appLink: 'https://budget-tracker03.herokuapp.com/',
            repoLink: 'https://github.com/akman47/budget-tracker',
            languages: 'HTML, CSS, JavaScript, Node, MondoDB',
            snapshot: budgetImg,
            description: 'A basic PWA for tracking budgets'
        }
    ];

    function showProject() {
        work.map(project => (
            // if (project.key === this.getAttribute('tab-id') {
                document.querySelector(project.key).style.display = 'none'
            // }        
        ))
    }

    function showBike() {
        document.querySelector('.project-intro').style.display = 'none';
        document.querySelector('.project-container').style.display = 'block';
        document.querySelector('.bike').style.display = 'block';
        document.querySelector('.clonello').style.display = 'none';
        document.querySelector('.blog').style.display = 'none';
        document.querySelector('.quiz').style.display = 'none';
        document.querySelector('.weather').style.display = 'none';
        document.querySelector('.budget').style.display = 'none';
    }

    function showClonello() {
        document.querySelector('.project-intro').style.display = 'none';
        document.querySelector('.project-container').style.display = 'block';
        document.querySelector('.bike').style.display = 'none';
        document.querySelector('.clonello').style.display = 'block';
        document.querySelector('.blog').style.display = 'none';
        document.querySelector('.quiz').style.display = 'none';
        document.querySelector('.weather').style.display = 'none';
        document.querySelector('.budget').style.display = 'none';
    }

    function showBlog() {
        document.querySelector('.project-intro').style.display = 'none';
        document.querySelector('.project-container').style.display = 'block';
        document.querySelector('.bike').style.display = 'none';
        document.querySelector('.clonello').style.display = 'none';
        document.querySelector('.blog').style.display = 'block';
        document.querySelector('.quiz').style.display = 'none';
        document.querySelector('.weather').style.display = 'none';
        document.querySelector('.budget').style.display = 'none';
    }

    function showQuiz() {
        document.querySelector('.project-intro').style.display = 'none';
        document.querySelector('.project-container').style.display = 'block';
        document.querySelector('.bike').style.display = 'none';
        document.querySelector('.clonello').style.display = 'none';
        document.querySelector('.blog').style.display = 'none';
        document.querySelector('.quiz').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
        document.querySelector('.budget').style.display = 'none';
    }

    function showWeather() {
        document.querySelector('.project-intro').style.display = 'none';
        document.querySelector('.project-container').style.display = 'block';
        document.querySelector('.bike').style.display = 'none';
        document.querySelector('.clonello').style.display = 'none';
        document.querySelector('.blog').style.display = 'none';
        document.querySelector('.quiz').style.display = 'none';
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.budget').style.display = 'none';
    }

    function showBudget() {
        document.querySelector('.project-intro').style.display = 'none';
        document.querySelector('.project-container').style.display = 'block';
        document.querySelector('.bike').style.display = 'none';
        document.querySelector('.clonello').style.display = 'none';
        document.querySelector('.blog').style.display = 'none';
        document.querySelector('.quiz').style.display = 'none';
        document.querySelector('.weather').style.display = 'none';
        document.querySelector('.budget').style.display = 'block';
    }

    return (
        <section>
            {/* <h2 className='text-center text-3xl font-medium mb-5'>Projects</h2> */}
            <div className='flex flex-col sidenav'>
                <div className='tab bike-tab bg-white text-black flex flex-row'><span className='px-6' onClick={showBike}>Bike Sleuth</span><img src={bikeIcon} alt='bike' /></div>
                <div className='tab clonello-tab bg-white text-black flex flex-row'><span className='px-6' onClick={showClonello}>Clonello</span><img src={taskIcon} alt='task icon' /></div>
                <div className='tab blog-tab bg-white flex text-black flex-row'><span className='px-6' onClick={showBlog}>Tech Blog</span><img src={blogIcon} alt='blog icon' /></div>
                <div className='tab quiz-tab bg-white flex text-black flex-row'><span className='px-6' onClick={showQuiz}>Code Quiz</span><img src={codeIcon} alt='coding quiz' /></div>
                <div className='tab weather-tab bg-white flex text-black flex-row'><span className='px-6' onClick={showWeather}>Weather Dashboard</span><img src={weatherIcon} alt='weather' /></div>
                <div className='tab budget-tab bg-white flex text-black flex-row'><span className='px-6' onClick={showBudget}>Budget Tracker</span><img src={budgetIcon} alt='budget' /></div>
            </div>
            <div className='sidenav flex flex-col'>
                <div className='right-tab a-tab bg-white text-black flex flex-row'><img src={bikeIcon} alt='bike' /><span className='px-6'>Coming Soon!</span></div>
                <div className='right-tab b-tab bg-white text-black flex flex-row'><img src={bikeIcon} alt='bike' /><span className='px-6'>Coming Soon!</span></div>
                <div className='right-tab c-tab bg-white flex text-black flex-row'><img src={bikeIcon} alt='bike' /><span className='px-6'>Coming Soon!</span></div>
                <div className='right-tab d-tab bg-white flex text-black flex-row'><img src={bikeIcon} alt='bike' /><span className='px-6'>Coming Soon!</span></div>
                <div className='right-tab e-tab bg-white flex text-black flex-row'><img src={bikeIcon} alt='bike' /><span className='px-6'>Coming Soon!</span></div>
                <div className='right-tab f-tab bg-white flex text-black flex-row'><img src={bikeIcon} alt='bike' /><span className='px-6'>Coming Soon!</span></div>
            </div>
            
            <span className='project-intro'>Click the project tabs to check them out</span>

            <div className='project-container ml-28 text-center w-10/12 rounded-xl p-3'>
            {work.map(project => (
                <article key={project.title} className={`${project.key}`} >
                    <div className='flex flex-row justify-between py-3 mx-3 p-5'>
                        <h2 className='text-2xl font-medium'>{project.title}</h2>
                        <div className='flex flex-row items-center link-container'>
                            <a href={project.appLink} target='_blank' rel='noreferrer' className='px-2 '><img src={linkIcon} alt='' /></a>
                            <a href={project.repoLink} target='_blank' rel='noreferrer' className='px-2'><img src={githubIcon} alt='' /></a>
                        </div>
                    </div>
                    <img src={project.snapshot} className='project-image max-h-screen p-4 rounded-xl' />
                    <span>{project.description}</span>
                </article>
            ))}
            </div>
        </section>
    )
}

export default Projects;