import H2 from '@material-tailwind/react/Heading2';
import LeadText from '@material-tailwind/react/LeadText';

export default function Header() {
    return (
        <div  style={{ backgroundImage: `url(https://cdn.getyourguide.com/img/tour/5c9badff7255e.jpeg/99.jpg)`,   }}    className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen" >
             {/* className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen" */}
            <div
             className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full"
             />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <H2 color="white">Votre voyage commence avec nous.</H2>
                        <div className="text-gray-200">
                            <LeadText color="gray-200">
                                Djerba Tours vous procure le meilleur guide pour passer vos vacances dans l'ile des reves,
                                avec une equipe dynamique qui vous offre une diversité d'activités qui rendents votre séjour 
                                inoubliable .
                            </LeadText>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}
