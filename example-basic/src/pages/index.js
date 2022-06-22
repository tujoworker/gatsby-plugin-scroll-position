import { Link } from 'gatsby'
import { Content } from '../components/Content'

export default function Page() {
  return (
    <main>
      <h1>Welcome to this little demo</h1>

      <p>In it, we have some elements that have CSS overflow</p>

      <Link to="/page-2">Go to page 2 ...</Link>

      <Content />
    </main>
  )
}
