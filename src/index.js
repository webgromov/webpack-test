import Post from './Post'
import './styles/styles.css'
import json from './assets/file'
import logo from './assets/logo.png'

console.log(json)

const post = new Post('Webpack Post Title')
console.log('Post to string', post.toString())