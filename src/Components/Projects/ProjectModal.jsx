import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import { Fade } from "react-reveal";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 1, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            left: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ProjectModal(props) {
  const project = props.project;
  const handleGit = () => (window.location.href = project.git);
  const handleClose = () => props.setOpen(false);
  const handleEnter = () => (window.location.href = project.url);

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
      ></BootstrapDialogTitle>
      <DialogContent dividers>
        <Carousel fade>
          {project.images.map((img, idx) => {
            return (
              <Carousel.Item key={idx}>
                <img className="d-block w-100" src={img} alt="slide" />
              </Carousel.Item>
            );
          })}
        </Carousel>
        <div className="project-modal-description-container">
          <Fade left when={props.state}>
            <h1 className="content-title-project" style={styles.mainTitle}>
              <h5 style={styles.subtitle}>PROJECT</h5>
              <span style={styles.whitespace}>{project.name}</span>
            </h1>
          </Fade>
          <Fade left when={props.state} delay={300}>
            <p className="description">{project.description}</p>
          </Fade>
        </div>
      </DialogContent>
      {project.stackIcons()}
      <div className="btns-row">
        <button className="button-git-box btn-git" onClick={handleGit}>
          Github Repository
        </button>
        <button className="button-red-box btn-enter" onClick={handleEnter}>
          Enter
        </button>
      </div>
    </BootstrapDialog>
  );
}

const styles = {
  subtitle: { margin: "0 5px 0 0", color: "#ff4b2b" },
  mainTitle: {
    zIndex: 6,
    fontFamily: "GT Walsheim Pro",
  },
  whitespace: { whiteSpace: "nowrap" },
};
