import Link from 'next/link';

function Home () {
  return <div>
    <div>
      <h1>Home!</h1>
      <h2>Testing 2</h2>
    </div>
    <div>
      <p>Testando uma página...123</p>
      <Link  href = '/about'>
        <a>Sobre...</a>
      </Link>
    </div>
  </div>
}

export default Home
