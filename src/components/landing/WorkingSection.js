import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import Teamwork from 'assets/img/teamwork.jpeg';
import cheval from 'assets/img/cheval.jpg';
import kite from 'assets/img/kite.jpg';
 import plonge from 'assets/img/plonge.jpg';
 import parachute from 'assets/img/parachute.jpg';
 import jetski from 'assets/img/jetski.jpg';
// import cheval from 'assets/img/cheval.jpg';
export default function WorkingSection() {
    return (
        <section style={{backgroundColor:"#faedcd"}} className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div  className="flex flex-wrap relative z-50">
                    <StatusCard   color="red" icon="stars" title="Une meilleur qualité ">
                    Connaître et comprendre les besoins du client est au centre de toute entreprise fructueuse, qu'elle vende directement à des personnes ou à d'autres entreprises. 
    
                    </StatusCard>
                    <StatusCard
                        color="yellow"
                        icon="autorenew"
                        title="votre reservation"
                    >
                        Votre service sera fournit à temps choisis par le client, aucun retard ou empechement agasse votre moment. 
                    </StatusCard>
                    <StatusCard
                        color="green"
                        icon="fingerprint"
                        title="Verified Company"
                    >
                       Une compangie verifié, respectueuse envers ses clients, 
                    </StatusCard>
                </div>
                <br />
                  <div style={{justifyContent:'center', textAlign:'center'}} >
                <H4>Take a Look 🕵️‍♀️  </H4>
                </div>
                <div  className="flex flex-wrap items-center mt-32">
                   
                    {/* <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="people" size="3xl" />
                        </div>
                        <H4 color="gray">Working with us is a pleasure</H4>
                        <LeadText color="blueGray">
                            Don't let your uses guess by attaching tooltips and
                            popoves to any element. Just make sure you enable
                            them first via JavaScript.
                        </LeadText>
                        <LeadText color="blueGray">
                            The kit comes with three pre-built pages to help you
                            get started faster. You can change the text and
                            images and you're good to go. Just make sure you
                            enable them first via JavaScript.
                        </LeadText>
                        <a
                            href="#pablo"
                            className="font-medium text-light-blue-500 mt-2 inline-block"
                        >
                            Read More
                        </a>
                    </div> */}

                    <div   className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={Teamwork} />
                            <CardBody>
                                <H6 color="gray">Balade en Quad  ☀️</H6>
                                <Paragraph color="blueGray">
                                Explorez !! en réservant votre randonnée quad ou buggy ! Entre amis ou collègues, découvrez la joie d'une balade en tout-terrain. Apprenez à maîtriser ce sport mécanique le temps d'une randonnée dans des cadres exceptionnels et naturels. Nos stages quad et buggy sont parfaits pour découvrir ces engins tous-terrains que ce soit seul, en famille ou entre amis. Découvrez notre sélection de rando quad et buggy
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                    <div   className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={cheval} />
                            <CardBody>
                                <H6 color="gray">Balades avec les Chevaux 🐎</H6>
                                <Paragraph color="blueGray">
                                La randonnée équestre, qui peut être montée ou attelée, est un loisir de pleine nature qui permet de partir à la découverte des patrimoines naturels et culturels des régions visitées à cheval. Cette activité englobe donc une partie du tourisme équestre.
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                    <div   className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={kite} />
                            <CardBody>
                                <H6 color="gray">Kite Surf 🏄🏻‍♀️</H6>
                                <Paragraph color="blueGray">
                                Le kitesurf, ou planche aérotractée ou encore kiteboarding, est un sport de glisse consistant à évoluer avec une planche à la surface d'une étendue d'eau en étant tracté par un cerf-volant spécialement adapté, nommé aile ou voile.

                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                 
                    <div   className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={plonge} />
                            <CardBody>
                                <H6 color="gray">plonge Sous marine ⚓️</H6>
                                <Paragraph color="blueGray">
                                La plongée sous-marine est une activité consistant à rester sous l'eau marine soit en apnée dans le cas de la plongée libre, soit en respirant à l'aide d'un narguilé ou le plus souvent en s'équipant d'une bouteille de plongée dans le cas de la plongée en scaphandre
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                    <div   className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={parachute} />
                            <CardBody>
                                <H6 color="gray">Parachute</H6>
                                <Paragraph color="blueGray">
                                   Il ne faut jamais rater le paysage de Djerba 🤩
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                    <div   className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={jetski} />
                            <CardBody>
                                <H6 color="gray">Du Jet Ski</H6>
                                <Paragraph color="blueGray">
                      Un bon moment en mer ...
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
