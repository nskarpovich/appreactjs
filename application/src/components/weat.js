import React from 'react';
class Weat extends React.Component{
    render(){
        return(
            <div>
                { this.props.commonName &&
                <div>
                 <p> <strong>Landmarks</strong>:{this.props.commonName} </p>
                 <p> <strong>BikePoint id</strong>: {this.props.id}</p>
                 </div>
                 }
                 <p> {this.props.error}</p>
                 </div>
                 

        )
    }
}
export default Weat;