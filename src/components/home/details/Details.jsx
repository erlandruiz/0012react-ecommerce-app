import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams} from "react-router-dom";



import {MdStarRate} from 'react-icons/md'

import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { ADD, DELETE, REMOVE_INT } from "../../../controller/action";


export const Details = () => {

    const [data, setData] = useState([]);
    const getdata = useSelector((state)=> state.cartReducer.carts);
    const {id} = useParams()

    const compare = ()=>{
        let compareData = getdata.filter((e)=>{
            return e.id == id
        });

        setData(compareData)
    }

    useEffect(() => {
      compare()
    
    }, [id]);

    const dispatch = useDispatch();

    const increment = (e)=>{
        dispatch(ADD(e))
    }

    const decrement = (item)=>{
        dispatch(REMOVE_INT(item))
    }

    const history = useNavigate();

    const deletes = (id)=>{
       dispatch(DELETE(id)) 
       history("/")
    }
    
  return (
    <>
    <article>
        <section className="details">
            <h2 className="details_title">Product Details pages</h2>

            {/* TODO */}
            {data.map((item, id)=>(
                <div className="details_content" key={id}>
                    <div className="details_content_img">
                        <img src={item.cover} alt="" />
                    </div>
                    <div className="details_content_detail">
                        <h1>{item.title}</h1>
                        <div className="rating">
                            <MdStarRate/>
                            <MdStarRate/>
                            <MdStarRate/>
                            <MdStarRate/>
                            <MdStarRate/>
                            <label htmlFor="">(1 customer review)</label>
                        </div>
                        <h3>${item.price * item.qty}</h3>
                        <p>{item.author}</p>
                        <div className="qty">
                            <div className="count">
                                <button onClick={()=> increment(item)}>
                                    <AiOutlinePlus/>

                                </button>
                             
                                <span>{item.qty}</span>
                                <button onClick={item.qty <= 1 ? deletes(item.id) : ()=>decrement(item)}>
                                    <AiOutlineMinus/>

                                </button>
                            </div>
                            <button className="button">Add To Cart</button>
                        </div>

                        <div className="desc">
                            <h4>PRODUCTS DESCRIPTION</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi vero magnam beatae consequatur accusamus ipsum placeat ad officia alias adipisci eius aut est expedita iusto sint, sequi culpa modi pariatur!</p>
                            <h4>PRODUCTS DETAILS</h4>
                            <ul>
                                <li><p>Material: Plastic, Wood</p></li>
                                <li><p>Dimensions And Weight: Height: 80cm, Weight: 5.3Kg</p></li>
                                <li><p>Length: 48 cm</p></li>
                                <li><p>Depth: 52 cm</p></li>
                                <li><p>Seat height: 44 cm </p></li>
                                </ul>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    </article>
    </>
  )
}
