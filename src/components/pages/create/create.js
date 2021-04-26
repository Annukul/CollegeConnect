import React from 'react';
import Header from '../com/header';

const Create = () => {
    return (
        <>
            <Header />
            <div class="create">
                <div class="create-form">
                    <h2>Create a post</h2>
                    <form action="">
                        <input type="text" name="title" placeholder="Title" />
                        <textarea placeholder="Text" name="body" id="" cols="30" rows="10"></textarea>
                        <button type="submit">Create</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Create;
