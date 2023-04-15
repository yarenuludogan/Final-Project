import React from 'react'
import MainPage from '../components/MainPage'
import Windows from '../components/Windows'
import movielines from'../Api'






export default function Home () {

  
  
  return (
    <>
    <MainPage/>
    
    <Windows title='Popular' fetchUrl={movielines.popular} />
    <Windows title='Top Rated' fetchUrl={movielines.toprated} />
    <Windows title='Horror' fetchUrl={movielines.horror} />
    <Windows title='History' fetchUrl={movielines.history} />
    <Windows title='Romance' fetchUrl={movielines.romantic} />
    <Windows title='Action' fetchUrl={movielines.action} />
    <Windows title='Drama' fetchUrl={movielines.drama} />
    <Windows title='Documentary' fetchUrl={movielines.documentary} />
    <Windows title='Animation' fetchUrl={movielines.animation} />
    <Windows title='Comedy' fetchUrl={movielines.comedy} />
    
    <div className=' '></div>
    <div className="flex">
     
    </div>
    <div className=' text-gray-400 pt-20 pb-20 font-sans grid grid-cols-4 grid-rows-3 gap-4'>
     <div>Audio Description</div>
     <div>Help Center</div>
     <div>Gift Cards</div>
     <div>Media Center</div>
     <div>Investor Relations</div>
     <div>Job Opportunities</div>
     <div>Terms of Use</div>
     <div>Privacy</div>
     <div>Legal Provisions</div>
     <div>Cookie Preferences</div>
     <div>Corporate Information</div>
     <div>Contact Us</div>
     
    </div>
    
    
     
      

    
     </>
  )
}
