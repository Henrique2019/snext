
import React from "react";
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";


// @material-ui/icons
import { Apps, Message, Book, School, AddBoxOutlined, HomeRounded } from "@material-ui/icons";


// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          target=""
          className={classes.navLink}
        >
          <HomeRounded className={classes.icons} /> Inicio
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="biblia "
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Book}
          dropdownList={[
            <Link href="/palavra">
              <a className={classes.dropdownLink}> Pesquise por Palavra Chave </a>
            </Link>,
             <Link href="/livros">
             <a className={classes.dropdownLink}> Pesquise por Livro </a>
           </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem} >
      
        <Button
          href="/blog.js"
          color="transparent"
          className={classes.navLink}
          buttonIcon={Apps}
        >
          <Message className={classes.icons} />  Mensagens
        </Button>
      </ListItem>
            
      <ListItem className={classes.listItem}>
        <Button
          href="/igrejas"
          color="transparent"
          className={classes.navLink}
        >
          <Apps className={classes.icons} /> ministérios
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/profile"
          color="transparent"
          className={classes.navLink}
        >
          <AddBoxOutlined className={classes.icons} /> Quem somos
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.facebook.com/tendadafamiliaoficial/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/tendadafamiliaoficial/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/tendadafamiliaoficial/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
