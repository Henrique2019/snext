import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import apibiblia from "../pages/service/apibiblia"
// api biblia com axios

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/nextjs-material-kit/pages/components.js";
import { useEffect, useState } from 'react';
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
import { Book } from "@material-ui/icons";

const useStyles = makeStyles(styles);

function palavra({data}) {
  const classes = useStyles();
  const { ...rest } = data;
  console.log(data)
  
  return (
    
    <>
    <Header
        brand={<b>SEJA ETERNO</b>}
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest} 
      />
      
      <Parallax image={require("assets/img/bg2.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
           
              
              <div className={classes.brand}>
                <h1 className={classes.title}>Jesus Cristo é o Senhor.</h1> 
               
               {[data].map((verses => (  
                 
                 <h3 className={classes.subtitle}>           
                 <strong>{verses[0].book.name} {verses[0].chapter}:{verses[0].number}</strong>               
                <br></br>
                {verses[0].text}
                </h3>
                
                )))}
              </div>
              
           
            </GridItem> 
          </GridContainer>
        </div>
      </Parallax>
      
      <div className={classNames(classes.main, classes.mainRaised)}>
        
        <GridItem md={12} className={classes.title}>
        <ul>  
               {data.map((verses => (  
                 
                 <h3 className={classes.subtitle}>           
                 <strong>{verses.book.name} {verses.chapter}:{verses.number}</strong>               
                <br></br>
                {verses.text}
                </h3>
                
                )))}</ul>
          <TeamSection />
          <WorkSection />
        </GridItem>
        
      </div>
      <Footer />
    
        <h1> texto bíblico aleatorio </h1>,
        <h3> Livro: </h3>
        
        </>
      )}
    
export async function getServerSideProps() {
    
// Buscando um verso aleatório de um capítulo
var body = {
  "version": "nvi",
  "search": "amor"
};
const res = await apibiblia.post("verses/search", body)
const data = await res.data.verses
console.log(data)
    return { props:{ data  } }
}



  export default palavra