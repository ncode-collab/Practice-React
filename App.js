// const heading = React.createElement('h1',{id:"heading"},'Hello World from React!!');

// console.log(heading);

// const root= ReactDOM.createRoot(document.getElementById('reactNode'));

// console.log(root);

// root.render(heading);

//Nested Structure

const parent=React.createElement('div',{id:'parent'},React.createElement('div',{id:'child'},[React.createElement('h1',{},"I'm an h1 tag"),
    React.createElement('h2',{},"I'm an h2 tag")
]));

const root = ReactDOM.createRoot(document.getElementById('reactNode'));
root.render(parent);
