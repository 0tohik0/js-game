const count = () => {

    const count = document.getElementById('count');
    let counter = 0;
    
    setInterval(() => {
      counter += 5;
      count.textContent = counter;
    }, 1000)

}

export default count