import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/team-1-800x800.jpg';
import Image2 from 'assets/img/team-2-800x800.jpg';
import Image3 from 'assets/img/team-3-800x800.jpg';
import Image4 from 'assets/img/team-4-470x470.png';

export default function TeamSection() {
    return (
        <section style={{backgroundColor:"#faa307"}} className="pt-20 pb-48">
            <div  className="container max-w-7xl mx-auto px-4">
                <Title heading="Voici Nos  heroes">
                    
Voici notre équipe dynamique et super motivé qui veille à votre satisfaction et à votre securité .

                </Title>
                <div className="flex flex-wrap">
                    <TeamCard
                        img={Image1}
                        name="Elias Elias"
                        position="Founder and CEO"
                    />
                    <TeamCard
                        img={Image2}
                        name="Wissem Wissem"
                        position="Guide Professionel"
                    />
                    <TeamCard
                        img={Image3}
                        name="Ala Ala"
                        position="Guide Professionel"
                    />
                    <TeamCard
                        img={Image4}
                        name="Rayen Rayen"
                        position="Guide Professionel"
                    />
                </div>
            </div>
        </section>
    );
}
