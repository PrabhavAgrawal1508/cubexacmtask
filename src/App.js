
import './App.css'
import Announcement_bar from './Components/announcement_bar';
import Navigation_bar from './Components/Navigation_bar';
import Primarycontent from './Components/primarycontent';
import Logobox from './Components/logobox';
import Customer from './Components/customer_section';


function App() {
  return (
    <div className="App">
      <Announcement_bar/>
      <Navigation_bar/>
      <Primarycontent/>
      <Logobox/>
      <Customer/>
      
      



    </div>
  );
}   

export default App;
