import './HeaderContainer.css';
import { FaHandHoldingUsd } from 'react-icons/fa';

const HeaderContainer = ({searchText, setSearchText}) => {
    return (<div className='header_container'>
        <div className='header_content'>
            <h1>Referral Status <FaHandHoldingUsd size={34} style={{marginLeft:'12px'}}/></h1>
            <input placeholder='Search' value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
        </div>
    </div>)
}

export default HeaderContainer;