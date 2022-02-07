import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/landing/Header';
import WorkingSection from 'components/landing/WorkingSection';
import TeamSection from 'components/landing/TeamSection';
import ContactSection from 'components/landing/ContactSection';
import Form from 'components/landing/Form';
import Tournage from 'components/landing/tournage';
export default function Landing() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <WorkingSection />
                <TeamSection />
                <DefaultFooter />
               
                <ContactSection />
                <Tournage />
                <Form />
            </main>
            {/* <DefaultFooter /> */}
        </>
    );
}
