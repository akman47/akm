import React from 'react';
import homeImage from '../../assets/images/lost-mines.jpg';
import Typist from 'react-typist';

function Home() {
    // const [showSuccess, setShowSuccess] = useState(false);

//   const onTypingDone = async () => {
    // window.setTimeout(function() {
    //   setShowSuccess(true);
    // }, 1000);
    // window.setTimeout(function() {
    //   props.history.push('/about');
    // }, 4500);
//   };

    return (
        <section fluid className="terminal">
            <div className="text-center w-full h-full">
                <img className="pt-8" src={homeImage} alt='view of Lost Mines at Big Bend National Park'></img>
            </div>        
            <span className='text-center'>
                <Typist
                    avgTypingDelay={80}
                    stdTypingDelay={60}
                    // onTypingDone={onTypingDone}
                    startDelay={120}
                    cursor={{
                        blink: false,
                        hideWhenDone: true
                    }}
                >
                <Typist.Delay ms={120}></Typist.Delay>
                    <span className='home-text text-2xl md:text-4xl'>Where inspiration lies, creativity follows</span>
                </Typist>
            </span>
        </section>
    )
}

export default Home;