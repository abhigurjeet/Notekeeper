import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
function App() {
    let [noteData, setData] = React.useState([]);
    function onAddHandle(title, content) {
        setData(prev=>[...prev,{title:title,content:content}]);
    }
    function onHandleDelete(ind){
        setData(prev=>{
            let arr=prev.filter((item,i)=>ind!==i);
            return arr;
        })
    }
    return (
        <div>
            <Header />
            <CreateArea handle={onAddHandle}/>
            {noteData.map((item,ind)=>{return <Note ind={ind} handle={onHandleDelete}title={item.title} content={item.content}/>})}
            <Footer />
        </div>);
}
export default App;