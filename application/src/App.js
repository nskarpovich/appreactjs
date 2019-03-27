import React from 'react';
import Info from './components/info'
import Form from './components/form'
import Weat from './components/weat'
const App_KEY = '2b708031d70c78a01b3a9211fbc2a120';
const App_ID = 'e42de51a';
class App extends React.Component{
  state = {
    commonName: undefined,
    id: undefined,
    error: undefined,
  }
  gettingWeat = async  (e) => {
    e.preventDefault();
    var keyword = e.target.elements.keyword.value;
    if(keyword){
      const api_url =await fetch(`https://api.tfl.gov.uk/BikePoint/Search?query=${keyword}&app_id=${App_ID}&app_key=${App_KEY}`);
      const data = await api_url.json(); 
      console.log(data);
      this.setState({
      commonName: data['0'].commonName,
      id: data['0'].id,
      error:undefined
       });
    }else {
      this.setState({
        commonName:undefined,
        id:undefined,
        error: 'enter keyword'
         });
    }
    

  }
  render(){
    return(
      <div className= 'wrapper'> 
      <div className = 'main'>
      <div className = 'container'>
      <div className = 'row'>
      <div className='color-sm-5 info'>
        <Info />
        </div>
      <div className='color-sm-7 form'>
         <Form  weatMethod={ this.gettingWeat}/>
        <Weat
        commonName={this.state.commonName} 
        id={this.state.id}
        error={this.state.error}
        /> 
      </div>
      </div>
      </div>
      </div>
       
         </div>
    );
  }
}

export default App;