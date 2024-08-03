import page3BookTimeSlotCard from "../assets/page3SlotBooking.png";
import page3BookTimeSlotPortrait from "../assets/page3BookTimeSlotPortrait.png";

const Page3 = () => {
    return (
        <div style={{width: 1440, height: 860, position: 'relative'}}>
        <div style={{width: 1120, height: 620, left: 160, top: 120, position: 'absolute'}}>
          <div style={{width: 422, height: 620, left: 0, top: 0, position: 'absolute'}}>
            <div style={{width: 413, height: 413, left: 0, top: 132, position: 'absolute', background: 'white', boxShadow: '40px 40px 250px rgba(101.36, 153.60, 255, 0.25)', borderRadius: 9999}} />
            <img style={{width: 303, height: 620, left: 38, top: 0, position: 'absolute'}} src={page3BookTimeSlotPortrait} />
            <img style={{width: 316, height: 318, left: 106, top: 86, position: 'absolute', boxShadow: '-20px 25px 80px rgba(0, 0, 0, 0.25)', borderRadius: 16}} src={page3BookTimeSlotCard} />
          </div>
          <div style={{height: 396, left: 578, top: 48, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', height: 288, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
              <div style={{alignSelf: 'stretch', height: 152, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', color: '#008080', fontSize: 32, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>Doctor Consultation </div>
                <div style={{width: 542, color: '#4C4CDB', fontSize: 40, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 52, wordWrap: 'break-word'}}>Book Doctors consultation in just 10minutes</div>
              </div>
              <div style={{width: 529, color: '#3C3C3C', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word'}}>Find the perfect medical professional for your needs from a diverse range of specialists. Book your appointment in just 10 minutes and choose from over 100 doctors and 50 specialists, ensuring you receive the best care for your illness.</div>
            </div>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
              <div style={{paddingLeft: 32, paddingRight: 32, paddingTop: 4, paddingBottom: 4, background: 'white', boxShadow: '40px 40px 250px rgba(101.36, 153.60, 255, 0.25)', borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                  <div style={{color: '#008080', fontSize: 24, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 32, wordWrap: 'break-word'}}>100+</div>
                  <div style={{color: '#868686', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word'}}>Doctors</div>
                </div>
              </div>
              <div style={{paddingLeft: 32, paddingRight: 32, paddingTop: 4, paddingBottom: 4, background: 'white', boxShadow: '40px 40px 250px rgba(101.36, 153.60, 255, 0.25)', borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                  <div style={{color: '#008080', fontSize: 24, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 32, wordWrap: 'break-word'}}>100+</div>
                  <div style={{color: '#868686', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 28, wordWrap: 'break-word'}}>Specialists</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Page3;
  
