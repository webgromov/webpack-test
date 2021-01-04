import Post from '@models/Post'
import './styles/styles.css'
import './babel'
import './styles/custom-dynamic-styles.scss'
import json from './assets/file'
import logo from './assets/logo.png'
import $ from 'jquery'

const post = new Post('Webpack Post Title', logo)
$('.fortest').html(post.toString())
// console.log('Post to string', post.toString())