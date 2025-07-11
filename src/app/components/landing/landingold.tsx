'use client'
import Image from 'next/image'
import Header from './header.mdx'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
// import Catch from './catch.mdx'


const LandingPage  = () => {
    return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center', marginTop: '0px'}}>
        {/* Header here includes personal logo and jobber logo. */}
        <Header />
        <div style={{ marginTop: '2em'}}/>
        <h2>Your Partner for Jobber Success</h2>
        <div style={{ width: '25%', height: '1px', backgroundColor: 'white', margin: '10px 0' }} />
        <div style={{ marginTop: '1em'}}/>
        <Fetz3 />
        <CallToAction/>
        {/* <Catch /> */}
        <div style={{ marginTop: '6em'}}/>
        <JobberRows/>


    </div>

    );
};


// const Fetz2 = () => {
//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center', marginTop: '0px'}}>
//             <Catch />
//         </div>


//     );
// }

const CallToAction = () => { 
  let [contactModal, setContactModal] = React.useState(false);
  let handleClose = () => {
    setContactModal(!contactModal)
  }
  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'grey',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2
};
  return (
    <div>
      <Button size="large" color="success" variant='outlined' onClick={handleClose}>Contact / Inquire</Button>
      <Modal
        open={contactModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <Typography id="modal-modal-description" variant="h4" component="h4">
            Email
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1, fotnsize: 35, fontWeight: "bold" }}>
          contact@fetzersolutions.com
          </Typography>
          <Typography id="modal-modal-description" variant="h4" component="h4">
            Cell
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1, fotnsize: 35, fontWeight: "bold" }}>
          +1 (912)-310-7650
          </Typography>
                    <Typography id="modal-modal-description" variant="h6" component="h6" sx={{pl: 4, fontSize: 15}}>
            <li>
              (Call / Text)
            </li>
          </Typography>



          <Typography id="modal-modal-description" variant="h5" component="h5" sx={{mt: 3, fontStyle:"italic"}}>
            Contact Form
          </Typography>
          <Typography id="modal-modal-description" sx={{ pl: 0.5, fontsize: 35, fontStyle:"italic"}}>
          (coming soon)
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

const Fetz3 = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ paddingBottom: '2em' }}>
        <div
          className="shadow-md p-8 rounded-lg flex flex-col items-center text-center"
          style={{ backgroundColor: '#1f1f1f', paddingBottom:'1rem' }} // Light gray background
        >
          <div
            className="h-8 flex items-center justify-center bg-primary/10 rounded-full mb-6"
            style={{ marginBottom: '0.5em', marginTop:"1em" }} // Adjusted margin for better spacing`
          >
            {/* Changed icon to represent migration/setup */}
            <i className="ri-verified-badge-line ri-xl text-primary"></i>
          </div>
          <h3 className="heading text-l font-semibold mb-3">
            Authorized <span className="jobber-logo" style={{ marginLeft: '3px', display: 'inline-block', verticalAlign: 'middle', paddingBottom: '5px', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '100px', height: '20px' }} /> Reseller
          </h3>
          <p className="">
            As an authorized reseller for Jobber, Fetzer&apos;s Fleet Management helps businesses like yours streamline operations and boost efficiency. We handle everything from setup to ongoing support, ensuring you get the most out of your investment.
          </p>
        </div>




        {/* Column 1: Implementation & Migration */}
        <div
          className="shadow-md p-8 rounded-lg flex flex-col items-center text-center"
          style={{ backgroundColor: '#1f1f1f', paddingBottom:'1rem' }} // Light gray background
        >
          <div
            className="h-8 flex items-center justify-center bg-primary/10 rounded-full mb-6"
            style={{ marginBottom: '0.5em', marginTop:"1em" }} // Adjusted margin for better spacing`
          >
            {/* Changed icon to represent migration/setup */}
            <i className="ri-swap-box-line ri-xl text-primary"></i>
          </div>
          <h3 className="heading text-l font-semibold mb-3">
            Expert Migration & Setup
          </h3>
          <p className="">
            Seamlessly transition to Jobber from your existing software. We handle data migration and configure Jobber to perfectly match your workflow from day one.
          </p>
        </div>
  
        {/* Column 2: Development & Customization */}
        <div
          className="shadow-md p-8 rounded-lg flex flex-col items-center text-center"
          style={{ backgroundColor: '#1f1f1f', paddingBottom:'1rem' }} // Light gray background
        >
          <div
            className="h-8 flex items-center justify-center bg-primary/10 rounded-full mb-6"
            style={{ marginBottom: "0.5em", marginTop:"1em" }} // Adjusted margin for better spacing`
          >
            {/* Changed icon to represent code/customization */}
            <i className="ri-code-s-slash-line ri-xl text-primary"></i>
          </div>
          <h3 className="heading text-l font-semibold mb-3 ">
            Custom Solutions & Integration
          </h3>
          <p className="">
            Leverage our development experience to tailor Jobber further. We can build custom integrations and solutions to optimize your unique business processes.
          </p>
        </div>
  
        {/* Column 3: Dedicated Support */}
        <div
          className="shadow-md p-8 rounded-lg flex flex-col items-center text-center"
          style={{ backgroundColor: '#1f1f1f', paddingBottom:'1rem' }} // Light gray background
        >
          <div
            className="h-8 flex items-center justify-center bg-primary/10 rounded-full mb-6"
            style={{ marginBottom: '0.5em', marginTop:"1em" }} // Adjusted margin for better spacing`
          >
            {/* Changed icon to represent support */}
            <i className="ri-customer-service-2-line ri-xl text-primary"></i>
          </div>
          <h3 className="heading text-l mb-3 ">
            Personalized Technical Support
          </h3>
          <p>
            Receive dedicated, expert support beyond the standard channels. We&#39;re here to answer your questions, troubleshoot issues, and help you maximize Jobber&#39;s potential.
          </p>
        </div>
  
      </div>
    )
}

