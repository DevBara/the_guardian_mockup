import React from 'react'
import axios from 'axios'



class Main extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            newsData: []
        };
    }

    componentDidMount(){
        this.getSomething();
    }

    async getSomething(){
       try {
           const res = await axios.get('https://content.guardianapis.com/search?api-key=0e798de9-f270-4f0d-ba87-4faa3de3209a')
           console.log(res.data.response.status)
       } catch (e){
         console.error(e);
        }
      
    }

    render(){
        return(
            <main className="main">
                <h1>API Shows Here</h1>
                <div>
                    {/* need to render API data */}
                </div>
                
            </main>
        )
    }
}

export default Main