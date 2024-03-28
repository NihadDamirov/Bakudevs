import React, { useEffect, useState } from 'react'
import "./CourseSinglepage.css"
import PageContainer from './../../PageContainer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const course_url=`http://localhost:3000/courses/`
const CourseSinglepage = () => {
    const [course,setCourse]=useState([])
    const {id}=useParams()

    useEffect(()=>{
        axios.get(course_url + id).then(({data})=>{
            console.log(data);
            setCourse(data)
        })
    },[])
  return (
    <>
     <PageContainer>
    <div>
        <div>
            
            <Breadcrumbs title="Android Program Development"/>
            <div style={{display:"flex", marginTop:"35px"}}>
                
            <div className="course-single-left">
                <div>
                <div>
                    <p className="page-title">Əsas səhifə - Kurslar  - {course.course_name}</p>
                </div>
                <div style={{display:"flex", width:"300px", height:"50px", alignItems:"center", marginLeft:"0", marginTop:"25px",}}>
                    <p className="coursname">{course.course_name}</p>
                    <p className="courstime"><img src="/course-lesson-count.svg" alt="" />{course.course_lesson_time} dərs</p>
                </div>
                </div>
                <div className="line-single-page"></div>
                <div style={{display:"flex",width:"682px", margin:"0", marginBottom:"32px"}}>
                    <div className="course-pic-one"><img src={course.course_img} alt="" /></div>
                    <div>
                        <h1 className="course-title">Android dərsləri / #1 - Android-də çat proqramının yaradılması</h1>
                    </div>
                </div>

                <div>
                    <p className="course-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sed turpis risus molestie auctor vel. Iaculis augue diam tempus aliquet eu, pulvinar feugiat.</p>
                </div>

                <div>
                    <div><h2 className="videolesson">Videodərs</h2></div>
                    <div className="course-pic-two"><img src={course.course_img} alt="" /></div>
                    <div>
                        <p className="course-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sed turpis risus molestie auctor vel. Iaculis augue diam tempus aliquet eu, pulvinar feugiat. Suscipit non viverra dignissim dolor augue.</p>
                    </div>
                </div>

                <div>
                    <div><h2 className="android-development">Android Development</h2></div>
                    <div className="course-pic-three"><img src="/phone-photo.png" alt="" /></div>
                    <div>
                        <p className="course-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sed turpis risus molestie auctor vel. Iaculis augue diam tempus aliquet eu, pulvinar feugiat. Suscipit non viverra dignissim dolor augue.</p>
                    </div>
                </div>
            </div>

            <div className="single-course-right">
                <div className="courses-wrapper">
                    <div className="courses-list" >
                        <div><input type="checkbox" className="checkbox-single-page" name="" id="" /></div>
                        <div style={{width:"291px"}}><h3 className="course-lesson"># 1 - Android-də çat proqramının yaradılması</h3></div>
                    </div>
                    <div>
                        <div className="time-icon-div" ><img src="/time-icon.svg" style={{objectFit:"cover"}} alt="" /> 12 dəq</div>
                    </div>                    
                </div>

                <div className="courses-wrapper">
                    <div className="courses-list" >
                        <div><input type="checkbox" className="checkbox-single-page" name="" id="" /></div>
                        <div style={{width:"291px"}}><h3 className="course-lesson"># 1 - Android-də çat proqramının yaradılması</h3></div>
                    </div>
                    <div>
                        <div className="time-icon-div" ><img src="/time-icon.svg" style={{objectFit:"cover"}} alt="" /> 12 dəq</div>
                    </div>                    
                </div>

                <div className="courses-wrapper">
                    <div className="courses-list" >
                        <div><input type="checkbox" className="checkbox-single-page" name="" id="" /></div>
                        <div style={{width:"291px"}}><h3 className="course-lesson"># 1 - Android-də çat proqramının yaradılması</h3></div>
                    </div>
                    <div>
                        <div className="time-icon-div" ><img src="/time-icon.svg" style={{objectFit:"cover"}} alt="" /> 12 dəq</div>
                    </div>                    
                </div>

                <div className="courses-wrapper">
                    <div className="courses-list" >
                        <div><input type="checkbox" className="checkbox-single-page" name="" id="" /></div>
                        <div style={{width:"291px"}}><h3 className="course-lesson"># 1 - Android-də çat proqramının yaradılması</h3></div>
                    </div>
                    <div>
                        <div className="time-icon-div" ><img src="/time-icon.svg" style={{objectFit:"cover"}} alt="" /> 12 dəq</div>
                    </div>                    
                </div>

                <div className="courses-wrapper">
                    <div className="courses-list" >
                        <div><input type="checkbox" className="checkbox-single-page" name="" id="" /></div>
                        <div style={{width:"291px"}}><h3 className="course-lesson"># 1 - Android-də çat proqramının yaradılması</h3></div>
                    </div>
                    <div>
                        <div className="time-icon-div" ><img src="/time-icon.svg" style={{objectFit:"cover"}} alt="" /> 12 dəq</div>
                    </div>                    
                </div>
                
            </div>
            </div>
        </div>
    </div>    
    </PageContainer>   
    </>
  )
}

export default CourseSinglepage