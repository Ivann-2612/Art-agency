import { withRouter } from 'react-router-dom'


export const ButtonTop = withRouter(({ history }) => (
  
    <button className="circle top"
      type='button'
      onClick={() => { history.push('/work') }}
    >
    </button>
  ))