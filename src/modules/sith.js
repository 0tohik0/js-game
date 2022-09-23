const sith = () => {
    const escapeScreen = document.querySelector('.escape-screen')

    let anakin = document.getElementById('an')
    let pos = {top: 100, left: 100}

    anakin.style.top = pos.top + 'px'
    anakin.style.left = pos.left + 'px'
    
    let obj = {
      'ArrowDown': ['top', 15], 
      'ArrowUp': ['top', -15], 
      'ArrowRight': ['left', 15], 
      'ArrowLeft': ['left', -15],
    }
    
    addEventListener('keydown', (e) => {
      let key = obj[e.key];
      if( key ){ // key[0] == 'top' или 'left'
        pos[ key[0] ] = pos[ key[0] ] + key[1];
        anakin.style[ key[0] ] = pos[ key[0] ] + 'px';
      }
    })
}

export default sith