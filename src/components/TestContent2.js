import React from "react";

const TestContent2 = ({name, email, id}) => {
  return (
    <div className='tc dib bg-light-green br3 pa3 ma2 grow bw2 shadow-5'>
       <div className="col-md-8 col-lg-9 mt-4 mt-md-0 ">
    
        <div className="pt-2 pt-md-4">
            
    
          <h3>All chronic conditions warrant some form of investigation</h3>
          <div className="mt-0 mt-lg-4"  />
          <ul className="marker-list-md" style={{marginBottom:'-40px'}}>
            
                <li>Chronic Fatigue</li>
                <li>Chronic Pain</li>
                <li>Mood Disorders</li>
                <li>Thyroid disorders</li>
                <li>Chronic GI issues</li>
                <li>Autoimmune diseases</li>
                <li>Neurological diseases</li>
                <li>Respiratory diseases</li>
                <li>Reproductive issues</li>
              </ul>

              
         
        
        </div>
        
      </div>
      
    </div>
 

  );
};

export default TestContent2;



