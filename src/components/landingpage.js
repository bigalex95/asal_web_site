import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://scontent-frt3-2.cdninstagram.com/vp/21cdd2998b72bb96a587f2c267c6606d/5D7D5129/t51.2885-15/sh0.08/e35/p640x640/47693850_2331087620235415_6722775807145852924_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Architecture</h1>

            <hr/>

          <p>Skill hakında soramalı</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/asaloy2508/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/asaloyamanbayeva/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
