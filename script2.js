const labels = ['Black Widow', 'Captain America', 'Captain Marvel', 'Hawkeye', 'Jim Rhodes', 'Thor', 'Tony Stark']

const aba = labels.map(value => {

  for (let i = 1; i <= 2; i++) {
    const img =`https://raw.githubusercontent.com/WebDevSimplified/Face-Recognition-JavaScript/master/labeled_images/${value}/${i}.jpg`
    return img
  }
})

console.log(aba);

