import _ from 'lodash'
import './style.css';
import icon from  './company.jpg';
import Data from './data.xml';
// import printMe from './print';
import cube from  './math';
import printMe from "./print";

console.log("navigator")
console.log(navigator)
//progress web apps
if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration =>{
            alert("success")
            console.log("sw registerer", registration)
        }).catch(registrationError => {
            alert("fail")
            console.log(' SW registration fail', registrationError)
        } )
    })
}
if(process.env.NODE_ENV !=='production'){
    console.log('Looks like we are in devlopment mode')
}
function component() {
    var element = document.createElement('div');
     _.join(['I am ',' is', 'index'])
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML =  "立方：" + cube(5) + "\n\n"; //_.join(['Come on', 'webpack','Well','Greate'], ' ');
    element.classList.add('purple')

    //将图片添加到div
    var myIcon = new Image();
    myIcon.src = icon;
    element.appendChild(myIcon)
    var button = document.createElement('button');
    var br = document.createElement('br')
    button.innerHTML = '点击查看console'
    element.appendChild(br)
    element.appendChild(button)
    console.log(Data)
    button.onclick = e => import('./print.js').then(module =>{//赖加载
        var print = module.default;
        alert("great!!!Come on");
        print();
    })
    return element;
}

document.body.appendChild(component());

if(module.hot){
    module.hot.accept('./print.js',function () {
        alert("great!!!Come on");
    })
}