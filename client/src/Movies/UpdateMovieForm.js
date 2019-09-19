import React, { useState } from "react";

const initialMovie = {
    id: "",
    title: "",
    director: "",
    metascore: "",
    stars: []
};

const UpdateForm = () => {
    const [movie, setMovie] = useState(initialMovie);

    const handlechange = e => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(movie);
    };

    return (
        <div>
            <h2>Update Movie Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="id"
                    placeholder="Enter the ID"
                    value={movie.id}
                    onChange={handlechange}
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Enter the Title"
                    value={movie.title}
                    onChange={handlechange}
                />
                <input
                    type="text"
                    name="director"
                    placeholder="Enter the Director"
                    value={movie.director}
                    onChange={handlechange}
                />
                <input
                    type="text"
                    name="stars"
                    placeholder="Enter the Cast Stars"
                    value={movie.stars}
                    onChange={handlechange}
                />
                <button>Edit the Movie</button>
            </form>
        </div>
    );
};

export default UpdateForm;