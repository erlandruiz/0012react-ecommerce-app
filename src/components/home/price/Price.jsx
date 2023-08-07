
import { Heading } from '../../common/Heading'
import { price } from '../../assets/data/data';
import { FcCheckmark } from 'react-icons/fc';
import { AiOutlineClose } from 'react-icons/ai';


export const Price = () => {
  return (
    <>
        <section className='price'>
            <Heading title='Choose the plans' desc='Meet our newbies! The latest templates uploaded to the marketplace.'/>

            <div className="content">
                {price.map((item)=>(
                    <div key={item.id} className="box">
                      <h3>{item.name}</h3> 
                      <h1><span>$</span>
                      {item.price}
                      <label htmlFor="">/user per month</label>
                      </h1>
                      <p>{item.desc}</p>
                      <button className='button'>GET STATRED</button>

                      <ul>

                        {/* TODO */}
                        {item.list.map((lists , id)=>(
                            
                            <li key={id}>
                                <i> {(lists.icon === 'FcCheckmark') ? <FcCheckmark/> : <AiOutlineClose/>} </i>
                               

                                
                                <span>{lists.para}</span>

                            </li>
                        ))}
                     
                      </ul>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}
