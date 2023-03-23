import React from 'react';
function CreateArea(props) {
    let [title, setTitle] = React.useState('');
    let [content, setContent] = React.useState('');
    function onChangeHandle(event) {
        if (event.target.name === 'title')
            setTitle(event.target.value);
        else if (event.target.name === 'content')
            setContent(event.target.value);
    }
    return (
        <div>
            <form>
                <input onChange={onChangeHandle} name="title" placeholder="Title" value={title} />
                <textarea onChange={onChangeHandle} name="content" placeholder="Take a note..." rows="3" value={content} />
                <button onClick={(event) => {
                    event.preventDefault();
                    props.handle(title, content);
                    setTitle('');
                    setContent('');
                    }}>Add</button>
        </form>
      </div >
    );
}

export default CreateArea;