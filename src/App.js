
import './App.css'
import Announcement_bar from './Components/announcement_bar';
import Navigation_bar from './Components/Navigation_bar';
import Primarycontent from './Components/primarycontent';
import Logobox from './Components/logobox';
import Customer from './Components/customer_section';
import Featuremain2 from './Components/featuremain2';
import Banner from './Components/banner';
import Integration_block from './Components/integration_block'


function App() {
  return (
    <div className="App">
      <Announcement_bar/>
      <Navigation_bar/>
      <Primarycontent/>
      <Logobox/>
      <Customer/>
      <Featuremain2/>
      <Banner/>
      <Integration_block/>
      
      



    </div>
  );
}   

export default App;
