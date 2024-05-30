
import one from "../assets/images/altumcode-XMFZqrGyV-Q-unsplash.jpg"  
import two from "../assets/images/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg"
import three from "../assets/images/pakata-goh-EJMTKCZ00I0-unsplash.jpg"




function Recommended(){
    return(<div class="recommended">
    <h1 class="recommended__title">Recommended for you</h1>
    <p>Pick the best</p>
    <div class="recommended__container">
        <div class="course__card">
            <img src={one} alt="couseimage"></img>
            <h3>Full stack development complete tutorial</h3>
            <p>Maxillum</p>
            <p>4.9 ⭐ ⭐ ⭐ ⭐</p>
            <p>1499 <del>499</del></p>
  
        </div>
        <div class="course__card">
            <img src={two} alt="course image1"></img>
            <h3>Python development complete tutorial</h3>
            <p>Maxillum</p>
            <p>5 ⭐ ⭐ ⭐ ⭐ ⭐</p>
            <p>1499 <del>499</del></p>
  
        </div>
        <div class="course__card">
            <img src={three} alt="course image2"></img>
            <h3>Date Science complete tutorial</h3>
            <p>Maxillum</p>
            <p>3.9⭐ ⭐ ⭐ </p>
            <p>1499 <del>499</del></p>
  
        </div>
        <div class="course__card">
            <img src={three} alt="image1"></img>
            <h3>Java complete tutorial</h3>
            <p>Maxillum</p>
            <p>4 ⭐ ⭐ ⭐ ⭐</p>
            <p>1499 <del>499</del></p>
  
        </div>
  
    </div>
  
  </div>)
  }

  export default Recommended