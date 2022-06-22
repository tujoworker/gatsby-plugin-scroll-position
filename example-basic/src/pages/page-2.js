import { Link } from 'gatsby'
import { Content } from '../components/Content'

export default function Page2() {
  return (
    <main>
      <h1>Page 2</h1>

      <p>ok, this is page 2.</p>

      <Link to="/">Go to page 1 ...</Link>

      <Content />
    </main>
  )
}
