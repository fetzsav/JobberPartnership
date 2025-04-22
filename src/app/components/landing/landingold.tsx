import Image from 'next/image'
import Header from './header.mdx'
import Catch from './catch.mdx'


const LandingPage  = () => {
    return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center', marginTop: '0px'}}>
        {/* Header here includes personal logo and jobber logo. */}
        <Header />
        <div style={{ marginTop: '6em'}}/>
        <ThreeRow/>
        <div style={{ marginTop: '4em'}}/>
        <Catch />


    </div>

    );
};

const ThreeRow = () => { return (
<div>
    {/* Font and Icon Links (Ideally move these to _app.js, layout.js, or _document.js) */}
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
      rel="stylesheet"
    />

    {/* Grid container for the three service highlights */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ paddingBottom: '2em' }}>

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
          style={{ marginBottom: '0.5em', marginTop:"1em" }} // Adjusted margin for better spacing`
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
        <p className="">
          Receive dedicated, expert support beyond the standard channels. We're here to answer your questions, troubleshoot issues, and help you maximize Jobber's potential.
        </p>
      </div>

    </div>


{/* ROW ONE END */}


    <div>
        {/* Font and Icon Links (Ideally move these to _app.js, layout.js, or _document.js) */}
        <link
            href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
            rel="stylesheet"
        />

        {/* Grid container for the three service highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    Easily manage jobs and crews with Jobber's intuitive scheduling and dispatching tools.
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
            <p>
                Get paid faster with online payments and streamlined invoicing features.
            </p>
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
                CRM & Mobile App
            </h3>
            <p>
                Keep track of all your client details and manage your business on the go with Jobber's mobile app.
            </p>
            </div>
        </div>
        </div>


</div>
)};

export default LandingPage;
