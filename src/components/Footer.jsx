import logoDisenador from "../images/logoDisenador.svg";

function Footer() {
  return (
    <div className="own-footer-size d-flex justify-content-center">
      <div className="d-flex justify-content-center align-items-center">
        <a
          href="https://www.linkedin.com/in/murillojymmy/"
          target="_blank"
          className="d-flex align-items-center" rel="noreferrer"
        >
          <p className="m-0 d-flex align-items-center own-p-footer">
            Designed by
          </p>
          <img
            src={logoDisenador}
            alt="Logo Diseñador"
            className="own-designer-logo my-auto"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
