import type { NextPage } from 'next'
import Intro from '../components/Intro/Intro'

const Home: NextPage = () => {
  return (
    <div>
      <div className="h-screen flex justify-center">
        <div className="mt-48 w-full flex justify-center">
          <Intro/>
        </div>
      </div>
      <div className="h-screen">hello</div>
    </div>
  )
}

export default Home
