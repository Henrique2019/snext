import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Book from "@material-ui/icons/Book";
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Deem graças ao SENHOR, porque ele é bom.
O seu amor dura para sempre!</h2>
          <h5 className={classes.description}>
           Sinta esse amor, um amor incondicional fiel e misericordioso,
           que perdoa a maldade e o pecado.
          </h5>
          <h5 className={classes.description}>
           No amor não há medo; pelo contrário o perfeito amor expulsa o medo, <br/>
            porque o medo supõe castigo. Aquele que tem medo não está aperfeiçoado no amor. <br/>
           este é o amor : que andemos em obediência aos seus mandamentos. <br/>
            <strong>mantenham-se no amor de DEUS.</strong> 
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Bíblia on-line"
              description="pesquise por palavra chave ( ex: amizade ), por livros do Antigo e Novo testamento, Pratique a Leitura da palavra de DEUS  "
              icon={Book}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="redes sociais"
              description=" Compartilhe com a família e amigos, siga-nos e e curtem as nossas paginas  no Facebook, Instagram e Twitter "
              icon={FacebookIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Vídeos"
              description="Encontre os melhores Louvores, Hinos, Pregações, Sermões, Ensinamentos, e muito mais ..."
              icon={YouTubeIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
