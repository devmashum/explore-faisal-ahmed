import Image from 'next/image';
import html from '../../assets/icon/HTML.png'
import css from '../../assets/icon/css.png'
import JS from '../../assets/icon/JavaScript.png'
import MongoDB from '../../assets/icon/mongo.png'
import tailwind from '../../assets/icon/tailwind.png'
import fireBase from '../../assets/icon/firebase.png'


const TechStack = () => {
    return (
        <div className='lg:flex grid grid-cols-3 gap-5 py-5 justify-center items-center lg:mb-10 mb-5 w-8/12 mx-auto'>
        <h3 className='text-2xl font-semibold lg:block hidden'>TechStack: </h3>
<Image src={html} width={50} alt='react_logo'/>
<Image src={css} width={50} alt='react_logo'/>
<Image src={JS} width={50} alt='react_logo'/>
<Image src={tailwind} width={50} alt='react_logo'/>
<Image src={fireBase} width={50} alt='react_logo'/>
<Image src={MongoDB} width={50} alt='react_logo'/>
        </div>
    );
};

export default TechStack;