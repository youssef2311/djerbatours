import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/team-1-800x800.jpg';
import Image2 from 'assets/img/team-2-800x800.jpg';
import Image3 from 'assets/img/téléchargement.jfif';
import Image4 from 'assets/img/team-4-470x470.png';
import Image5 from 'assets/img/Mackenzie-Foy.jpg';
import img6 from 'assets/img/img6.jpg';
 import Image7 from 'assets/img/Image7.jpg';
 import Image8 from 'assets/img/image8.jpg';
// import Image5 from 'assets/img/Mackenzie-Foy.jpg';
export default function TeamSection() {
    return (
        <section style={{backgroundColor:"#ffd7ba"}} className="pt-20 pb-48">
            <div  className="container max-w-7xl mx-auto px-4">
                <Title heading="Interstealler Cast">
                    
Lorum ipum ksjso didkla lorm odps ksjso didkla lorm o .

                </Title>
                <div className="flex flex-wrap">
                    <TeamCard
                        img={Image1}
                        name="Christopher Nolan"
                        position="Réalisateur"
                    />
                    <TeamCard
                        img={Image2}
                        name="Matthew McConaughey"
                        position="Acteur"
                    />
                    <TeamCard
                        img={Image3}
                        name="Anne Hathaway"
                        position="Actrice"
                    />
                    <TeamCard
                        img={Image4}
                        name="Jessica Chastain"
                        position="Actrice"
                    />
                           <TeamCard
                        img={Image5}
                        name="Mackenzie Foy"
                        position="Actrice"
                    />
                           <TeamCard
                        img={img6}
                        name="Michael Caine"
                        position="Acteur"
                    />
                           <TeamCard
                        img={Image7}
                        name="Wes Bentley"
                        position="Acteur"
                    />
                           <TeamCard
                        img={Image8}
                        name="Hans Zimmer"
                        position="Compositeur de musique de film"
                    />
                </div>
            </div>
        </section>
    );
}
