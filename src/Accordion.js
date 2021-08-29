import React,{useState} from 'react'
import questions from './Api.js'
import MyAccordion from './MyAccordion'

const Accordion = () => {
  const [data, setdata] = useState(questions)
  return (
    <>
    <section className="main-div">
                <h1>React Interview Questions </h1>
        {
                data.map((element) => {
                    return <MyAccordion key={element.id} {...element} />
                    
                })        
        }
                 </section>











    </>
  )
}

export default Accordion
