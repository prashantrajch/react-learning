import WindowResizeFun from "."

export default function UseResizeWindow(){
    const windowSize = WindowResizeFun();
    const{width,height} = windowSize;
    return <div>
        <h1>Use Window resize Hook</h1>
        <p>Width is {width}</p>
        <p>Height is {height}</p>
    </div>
}