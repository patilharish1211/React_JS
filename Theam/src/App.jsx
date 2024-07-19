import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import dayImage from './images/Day.png';
import nightImage from './images/Night.png';

const App = () => {
  const [isDay, setIsDay] = useState(true);

  const toggleTheme = () => {
    setIsDay(!isDay);
  };

  const themeStyles = {
    backgroundColor: isDay ? 'white' : '#333',
    color: isDay ? 'black' : 'white',
    width: '100%',
    height: '95vh',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.4s',
    overflow: 'hidden'
  };

  return (
    <div style={themeStyles}>
      <button onClick={toggleTheme} style={{border: 'none', background: 'none', cursor: 'pointer', height: '40px', width: '40px', backgroundColor: 'gray', borderRadius: '100px'}}>
        <img src={isDay ? dayImage : nightImage} alt="theme icon" style={{ height: '20px', display: 'block', marginLeft: '5px'}} />
      </button>
      {/* <p>This is a {isDay ? 'day' : 'night'} themed paragraph.</p> */}
      <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur unde optio praesentium voluptatum facilis nihil rerum molestiae. <br /> Sed provident libero architecto, eveniet, vero, natus voluptatem voluptatum laudantium quae quibusdam vitae!
      Necessitatibus aliquam <br /> deserunt totam aut, tempora optio adipisci magnam eum sint repellat quod fugit provident reiciendis molestiae! Fugiat accusantium dolore <br /> optio ab magni, maiores unde aspernatur impedit error laboriosam eveniet.
      Quo aliquid autem iste qui! Modi quibusdam fugit odit sequi <br /> sapiente amet ea corporis nobis illo distinctio, eligendi eos delectus veritatis laudantium doloremque aliquid soluta sed nesciunt similique <br /> voluptatem aperiam!
      Voluptas voluptatibus reprehenderit aut magni voluptatum quidem accusamus ducimus dolorem ipsa quas laudantium <br /> quam eveniet ipsum, ea culpa mollitia pariatur molestiae obcaecati. Qui eveniet beatae inventore architecto natus, asperiores iure!
      Error <br /> illum eaque architecto expedita totam quasi, minima, consequatur nostrum, tempora deleniti doloremque impedit fugiat ipsam fuga hic <br /> officia ducimus repudiandae odit laudantium facere. Tempore sint at corporis ab in?
      Velit molestiae reprehenderit iste, nihil alias aut? <br /></p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

