import Link from 'next/link';

function About () {
  return <div>
    <div>
      <h1>About!</h1>
    </div>
    <div>
      <p>This is a test about next.js</p>
      <Link href='/'>
        <a>Go back</a>
      </Link>
    </div>
    <div>
      <Link href='/time'>
        <a>Go to time test</a>
      </Link>
    </div>
  </div>
}

export default About
