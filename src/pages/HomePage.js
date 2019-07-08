import React from 'react';
import Article from '../components/Article'

const articles = [
    {
        id: 1,
        title: 'Czym jest teroria strun',
        author: 'Jan Nowak',
        text: 'Pppppproin vulputate fringilla. Phasellus hendrerit sagittis. Vestibulum sollicitudin. Praesent odio eu mi odio, a nunc. Nunc at est massa et eros quis eleifend nunc commodo tempus, fringilla lorem, pretium pellentesque. Praesent odio consequat lacus diam ac erat. Sed eros. Sed nibh sit amet, consectetuer ut, dolor. Nulla facilisi. Nullam wisi dui aliquam dictum ut, accumsan vitae, ullamcorper augue, ullamcorper risus. Sed condimentum magna lectus, luctus et ultrices nulla. Integer adipiscing. Nunc vitae tellus. Nulla varius, felis fermentum pede, posuere risus. Ut a neque auctor odio. Morbi porttitor, nulla ut quam auctor non, arcu. Duis vehicula libero. Integer eget diam iaculis.',
    },
    {
        id: 2,
        title: 'Duis vehicula libero',
        author: 'Adam Leszcz',
        text: 'Paaaaaaroin vulputate fringilla. Phasellus hendrerit sagittis. Vestibulum sollicitudin. Praesent odio eu mi odio, a nunc. Nunc at est massa et eros quis eleifend nunc commodo tempus, fringilla lorem, pretium pellentesque. Praesent odio consequat lacus diam ac erat. Sed eros. Sed nibh sit amet, consectetuer ut, dolor. Nulla facilisi. Nullam wisi dui aliquam dictum ut, accumsan vitae, ullamcorper augue, ullamcorper risus. Sed condimentum magna lectus, luctus et ultrices nulla. Integer adipiscing. Nunc vitae tellus. Nulla varius, felis fermentum pede, posuere risus. Ut a neque auctor odio. Morbi porttitor, nulla ut quam auctor non, arcu. Duis vehicula libero. Integer eget diam iaculis.',
    },
    {
        id: 3,
        title: 'Nulla facilisi',
        author: 'Miro Radoi',
        text: 'Pccccccroin vulputate fringilla. Phasellus hendrerit sagittis. Vestibulum sollicitudin. Praesent odio eu mi odio, a nunc. Nunc at est massa et eros quis eleifend nunc commodo tempus, fringilla lorem, pretium pellentesque. Praesent odio consequat lacus diam ac erat. Sed eros. Sed nibh sit amet, consectetuer ut, dolor. Nulla facilisi. Nullam wisi dui aliquam dictum ut, accumsan vitae, ullamcorper augue, ullamcorper risus. Sed condimentum magna lectus, luctus et ultrices nulla. Integer adipiscing. Nunc vitae tellus. Nulla varius, felis fermentum pede, posuere risus. Ut a neque auctor odio. Morbi porttitor, nulla ut quam auctor non, arcu. Duis vehicula libero. Integer eget diam iaculis.',
    },
]
const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;