// const ThreeRow = () => { return (
// <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center', marginTop: '0px'}}>
//     {/* Font and Icon Links (Ideally move these to _app.js, layout.js, or _document.js) */}

//     {/* Grid container for the three service highlights */}
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ paddingBottom: '2em' }}>

//       {/* Column 1: Implementation & Migration */}
//       <div
//         className="shadow-md p-8 rounded-lg flex flex-col items-center text-center"
//         style={{ backgroundColor: '#1f1f1f', paddingBottom:'1rem' }} // Light gray background
//       >
//         <div
//           className="h-8 flex items-center justify-center bg-primary/10 rounded-full mb-6"
//           style={{ marginBottom: '0.5em', marginTop:"1em" }} // Adjusted margin for better spacing`
//         >
//           {/* Changed icon to represent migration/setup */}
//           <i className="ri-swap-box-line ri-xl text-primary"></i>
//         </div>
//         <h3 className="heading text-l font-semibold mb-3">
//           Expert Migration & Setup
//         </h3>
//         <p className="">
//           Seamlessly transition to Jobber from your existing software. We handle data migration and configure Jobber to perfectly match your workflow from day one.
//         </p>
//       </div>

//       {/* Column 2: Development & Customization */}
//       <div
//         className="shadow-md p-8 rounded-lg flex flex-col items-center text-center"
//         style={{ backgroundColor: '#1f1f1f', paddingBottom:'1rem' }} // Light gray background
//       >
//         <div
//           className="h-8 flex items-center justify-center bg-primary/10 rounded-full mb-6"
//           style={{ marginBottom: '0.5em', marginTop:"1em" }} // Adjusted margin for better spacing`
//         >
//           {/* Changed icon to represent code/customization */}
//           <i className="ri-code-s-slash-line ri-xl text-primary"></i>
//         </div>
//         <h3 className="heading text-l font-semibold mb-3 ">
//           Custom Solutions & Integration
//         </h3>
//         <p className="">
//           Leverage our development experience to tailor Jobber further. We can build custom integrations and solutions to optimize your unique business processes.
//         </p>
//       </div>

//       {/* Column 3: Dedicated Support */}
//       <div
//         className="shadow-md p-8 rounded-lg flex flex-col items-center text-center"
//         style={{ backgroundColor: "#1f1f1f", paddingBottom:"1rem" }} // Light gray background
//       >
//         <div
//           className="h-8 flex items-center justify-center bg-primary/10 rounded-full mb-6"
//           style={{ marginBottom: "0.5em", marginTop:"1em" }} // Adjusted margin for better spacing`
//         >
//           {/* Changed icon to represent support */}
//           <i className="ri-customer-service-2-line ri-xl text-primary"></i>
//         </div>
//         <h3 className="heading text-l mb-3 ">
//           Personalized Technical Support
//         </h3>
//         <p className="">
//           Receive dedicated, expert support at a local convienence. We're in the Savannah, GA area to answer your questions, troubleshoot issues, and help you maximize Jobber's potential.
//         </p>
//       </div>

