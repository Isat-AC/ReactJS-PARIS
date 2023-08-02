import logo from "./logo.svg";
import "./App.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image1 from "./insta dp.jpg";
import image2 from "./photo-1689907278706-084741574270.avif";
import image3 from "./photo-1690498705913-1d498ad731ef.avif";
import image4 from "./photos2.avif";
import image5 from "./photos3.avif";
import image6 from "./photos4.avif";
import image7 from "./photos5.avif";
import Marquee from "react-fast-marquee";
import image11 from "./date1.jpeg";
import image12 from "./date2.avif";
import image13 from "./date3.jpeg";
import image14 from "./date.4.jpeg";
import image18 from "./date8.webp";
import MarqueCard from "./components/MarqueCard";
import { useState } from "react";


import image15 from "./date5.jpeg";

import image16 from "./date6.jpeg";
import image17 from "./date7.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import shadows from "@mui/material/styles/shadows";
import { FaBeer } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import { Carousel } from "react-responsive-carousel";
import Flickity from "react-flickity-component";

function App() {
  const flickityOptions = {
    initialIndex: 2,
  };

  const [str, setStr] = useState("Paris");
  const [con, setCon] = useState(1);

  return (
    <div>
      <div>
        <div
          style={{
            backgroundImage: "url(/paeris.avif)",
            backgroundSize: "cover",
            height: "100vh",
            alignItems: "flex-start",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            marginBottom: "30px",
          }}
        >
          <img
            style={{ height: "50px", width: "50px", marginTop: "100px" }}
            src={logo}
          ></img>
          <Typography
            style={{
              fontSize: 24,
              fontFamily: "Helvetica",
              fontWeight: 800,
              color: "#2525252",
              marginTop: 10,
            }}
            variant="h6"
            align="center"
            color="grey.700"
            sx={{
              backgroundcolor: "primary",
              backgroundImage: `linear-gradient(45deg, #1EBE5F, #02BAE8)`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              opacity: "0.7",
            }}
          >
            Date in Paris    
          </Typography>

          <h4
            style={{
              color: "grey",
              fontSize: "20px",
              fontFamily: "revert",
              marginTop: "20px",
              fontWeight: "400",
              opacity: "0.6",
            }}
          >
            'DATE WITH STRANGER' before u survive the year 2032
          </h4>
        </div>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            gap: 60,
            flexWrap: "wrap",
            justifyContent: "center",
            shadows: "5px",
          }}
        >
          <button
            style={{
              height: "40px",
              width: "100px",
              borderRadius: "10px",
              boxShadow: "4px 4px 4px grey",
            }}
          >
            Living Cost
          </button>
          <button
            style={{
              height: "40px",
              width: "100px",
              borderRadius: "10px",
              boxShadow: "4px 4px 4px grey",
            }}
            
          >
            Breakfast
          </button>
          <div className="example"
          ><button
            style={{
              height: "40px",
              width: "100px",
              borderRadius: "10px",
              boxShadow: "4px 4px 4px grey",
            }}
            
          >
            Girl
          </button>
          </div>
         


          <button
            style={{
              height: "40px",
              width: "100px",
              borderRadius: "10px",
              boxShadow: "4px 4px 4px grey",
            }}
          >
            Date
          </button>
          <button
            style={{
              height: "40px",
              width: "100px",
              borderRadius: "10px",
              boxShadow: "4px 4px 4px grey",
            }}
          >
            Flight
          </button>
        </div>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          // backgroundImage: `url(/logo512.png)`,
          // backgroundSize: "cover", // Adjust the background size as needed
          // backgroundPosition: "center",
        }}
      >
        <div
        style={{
          backgroundImage: "url(/cardback3.jpg)",
          backgroundSize: "cover",
          height: "60vh",
          alignItems: "flex-start",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
          
        }}
        
        
        >

        <div
          style={{
            flexDirection: "row",
            display: "flex",
            gap: 25,
            flexWrap: "wrap",
            justifyContent: "center",
            shadows: "10px",
            marginTop: "20px",
            boxShadow:" 5px 5px 5px white"
          }}
        >
          <div></div>
          <Card sx={{ maxWidth: 345, borderRadius: 10 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              image={image1}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Senorita
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I Love It When You Call Me Señorita I Wish I Could Pretend I
                Didn Need Ya But Every Touch Is Ooh-La-La-La
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              maxWidth: 345,
              borderRadius: 10,
              textAlign: "justify",
              position: "relative",
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              image={image2}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                dance
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Its True La-La-La Ooh I Should Be Running Ooh You Keep Me Coming
                For Ya
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345, borderRadius: 10 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250x"
              image={image3}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                paris
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Land In Miami The Air Was Hot From Summer Rain Sweat Dripping
                Off Me Before I Even Knew Her Name La-La-La
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345, borderRadius: 10 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              image={image1}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Senorita
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I Love It When You Call Me Señorita I Wish I Could Pretend I
                Didn Need Ya But <strong>Every Touch Is Ooh-La-La-La</strong>
              </Typography>
            </CardContent>
          </Card>
        </div>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundImage: "url(/photos1.avif)",
            backgroundSize: "cover",
            height: "100vh",
            alignItems: "flex-start",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            marginTop: "30px",
          }}
        >
          <img
            style={{ height: "50px", width: "50px", marginTop: "100px" }}
            src={logo}
          ></img>
          <Typography
            style={{
              fontSize: 24,
              fontFamily: "Helvetica",
              fontWeight: 100,
              color: "#964B00",
              marginTop: 0,
            }}
            variant="h4"
            align="left"
            color="grey.700"
            sx={{
              backgroundcolor: "primary",
              backgroundImage: `linear-gradient(45deg, #1EBE5F, #02BAE8)`,
              backgroundSize: "50%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              opacity: "1",
            }}
          >
               
          </Typography>
        </div>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            gap: 60,
            flexWrap: "wrap",
            justifyContent: "center",
            shadows: "5px",
          }}
        ></div>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          // backgroundImage: `url(/logo512.png)`,
          // backgroundSize: "cover", // Adjust the background size as needed
          // backgroundPosition: "center",
        }}
      >
        <div></div>

        <div
          style={{
            flexDirection: "row",
            display: "flex",
            gap: 100,
            flexWrap: "wrap",
            justifyContent: "center",
            shadows: "10px",
            marginTop: "20px",
          }}
        >
          <div></div>
          <Card sx={{ maxHeight: 145, maxWidth: 145, borderRadius: 10 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="100%"
              image={image5}
            />
          </Card>

          <Card sx={{ maxHeight: 145, maxWidth: 145, borderRadius: 10 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              image={image6}
            />
          </Card>

          <Card sx={{ maxHeight: 145, maxWidth: 145, borderRadius: 10 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250x"
              image={image7}
            />
          </Card>
          <Card sx={{ maxHeight: 145, maxWidth: 145, borderRadius: 10 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              image={image4}
            />
          </Card>

          <Card sx={{ maxHeight: 145, maxWidth: 145, borderRadius: 10 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="100%"
              image={image5}
            />
          </Card>

          <Card sx={{ maxHeight: 145, maxWidth: 145, borderRadius: 10 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              image={image6}
            />
          </Card>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url(/background2.avif)",
          backgroundSize: "cover",
          height: "100vh",
          alignItems: "flex-start",

          display: "flex",
          flexDirection: "column",
          marginBottom: "30px",
          opacity: "0.9",
        }}
      >
        <img
          style={{ height: "50px", width: "50px", marginTop: "100px" }}
          src={logo}
        ></img>

        <div
          style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), 
          url(/parisac1.avif)`,
            height: "400px",
            alignItems: "flex-start",

            display: "flex",
            flexDirection: "column",
            marginTop: "30px",
            width: "700px",
            opacity: "1",
            borderTopRightRadius: "250px",
            borderBottomRightRadius: "250px",
            boxShadow: "10px 10px 10px rbga(0,0,0,0.4",
          }}
        >
          <p
            style={{
              fontSize: "25px",
              width: "650px",
              fontWeight: "bolder",
              color: "bisque",
            }}
          >
            There's just some things that never change You say we're just
            friends But friends don't know the way you taste, la-la-la 'Cause
            you know it's been a long time coming
          </p>
        </div>
      </div>
      <div>
        <div className="App">
          <div
            style={{
              borderWidth: 0,
              alignSelf: "center",
              width: "300px",
              margin: "0 auto",
              borderRadius: "20px",
              borderStyle: "double",
              backgroundColor: "grey",
            }}
          >
            <h1 style={{ padding: 2 }}>{str}</h1>
          </div>
          <div>
            <Marquee
              pauseOnHover
              speed={50}
              direction="right"
              delay={2}
              gradient={false}
              loop={0}
            >
              <MarqueCard image={image11} />
              <MarqueCard image={image12} />
              <MarqueCard image={image13} />
              <MarqueCard image={image14} />
              <MarqueCard image={image15} />
              <MarqueCard image={image16} />
              <MarqueCard image={image17} />
              <MarqueCard image={image18} />
            </Marquee>
          </div>
        </div>
      </div>
  
    </div>
  );
}

export default App;
