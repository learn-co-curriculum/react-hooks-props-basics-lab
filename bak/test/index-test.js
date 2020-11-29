import 'jsdom-global/register';
import { expect } from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../src/App.js'
import BlogPost from '../src/BlogPost.js'
import Comment from '../src/Comment.js'
import ColorBox from '../src/ColorBox.js'

Enzyme.configure({ adapter: new Adapter() })

describe('BlogPost', () => {
  let comments
  
  before(() => {
    comments = shallow(<BlogPost />).find(Comment)
  })
  
  it('renders at least one Comment component', () => {
    expect(comments.exists()).to.equal(true)
  })
  
  it('renders three Comment components', () => {
    expect(comments).to.have.length(3)
  })

  it('passes the appropriate text as props to each comment component', () => {
    expect(comments.at(0).props().commentText).to.equal('When we speak we are afraid our words will not be heard or welcomed. But when we are silent, we are still afraid. So it is better to speak. - Audrey Lorde')
    expect(comments.at(1).props().commentText).to.equal('I am no longer accepting the things I cannot change. I am changing the things I cannot accept. - Angela Davis')
    expect(comments.at(2).props().commentText).to.equal("If you don't understand, ask questions. If you're uncomfortable about asking questions, say you are uncomfortable about asking questions and then ask anyway. It's easy to tell when a question is coming from a good place. Then listen some more. Sometimes people just want to feel heard. Here's to possibilities of friendship and connection and understanding. - Chimamanda Ngozi Adichie")
  })  
  
})

describe('Comment', () => {
  let comment
  
  before(() => {
    comment = shallow(<Comment commentText={"poop"}/>)
  })
  
  it('uses the value of the commentText prop in its render method', () => {
    expect(comment.text()).to.include("poop")
  })
  
  it('has the proper class', () => {
    expect(comment.hasClass('comment')).to.equal(true)
  })
  
})

describe('ColorBox', () => {
  let box
  
  before(() => {
    box = shallow(<ColorBox opacity={1.0}/>)
  })
  
  it('uses the value of the opacity prop in its style', () => {
    expect(box.prop('style')).to.contain({opacity: 1})
  })
  
  it('correctly reduces the opacity by 0.1 after first recursive call', () => {
    expect(box.childAt(0).prop('opacity')).to.equal(0.9) 
  })
  
  it('correctly reduces the opacity by an additional 0.1 after the second recursive call', () => {
    const boxTree = mount(<ColorBox opacity={1.0}/>)
    expect(boxTree.find(ColorBox).get(2).props.opacity).to.equal(0.8)
  })
  
  it('App renders 10 ColorBoxes in total', () => {
    // this one may feel tricky
    // Important to remember that we want 0.1 to be the last opacity rendered
    // This means we can continue recurring as long as we are >= 0.2 opacity
    const appTree = mount(<App/>)
    expect(appTree.find(ColorBox).length).to.equal(10) 
  })
  
})
