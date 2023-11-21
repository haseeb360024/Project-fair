import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'
import titleImage from '../Assets/download.png'
import { homeProjectAPI } from '../Services/allAPI'

function Home() {
  const [loggedIn,setLoggedin] = useState(false)
  const [homeProjects,setHomeProjects] = useState([])
  const getHomeProjects = async ()=>{
    const result = await homeProjectAPI()
    if(result.status===200){
      setHomeProjects(result.data)

    }else{
      console.log(result);
      console.log(result.response.data);
    }
  }
  
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setLoggedin(true)
    }else{
      setLoggedin(false)
    }

    //api call
    getHomeProjects()

  },[])
  return (
    <>
    {/*landing section */}
    <div style={{width:'100%', height:'100vh',backgroundColor:'green'}}
     className='container-fluid rounded'>
      <Row className='align-items-center p-5'>
        <Col sm={12} md={6}>
          <h1 style={{fontSize:'80px'}} className='fw-bolder text-light'> <i class="fa-brands fa-stack-overflow fa-bounce"></i> Project Fair</h1>
          <p>One Stop Destination for all software hgdfjgdifgdg dfgjdfhg dfgjdfgn dgbujdfbgdf mguidfg dfgbjhdjg dfbnhdfg fdbudfhg dfnmmbdfkbdfb inbdf bidfbdf bfdibidfbnfdibnfidgbobdf bdfoghdfnbuidfb dfb odfbdfkbdfkb dfbfdibfd buidb dfbdfuibrfbfdgb </p>
          {loggedIn?
            <Link to={'/dashboard'} className=' btn btn-warning'>manage your projects<i class="fa-solid fa-right-long fa-beat ms-2"></i></Link>:
          <Link to={'/login'} className=' btn btn-warning'>Start to Explore <i class="fa-solid fa-right-long fa-beat ms-2"></i></Link>
          
          }
        </Col>

        <Col sm={12} md={6}>
          <img style={{marginTop:'100px'}} className='w-75' src={titleImage} alt='' />
          
        </Col>
      </Row>
      
       </div>

       {/*all projects */}
       <div className="all-projects mt-5">
        <h1 className='text-center mb-5'> Explore Our Projects</h1>

        <marquee scrollAmount={25}>
        <div className='d-flex justify-content-between'>
          {homeProjects?.length>0?homeProjects.map(project=>(
            <div className='me-5'>
               <ProjectCard project={project}/>
            </div>
          )):null
        }
          <div style={{width:'500px'}}>
           
            </div>
      
            </div>
        </marquee>
        <div className="text-center mt-5"> <Link to={'/projects'}>View More Projects</Link></div>
       </div>
       
    
    </>
  )
}

export default Home