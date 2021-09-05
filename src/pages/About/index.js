import React from 'react';
import bioImage from '../../assets/images/bio.jpg';
import podiumImage from '../../assets/images/spain-podium.JPG';
import '../../assets/styles/about.css';

function About() {
    return (
        <section>
            <h2 className="text-2xl font-medium text-center pb-6 me">About Me</h2>
            <div className="flex flex-row justify-evenly align-items-center mt-5">
                <div className="flex flex-col justify-center p-3 bio-box">
                    <img src={bioImage} className="rounded-full bio-img self-center" alt="Angela Man sitting at a table eating ice cream"></img>
                    <p className='bio-panel p-4 text-black'>I am a full stack developer and an athletics performance coach. I have a science and mathematics background from a
                    Bachelor of Science in Biology at the University of Houston, along with minor concentrations in chemistry, mathematics, 
                    and medicine in society. I love solving algorithms and puzzles along with being creative, so developing web applications 
                    is an indulgence!</p>
                </div>
                <div className="flex flex-col justify-center athlete-box">
                    <img src={podiumImage} className="rounded-full podium-img self-center" alt="World Championships Podium in Spain"></img>
                    <p className='athlete-panel p-4 text-black'>When I am not creating content, I train and compete as a triathlete at the national and world level, 
                    while also aiding other athletes in reaching their goals. To unwind and recharge, I love to spend time outdoors, camping, 
                    hiking, and going on soul-filling adventures which inspire me to dive even deeper into my creativity. That's a great programming 
                    loop to be in! It puts the cherry on top of the ice-cream.
                    </p>

                </div>
                <div className="flex flex-col justify-center p-3 developer-box">
                    <img src={podiumImage} className="rounded-full developer-img self-center" alt="World Championships Podium in Spain"></img>
                    <p className='developer-panel p-4 text-black'>When I am not creating content, I train and compete as a triathlete at the national and world level, 
                    while also aiding other athletes in reaching their goals. To unwind and recharge, I love to spend time outdoors, camping, 
                    hiking, and going on soul-filling adventures which inspire me to dive even deeper into my creativity. That's a great programming 
                    loop to be in! It puts the cherry on top of the ice-cream.
                    </p>
                </div>
                
                {/* <br></br><br></br>  */}
                {/* <span className="bio-end">If my work inspires you, let me know!</span> */}
            </div>

        </section>
    )
}

export default About;