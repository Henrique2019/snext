import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// react components for routing our app without refresh
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import apibiblia from "../pages/service/apibiblia"
// api biblia com axios

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/nextjs-material-kit/pages/components.js";
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";


const useStyles = makeStyles(styles);

function biblias({data}) {
  const classes = useStyles();
  const { ...rest } = data;
  return (
    
    <>
    {[data].map((data => (
        <>
    <Header
        brand={<b>Seja Eterno</b>}
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
                <h3 className={classes.subtitle}>
                <strong>{data.book.name} {data.chapter}:{data.number}</strong>
                <br></br>
                {data.text}
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      
      <div className={classNames(classes.main, classes.mainRaised)}>
      <ProductSection />
      
        <GridItem md={12} className={classes.textCenter}>
 nova
 </GridItem>
        
      </div>
      
      <Footer />
    
        
        </>
      )))}
    </>
  )
  }
  export async function getServerSideProps(context) {
    
    // Buscando um verso aleatório de um capítulo
    const response = await apibiblia.get("verses/nvi/random")
    const data = await response.data;
    console.log(data)
        return { props:{ data }, // will be passed to the page component as props
        }
    }
    
  export default biblias
