import React from 'react'
import CountUp from 'react-countup';
import './Xizmatlar.scss'

function Home() {
  return (
    <div className="Home" id="Home">
      <div className="title">
        Xizmatlar
      </div>
      <ul className="counter">
        <li>
          <h2>
            <CountUp
              start={0}
              end={3}
              duration={2.75}>
           </CountUp>
          </h2>
          <p>Yillik Tajriba</p>
        </li>
        <li>
          <h2>
            <CountUp
              start={0}
              end={100}
              duration={2.75}>
            </CountUp>
          </h2>
          <p>Ortiq Buyurtma</p>
        </li>
        <li>
          <h2>
            <CountUp
              start={0}
              end={10}
              duration={2.75}>
            </CountUp>
          </h2>
          <p>Ortiq Xodim</p>
        </li>
        <li>
          <h2>
            <CountUp
              start={0}
              end={2}
              duration={2.75}>
            </CountUp>
          </h2>
          <p>Yillik Kafolat</p>
        </li>
      </ul>

    </div>
  )
}

export default Home