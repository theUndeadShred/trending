This project is based on the Google Trends Visualizer [Visualizer](https://trends.google.com/trends/hottrends/visualize?nrow=5&ncol=5).

In the root project directory, run:

# `npm install` to bring in all dependencies.

Then run
# `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Using only React and Sass, this project aims to replicate the Google Trends visualizer. The matrix of `trend cells` uses CSS-GRID and each cell manages it's own state.

The data is being fed from a pre-loaded JSON file that exists in the `/data` directory.

*Rendering the matrix:*
`<TrendsMatrix cellCount={25} data={data}/>`

- defining the `cellCount` will render exactly that many cells across 5 columns.
- data accepts an array of strings 
