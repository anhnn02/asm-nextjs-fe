import React from 'react'
import LayoutEmpty from '../components/Layout/empty'

import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
    </div>
  );
}
 NotFound.Layout = LayoutEmpty
export default NotFound;