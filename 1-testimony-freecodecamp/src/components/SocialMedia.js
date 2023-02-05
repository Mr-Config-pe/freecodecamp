/*---------- Inicio Code Immer ----------*/

import "../assets/css/SocialMedia.css";

function SocialMedia() {

  const blank = "_blank" /* Redireccionar Pestaña Nueva */

  return (
  <div className="social-media">
    <div className="wrapper">
      <div className="icon linkedin">
        <div className="tooltip">LinkedIn</div>
        <a className="ancorsm" href="https://www.linkedin.com/in/mr-config" target={blank}><span><i className="fa-brands fa-linkedin fa-3x"></i></span></a>
      </div>
      <div className="icon github">
        <div className="tooltip">GitHub</div>
        <a className="ancorsm" href="https://github.com/Mr-Config-pe/freecodecamp" target={blank}><span><i className="fa-brands fa-github fa-3x"></i></span></a>
      </div>
      <div className="icon portfolio">
        <div className="tooltip">Portfolio</div>
        <a className="ancorsm" href="https://portfolio-immer.netlify.app" target={blank}><span><i className="fa-solid fa-briefcase fa-3x"></i></span></a>
      </div>
    </div>
  </div>
  );
}

export default SocialMedia;

/*---------- Fin Code Immer ----------*/
