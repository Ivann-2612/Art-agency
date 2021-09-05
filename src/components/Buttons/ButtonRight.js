import { withRouter } from 'react-router-dom'


export const ButtonRight = withRouter(({ history }) => (
    <button className="circle right"
      type='button'
      onClick={() => { history.push('/new-location') }}
    >
    </button>
  ))