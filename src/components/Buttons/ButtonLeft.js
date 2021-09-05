import { withRouter } from 'react-router-dom'


export const ButtonLeft = withRouter(({ history }) => (
    <button className="circle left"
      type='button'
      onClick={() => { history.push('/new-location') }}
    >
    </button>
  ))