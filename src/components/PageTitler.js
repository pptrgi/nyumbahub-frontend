import {Helmet}  from 'react-helmet'

const PageTitler = (title) => {
  return (
    <div>
        <Helmet>
            <meta charSet='utf-8' />
            <title>{`${title}`}</title>
        </Helmet>
    </div>
  )
}

export default PageTitler