import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import "./App.css";
import Content from "./component/Content";
import Footer from "./component/Footer";
import Header from "./component/Header";
import MainContent from "./component/MainContent";
import NavigationMenu from "./component/NavigationMenu";
import RoomMap from "./component/RoomMap";

/*function App() {
  let blackdot = {
    X:0,
    Y:0,
    Z:0,
    distance:0
  };
  const [tag,set] = useState();
  console.log(blackdot);
  useEffect(()=> {
    const tagInfo = setInterval(()=> {
      axios
      .get('https://io.adafruit.com/api/v2/ththanh/feeds/tag')
      .then(response => {
        blackdot=response.data.last_value;
        console.log(blackdot);
        //setTag(response.data.last_value)
      })
    },1000)
  },[])
  console.log(blackdot);
  
  const list=[ 
    {
      X:0.55,
      Y:0.5
    },
    {
      X:0.77,
      Y:0.4
    },
    {
      X:0.45,
      Y:0.7
    }

  ]
  
  return(
  <>
    <RoomMap room_w={500} room_h={300} list= {list} pos={blackdot}/>

  </>
  
  );
}
  
  /*return (
    <>
    <Header/>
    <NavigationMenu/>
    <div className="main">

    </div>
    <Content/>
      <MainContent/>
      <Content/>
      <Footer/>
    </>
  );*/
  /*function App() {
    const [blackdot, setBlackdot] = useState({ X: 0, Y: 0, Z: 0, distance: 0 });
  
    useEffect(() => {
      const tagInfo = setInterval(() => {
        axios
          .get('https://io.adafruit.com/api/v2/ththanh/feeds/tag')
          .then(response => {
            const newBlackdot = response.data.last_value;
            setBlackdot(newBlackdot);         
              console.log(response.data.last_value);
          });
      }, 2000);
  
      return () => {
        clearInterval(tagInfo);
      };
    }, []);
  
  
    const list = [
      {
        X: 0.55,
        Y: 0.5
      },
      {
        X: 0.77,
        Y: 0.4
      },
      {
        X: 0.45,
        Y: 0.7
      }
    ];
  
    return (
      <>
        <RoomMap room_w={500} room_h={300} list={list} pos={blackdot} />
      </>
    );
  }*/
  function App() {
    const [blackdot, setBlackdot] = useState({ id: '', X: 0, Y: 0, Z: 0, distance: 0 });
  
    useEffect(() => {
      const tagInfo = setInterval(() => {
        axios
  .get('https://io.adafruit.com/api/v2/ththanh/feeds/tag')
  .then(response => {
    console.log(typeof response.data.last_value); // log the type
    console.log(response.data.last_value); // log the value
    const newBlackdot = JSON.parse(response.data.last_value);
    setBlackdot(newBlackdot);
    console.log(newBlackdot.X);
  });
      }, 2000);
  
      return () => {
        clearInterval(tagInfo);
      };
    }, []);
  
    const list = [
      {
        X: 0.55,
        Y: 0.5
      },
      {
        X: 0.77,
        Y: 0.4
      },
      {
        X: 0.45,
        Y: 0.7
      }
    ];
  
    return (
      <>
        <RoomMap room_w={500} room_h={300} list={list} pos={blackdot} />
      </>
    );
  }
  

  
export default App;
