import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Guilherme'}
          fotoUsuario={'https://picsum.photos/50/49'}
          fotoPost={'https://picsum.photos/200/160'}
        />
        <Post
          nomeUsuario={'Carla'}
          fotoUsuario={'https://picsum.photos/50/48'}
          fotoPost={'https://picsum.photos/200/140'}
        />
      </div>
    );
  }
}

export default App;
