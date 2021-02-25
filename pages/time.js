import Link from 'next/link';


function Time (props) {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return <div>
    <div>
      <div>This is a test about time: {dynamicDateString}</div>
      <div>This is a test about time: {props.staticDateString}</div>
      <Link href='/'>
        <a>Go back</a>
      </Link>
    </div>
  </div>
}

export function getStaticProps() {
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString
    },
    revalidate: 5
  }
}

export default Time
