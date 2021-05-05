const path = require("path");
const HtmlWebpackPligin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, './src/index.js'),
    dropdown: path.join(__dirname, './src/assets/javascripts/dropdown.js'),
    portfolio: path.join(__dirname, './src/portfolio/portfolio.js'),
    labs:path.join(__dirname, './src/labs/labs.js'),
    berberes: path.join(__dirname, './src/berberes/berberes.js'),
    youtube: path.join(__dirname, './src/youtube/youtube.js'),
    ledor: path.join(__dirname, './src/ledor/ledor.js'),
    v1portfolio: path.join(__dirname, './src/v1portfolio/v1portfolio.js'),
    skill: path.join(__dirname, './src/skill/skill.js'),
    labsIcons: path.join(__dirname, './src/labsIcons/labsIcons'),
    labsDropdown: path.join(__dirname, './src/labsDropdown/labsDropdown.js'),
    labsArrow: path.join(__dirname, './src/labsArrow/labsarrow.js'),
    cube:path.join(__dirname, './src/cube/cube.js'),
    montre: path.join(__dirname, './src/montre/montre.js'),
    sphere: path.join(__dirname, './src/sphere/sphere.js'),
    calculatrice: path.join(__dirname, './src/calculatrice/calculatrice.js'),
    todolist:path.join(__dirname, './src/todolist/todolist.js')

  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }    
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/images/*',
          to: 'assets/images/[name][ext]', // faut pas mettre un point entre [name] et [ext]
        },
        {
          from: './src/assets/images/berberes/*',
          to: 'assets/images/berberes/[name][ext]', 
        },
        {
          from: './src/assets/images/youtube/*',
          to: 'assets/images/youtube/[name][ext]', 
        },
        {
          from: './src/assets/images/ledor/*',
          to: 'assets/images/ledor/[name][ext]', 
        },
        {
          from: './src/assets/images/v1portfolio/*',
          to: 'assets/images/v1portfolio/[name][ext]', 
        }       
      ],
    }),
    new HtmlWebpackPligin({
      filename: "index.html",
      template: path.join(__dirname, './src/index.html'),
      chunks:["main", "dropdown"]
    }),
    new HtmlWebpackPligin({
      filename: "portfolio.html",
      template: path.join(__dirname, './src/portfolio/portfolio.html'),
      chunks:["portfolio", "dropdown"]
    }),
    new HtmlWebpackPligin({
      filename: "labs.html",
      template: path.join(__dirname, './src/labs/labs.html'),
      chunks:["labs", "dropdown"]
    }),  
    new HtmlWebpackPligin({
      filename: "labsIcons.html",
      template: path.join(__dirname, './src/labsIcons/labsIcons.html'),
      chunks:["labsIcons", "dropdown"]
    }),
    new HtmlWebpackPligin({
      filename: "labsDropdown.html",
      template: path.join(__dirname, './src/labsDropdown/labsDropdown.html'),
      chunks:["labsDropdown", "dropdown"]
    }),  
    new HtmlWebpackPligin({
      filename: "labsarrow.html",
      template: path.join(__dirname, './src/labsArrow/labsarrow.html'),
      chunks:["labsArrow", "dropdown"]
    }),
    new HtmlWebpackPligin({
      filename: "cube.html",
      template: path.join(__dirname, './src/cube/cube.html'),
      chunks:["cube", "dropdown"]
    }),    
    new HtmlWebpackPligin({
      filename: "montre.html",
      template: path.join(__dirname, './src/montre/montre.html'),
      chunks:["montre", "dropdown"]
    }), 
    new HtmlWebpackPligin({
      filename: "sphere.html",
      template: path.join(__dirname, './src/sphere/sphere.html'),
      chunks:["sphere", "dropdown"]
    }),  
    new HtmlWebpackPligin({
      filename: "calculatrice.html",
      template: path.join(__dirname, './src/calculatrice/calculatrice.html'),
      chunks:["calculatrice", "dropdown"]
    }),  
    new HtmlWebpackPligin({
      filename: "todolist.html",
      template: path.join(__dirname, './src/todolist/todolist.html'),
      chunks:["todolist", "dropdown"]
    }),                   
    new HtmlWebpackPligin({
      filename: "berberes.html",
      template: path.join(__dirname, './src/berberes/berberes.html'),
      chunks:["berberes"]
    }),
    new HtmlWebpackPligin({
      filename: "youtube.html",
      template: path.join(__dirname, './src/youtube/youtube.html'),
      chunks:["youtube"]
    }),
    new HtmlWebpackPligin({
      filename: "ledor.html",
      template: path.join(__dirname, './src/ledor/ledor.html'),
      chunks:["ledor"]
    }),
    new HtmlWebpackPligin({
      filename: "v1portfolio.html",
      template: path.join(__dirname, './src/v1portfolio/v1portfolio.html'),
      chunks:["v1portfolio"]
    }),
    new HtmlWebpackPligin({
      filename: "skill.html",
      template: path.join(__dirname, './src/skill/skill.html'),
      chunks:["skill"]
    }),              
  ],
  stats:"minimal",
  devtool: "source-map",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    inline: true,
    open: false,
    port: 1983
  }
};

