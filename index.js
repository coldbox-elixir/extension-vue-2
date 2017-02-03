var Elixir = require( "coldbox-elixir" );

Elixir.ready( function() {
    Elixir.webpack.mergeConfig( {
        // ensure we are using the version of Vue that supports templates
        resolve: {
            alias: {
                vue: "vue/dist/vue.js"
            },
            extensions: [ ".js", ".vue" ]
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: [ { loader: "vue-loader" } ],
                    exclude: [ /node_modules/ ]
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    use: [ {
                        loader: "file-loader",
                        options: {
                            limit: 10000,
                            name: "../img/[name].[hash:7].[ext]"
                        }
                    } ]
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    use: [ {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            name: "../fonts/[name].[hash:7].[ext]"
                        }
                    } ]
                }
            ]
        }
    })
})
