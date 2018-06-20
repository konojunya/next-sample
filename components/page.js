import Link from 'next/link'
import {connect} from 'react-redux'

import css from '../styles/style.scss'

import Counter from './counter'

function Page ({error, lastUpdate, light, linkTo, NavigateTo, placeholderData, title}) {
  return (
    <div>
      <h1 className={css.example}>
        {title}
      </h1>
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {placeholderData &&
        <pre>
          <code>
            {JSON.stringify(placeholderData, null, 2)}
          </code>
        </pre>}
      {error &&
        <p style={{color: 'red'}}>
          Error: {error.message}
        </p>}
    </div>
  )
}

export default connect(state => state)(Page)
