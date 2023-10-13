// const btn = window.getElementById('button')
// console.log(btn)

// btn?.addEventListener('click', ()=>{
//   const value = prompt()
//   alert (value)
//   console.log('hello')
// })

// console.log('hello')

window.addEventListener("DOMContentLoaded", (event) => {
  const el = document.getElementById('button');
  if (el) {
    el.addEventListener('click', ()=>{
      const value = prompt()
      alert(value)
    });
  }
});