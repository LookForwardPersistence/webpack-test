// import _ from 'lodash'
import './style.css';
import icon from  './company.jpg';
import Data from './data.xml';
import printMe from './print';
import cube from  './math';

if(process.env.NODE_ENV !=='production'){
    console.log('Looks like we are in devlopment mode')
}
function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML =  "立方：" + cube(5) + "\n\n"; //_.join(['Come on', 'webpack','Well','Greate'], ' ');
    element.classList.add('purple')

    //将图片添加到div
    var myIcon = new Image();
    myIcon.src = icon;
    element.appendChild(myIcon)
    console.log(Data)
    printMe()
    return element;
}

document.body.appendChild(component());

if(module.hot){
    module.hot.accept('./print.js',function () {
        alert("great!!!Come on");
        printMe()
    })
}