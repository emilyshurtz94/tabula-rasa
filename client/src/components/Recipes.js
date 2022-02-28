import React from "react";

export default class Recipes extends React.Component {
  
  state = {
      loading: true 
    }

  async componentDidMount() {
    const url = "https://api.spoonacular.com/recipes/random?&apiKey=d6c7c93a8a3a43d9a16c1a45b1c0b349";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
  
  
  
  render(){
    return ( <div>
      {this.state.loading ? <div>loading...</div> : <div>recipe..</div>}
    </div>
    );
  }
    
}
