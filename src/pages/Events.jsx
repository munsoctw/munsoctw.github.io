// import React from 'react'
import RenderContent from '../components/RenderContent'
import Event_Content from '../data/events_brief.json'
import Event_Items from '../data/event_items.json'
import Event_slide from '../components/Event_slide'
import event_slide_list from '../data/event_slide.json'

const Events = () => {
  return (
    <div className="darkBg">
      <RenderContent listings={Event_Content}/>
      <Event_slide listings={event_slide_list} />
      <RenderContent listings={Event_Items}/>
    </div>
  )
}

export default Events