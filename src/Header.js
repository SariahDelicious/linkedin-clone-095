import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

function Header() {
    return (
        <div className='header'>
            <div className="header_left">
                <img src="https://image0.flaticon.com/icons/svg/174/174857.svg" alt="logo" />
                <div className="header_search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
            </div>

        </div>
    );
}

export default Header;

function HeaderOption({ Icon, title }) {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption_icon" />}
            <h3 className="headerOption_title">{title}</h3>
        </div>
    );
}