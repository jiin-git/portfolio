import React, { useState, useEffect } from 'react';

function Navigation() {
    const [bodyLists, setBodyLists] = useState({
        about: null,
        skills: null,
        project: null,
    });

    const navLists = ['about', 'skills', 'project'];
    const listItems = navLists.map((navlist, index) => {
        return <a key={index} onClick={moveWindow}>{navlist}</a>;
    });

    function moveWindow(e) {
        const coordX = 0;
        const coordY = bodyLists[e.target.innerText].getBoundingClientRect().y;
        window.scrollTo(coordX, coordY);
    };

    useEffect(() => {
        setBodyLists({
            about: document.getElementById('about'),
            skills: document.getElementById('skills'),
            project: document.getElementById('project'),
        });
    }, []);

    return (
        <>{listItems}</>
    );
}

export default Navigation;