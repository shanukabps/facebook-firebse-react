import React from 'react'
import './Widget.css'

function Widget() {



    const iframe = '<iframe widget="340" height="100%" style="border:none" scrolling="no" title="fx." src ="http://www.colombopage.com/" frameborder="no" allowtransparency="true" allowfullscreen="true">See the Pen <a href="https://codepen.io/ycw/pen/JqwbQw/">fx.</a> by ycw(<a href="https://codepen.io/ycw">@ycw</a>) on <a href="https://codepen.io">CodePen</a>.</iframe>';
    return (
        <div dangerouslySetInnerHTML={{ __html: iframe ? iframe : "" }} />);

}

export default Widget
