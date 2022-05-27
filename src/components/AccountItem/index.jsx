import React from 'react';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/86fdd9ca882015440001a66fe397a572~c5_100x100.jpeg?x-expires=1653836400&x-signature=J4%2FB9RIg%2FBRW9qIsoUbR5%2FQHC0g%3D"
        alt="avatar"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>nva</span>
      </div>
    </div>
  );
}

export default AccountItem;
