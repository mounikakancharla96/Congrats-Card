const element = (
    <div className="container">
        <h1 className = "congrats-heading">Congratulations</h1>
        <div className = "congrats-card">
            <img src = "https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" className="image" />
            <h1 className = "kiran-heading">Kiran V</h1>
            <p className = "kiran-description">Vishnu Institute of Computer Education and Technology, Bhimavaram</p>
            <img src = "https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" className="image" />
        </div>
    </div>
  )
  
ReactDOM.render(element, document.getElementById('root'))