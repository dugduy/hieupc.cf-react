const root1=ReactDOM.createRoot(document.querySelector('nav'))
function navbar() {
    return [
        <a href="/">Home</a>,
<a href="/about.html">About</a>,
<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">More</a>
    ];
  }
root1.render(navbar())
setTimeout(()=>{
    const root2=ReactDOM.createRoot(document.querySelector('.mydiv'))
function maindiv(){
    return [
    <h1>Web này là web siêu khó hack!!!</h1>,
    <h2>Facebook thật: <a href="https://fb.com/hieupc.7onez">Ngô Minh Hiếu</a></h2>,
    <h3>Hết, thế thôi</h3>,
    <h4>Không hack được đâu!</h4>,
    <p>Có 1 trang tương tự tại <a href='https://hieupc.tk/'>đây</a></p>
    ]
}
root2.render(maindiv())
},1000)