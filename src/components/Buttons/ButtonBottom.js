import { withRouter } from 'react-router-dom'


export const ButtonBottom = withRouter(({ history }) => (
    <button className="circle bottom"
      type='button'
      onClick={() => { history.push('/contact') }}
    >
    </button>
  ))