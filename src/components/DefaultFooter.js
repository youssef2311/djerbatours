import H5 from '@material-tailwind/react/Heading5';
import LeadText from '@material-tailwind/react/LeadText';
import Icon from '@material-tailwind/react/Icon';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function DefaultFooter() {
    return (
        <>
            <footer style={{backgroundColor:'#e2eafc'}} className="relative bg-gray-100 pt-8 pb-6">
                <div >
                    <div >
                        <div  >
                            
                            <H5  style={{display:'flex', justifyContent:'center'}} color="gray">Disponible le 1/1/2022</H5>
                            <div style={{display:'flex', justifyContent:'center'}} className="-mt-4">
                                <LeadText color="blueGray">
                                lorum ipsudim lorum ipsodis lorm ipsudiom
                                </LeadText>
                            </div>
<div style={{display:'flex', justifyContent:'space-evenly'}}>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://yt3.ggpht.com/ytc/AKedOLR3lS-FadfFA_cwrqO9i3LGX3x8q3mRhUYePSwu6A=s900-c-k-c0x00ffffff-no-rj"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Pathé Tunis City
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
     <a href="https://www.pathe.tn/tunis/">  <Button  size="small">Learn More</Button></a> 
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://fastly.4sqi.net/img/general/600x600/zM8gWWpF2h3eeLkI64uIdrZolC6MTopPUZoBS7aqrAg.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        le colisée 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <a href="https://www.pathe.tn/tunis/">  <Button  size="small">Learn More</Button></a> 
      </CardActions>
    </Card>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="data:image/png;base64,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"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cine Jamil
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <a href="https://www.pathe.tn/tunis/">  <Button  size="small">Learn More</Button></a> 
      </CardActions>
    </Card>
                            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="data:image/png;base64,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"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Cinéma Théâtre le RIO
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <a href="https://www.pathe.tn/tunis/">  <Button  size="small">Learn More</Button></a> 
      </CardActions>
    </Card>
    </div>
    
                            {/* <div className="flex gap-2 mt-6 md:justify-start md:mb-0 mb-8 justify-center">
                                <a
                                    href="https://www.facebook.com/Djerba-tours-102483041202931"
                                    className="grid place-items-center bg-white text-blue-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-facebook-square"
                                    />
                                </a>
                                {/* <a
                                    href="https://www.twitter.com/creativetim"
                                    className="grid place-items-center bg-white text-blue-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-twitter"
                                    />
                                </a> 
                                <a
                                    href="https://www.instagram.com/djerbatours/?hl=fr"
                                    className="grid place-items-center bg-white text-indigo-500 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-instagram"
                                    />
                                </a>
                                {/* <a
                                    href="https://www.dribbble.com/creativetim"
                                    className="grid place-items-center bg-white text-pink-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-dribbble"
                                    />
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w"
                                    className="grid place-items-center bg-white text-red-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-youtube"
                                    />
                                </a>
                                {/* <a
                                    href="https://github.com/creativetimofficial"
                                    className="grid place-items-center bg-white text-gray-900 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-github"
                                    />
                                </a> 
                            </div> */}
                        </div>
                        {/* <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top">
                                <div className="w-full lg:w-4/12 px-4 ml-auto md:mb-0 mb-8">
                                    <span className="block uppercase text-gray-900 text-sm font-serif font-medium mb-2">
                                        Useful Links
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                href="https://www.creative-tim.com/presentation?ref=mtk"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                                target="_blank"
                                                href=" https://www.creative-tim.com/blog?ref=mtk"
                                            >
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.github.com/creativetimofficial?ref=mtk"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                            >
                                                Github
                                            </a>
                                        </li> 
                                        <li>
                                            <a
                                                href=" https://www.creative-tim.com/templates/free?ref=mtk"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                            >
                                                Free Products
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-gray-900 text-sm font-serif font-medium mb-2">
                                        Other Resources
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                href="https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                            >
                                                MIT License
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                            >
                                                Contribute
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://github.com/creativetimofficial/material-tailwind/blob/main/CODE_OF_CONDUCT.md?ref=mtk"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                            >
                                                Code of Conduct
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://creative-tim.com/contact-us?ref=mtk"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                            >
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <hr className="my-6 border-gray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-gray-700 font-medium py-1">
                                Copyright © {new Date().getFullYear()}
                                <a
                                    href="https://www.creative-tim.com?ref=mtk"
                                    className="text-gray-700 hover:text-gray-900 transition-all"
                                >
                                     Youssef Tanzekhti
                                </a>
                                .
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
