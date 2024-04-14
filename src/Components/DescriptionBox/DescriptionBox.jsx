import React from 'react'
import './DescriptionBox.css'

export default function DescriptionBox() {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure repellat distinctio quam blanditiis iusto maiores, voluptates laudantium voluptas perferendis minus molestiae eius aspernatur accusantium quibusdam adipisci fugiat voluptatem nostrum vitae nisi at in nobis officia officiis? Voluptates quisquam quia rem facilis, commodi expedita impedit necessitatibus sequi, omnis eius ipsa pariatur.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae consequuntur corrupti commodi quasi quas rerum recusandae veniam asperiores ducimus qui!</p>
      </div>
    </div>
  )
}
