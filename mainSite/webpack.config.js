module.exports={
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      },
    output:{
        filename:'bundle.js',
        path:__dirname+'/public'
    }
}

/*module.exports={
    entry:'./src/index.js',
    module:{
        rules:[
            {test: /\.js$/,  exclude:[ /node_modules/ , loader: 'babel-loader',query: {
                presets: ['@babel/preset-env', 'react']
            }},
            {test: /\.jsx$/, exclude: [ /node_modules/], loader: 'babel-loader',query: {
                presets: ['@babel/preset-env', 'react']
            }}
        ] 
    }, 
    node: {
        worker_threads: 'empty',
        child_process: 'empty',
        dns: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      },
    output:{
        filename:'bundle.js',
        path:__dirname+'/public'
    }

};*/