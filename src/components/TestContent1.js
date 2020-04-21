import React from "react";

const TestContent1 = ({name, email, id}) => {
  return (
    <div className='tc dib bg-light-green br3 pa3 ma2 grow bw2 shadow-5'>
       <div className="col-md-8 col-lg-9 mt-4 mt-md-0 ">
        <div className="title-wrap" >
          <h1 >Anyone with Established NCEP ATP III risk factors below:</h1></div>
        <div className="service-img">
          <img src="images/content/service-big-01.html" className="img-fluid" alt="" />
        </div>
        <div className="pt-2 pt-md-4">

        <ul className="marker-list-md" style={{marginTop:'-50px', marginBottom:'30px'}}>
                <li>High blood pressure</li>
                <li>High cholesterol</li>
                <li>Tobacco smoker </li>
                <li>Physical inactivity</li>
                <li>Overweight and Obesity</li>
                <li>Pre-diabetes or diabetes</li>
                <li>Family history of cardiovascular disease, stroke, thrombosis or diabetes</li>
                <li>Age >45</li>
                    
              </ul>
            

              
        
        </div>
        
      </div>
      
    </div>
 

  );
};

export default TestContent1;