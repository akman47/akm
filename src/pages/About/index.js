import React from 'react';
import bioImage from '../../assets/images/bio.jpg';
import podiumImage from '../../assets/images/spain-podium.JPG';
import fixerImage from '../../assets/images/fixer.jpg';
import '../../assets/styles/about.css';

function About() {
    return (
        <section id='about'>
            <h2 className="text-2xl font-medium text-center pt-3 md:pb-6 me">About Me</h2>
            <div className="flex flex-col md:justify-evenly md:align-items-center mt-5 text-lg md:flex-row">
                <div className="flex flex-col justify-center md:p-3 bio-box">
                    <img src={bioImage} className="rounded-full bio-img self-center w-64 h-64 lg:w-80 lg:h-80 md:w-72 md:h-72" alt="Angela Man sitting at a table eating ice cream"></img>
                    <p className='bio-panel p-5 text-black text-md'>I am a full stack developer and an athletics performance coach. I have a science and mathematics background from a
                    Bachelor of Science in Biology, along with minor concentrations in chemistry, mathematics, 
                    and medicine in society. I love solving algorithms and puzzles along with being creative, so developing web applications 
                    is an indulgence!</p>
                </div>
                <div className="flex flex-col justify-center md:p-3 athlete-box">
                    <img src={podiumImage} className="rounded-full podium-img self-center w-64 h-64 lg:w-80 lg:h-80 m:w-72 m:h-72" alt="World Championships Podium in Spain"></img>
                    <p className='athlete-panel p-5 text-black'>When I am not creating content, I train and compete as a triathlete at the national and world level, 
                    while also aiding other athletes in reaching their goals. To unwind and recharge, I love to spend time outdoors, camping, 
                    hiking, and going on soul-filling adventures which inspire me to dive even deeper into my creativity. That's a great programming 
                    loop to be in!
                    </p>

                </div>
                <div className="flex flex-col justify-center md:p-3 developer-box">
                    <img src={fixerImage} className="rounded-full developer-img self-center w-64 h-64 lg:w-80 lg:h-80 m:w-60 m:h-60" alt="Angela Man equipped to solve problems"></img>
                    <p className='developer-panel p-7 text-black'>I'm an engineer at heart and have always enjoyed building applicable inventions whether through 
                    legos or code. A strong drive has served me well in both athletics and education, as I will not give up until I reach the finish line or a 
                    solution to the problem has been found. I have experience with HTML, CSS, JavaScript, MERN, Handlebar.js, and 
                    am exctied to keep learning more. If my work inspires you, let me know!
                    </p>
                </div>
                
                {/* <br></br><br></br>  */}
                {/* <span className="bio-end">If my work inspires you, let me know!</span> */}
            </div>

        </section>
    )
}

export default About;