import Whatsapp from "../images/Whatsapp.png";

export default function HomePage() {
  return (
    <>
      <h1 className="own-homePage-h1 d-flex justify-content-center">
        Hola, te damos la bienvenida a nuestra tienda virtual.
      </h1>

      <h2 className="own-homePage-h2 text-center">
        Somos Cómpralo, te ofrecemos gran cantidad de articulos de todo tipo,
        revisa nuestro catálogo y cotiza tu producto.<br></br> <br></br>Si no
        logras encontrar algo dentro de nuestro catálogo, contáctanos y te
        informaremos si lo tenemos.
      </h2>
      
      <a
        href="https://wa.me/+573502981239?text=Hola,%20me%20interesa%20hablar%20sobre%20algunos%20productos..."
        target="_blank" rel="noreferrer"
      >
        <img
          src={Whatsapp}
          alt="Icono de Whatsapp"
          className="own-Whatsapp-icon"
        ></img>
      </a>
    </>
  );
}
