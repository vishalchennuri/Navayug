import FadeInWhenVisible from '../utils/FadeInWhenVisible';
import  Contact from '../components/contact';

export default function ContactUs(){
    return (
        <div className='pt-20'>
        <FadeInWhenVisible><Contact /></FadeInWhenVisible>
        </div>
    )
}