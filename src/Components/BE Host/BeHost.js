// import React from 'react'
// import './BeHost.css';
// import { Button } from 'bootstrap';
// export default function BeHost() {
//     return (
//         <>
//             <div className='container-fluid'>
//                 <div className='row'>
//                     <div className='col-sm-6'>
//                         <div className='Be-a-host'>
//                             <span >
//                                 <b>Be A Host to</b><br></br>
//                                 <b> Afghan Refugees</b>
//                             </span>
//                         </div>
//                     </div>
//                     <div className='col-sm-6'>
//                         <p>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo aliquam vitae mi eget risus. A sagittis vitae dignissim lorem vestibulum vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo aliquam vitae mi eget risus. A sagittis vitae dignissim lorem vestibulum vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo aliquam vitae mi eget risus. A sagittis vitae dignissim lorem vestibulum vel.
//                         </p>


//                         <Button>Learn More At Airbnb.org</Button>

//                     </div>

//                 </div>

//             </div>


//         </>
//     )
// }

import React from 'react';
import './BeHost.css';
import { Button } from 'react-bootstrap';

export default function BeHost() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <div className='Be-a-host'>
                            <span >
                                <b>Be A Host to</b><br></br>
                                <b> Afghan Refugees</b>
                            </span>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo aliquam vitae mi eget risus. A sagittis vitae dignissim lorem vestibulum vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo aliquam vitae mi eget risus. A sagittis vitae dignissim lorem vestibulum vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo aliquam vitae mi eget risus. A sagittis vitae dignissim lorem vestibulum vel.
                        </p>
                        <div className='behost'>
                            <button className='btn'>Learn More At Airbnb.org</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
