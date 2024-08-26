import { useParams } from 'react-router-dom'
import './Contact.css'

const Contact = () => {

  const { title } = useParams();

  return (
    <>
     <div className='contactpage'>
    <h1 className='titleStyle'>{ title?.toUpperCase()}</h1>
    </div>
    </>
  )
}

export default Contact