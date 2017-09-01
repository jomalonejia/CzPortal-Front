import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import style from './menu.scss'

class Menu extends Component {

  constructor (props) {
    super(props)

  }

  render () {

    const menus = [
      {name: 'order', describe: '我的订单', url: '/account/order'},
      {name: 'support', describe: '售后服务', url: '/account/support'},
      {name: 'info', describe: '账户资料', url: '/account/info'},
      {name: 'address', describe: '收货地址', url: '/account/address'},
    ]

    return (
      <div className={style.main}>
        <div className={style.wrapper}>
          <div className={style.sidebar}>
            <div className={style.avatar}>
              <div className={style.profile}>
                <img src='/src/images/profile.jpg'/>
              </div>
              <div className={style.inner}>
                <ul>
                  {
                    menus.map((menu, index) => (
                      <div key={index}>
                        <NavLink to={menu.url}>
                          <li
                            className={menu.name === this.props.currentAccountMenu ? style.active : null}>
                            {menu.describe}
                          </li>
                        </NavLink>
                      </div>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className={style.content}>

          </div>
        </div>
      </div>
    )
  }
}

export default Menu