import imagem from "../../images/image-product-desktop.jpg"
import "./styles.css"

const valor = 169.99;
const valordesc = 149.99;
export const PostCard = () =>{
    return(
        <div className="container">
            <div className="grid">
                <div className="photo">
                    <img src={imagem} alt="perfume Gabrielle" />
                </div>
                <div className="text">
                    <h3>perfume</h3>
                    <h2>Gabrielle Essence Eau De Parfum</h2>
                    <p className="desc">A floral, solar and voluptuous interpretation composed by olivier polge , perfumer-creator for the House of CHANEL</p>
                     <div className="valor">
                         <p className="valordesc">${valordesc}</p>
                         <p>${valor}</p>
                     </div>
                    <button className="button">add to cart</button>
                </div>
            </div>
        </div>
    );
}