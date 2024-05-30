
import sale from "../assets/images/sale-image.jpg"





function Saleimage(){
    return(<div class="section__img">
    <img src={sale} alt="saleimage"></img>
    <div class="section__img__offer">
         <h2>Udemy flash sale! 24 hours to save</h2>
         <p>Get the top course for just 499.just one day to save but a lifetime to learn</p>
    </div>
  </div>)
  }

  export default Saleimage