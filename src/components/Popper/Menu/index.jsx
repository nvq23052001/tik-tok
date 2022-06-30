import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, i) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={i}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((pre) => [...pre, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      offset={[15, 8]}
      interactive
      delay={[10, 700]}
      placement="bottom-end"
      hideOnClick={false}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 ? (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((pre) => pre.slice(0, pre.length - 1));
                }}
              />
            ) : null}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHidden={() => setHistory((pre) => pre.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
