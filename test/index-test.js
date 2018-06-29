import { expect } from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
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
    expect(comments.at(0).props().commentText).to.equal('Tell my wifi love her')
    expect(comments.at(1).props().commentText).to.equal('Ken M was here')
    expect(comments.at(2).props().commentText).to.equal("Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.")
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
  
  it('uses the value of the opacity prop in its render method', () => {
    expect(box.children().first().prop('opacity')).to.equal(0.9) 
  })
  
  it('correctly reduces the opacity by 0.1', () => {
    expect(box.children().first().prop('opacity')).to.equal(0.9) 
  })
  
})

// 
// describe('Comment', () => {
// 
//   it('uses the value of the commentText prop in its render method', () => {
//     const comment = shallow(<Comment commentText={"poop"}/>)
// 
//   })
// 
// })
// 
// describe('Comment', () => {
// 
//   it('uses the value of the commentText prop in its render method', () => {
//     const comment = shallow(<Comment commentText={"poop"}/>)
// 
//   })
// 
// })
