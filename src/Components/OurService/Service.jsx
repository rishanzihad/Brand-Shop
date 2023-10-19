import { FaTruckMoving } from 'react-icons/fa';
import { GiPayMoney } from 'react-icons/gi';
import { FiPhoneCall } from 'react-icons/fi';
const Service = () => {
    return (
        <div className="mt-10">
            <h2 className=" text-5xl mb-5 font-bold text-center ">Our Service</h2>
            <div className="footer p-10 bg-base-300 text-base-content">
                <div className='flex'>
                    <FaTruckMoving className=' text-4xl'></FaTruckMoving>
                    <div>
                        <header className="font-bold">Services</header>
                        <p>All Over World</p>
                    </div>

                </div>
                <div >
                    <header className="font-bold">WARRANTY AND REPLACEMENT</header>
                    <p>Up to 1 Year</p>
                </div>
                <div className='flex' >
                    <GiPayMoney className='text-4xl'></GiPayMoney>
                    <div>
                        <header className="font-bold">PAY CASH ON DELIVERY</header>
                        <p>Pay cash at your doorstep</p>
                    </div>
                </div>
                <div className='flex' >
                    <FiPhoneCall className='text-4xl'></FiPhoneCall>
                    <div>
                        <header className="font-bold">HELP: 09678110110</header>
                        <p>09.00am - 08.00pm (7 days a week)</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;