//     </div>


// {/* ROW ONE END */}


// </div>
// )};

const JobberRows = () => { return (
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center', marginTop: '0px'}}>

    <Image
            src="/images/jobber_green.svg"
            alt="Jobber Logo"
            className="logo"
            width={270}
            height={45}
            priority
            style={{ marginTop: '0.5em', marginBottom: '0.5em' }} />
                <div style={{}}>
        <span> 
        Industry leading software for field service businesses 
        </span>
    </div>
    <div style={{ width: '25%', height: '1px', backgroundColor: 'white', margin: '10px 0' }} />
    <div>
        {/* Font and Icon Links (Ideally move these to _app.js, layout.js, or _document.js) */}
        <link
            href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
            rel="stylesheet"
        />

        {/* Grid container for the three service highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: Scheduling & Dispatching */}
            <div
            className="shadow-md p-8 rounded-lg flex flex-col items-center text-center"
            style={{ backgroundColor: '#1f1f1f', paddingBottom: '1rem' }}
            >
            <div
                className="h-8 flex items-center justify-center bg-primary/10 rounded-full mb-6"
                style={{ marginBottom: '0.5em', marginTop: '1em' }}
            >
                <i className="ri-calendar-line ri-xl text-primary"></i>
            </div>
            <h3 className="heading text-l font-semibold pb-3">
                Scheduling & Dispatching
            </h3>
            <div style={{ display: 'flex', flexDirection: 'row',  justifyContent: 'start' }}>
                <p className='text-left' style={{ marginLeft: '2em', marginTop: '2em'}}>
                    Easily manage jobs and crews with Jobber&apos;s intuitive scheduling and dispatching tools.
                </p>
                <Image
                    src="/images/gps_catch.webp"
                    alt="Jobber Logo"
                    className="logo"
                    width={230}
                    height={253}
                    priority
                    style={{ marginTop: '2em', marginBottom: '0.5em', marginRight: '2em' }}
                />
            </div>
            {/* <p>
                Easily manage jobs and crews with Jobber's intuitive scheduling and dispatching tools.
            </p> */}
            </div>

            {/* Column 2: Invoicing & Payments */}
            <div
            className="shadow-md p-8 rounded-lg flex flex-col items-center text-center"
            style={{ backgroundColor: '#1f1f1f', paddingBottom: '1rem' }}
            >
            <div
                className="h-8 flex items-center justify-center bg-primary/10 rounded-full mb-6"
                style={{ marginBottom: '0.5em', marginTop: '1em' }}
            >
                <i className="ri-money-dollar-circle-line ri-xl text-primary"></i>
            </div>
            <h3 className="heading text-l font-semibold mb-3">
                Invoicing & Payments
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column',  justifyContent: 'start' }}>
            <p>
                Get paid faster with online payments and streamlined invoicing features.
            </p>
              <Image
                    src="/images/invoicing.png"
                    alt="Jobber Logo"
                    className="logo"
                    width={550}
                    height={390}
                    priority
                    style={{ marginBottom: '0.5em', marginRight: '0em' }}
                />
            </div>
            </div>

            {/* Column 3: CRM & Mobile App */}
            <div
            className="shadow-md p-8 rounded-lg flex flex-col items-center text-center"
            style={{ backgroundColor: '#1f1f1f', paddingBottom: '1rem' }}
            >
            <div
                className="h-8 flex items-center justify-center bg-primary/10 rounded-full mb-6"
                style={{ marginBottom: '0.5em', marginTop: '1em' }}
            >
                <i className="ri-smartphone-line ri-xl text-primary"></i>
            </div>
            <h3 className="heading text-l font-semibold mb-3">
                Full Integration
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column',  justifyContent: 'start' }}>
                <p className='text-left' style={{ marginLeft: '2em', marginTop: '2em'}}>
                    Full integration with your existing applications
                </p>
                <div style={{ display: 'flex', flexDirection: 'row',  justifyContent: 'start' }}>
                  <Image
                      src="/images/quickbooks.png"
                      alt="Jobber Logo"
                      className="logo"
                      width={230}
                      height={253}
                      priority
                      style={{ marginTop: '2em', marginBottom: '0.5em', marginRight: '2em' }}
                  />
                  <Image
                      src="/images/zapier.png"
                      alt="Jobber Logo"
                      className="logo"
                      width={230}
                      height={253}
                      priority
                      style={{ marginTop: '2em', marginBottom: '0.5em', marginRight: '2em' }}
                  />
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
)};

export default LandingPage;
