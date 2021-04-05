import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthorizationStatus, getAuthorizationInfo} from '../../store/auth/selectors';
import {logout, fetchOffers} from "../../store/api-actions";

const Header = ({authorizationStatus, authorizationInfo, onLogout, onLoadData}) => {

  const onExitButtonClick = () => {
    onLogout();
    onLoadData();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link" ><img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/></Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {authorizationStatus === `AUTH` ?
                  <Link to="/favorites" className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">
                      {authorizationInfo.email}
                    </span>
                  </Link> :
                  <Link to="/login" className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                }
                {authorizationStatus === `AUTH` ?
                  <button onClick={onExitButtonClick} className="header__nav-link header__nav-link--profile" style={{margin: `7px 0`}}>Logout</button> : null}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  authorizationInfo: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: getAuthorizationStatus(state),
    authorizationInfo: getAuthorizationInfo(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(logout());
  },
  onLoadData() {
    dispatch(fetchOffers());
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
