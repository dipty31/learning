import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

console.log(AlexaImage);//will show it getting inlined
console.log(SiriImage);// will show it getting treated as a separate file
function App(){
    return(
            <div>
                <div>Personal Digital Assistants</div>
                <div className="container">
                   <section className="section">
                    <div className="columns">

                        <div className="column is-3">
                <ProfileCard title="alexa" handle="@alexa99" image={AlexaImage}/>
                        </div>

                        <div className="column is-3">
                <ProfileCard title="cortana" handle="@cortana32" image={CortanaImage}/>                      
                        </div>

                        <div className="column is-3">
                <ProfileCard title="siri" handle="@sirir01" image={SiriImage}/>       
                        </div>
                    </div>
                   </section> 
                </div>
            </div>          
    );
}
export default App;