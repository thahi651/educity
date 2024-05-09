import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

function Testimonials() {

    const slider = useRef();
    let tx = 0;
    
    const slideForward = ()=>{
        if (tx > -50){
            tx -= 25;
        
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }
    const slideBackward = ()=>{
        if (tx < 0){
            tx += 25;
        
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon } alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Eve Adam</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decision I've ever made. The supportivr community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Arden University,UK</span>
                            </div>
                        </div>
                        <p>Teachers were well-qualified. The teaching quality is very good. Attendance is compulsory in our college. The course curriculum is not relevant. Semester exams are easy .</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Estelle Asher</h3>
                                <span>Columbia University, New York</span>
                            </div>
                        </div>
                        <p>Good faculty members with good teaching experience. Semester pattern is followed in the university, which means 2 semesters in a year. It makes the study easier.I have interest in technology that's why I enrolled here.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Lois Simon</h3>
                                <span>The University of Sydney,Australia</span>
                            </div>
                        </div>
                        <p>All the faculties are very dedicated, providing an enriching learning experience. The curriculum is extensive and up to date, covering both theoretical concepts and practical applications. Overall it sets a high standards for academic excellence.</p>
                    </div>
                </li>

            </ul>
        </div>

    </div>
  )
}

export default Testimonials