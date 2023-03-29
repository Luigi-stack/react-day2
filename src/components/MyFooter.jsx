import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

function MyFooter() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
          <section className=''>
            <MDBContainer className='text-center text-md-start mt-5 pt-1'>
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon icon="gem" className="me-3" />
                    Mondadori
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quibusdam, quidem sequi esse quisquam, minus velit voluptas voluptatibus, officia mollitia beatae quo. Est aut deserunt error! Error ut sapiente quo.
                  </p>
                </MDBCol>
    
                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      Fantasy
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      History
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Horror
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Romance
                    </a>
                  </p>
                </MDBCol>
                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p>
                    <MDBIcon icon="home" className="" />
                    ROME, RM 00125
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="" />
                    mondadori@info.com
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="" /> + 39 123 456 78 90
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
    
          <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2023 Copyright:
            <a className='text-reset fw-bold ms-2' href='https://github.com/Luigi-stack'>
              Luigi-stack
            </a>
          </div>
        </MDBFooter>
  );
}

export default MyFooter