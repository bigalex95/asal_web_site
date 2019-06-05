import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://scontent-frt3-2.cdninstagram.com/vp/1f0e9f7da4d047f815b43b8454d7aeac/5D980147/t51.2885-15/sh0.08/e35/p640x640/37213609_2015782045150825_8394155418414219264_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Asaloy Amanbayeva</h2>
            <h4 style={{color: 'grey'}}>Architecture</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>birzatla yazmalı</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Marashal chakmak mah. Kocayusuf sk. no: 15/5, Gungoren/Istanbul</p>
            <h5>Phone</h5>
            <p>+90 (554) 120-3379</p>
            <h5>Email</h5>
            <p>amanbayeva95@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2014}
              endYear={2019}
              schoolName="Cukurova University"
              schoolDescription="Faculty of Architecture, Department of Architecture"
               />

                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2016}
              endYear={2016}
              jobName="Intern"
              jobDescription="'AJAYIP BINA' construction.   Ashgabat/Turkmenistan"
              />

           <Experience
              startYear={2016}
              endYear={2016}
              jobName="Intern"
              jobDescription="'Daşoguz oba gurluşık önümçilik birleşiği' state administration.   Dashoguz/Turkmenistan"
              />

            <Experience
              startYear={2016}
              endYear={2018}
              jobName="Freelance"
              jobDescription="'Rölöve / Hakediş / 3d Modelleme'.   Adana/Turkiye"
              />

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Restorer Architect / Site Supervisor"
              jobDescription="'Danacıoğlu' İth. İhr. Ve İnş. Ltd. Şti.   Istanbul/Turkiye"
              />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
