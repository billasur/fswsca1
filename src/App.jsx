import './App.css'
import TestimonialCard from './components/TestimonialCard.jsx'

function App() {

   const data = [
    {
      name: "Prahalad Singh Gaur",
      review: "This service was amazing! Highly recommended."
    },
    {
      name: "Sanskar Kharya",
      review: "This service was okayish, would recommend if in the area."
    },
    {
      name: "Pranav Prakash",
      review: "This service was not a pleasant experience for me"
    },
    {
      name: "Mohammad Hasan",
      review: "This service was the worst thing happened to mankind"
    },

   ]
  return (
    <>
    <div id='WholeGrid'>
      {data.map((item,index)=>(
        <TestimonialCard key= {index}{...item} />
      ))}
    </div>
    </>
  )
}

export default App
