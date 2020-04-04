import React from 'react'


// const API_key = insert api key- numbers only
class Main extends React.Component{
    constructor(props){
        super(props);

        this.state={};
    }

    componentDidMount(){
        this.getSomething();
    }

    async getSomething(){
       try {
           const res = await axios.get(api url=${API_KEY})
          console.log(res.data.response.results.forEach(obj =>{
        console.log(obj.id);
        if(obj.id === 'sport'){
            this.setState({'sport'})
        }
    }));
                

    //     }catch (e){
    //         console.error(e);
    //     }
      
    // }

    render(){
        return(
            <main className="main">
                <h1>Something</h1>
            </main>
        )
    }
}

export default Main