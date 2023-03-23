import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
function App() {
    let [noteData, setData] = React.useState([]);
    function checkEmpty(word){
        let count=0;
        for(let i=0;i<word.length;i++){
            if(word[i]===' ')
            ++count;
        }
        if(count===word.length)
        return true;
        else 
        return false;
    }
    function onAddHandle(title, content) {
        if(checkEmpty(title)&&checkEmpty(content))
        return ;
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