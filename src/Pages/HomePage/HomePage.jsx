import { Content } from './Content/Content';
import { Header } from './Header/Header'
import { Slidebar } from './Slidebar/Slidebar';
import { SocialSlidebar } from './Slidebar/SocialSlidebar';

export function HomePage(){
    return(
        <>
        <Header />
        <Slidebar />
        <SocialSlidebar />
        <Content />
        
        </>
    );
}